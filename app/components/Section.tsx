
import React, { ReactNode } from 'react';

interface SectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
    return (
        <section id={id} className={`w-full py-12 relative z-10 ${className}`}>
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                {children}
            </div>
        </section>
    );
};

export default Section;
