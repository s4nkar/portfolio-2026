"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import Section from './Section';

const SKILL_ICONS: Record<string, string> = {
    // AI/ML
    'PyTorch': '🔥', 'TensorFlow': '🧠', 'Hugging Face': '🤗', 'BERT': '📖',
    'RoBERTa': '🔬', 'Wav2Vec2.0': '🎙️', 'LangChain': '⛓️', 'RAG': '📡',
    'PySpark': '⚡', 'Multimodal AI': '🎯', 'Prompt Engineering': '✍️',
    'Classical ML': '📊', 'LLM Data Pipelines': '🔀', 'Sentiment Analysis': '💬',
    'Deep Learning (CNN)': '🖼️',
    // MLOps
    'FastAPI': '🚀', 'Docker': '🐳', 'AWS EC2': '☁️', 'CI/CD': '♾️',
    'Git': '🗂️', 'REST APIs': '🔌', 'WebSockets': '🔄', 'Socket.IO': '💬',
    // Web
    'Python': '🐍', 'TypeScript': '💙', 'JavaScript': '🌐', 'React': '⚛️',
    'Next.js': '▲', 'Node.js': '🟢', 'Django': '🎸', 'Flask': '🧪',
    'PHP': '🐘', 'Laravel': '🔴', 'SQL': '🗄️', 'MongoDB': '🍃', 'Redis': '🟥',
};

const CATEGORY_META = [
    {
        key: 'ai_ml',
        label: 'AI & Machine Learning',
        accent: '#FF2D78',
        bg: 'rgba(255,45,120,0.06)',
        border: 'rgba(255,45,120,0.2)',
        desc: 'Core ML stack for research & production',
    },
    {
        key: 'mlops',
        label: 'MLOps & Deployment',
        accent: '#C084FC',
        bg: 'rgba(192,132,252,0.06)',
        border: 'rgba(192,132,252,0.2)',
        desc: 'From model to scalable API',
    },
    {
        key: 'web_dev',
        label: 'Web & Backend',
        accent: '#FF6BA8',
        bg: 'rgba(255,107,168,0.06)',
        border: 'rgba(255,107,168,0.2)',
        desc: 'Full-stack engineering',
    },
    {
        key: 'professional',
        label: 'Professional',
        accent: '#34d399',
        bg: 'rgba(52,211,153,0.06)',
        border: 'rgba(52,211,153,0.2)',
        desc: 'Research & leadership skills',
    },
];

const Skills = () => {
    const { skills } = PORTFOLIO_DATA;

    return (
        <Section id="skills" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-14"
            >
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2 mb-4">
                    <span className="w-6 h-px bg-primary/60" />
                    Technical Stack
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">
                    Built for{' '}
                    <span
                        style={{
                            WebkitTextStroke: '1.5px #FF2D78',
                            color: 'transparent',
                        }}
                    >
                        AI
                    </span>
                    {' '}at Scale
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {CATEGORY_META.map((cat, catIdx) => {
                    const items = (skills as any)[cat.key] as string[];
                    return (
                        <motion.div
                            key={cat.key}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                            className="relative rounded-2xl p-6 group overflow-hidden"
                            style={{
                                background: cat.bg,
                                border: `1px solid ${cat.border}`,
                            }}
                        >
                            {/* Top accent line */}
                            <div
                                className="absolute top-0 left-8 right-8 h-px"
                                style={{ background: `linear-gradient(90deg, transparent, ${cat.accent}90, transparent)` }}
                            />

                            {/* Corner glow */}
                            <div
                                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: `radial-gradient(circle, ${cat.accent}18, transparent 70%)` }}
                            />

                            <div className="flex items-start justify-between mb-5">
                                <div>
                                    <h3
                                        className="text-base font-bold mb-1"
                                        style={{ color: cat.accent }}
                                    >
                                        {cat.label}
                                    </h3>
                                    <p className="text-xs text-gray-500 font-mono">{cat.desc}</p>
                                </div>
                                <span
                                    className="text-xs font-mono px-2 py-0.5 rounded-full"
                                    style={{ background: `${cat.accent}18`, color: cat.accent, border: `1px solid ${cat.accent}30` }}
                                >
                                    {items.length} skills
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {items.map((skill, i) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.85 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: catIdx * 0.05 + i * 0.03 }}
                                        whileHover={{ scale: 1.08, y: -2 }}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm cursor-default transition-all"
                                        style={{
                                            background: 'rgba(0,0,0,0.3)',
                                            border: `1px solid ${cat.accent}20`,
                                            color: '#d1d5db',
                                        }}
                                    >
                                        <span>{SKILL_ICONS[skill] ?? '•'}</span>
                                        <span>{skill}</span>
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
};

export default Skills;
