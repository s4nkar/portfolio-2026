"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
    value: number;
    suffix: string;
    prefix?: string;
    label: string;
    sublabel: string;
    color: string;
    decimals?: number;
}

const STATS: Stat[] = [
    {
        value: 95.08,
        suffix: '%',
        label: 'F1-Score',
        sublabel: 'RoBERTa NLP · JDSIS 2026',
        color: '#FF2D78',
        decimals: 2,
    },
    {
        value: 250,
        suffix: 'K+',
        label: 'Text Samples',
        sublabel: 'GoEmotions + Hate Speech pipeline',
        color: '#C084FC',
    },
    {
        value: 30,
        suffix: '%',
        label: 'Latency Reduced',
        sublabel: 'ML training optimisation',
        color: '#FF6BA8',
    },
    {
        value: 78.1,
        suffix: '%',
        label: 'CREMA-D Accuracy',
        sublabel: 'Multimodal Wav2Vec2.0 model',
        color: '#FF2D78',
        decimals: 1,
    },
    {
        value: 28,
        suffix: '',
        label: 'Emotion Classes',
        sublabel: 'EmoTract real-time classifier',
        color: '#C084FC',
    },
];

function useCountUp(target: number, duration = 1800, decimals = 0, active: boolean) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!active) return;
        let start = 0;
        const startTime = performance.now();
        const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = parseFloat((eased * target).toFixed(decimals));
            setCount(value);
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration, decimals, active]);
    return count;
}

const StatCard = ({ stat, index }: { stat: Stat; index: number }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const count = useCountUp(stat.value, 1600 + index * 150, stat.decimals ?? 0, inView);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative flex-1 min-w-[160px] group"
        >
            {/* Glow */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: `radial-gradient(circle at 50% 50%, ${stat.color}22, transparent 70%)` }}
            />

            <div
                className="relative flex flex-col gap-1 p-5 rounded-2xl border transition-all duration-300 group-hover:scale-[1.03]"
                style={{
                    background: `linear-gradient(135deg, ${stat.color}0D 0%, rgba(13,13,13,0.8) 100%)`,
                    borderColor: `${stat.color}30`,
                    boxShadow: `0 0 0 0 ${stat.color}`,
                }}
            >
                {/* Top accent line */}
                <div
                    className="absolute top-0 left-6 right-6 h-px rounded-full"
                    style={{ background: `linear-gradient(90deg, transparent, ${stat.color}80, transparent)` }}
                />

                <div className="flex items-end gap-0.5">
                    <span
                        className="text-3xl md:text-4xl font-bold tabular-nums leading-none"
                        style={{ color: stat.color, textShadow: `0 0 20px ${stat.color}60` }}
                    >
                        {stat.prefix ?? ''}{count.toFixed(stat.decimals ?? 0)}
                    </span>
                    <span className="text-xl font-bold mb-0.5" style={{ color: stat.color }}>
                        {stat.suffix}
                    </span>
                </div>
                <p className="text-sm font-semibold text-white">{stat.label}</p>
                <p className="text-xs text-gray-500 font-mono">{stat.sublabel}</p>
            </div>
        </motion.div>
    );
};

const AIStatsBar = () => {
    return (
        <section className="w-full px-4 md:px-8 py-10 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-6"
            >
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-4 h-px bg-primary/60 inline-block" />
                    Research Metrics
                    <span className="w-4 h-px bg-primary/60 inline-block" />
                </p>
            </motion.div>
            <div className="flex flex-wrap gap-3">
                {STATS.map((stat, i) => (
                    <StatCard key={stat.label} stat={stat} index={i} />
                ))}
            </div>
        </section>
    );
};

export default AIStatsBar;
