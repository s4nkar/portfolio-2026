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
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // ── Device config ──────────────────────────────────────────────
        const isMobile = window.matchMedia('(pointer: coarse)').matches
            || window.innerWidth < 768;

        const NODE_COUNT   = isMobile ? 22 : 35;
        const MAX_DIST     = isMobile ? 110 : 140;
        const MOUSE_RADIUS = 160;
        const MIN_SPEED    = 0.18;   // nodes never stop — ever
        const MAX_SPEED    = isMobile ? 0.5 : 0.8;
        // Mobile draws every 2nd rAF frame (≈30fps). Desktop: every frame (≈60fps).
        const SKIP_FRAMES  = isMobile ? 2 : 1;
        // ─────────────────────────────────────────────────────────────

        let animId: number;
        let nodes: Node[] = [];

        const resize = () => {
            // Cap DPR at 1 → avoids 4× pixel area on retina
            const dpr = Math.min(window.devicePixelRatio ?? 1, 1);
            canvas.width  = window.innerWidth  * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
        };

        const initNodes = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            nodes = Array.from({ length: NODE_COUNT }, () => {
                // Start with a real velocity so nodes move immediately
                const angle = Math.random() * Math.PI * 2;
                const speed = MIN_SPEED + Math.random() * 0.25;
                return {
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    radius: Math.random() * 1.5 + 0.8,
                    pulsePhase: Math.random() * Math.PI * 2,
                };
            });
        };

        const onMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleResize = () => { resize(); initNodes(); };
        window.addEventListener('resize', handleResize, { passive: true });
        if (!isMobile) {
            window.addEventListener('mousemove', onMouseMove, { passive: true });
        }

        resize();
        initNodes();

        let rafCount = 0;  // Simple counter for mobile frame-skip
        let frame    = 0;  // Counting actual rendered frames for pulse animation

        const draw = () => {
            animId = requestAnimationFrame(draw);

            // Mobile: skip every other rAF call → ≈30fps
            rafCount++;
            if (rafCount % SKIP_FRAMES !== 0) return;

            frame++;
            const W = window.innerWidth;
            const H = window.innerHeight;
            ctx.clearRect(0, 0, W, H);

            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            // ── Physics update ────────────────────────────────────────────
            for (const node of nodes) {

                // Mouse repulsion — desktop only
                if (!isMobile) {
                    const dx = node.x - mx;
                    const dy = node.y - my;
                    const distSq = dx * dx + dy * dy;
                    if (distSq < MOUSE_RADIUS * MOUSE_RADIUS) {
                        const dist = Math.sqrt(distSq);
                        const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                        node.vx += (dx / dist) * force * 0.25;
                        node.vy += (dy / dist) * force * 0.25;
                    }
                }

                // Very light damping (0.995) — barely slows nodes down.
                // Old value 0.97 killed velocity in ~2 s. 0.995 takes ~60 s.
                node.vx *= 0.995;
                node.vy *= 0.995;

                // ── Minimum speed enforcement — nodes NEVER stop ──────────
                const spd = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
                if (spd < MIN_SPEED) {
                    if (spd > 0.001) {
                        // Boost along current heading
                        const scale = MIN_SPEED / spd;
                        node.vx *= scale;
                        node.vy *= scale;
                    } else {
                        // Completely stopped — pick a random direction
                        const angle = Math.random() * Math.PI * 2;
                        node.vx = Math.cos(angle) * MIN_SPEED;
                        node.vy = Math.sin(angle) * MIN_SPEED;
                    }
                }

                // Max speed cap
                if (spd > MAX_SPEED) {
                    node.vx *= MAX_SPEED / spd;
                    node.vy *= MAX_SPEED / spd;
                }

                node.x += node.vx;
                node.y += node.vy;

                // Wrap around edges
                if (node.x < 0)  node.x = W;
                if (node.x > W)  node.x = 0;
                if (node.y < 0)  node.y = H;
                if (node.y > H)  node.y = 0;
            }

            // ── Draw connections (flat rgba — zero per-frame allocation) ────
            const maxDistSq = MAX_DIST * MAX_DIST;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const a = nodes[i];
                    const b = nodes[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < maxDistSq) {
                        const dist = Math.sqrt(distSq);
                        const proximity = 1 - dist / MAX_DIST;
                        let alpha = proximity * 0.22;

                        // Mouse highlight — desktop only
                        if (!isMobile) {
                            const midX = (a.x + b.x) / 2;
                            const midY = (a.y + b.y) / 2;
                            const mDistSq = (midX - mx) ** 2 + (midY - my) ** 2;
                            if (mDistSq < MOUSE_RADIUS * MOUSE_RADIUS) {
                                alpha += (1 - Math.sqrt(mDistSq) / MOUSE_RADIUS) * 0.5;
                            }
                        }

                        ctx.strokeStyle = `rgba(255,45,120,${alpha})`;
                        ctx.lineWidth   = proximity * 1.0;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }

            // ── Draw nodes ───────────────────────────────────────────────
            for (const node of nodes) {
                const pulse = Math.sin(frame * 0.04 + node.pulsePhase) * 0.5 + 0.5;

                let mouseGlow = 0;
                if (!isMobile) {
                    const distSq = (node.x - mx) ** 2 + (node.y - my) ** 2;
                    if (distSq < MOUSE_RADIUS * MOUSE_RADIUS) {
                        mouseGlow = 1 - Math.sqrt(distSq) / MOUSE_RADIUS;
                    }
                }

                const r = node.radius + pulse * 0.7 + mouseGlow * 1.5;

                // Soft outer glow
                const grd = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 5);
                grd.addColorStop(0, `rgba(255,45,120,${0.18 + mouseGlow * 0.25})`);
                grd.addColorStop(1, 'rgba(255,45,120,0)');
                ctx.beginPath();
                ctx.arc(node.x, node.y, r * 5, 0, Math.PI * 2);
                ctx.fillStyle = grd;
                ctx.fill();

                // Core dot
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
            if (!isMobile) {
                window.removeEventListener('mousemove', onMouseMove);
            }
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
