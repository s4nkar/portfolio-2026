
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import Section from './Section';

const Skills = () => {
    const { skills } = PORTFOLIO_DATA;

    const categories = [
        { key: 'ai_ml', label: 'AI & Machine Learning', color: 'text-primary', border: 'border-primary/20' },
        { key: 'web_dev', label: 'Web Development', color: 'text-secondary', border: 'border-secondary/20' },
        { key: 'cloud_devops', label: 'Cloud & DevOps', color: 'text-accent', border: 'border-accent/20' },
        { key: 'professional', label: 'Professional Skills', color: 'text-green-400', border: 'border-green-400/20' },
    ];

    return (
        <Section id="skills" className="bg-black/20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
                <p className="text-gray-400 max-w-2xl">A comprehensive toolkit for building scalable AI solutions and robust web applications.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={cat.key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className={`p-6 rounded-2xl glass-card hover:bg-white/5 transition-colors ${cat.border} border`}
                    >
                        <h3 className={`text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary`}>{cat.label}</h3>
                        <div className="flex flex-wrap gap-2">
                            {/* @ts-ignore - Indexing using string key */}
                            {skills[cat.key].map((skill: string) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/30 transition-all cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
