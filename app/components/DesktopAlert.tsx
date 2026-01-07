
"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, X } from 'lucide-react';

const DesktopAlert = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if device is likely mobile/tablet based on width
        const checkDevice = () => {
            if (window.innerWidth < 1024) {
                // Check if user has already dismissed it in this session
                const hasDismissed = sessionStorage.getItem('desktop-alert-dismissed');
                if (!hasDismissed) {
                    setIsVisible(true);
                }
            }
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    const dismiss = () => {
        setIsVisible(false);
        sessionStorage.setItem('desktop-alert-dismissed', 'true');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-md"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative max-w-sm w-full bg-[#030014] border border-white/10 rounded-2xl p-6 shadow-2xl shadow-primary/20 overflow-hidden"
                    >
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                        <div className="relative z-10 text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                                <Monitor size={32} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">Desktop Recommended</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                For the best "feature-rich" experience and smoother animations, we recommend viewing this portfolio on a
                                <span className="text-white font-semibold"> Desktop</span> or <span className="text-white font-semibold"> Laptop</span>.
                            </p>

                            <button
                                onClick={dismiss}
                                className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all active:scale-[0.98]"
                            >
                                Continue Anyway
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DesktopAlert;
