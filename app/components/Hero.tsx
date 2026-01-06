
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Section from './Section';

const Hero = () => {
    const { personal } = PORTFOLIO_DATA;

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000" />

            <Section className="relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                        <span className="text-sm font-mono text-secondary">Hello, I am</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400"
                    >
                        {personal.name.split(' ')[0]} <span className="text-primary">{personal.name.split(' ')[1]}</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-3xl font-light text-gray-300 mb-8 max-w-3xl"
                    >
                        <span className="text-secondary font-semibold">{personal.title}</span> specializing in <br className="hidden md:block" />
                        Integrating LLMs & NLP frameworks.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-gray-400 max-w-2xl mb-10 text-lg leading-relaxed"
                    >
                        {personal.objective}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all flex items-center gap-2"
                        >
                            Get in Touch <ArrowRight size={18} />
                        </a>
                        <a
                            href={personal.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={personal.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href={`mailto:${personal.email}`}
                            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                        >
                            <Mail size={20} />
                        </a>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default Hero;
