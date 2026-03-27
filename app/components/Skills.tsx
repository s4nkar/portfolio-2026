"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import Section from './Section';

const SKILL_ICONS: Record<string, string> = {
    'PyTorch': '🔥', 'TensorFlow': '🧠', 'Hugging Face': '🤗', 'BERT': '📖',
    'RoBERTa': '🔬', 'Wav2Vec2.0': '🎙️', 'LangChain': '⛓️', 'RAG': '📡',
    'PySpark': '⚡', 'Multimodal AI': '🎯', 'Prompt Engineering': '✍️',
    'Classical ML': '📊', 'LLM Data Pipelines': '🔀', 'Sentiment Analysis': '💬',
    'Deep Learning (CNN)': '🖼️',
    'FastAPI': '🚀', 'Docker': '🐳', 'AWS EC2': '☁️', 'CI/CD': '♾️',
    'Git': '🗂️', 'REST APIs': '🔌', 'WebSockets': '🔄', 'Socket.IO': '🔵',
    'Python': '🐍', 'TypeScript': '💙', 'JavaScript': '🌐', 'React': '⚛️',
    'Next.js': '▲', 'Node.js': '🟢', 'Django': '🎸', 'Flask': '🧪',
    'PHP': '🐘', 'Laravel': '🔴', 'SQL': '🗄️', 'MongoDB': '🍃', 'Redis': '🟥',
    'ML Research': '🔭', 'Published Author': '📝', 'Technical Leadership': '🎯',
    'Production ML Deployment': '🏭', 'Code Reviews': '🔍', 'Performance Optimisation': '🏎️',
};

const CATEGORIES = [
    {
        key: 'ai_ml',
        label: 'AI & Machine Learning',
        accent: '#FF2D78',
        direction: 1,
    },
    {
        key: 'mlops',
        label: 'MLOps & Deployment',
        accent: '#C084FC',
        direction: -1,
    },
    {
        key: 'web_dev',
        label: 'Web & Backend',
        accent: '#FF6BA8',
        direction: 1,
    },
    {
        key: 'professional',
        label: 'Professional',
        accent: '#34d399',
        direction: -1,
    },
];

const MarqueeStrip = ({
    items,
    accent,
    direction,
    speed = 35,
}: {
    items: string[];
    accent: string;
    direction: 1 | -1;
    speed?: number;
}) => {
    // Doubled items for seamless CSS loop (was tripled = 180 nodes, now 120)
    const doubled = [...items, ...items];
    const duration = `${speed}s`;
    const animName = direction === 1 ? 'marqueeLeft' : 'marqueeRight';
    const totalItems = items.length;

    return (
        <div
            className="relative overflow-hidden w-full py-1.5"
            style={{ maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}
        >
            {/* Pure CSS animation — zero JS on animation thread, GPU-composited */}
            <div
                className="flex gap-3 w-max"
                style={{
                    animation: `${animName} ${duration} linear infinite`,
                    // Each item ~200px wide; totalItems items per cycle
                    ['--marquee-width' as string]: `${totalItems * 200}px`,
                }}
            >
                {doubled.map((skill, i) => (
                    <div
                        key={`${skill}-${i}`}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap cursor-default select-none skill-badge"
                        style={{
                            background: `rgba(10,10,12,0.7)`,
                            border: `1px solid ${accent}25`,
                            color: '#c4c4c4',
                            // No backdropFilter — it was ~180 GPU blur layers, now 0
                        }}
                        onMouseEnter={e => {
                            const el = e.currentTarget as HTMLDivElement;
                            el.style.borderColor = `${accent}70`;
                            el.style.color = '#fff';
                            el.style.boxShadow = `0 0 18px ${accent}30`;
                            el.style.background = `${accent}12`;
                        }}
                        onMouseLeave={e => {
                            const el = e.currentTarget as HTMLDivElement;
                            el.style.borderColor = `${accent}25`;
                            el.style.color = '#c4c4c4';
                            el.style.boxShadow = '';
                            el.style.background = `rgba(10,10,12,0.7)`;
                        }}
                    >
                        <span className="text-base leading-none">{SKILL_ICONS[skill] ?? '•'}</span>
                        <span>{skill}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    const { skills } = PORTFOLIO_DATA;

    return (
        <Section id="skills" className="py-20 overflow-hidden">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-14 px-4 md:px-8"
            >
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2 mb-4">
                    <span className="w-6 h-px bg-primary/60" />
                    Technical Stack
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">
                    Built for{' '}
                    <span style={{ WebkitTextStroke: '1.5px #FF2D78', color: 'transparent' }}>
                        AI
                    </span>
                    {' '}at Scale
                </h2>
            </motion.div>

            {/* Marquee rows */}
            <div className="flex flex-col gap-6">
                {CATEGORIES.map((cat, catIdx) => {
                    const items = (skills as any)[cat.key] as string[];
                    return (
                        <motion.div
                            key={cat.key}
                            initial={{ opacity: 0, x: cat.direction === 1 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                            className="flex flex-col gap-2"
                        >
                            {/* Category label */}
                            <div className="flex items-center gap-3 px-4 md:px-8">
                                <span
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{ background: cat.accent, boxShadow: `0 0 8px ${cat.accent}` }}
                                />
                                <span
                                    className="text-xs font-mono uppercase tracking-widest"
                                    style={{ color: cat.accent }}
                                >
                                    {cat.label}
                                </span>
                                <span className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${cat.accent}30, transparent)` }} />
                                <span className="text-xs font-mono text-gray-600">{items.length} skills</span>
                            </div>

                            {/* Scrolling strip */}
                            <MarqueeStrip
                                items={items}
                                accent={cat.accent}
                                direction={cat.direction as 1 | -1}
                                speed={items.length * 3.2}
                            />
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
};

export default Skills;
