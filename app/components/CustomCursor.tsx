
"use client";
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', moveCursor);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        setIsVisible(true);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-secondary/50 bg-secondary/10 pointer-events-none z-[9999] backdrop-blur-[1px] mix-blend-screen"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
                opacity: isVisible ? 1 : 0,
            }}
        >
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_2px_var(--color-secondary)]" />
        </motion.div>
    );
};

export default CustomCursor;
