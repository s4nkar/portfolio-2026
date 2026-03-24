"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { ArrowRight, Github, Linkedin, Mail, FileText, MapPin } from 'lucide-react';

const ROLES = [
    "AI/ML Engineer",
    "NLP Researcher",
    "LLM Architect",
    "Multimodal AI Builder",
    "Published Author",
];

const EditorialHero = () => {
    const { personal } = PORTFOLIO_DATA;
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const tickRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Typewriter effect
    useEffect(() => {
        const current = ROLES[roleIndex];
        const speed = isDeleting ? 40 : 70;

        tickRef.current = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(current.slice(0, displayText.length + 1));
                if (displayText.length + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), 1800);
                }
            } else {
                setDisplayText(current.slice(0, displayText.length - 1));
                if (displayText.length - 1 === 0) {
                    setIsDeleting(false);
                    setRoleIndex((i) => (i + 1) % ROLES.length);
                }
            }
        }, speed);

        return () => { if (tickRef.current) clearTimeout(tickRef.current); };
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section
            id="home"
            className="relative min-h-screen w-full flex flex-col overflow-hidden"
        >
            {/* Pink atmospheric glow */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
                    style={{
                        background: 'radial-gradient(ellipse, rgba(255,45,120,0.12) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />
                <div
                    className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full"
                    style={{
                        background: 'radial-gradient(ellipse, rgba(192,132,252,0.08) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />
            </div>

            {/* ── Main hero content ── */}
            <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 pt-28 pb-16 gap-12 md:gap-8 max-w-7xl mx-auto w-full">

                {/* LEFT: Text */}
                <div className="flex-1 flex flex-col gap-6 md:gap-8">

                    {/* Availability badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 w-fit"
                    >
                        <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono tracking-widest uppercase"
                            style={{ borderColor: 'rgba(255,45,120,0.3)', background: 'rgba(255,45,120,0.06)', color: '#FF2D78' }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Available · Open to Germany
                        </span>
                    </motion.div>

                    {/* Big name */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <h1 className="font-bold leading-[0.9] tracking-tight">
                            <span
                                className="block text-[clamp(3.5rem,10vw,8rem)] text-white"
                                style={{ fontFamily: 'var(--font-sans)' }}
                            >
                                SANKAR
                            </span>
                            <span
                                className="block text-[clamp(3.5rem,10vw,8rem)]"
                                style={{
                                    fontFamily: 'var(--font-sans)',
                                    WebkitTextStroke: '2px #FF2D78',
                                    color: 'transparent',
                                    textShadow: '0 0 60px rgba(255,45,120,0.3)',
                                }}
                            >
                                DEV S
                            </span>
                        </h1>
                    </motion.div>

                    {/* Animated role typewriter */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-3 h-10"
                    >
                        <span className="w-8 h-px" style={{ background: '#FF2D78' }} />
                        <span
                            className="text-lg md:text-xl font-semibold tracking-wide"
                            style={{ color: '#FF2D78', fontFamily: 'var(--font-display)' }}
                        >
                            {displayText}
                            <span className="animate-pulse ml-0.5">|</span>
                        </span>
                    </motion.div>

                    {/* Objective */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-400 max-w-md text-base md:text-lg leading-relaxed"
                    >
                        {personal.objective}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.65 }}
                        className="flex flex-wrap gap-3 items-center"
                    >
                        <a
                            href="#contact"
                            className="group flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300"
                            style={{
                                background: 'linear-gradient(135deg, #FF2D78, #C084FC)',
                                color: '#fff',
                                boxShadow: '0 0 30px rgba(255,45,120,0.35)',
                            }}
                        >
                            Get in Touch
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#work"
                            className="px-7 py-3 rounded-full font-semibold text-sm border text-white transition-all duration-300 hover:bg-white/5"
                            style={{ borderColor: 'rgba(255,255,255,0.15)' }}
                        >
                            View Work
                        </a>
                        <a
                            href="/data/Sankar_CV_2026.pdf"
                            download
                            className="flex items-center gap-2 px-5 py-3 rounded-full text-sm border text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/5"
                            style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                        >
                            <FileText size={15} />
                            Resume
                        </a>
                    </motion.div>

                    {/* Social row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex items-center gap-4 pt-2"
                    >
                        {[
                            { href: personal.github, Icon: Github, label: 'GitHub' },
                            { href: personal.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                            { href: `mailto:${personal.email}`, Icon: Mail, label: 'Email' },
                        ].map(({ href, Icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={label}
                                className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm group"
                            >
                                <Icon size={18} className="group-hover:scale-110 transition-transform" />
                                <span className="hidden sm:inline text-xs font-mono">{label}</span>
                            </a>
                        ))}
                        <span className="text-gray-700 text-xs font-mono ml-2 flex items-center gap-1">
                            <MapPin size={12} className="text-primary" />
                            Germany
                        </span>
                    </motion.div>
                </div>

                {/* RIGHT: Visual panel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative flex-shrink-0 w-full md:w-[420px] lg:w-[480px]"
                >
                    {/* Outer glow ring */}
                    <div
                        className="absolute inset-0 rounded-3xl"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,45,120,0.25), rgba(192,132,252,0.15), transparent)',
                            filter: 'blur(1px)',
                            padding: '1px',
                        }}
                    />

                    {/* Main visual card */}
                    <div
                        className="relative rounded-3xl overflow-hidden"
                        style={{
                            background: 'linear-gradient(145deg, rgba(255,45,120,0.08) 0%, rgba(13,13,13,0.95) 60%)',
                            border: '1px solid rgba(255,45,120,0.2)',
                            minHeight: '480px',
                        }}
                    >
                        {/* Background image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200&auto=format&fit=crop')",
                                opacity: 0.25,
                                mixBlendMode: 'luminosity',
                            }}
                        />

                        {/* Pink gradient overlay */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: 'linear-gradient(to top, rgba(13,13,13,1) 0%, rgba(13,13,13,0.4) 50%, rgba(255,45,120,0.05) 100%)',
                            }}
                        />

                        {/* Content inside card */}
                        <div className="relative z-10 p-8 flex flex-col h-full min-h-[480px] justify-between">
                            {/* Top: research stat pill */}
                            <div className="flex justify-between items-start">
                                <div
                                    className="px-4 py-2 rounded-full text-xs font-mono"
                                    style={{ background: 'rgba(255,45,120,0.15)', color: '#FF2D78', border: '1px solid rgba(255,45,120,0.3)' }}
                                >
                                    Published Researcher · JDSIS 2026
                                </div>
                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                                    <span className="text-xs text-gray-400 font-mono">AI</span>
                                </div>
                            </div>

                            {/* Middle: glowing metric display */}
                            <div className="flex flex-col gap-5 my-6">
                                <MetricBar label="Emotion Recognition F1" value={95} color="#FF2D78" />
                                <MetricBar label="Vocal Anomaly Accuracy" value={78} color="#C084FC" />
                                <MetricBar label="Training Latency Saved" value={30} color="#FF6BA8" />

                                {/* Terminal snippet */}
                                <div
                                    className="rounded-2xl p-4 mt-2"
                                    style={{
                                        background: 'rgba(0,0,0,0.6)',
                                        border: '1px solid rgba(255,45,120,0.15)',
                                        fontFamily: 'var(--font-mono)',
                                    }}
                                >
                                    <div className="flex gap-1.5 mb-3">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                                    </div>
                                    <div className="text-xs space-y-1">
                                        <p><span className="text-purple-400">model</span> = <span className="text-green-400">RoBERTa</span><span className="text-gray-500">.from_pretrained(</span></p>
                                        <p className="pl-4 text-gray-400">"emotion-classifier"</p>
                                        <p className="text-gray-500">)</p>
                                        <p className="mt-2"><span className="text-pink-400">result</span> = model<span className="text-gray-400">.predict(</span><span className="text-yellow-300">text</span><span className="text-gray-400">)</span></p>
                                        <p className="text-green-400 text-[10px] mt-2">▶ F1-Score: 95.08% · Classes: 28</p>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom: tech pills */}
                            <div className="flex flex-wrap gap-2">
                                {["PyTorch", "LangChain", "Wav2Vec2", "FastAPI"].map(t => (
                                    <span
                                        key={t}
                                        className="px-3 py-1 text-xs rounded-full font-mono"
                                        style={{ background: 'rgba(255,45,120,0.1)', border: '1px solid rgba(255,45,120,0.2)', color: '#FF6BA8' }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ── Scroll indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="relative z-10 flex flex-col items-center gap-2 pb-8"
            >
                <span className="text-[10px] font-mono tracking-widest uppercase text-gray-600">Scroll</span>
                <div className="w-px h-12 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <div
                        className="absolute top-0 left-0 w-full"
                        style={{
                            height: '50%',
                            background: 'linear-gradient(to bottom, transparent, #FF2D78)',
                            animation: 'scrollDrop 1.6s ease-in-out infinite',
                        }}
                    />
                </div>
                <style>{`
                    @keyframes scrollDrop {
                        0% { transform: translateY(-100%); opacity: 0 }
                        40% { opacity: 1 }
                        100% { transform: translateY(200%); opacity: 0 }
                    }
                `}</style>
            </motion.div>
        </section>
    );
};

const MetricBar = ({ label, value, color }: { label: string; value: number; color: string }) => (
    <div>
        <div className="flex justify-between text-xs mb-1.5">
            <span className="text-gray-400 font-mono">{label}</span>
            <span style={{ color }} className="font-bold font-mono">{value}%</span>
        </div>
        <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }}>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${color}aa, ${color})` }}
            />
        </div>
    </div>
);

export default EditorialHero;
