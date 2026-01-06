
"use client";
import React from 'react';
import Section from './Section';
import { Mail, Phone, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

const Contact = () => {
    const { personal } = PORTFOLIO_DATA;

    return (
        <Section id="contact" className="pb-32">
            <div className="rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 p-[1px]">
                <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-8 md:p-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="text-gradient">Connect</span></h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg">
                        I'm currently open to new opportunities in AI Research and Full-Stack Engineering.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        <a href={`mailto:${personal.email}`} className="flex items-center gap-3 text-white hover:text-primary transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Mail size={24} />
                            </div>
                            <span className="text-lg font-medium">{personal.email}</span>
                        </a>

                        <div className="flex items-center gap-3 text-white group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                <MapPin size={24} />
                            </div>
                            <span className="text-lg font-medium">{personal.location}</span>
                        </div>

                        <div className="flex items-center gap-3 text-white group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                <Phone size={24} />
                            </div>
                            <span className="text-lg font-medium">{personal.phone}</span>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/10 text-gray-500 text-sm">
                        <p>© 2026 {personal.name}. Built with Next.js, Tailwind & Vibe.</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
