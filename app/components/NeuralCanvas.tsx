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

        let animId: number;
        let nodes: Node[] = [];
        const NODE_COUNT = 55;
        const MAX_DIST = 160;
        const MOUSE_RADIUS = 180;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const initNodes = () => {
            nodes = Array.from({ length: NODE_COUNT }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() * 1.8 + 0.8,
                pulsePhase: Math.random() * Math.PI * 2,
            }));
        };

        const onMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('resize', () => { resize(); initNodes(); });
        window.addEventListener('mousemove', onMouseMove);
        resize();
        initNodes();

        let frame = 0;

        const draw = () => {
            frame++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            // Update positions
            for (const node of nodes) {
                // Mouse repulsion
                const dx = node.x - mx;
                const dy = node.y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MOUSE_RADIUS) {
                    const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                    node.vx += (dx / dist) * force * 0.25;
                    node.vy += (dy / dist) * force * 0.25;
                }

                // Damping
                node.vx *= 0.97;
                node.vy *= 0.97;

                node.x += node.vx;
                node.y += node.vy;

                // Wrap around
                if (node.x < 0) node.x = canvas.width;
                if (node.x > canvas.width) node.x = 0;
                if (node.y < 0) node.y = canvas.height;
                if (node.y > canvas.height) node.y = 0;
            }

            // Draw connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const a = nodes[i];
                    const b = nodes[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < MAX_DIST) {
                        const proximity = 1 - dist / MAX_DIST;
                        const alpha = proximity * 0.25;

                        // Check if near mouse
                        const midX = (a.x + b.x) / 2;
                        const midY = (a.y + b.y) / 2;
                        const mouseMid = Math.sqrt((midX - mx) ** 2 + (midY - my) ** 2);
                        const mouseBoost = mouseMid < MOUSE_RADIUS ? (1 - mouseMid / MOUSE_RADIUS) * 0.6 : 0;

                        const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
                        gradient.addColorStop(0, `rgba(255,45,120,${alpha + mouseBoost})`);
                        gradient.addColorStop(0.5, `rgba(192,132,252,${alpha * 0.5 + mouseBoost * 0.5})`);
                        gradient.addColorStop(1, `rgba(255,45,120,${alpha + mouseBoost})`);

                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = proximity * 1.2;
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            for (const node of nodes) {
                const pulse = Math.sin(frame * 0.02 + node.pulsePhase) * 0.5 + 0.5;
                const dist = Math.sqrt((node.x - mx) ** 2 + (node.y - my) ** 2);
                const mouseGlow = dist < MOUSE_RADIUS ? (1 - dist / MOUSE_RADIUS) : 0;

                const r = node.radius + pulse * 0.8 + mouseGlow * 2;

                // Outer glow
                const grd = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 4);
                grd.addColorStop(0, `rgba(255,45,120,${0.3 + mouseGlow * 0.4})`);
                grd.addColorStop(1, 'rgba(255,45,120,0)');
                ctx.beginPath();
                ctx.arc(node.x, node.y, r * 4, 0, Math.PI * 2);
                ctx.fillStyle = grd;
                ctx.fill();

                // Core dot
                ctx.beginPath();
                ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,45,120,${0.7 + mouseGlow * 0.3})`;
                ctx.fill();
            }

            animId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
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
