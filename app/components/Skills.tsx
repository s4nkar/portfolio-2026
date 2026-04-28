"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import Section from './Section';

// Official brand icons from react-icons (Simple Icons + others)
import {
    SiPytorch, SiTensorflow, SiPython, SiTypescript, SiJavascript,
    SiReact, SiNextdotjs, SiNodedotjs, SiDjango, SiFlask,
    SiDocker, SiGit, SiMongodb, SiRedis, SiApachespark,
    SiPhp, SiLaravel, SiNvidia, SiOnnx, SiFastapi,
    SiOpensearch, SiSocketdotio,
} from 'react-icons/si';
import {
    TbBrandOpenai, TbDatabase, TbApi, TbWebhook,
    TbBrain, TbMicrophone, TbTags, TbPencil,
    TbChartBar, TbArrowsShuffle, TbMessageDots,
    TbPhoto, TbCloud, TbInfinity, TbSearch,
    TbFlask, TbTelescope, TbWriting, TbUsers,
    TbRocket, TbCode, TbGauge,
    TbBuildingBank, TbShieldLock, TbShield,
    TbCircuitDiode,
} from 'react-icons/tb';
import { IconType } from 'react-icons';

const SKILL_ICONS: Record<string, IconType> = {
    // ML & AI
    'PyTorch': SiPytorch, 'TensorFlow': SiTensorflow, 'Hugging Face': TbBrandOpenai,
    'BERT': TbBrain, 'RoBERTa': TbBrain, 'Wav2Vec2.0': TbMicrophone,
    'LangChain': TbCircuitDiode, 'RAG': TbSearch, 'PySpark': SiApachespark,
    'Multimodal AI': TbBrain, 'spaCy': TbFlask, 'NER': TbTags,
    'Prompt Engineering': TbPencil, 'Classical ML': TbChartBar,
    'LLM Data Pipelines': TbArrowsShuffle, 'Sentiment Analysis': TbMessageDots,
    'Deep Learning (CNN)': TbPhoto,
    // MLOps & Deploy
    'FastAPI': SiFastapi, 'Docker': SiDocker, 'AWS EC2': TbCloud,
    'CI/CD': TbInfinity, 'NVIDIA Triton': SiNvidia, 'ONNX Runtime': SiOnnx,
    'Git': SiGit, 'REST APIs': TbApi, 'WebSockets': TbWebhook,
    'Socket.IO': SiSocketdotio,
    // Data & Infra
    'ChromaDB': TbDatabase, 'OpenSearch': SiOpensearch,
    'MongoDB': SiMongodb, 'Redis': SiRedis, 'SQL': TbDatabase,
    // Tech Stack
    'Python': SiPython, 'TypeScript': SiTypescript, 'JavaScript': SiJavascript,
    'React': SiReact, 'Next.js': SiNextdotjs, 'Node.js': SiNodedotjs,
    'Django': SiDjango, 'Flask': SiFlask, 'PHP': SiPhp, 'Laravel': SiLaravel,
    // Professional
    'ML Research': TbTelescope, 'Published Author': TbWriting,
    'Technical Leadership': TbUsers, 'Production ML Deployment': TbRocket,
    'Code Reviews': TbCode, 'Performance Optimisation': TbGauge,
    'EU AI Act': TbBuildingBank, 'GDPR / DSGVO': TbShieldLock,
    'Privacy-Preserving Architectures': TbShield,
};

const CATEGORIES = [
    {
        key: 'ai_ml',
        label: 'ML & AI',
        accent: '#FF2D78',
        direction: 1,
    },
    {
        key: 'mlops',
        label: 'MLOps & Deploy',
        accent: '#C084FC',
        direction: -1,
    },
    {
        key: 'data_infra',
        label: 'Data & Infra',
        accent: '#FF6BA8',
        direction: 1,
    },
    {
        key: 'tech_stack',
        label: 'Tech Stack',
        accent: '#34d399',
        direction: -1,
    },
    {
        key: 'professional',
        label: 'Professional',
        accent: '#FBBF24',
        direction: 1,
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
    // Repeat the list enough times so one "set" always exceeds the viewport.
    // For short lists (6 items) we need 4-5× copies; for long lists 2× is fine.
    const minCopies = Math.max(2, Math.ceil(24 / items.length));
    const repeated = Array.from({ length: minCopies * 2 }, () => items).flat();
    const animName = direction === 1 ? 'marqueeLeft' : 'marqueeRight';
    // Use half the repeated set as one cycle (= minCopies copies)
    const cycleItems = items.length * minCopies;
    const duration = `${speed}s`;

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
                    ['--marquee-width' as string]: `${cycleItems * 180}px`,
                }}
            >
                {repeated.map((skill, i) => (
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
                        <span className="text-base leading-none flex items-center justify-center w-4 h-4">
                            {SKILL_ICONS[skill]
                                ? React.createElement(SKILL_ICONS[skill], { size: 16 })
                                : '•'}
                        </span>
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
                                speed={Math.max(2, Math.ceil(24 / items.length)) * items.length * 3}
                            />
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
};

export default Skills;
