
export const PORTFOLIO_DATA = {
    personal: {
        name: "Sankar Dev S",
        title: "AI/ML Engineer & Full-Stack Developer",
        email: "s4nkar.connect@gmail.com",
        phone: "+44 7460054747",
        location: "Germany",
        linkedin: "https://linkedin.com/in/s4nkar",
        github: "https://github.com/s4nkar/",
        objective: "AI/ML Engineer with 3+ years building production ML systems. Published researcher with 95.08% F1-score NLP model (JDSIS 2026). Specialising in LLMs, NLP pipelines, and multimodal AI — open to relocation within Germany."
    },
    education: [
        {
            degree: "M.Sc. Artificial Intelligence (with Industrial Placement)",
            institution: "University of East London, UK",
            year: "2023 – 2025",
            honors: "Distinction (70%) — approx. 1.0–1.3 on German grading scale"
        },
        {
            degree: "B.Sc. Computer Applications",
            institution: "Kerala University, India",
            year: "2019 – 2022"
        }
    ],
    skills: {
        ai_ml: ["PyTorch", "TensorFlow", "Hugging Face", "BERT", "RoBERTa", "Wav2Vec2.0", "LangChain", "RAG", "PySpark", "Multimodal AI", "Prompt Engineering", "Classical ML", "LLM Data Pipelines", "Sentiment Analysis", "Deep Learning (CNN)"],
        mlops: ["FastAPI", "Docker", "AWS EC2", "CI/CD", "Git", "REST APIs", "WebSockets", "Socket.IO"],
        web_dev: ["Python", "FastAPI", "TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Django", "Flask", "PHP", "Laravel", "SQL", "MongoDB", "Redis"],
        professional: ["ML Research", "Published Author", "Technical Leadership", "Production ML Deployment", "Code Reviews", "Performance Optimisation"]
    },
    experience: [
        {
            role: "Research Assistant",
            company: "University of East London",
            location: "London, United Kingdom",
            duration: "September 2024 – Present",
            achievements: [
                "Built a data pipeline processing 250,000+ text samples from GoEmotions and Hate Speech corpora.",
                "Fine-tuned RoBERTa for multi-class emotion recognition; achieved 95.08% F1-score, published in JDSIS (2026).",
                "Reduced model training latency by 30% through batching optimisations across classical and transformer-based models.",
                "Developed SoundSense, a multimodal vocal anomaly detection system using Wav2Vec2.0.",
                "Achieved 78.10% accuracy on CREMA-D, outperforming SVM/RF baselines by 30%."
            ]
        },
        {
            role: "Software Engineer",
            company: "Techise Solutions",
            location: "Alappuzha, Kerala, India",
            duration: "February 2023 – October 2023",
            achievements: [
                "Built backend systems using Laravel and MySQL for multiple concurrent client projects.",
                "Delivered React.js frontends with full mobile responsiveness across all deliverables."
            ]
        },
        {
            role: "Software Associate",
            company: "Riss Technologies",
            location: "Ernakulam, Kerala, India",
            duration: "May 2022 – May 2023",
            achievements: [
                "Delivered 200+ bespoke software solutions across Python, PHP, and React; 95% client satisfaction.",
                "Deployed predictive ML models into production, reducing manual data processing time by ~20%."
            ]
        }
    ],
    projects: [
        {
            name: "VoxChain – Real-Time LLM Voice Agent",
            description: "Real-time voice AI system with bidirectional streaming (speech ↔ LLM ↔ audio). Deployed end-to-end agentic LLM pipeline with low-latency audio I/O.",
            tech: ["LangChain", "Qwen LLM", "FastAPI", "WebSockets"],
            link: "https://github.com/s4nkar"
        },
        {
            name: "SmartSafe – Multimodal Liveness Detection",
            description: "Attendance system using facial recognition combined with audio liveness scoring for anti-spoofing. Generates a fraud-resistance confidence score from vision and audio signals.",
            tech: ["Python", "OpenCV", "Face Recognition", "Audio Processing"],
            link: "https://github.com/s4nkar"
        },
        {
            name: "SoundSense – Multimodal Emotion Detection",
            description: "Cross-modal system detecting emotional inconsistencies between speech text and vocal tone. Achieved 78.10% accuracy, outperforming SVM/RF baselines by 30%.",
            tech: ["Wav2Vec2.0", "RoBERTa", "PyTorch", "CREMA-D"],
            link: "https://github.com/s4nkar/SoundSense"
        },
        {
            name: "EmoTract – 28-Class Real-Time Emotion Classifier",
            description: "Multi-label platform classifying 28 emotion categories from text input in real time. Full-stack deployment from fine-tuned transformer model to containerised web interface.",
            tech: ["BERT", "RoBERTa", "Django", "React", "TypeScript", "Docker"],
            link: "https://github.com/s4nkar/MERN-NLP-Emotract"
        }
    ],
    publications: [
        {
            title: "NLP-Framework for Youngsters with Advanced Transformer-Based Models",
            journal: "Journal of Data Science and Intelligent Systems (JDSIS), 2026",
            description: [
                "Developed a sentiment analysis framework achieving a 95.08% F1-score using fine-tuned RoBERTa models.",
                "Benchmarked BERT & RoBERTa against traditional models (LR, RF) to validate superior performance in complex emotion classification."
            ]
        }
    ]
};
