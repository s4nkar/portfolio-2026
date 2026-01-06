
export const PORTFOLIO_DATA = {
    personal: {
        name: "Sankar Dev S",
        title: "Full-stack Engineer & AI Researcher",
        email: "s4nkar.connect@gmail.com",
        phone: "+44 7460054747",
        location: "London, UK",
        linkedin: "https://linkedin.com/in/s4nkar",
        github: "https://github.com/s4nkar/",
        objective: "Specializing in integrating LLMs and NLP frameworks into scalable web applications. Proven track record of moving research to production."
    },
    education: [
        {
            degree: "Masters in Artificial Intelligence",
            institution: "University of East London, UK",
            year: "2023 – 2025"
        },
        {
            degree: "Bachelor of Computer Application",
            institution: "Kerala University, India",
            year: "2019 – 2022"
        }
    ],
    skills: {
        ai_ml: ["NLP (BERT, RoBERTa)", "Deep Learning (TensorFlow, CNN)", "Generative AI (Prompt Engineering, RAG, Langchain)", "Classical ML (Logistic Regression, Random Forest)", "PySpark", "LLM Data Pipelines", "Sentiment Analysis"],
        web_dev: ["JavaScript/TypeScript (React.js, Node.js, Express.js, Next.js)", "Python (Django, Flask)", "PHP", "HTML5", "CSS3"],
        cloud_devops: ["AWS (EC2)", "Docker", "CI/CD", "Git", "RESTful APIs", "Sockets.IO", "Postman", "SQL"],
        professional: ["Project Management", "Technical Leadership", "Bespoke Software Architecture", "Technical Documentation", "Code Reviews", "Performance Optimization"]
    },
    experience: [
        {
            role: "Research Assistant",
            company: "University of East London",
            location: "London, United Kingdom",
            duration: "September 2024 – Present",
            achievements: [
                "Engineered a high-performance data pipeline to merge and preprocess 250,000+ text samples from multi-domain datasets.",
                "Optimized training latency by 30% by implementing custom cleaning scripts and efficient tokenization strategies.",
                "Developed the core classification architecture for JDSIS-published research, achieving a peak 95.08% F1-score in text-based emotion recognition using RoBERTa.",
                "Pioneered a multimodal framework (SoundSense) using Wav2Vec2.0, outperforming traditional SVM/RF models by 30% in vocal anomaly detection accuracy."
            ]
        },
        {
            role: "Software Associate",
            company: "Riss Technologies",
            location: "Ernakulam, Kerala, India",
            duration: "May 2022 – May 2023",
            achievements: [
                "Architected and delivered 200+ bespoke software solutions, maintaining a 95% client satisfaction rate.",
                "Integrated predictive ML models into production environments to automate decision-making processes, reducing manual data processing time by approximately 20%.",
                "Developed and deployed responsive Python (Django/Flask) and PHP web applications, focusing on scalable backend architecture and high-performance user interfaces."
            ]
        },
        {
            role: "Freelance Web Developer",
            company: "Techise Solutions",
            location: "Alappuzha, Kerala, India",
            duration: "February 2023 – October 2023",
            achievements: [
                "Architected scalable backend systems using Laravel and MySQL, optimizing database schemas.",
                "Engineered custom front-end components using React.js and modern CSS frameworks, ensuring 100% mobile-responsive designs.",
                "Managed end-to-end project lifecycles, from initial requirement gathering to final AWS/VPS deployment, ensuring consistent on-time delivery."
            ]
        }
    ],
    projects: [
        {
            name: "SoundSense – Multimodal Vocal Anomaly Detection",
            description: "Developed a cross-modal AI system to detect emotional inconsistencies between spoken text and vocal tone using Wav2Vec2.0 and RoBERTa.",
            tech: ["Wav2Vec2.0", "RoBERTa", "Python"]
        },
        {
            name: "EmoTract – Advanced NLP Framework with Age Verification",
            description: "Engineered a real-time sentiment platform using BERT and RoBERTa to classify 28 distinct emotions. Architected the full stack using Django, React.js, and TypeScript.",
            tech: ["BERT", "RoBERTa", "Django", "React.js", "TypeScript", "Docker"]
        }
    ],
    publications: [
        {
            title: "NLP-Framework for Youngsters with Advanced Transformer-Based Models",
            journal: "Journal of Data Science and Intelligent Systems (JDSIS), 2026",
            description: [
                "Developed a sentiment analysis framework achieving a 95.08% F1-score using fine-tuned RoBERTa models.",
                "Benchmarked BERT & RoBERTa against traditional models (LR, RF) to validate superior performance incomplex emotion classification."
            ]
        }
    ]
};
