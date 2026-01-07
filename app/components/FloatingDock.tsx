
"use client";
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Home, User, Code, Briefcase, Mail, Cpu } from 'lucide-react';

const FloatingDock = () => {
    const links = [
        { name: 'Home', icon: Home, href: '#home' },
        { name: 'Skills', icon: Code, href: '#skills' },
        { name: 'Experience', icon: Cpu, href: '#experience' },
        { name: 'Work', icon: Briefcase, href: '#work' },
        { name: 'Contact', icon: Mail, href: '#contact' },
    ];

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <div className="dock-container px-4 py-3 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center gap-3">
                {links.map((link) => (
                    <DockIcon key={link.name} {...link} />
                ))}
            </div>
        </div>
    );
};

const DockIcon = ({ icon: Icon, href, name }: { icon: any, href: string, name: string }) => {
    const ref = useRef<HTMLAnchorElement>(null);
    const mouseX = useMotionValue(Infinity);

    // Distance from mouse to the center of the icon
    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    // Scale calculations based on distance
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
