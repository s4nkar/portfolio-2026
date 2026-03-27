"use client";
import { useEffect, useRef } from 'react';

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    pulsePhase: number;
}

const NeuralCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        // ── Disable entirely on touch / mobile devices ──
        if (window.matchMedia('(pointer: coarse)').matches) return;
        if (window.innerWidth < 768) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId: number;
        let nodes: Node[] = [];

        // Reduced from 55 → 35 nodes; fewer = less O(n²) work
        const NODE_COUNT = 35;
        const MAX_DIST = 140;
        const MOUSE_RADIUS = 160;

        // Pre-built gradient cache so we don't allocate inside the draw loop
        // We approximate gradient colours by opacity only (much cheaper)
        const resize = () => {
            // Clamp devicePixelRatio to 1 on all screens — avoids 4× pixel area on retina
            const dpr = Math.min(window.devicePixelRatio ?? 1, 1);
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
        };

        const initNodes = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            nodes = Array.from({ length: NODE_COUNT }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                radius: Math.random() * 1.5 + 0.8,
                pulsePhase: Math.random() * Math.PI * 2,
            }));
        };

        const onMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleResize = () => { resize(); initNodes(); };
        window.addEventListener('resize', handleResize, { passive: true });
        window.addEventListener('mousemove', onMouseMove, { passive: true });
        resize();
        initNodes();

        let frame = 0;
        // Run at full 60fps — gradient alloc removed so per-frame cost is low
        const draw = () => {
            animId = requestAnimationFrame(draw);
            frame++;
            const W = window.innerWidth;
            const H = window.innerHeight;
            ctx.clearRect(0, 0, W, H);

            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            // ── Update positions ──
            for (const node of nodes) {
                const dx = node.x - mx;
                const dy = node.y - my;
                const distSq = dx * dx + dy * dy;
                const mouseRadSq = MOUSE_RADIUS * MOUSE_RADIUS;

                if (distSq < mouseRadSq) {
                    const dist = Math.sqrt(distSq);
                    const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                    node.vx += (dx / dist) * force * 0.2;
                    node.vy += (dy / dist) * force * 0.2;
                }

                node.vx *= 0.97;
                node.vy *= 0.97;
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0) node.x = W;
                if (node.x > W) node.x = 0;
                if (node.y < 0) node.y = H;
                if (node.y > H) node.y = 0;
            }

            // ── Draw connections — flat colour, no per-frame gradient allocation ──
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const a = nodes[i];
                    const b = nodes[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distSq = dx * dx + dy * dy;
                    const maxDistSq = MAX_DIST * MAX_DIST;

                    if (distSq < maxDistSq) {
                        const dist = Math.sqrt(distSq);
                        const proximity = 1 - dist / MAX_DIST;

                        // Mouse proximity boost (still using squared distance — fast)
                        const midX = (a.x + b.x) / 2;
                        const midY = (a.y + b.y) / 2;
                        const mosueDistSq = (midX - mx) ** 2 + (midY - my) ** 2;
                        const mouseBoost = mosueDistSq < MOUSE_RADIUS * MOUSE_RADIUS
                            ? (1 - Math.sqrt(mosueDistSq) / MOUSE_RADIUS) * 0.5
                            : 0;

                        const alpha = proximity * 0.22 + mouseBoost;

                        // Flat strokeStyle — zero alloc vs createLinearGradient
                        ctx.strokeStyle = `rgba(255,45,120,${alpha})`;
                        ctx.lineWidth = proximity * 1.0;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }

            // ── Draw nodes — single radial gradient (cached via fillStyle string) ──
            for (const node of nodes) {
                const pulse = Math.sin(frame * 0.04 + node.pulsePhase) * 0.5 + 0.5;
                const distSq = (node.x - mx) ** 2 + (node.y - my) ** 2;
                const mouseGlow = distSq < MOUSE_RADIUS * MOUSE_RADIUS
                    ? (1 - Math.sqrt(distSq) / MOUSE_RADIUS)
                    : 0;

                const r = node.radius + pulse * 0.7 + mouseGlow * 1.5;

                // Outer soft glow — one radial gradient per node is acceptable (35 total, not 55×2)
                const grd = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 5);
                grd.addColorStop(0, `rgba(255,45,120,${0.18 + mouseGlow * 0.25})`);
                grd.addColorStop(1, 'rgba(255,45,120,0)');
                ctx.beginPath();
                ctx.arc(node.x, node.y, r * 5, 0, Math.PI * 2);
                ctx.fillStyle = grd;
                ctx.fill();

                // Core dot — flat fill
                ctx.beginPath();
                ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,45,120,${0.65 + mouseGlow * 0.3})`;
                ctx.fill();
            }
        };

        animId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
                opacity: 0.45,
            }}
        />
    );
};

export default NeuralCanvas;
