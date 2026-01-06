
"use client";
import React, { ReactNode, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';

export const BentoGrid = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 auto-rows-[minmax(180px,auto)] gap-4 mx-auto max-w-7xl px-4 ${className}`}>
            {children}
        </div>
    );
};

export const BentoItem = ({
    children,
    className = "",
    colSpan = 1,
    rowSpan = 1
}: {
    children: ReactNode,
    className?: string,
    colSpan?: number,
    rowSpan?: number
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    // Convert spans to classes
    const colClass = {
        1: 'md:col-span-1', 2: 'md:col-span-2', 3: 'md:col-span-3', 4: 'md:col-span-4',
        5: 'md:col-span-5', 6: 'md:col-span-6', 7: 'md:col-span-7', 8: 'md:col-span-8',
        12: 'lg:col-span-12'
    }[colSpan] || `md:col-span-${colSpan}`;

    const lgColClass = colSpan > 6 ? `lg:col-span-${colSpan}` : `lg:col-span-${colSpan}`;

    const rowClass = {
        1: 'row-span-1', 2: 'row-span-2', 3: 'row-span-3'
    }[rowSpan] || `row-span-${rowSpan}`;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`bento-card rounded-3xl p-6 relative overflow-hidden group ${lgColClass} ${colClass} ${rowClass} ${className}`}
            onMouseMove={handleMouseMove}
            style={{
                '--mouse-x': `${mousePosition.x}px`,
                '--mouse-y': `${mousePosition.y}px`,
            } as React.CSSProperties}
        >
            <div className="spotlight absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="relative z-10 h-full">
                {children}
            </div>
        </motion.div>
    );
};
