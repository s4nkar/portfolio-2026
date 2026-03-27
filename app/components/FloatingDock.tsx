"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Home, Code, Cpu, Briefcase, Mail } from 'lucide-react';

const LINKS = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Skills', icon: Code, href: '#skills' },
    { name: 'Experience', icon: Cpu, href: '#experience' },
    { name: 'Work', icon: Briefcase, href: '#work' },
    { name: 'Contact', icon: Mail, href: '#contact' },
];

const FloatingDock = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Touch devices don't have hover — skip spring physics entirely
        setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    }, []);

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <div className="dock-container px-4 py-3 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center gap-3">
                {LINKS.map((link) =>
                    isMobile ? (
                        // Mobile: plain anchor, no spring animation overhead
                        <a
                            key={link.name}
                            href={link.href}
                            className="w-10 aspect-square rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                            aria-label={link.name}
                        >
                            <link.icon className="w-5 h-5 text-gray-300" />
                        </a>
                    ) : (
                        <DockIcon key={link.name} {...link} />
                    )
                )}
            </div>
        </div>
    );
};

const DockIcon = ({ icon: Icon, href, name }: { icon: React.ElementType; href: string; name: string }) => {
    const ref = useRef<HTMLAnchorElement>(null);
    const mouseX = useMotionValue(Infinity);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.a
            ref={ref}
            href={href}
            style={{ width }}
            className="aspect-square rounded-full bg-white/5 border border-white/5 flex items-center justify-center relative group hover:bg-white/10 transition-colors"
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            aria-label={name}
        >
            <Icon className="w-5 h-5 md:w-6 md:h-6 text-gray-300 group-hover:text-white transition-colors" />

            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/80 border border-white/10 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {name}
            </span>
        </motion.a>
    );
};

export default FloatingDock;
