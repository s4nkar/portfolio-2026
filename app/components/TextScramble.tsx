
"use client";
import React, { useEffect, useState } from 'react';

const TextScramble = ({ text, className = "" }: { text: string, className?: string }) => {
    const [displayText, setDisplayText] = useState(text);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    useEffect(() => {
        let iteration = 0;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let interval: any = null;

        interval = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <span className={className}>{displayText}</span>
    );
};

export default TextScramble;
