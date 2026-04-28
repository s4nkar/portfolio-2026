
export const PORTFOLIO_DATA = {
    personal: {
        name: "Sankar Dev S",
        title: "Applied AI Engineer · NLP · RAG Systems · Transformer Models · MLOps",
        email: "s4nkar.connect@gmail.com",
        phone: "+44 7460054747",
        location: "Germany",
        linkedin: "https://linkedin.com/in/s4nkar",
        github: "https://github.com/s4nkar/",
        website: "https://s4nkar.online",
        objective: "Applied AI Engineer with 3+ years of experience building production NLP systems, transformer pipelines, and retrieval-augmented AI applications.",
        researchInterests: ["NLP", "RAG Systems", "Transformer Models", "Privacy-Preserving AI"],
        workAuth: "Eligible to work in Germany",
    },
    education: [
        {
            degree: "MSc Artificial Intelligence (with Industrial Placement)",
            institution: "University of East London, London, UK",
            year: "2023 – 2025",
            honors: "Pass with Distinction · Equivalent to German grade 1.0 – 1.3"
        },
        {
            degree: "BSc Computer Applications",
            institution: "Kerala University, India",
            year: "2019 – 2022"
        }
    ],
    skills: {
        ai_ml: ["PyTorch", "TensorFlow", "Hugging Face", "BERT", "RoBERTa", "Wav2Vec2.0", "LangChain", "RAG", "PySpark", "Multimodal AI", "spaCy", "NER", "Prompt Engineering", "Classical ML", "LLM Data Pipelines", "Sentiment Analysis", "Deep Learning (CNN)"],
        mlops: ["FastAPI", "Docker", "AWS EC2", "CI/CD", "NVIDIA Triton", "ONNX Runtime", "Git", "REST APIs", "WebSockets", "Socket.IO"],
        data_infra: ["ChromaDB", "OpenSearch", "PySpark", "MongoDB", "Redis", "SQL"],
        tech_stack: ["Python", "TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Django", "Flask", "PHP", "Laravel"],
        professional: ["ML Research", "Published Author", "Technical Leadership", "Production ML Deployment", "Code Reviews", "Performance Optimisation", "EU AI Act", "GDPR / DSGVO", "Privacy-Preserving Architectures"]
    },
    featuredProject: {
        name: "KlarKI — Local-First EU AI Act & GDPR Compliance Auditor",
        year: "2026",
        tech: ["Python", "FastAPI", "gBERT", "ONNX", "NVIDIA Triton", "ChromaDB", "spaCy", "LangGraph", "Docker", "React"],
        highlights: [
            "Architected a 7-container local-first bilingual AI compliance platform for EU AI Act + GDPR auditing, designed for German SMEs with zero external API calls and full on-device inference.",
            "Built an end-to-end NLP pipeline covering document ingestion → actor classification → Annex III applicability gating → hybrid RAG retrieval → deterministic multi-agent LLM reasoning → scored PDF/JSON compliance reports.",
            "Fine-tuned spaCy NER and deepset/gbert-base classifiers, deployed via ONNX + NVIDIA Triton, achieving 50–100× faster inference with reliable fallback through deterministic regex, NLI validation, and ML decision trees.",
            "Improved compliance evidence retrieval by replacing basic RAG with hybrid retrieval using BM25 + ChromaDB + Reciprocal Rank Fusion + cross-encoder re-ranking, significantly reducing hallucination risk and improving audit defensibility.",
            "Built 200+ automated tests covering unit logic, golden dataset validation, RAG retrieval quality, hallucination detection, and adversarial regulatory cases."
        ],
        results: "Macro F1 ≥ 0.95 · NER F1 ≥ 0.95 · RAG Precision@3 ≥ 85%",
        link: "https://github.com/s4nkar/KlarKI"
    },
    experience: [
        {
            role: "Research Assistant — NLP & Multimodal AI",
            company: "University of East London",
            location: "London, UK",
            duration: "September 2024 – Present",
            achievements: [
                "Built scalable NLP data pipeline processing 250,000+ text samples from GoEmotions and Hate Speech corpora.",
                "Fine-tuned RoBERTa (PyTorch, Hugging Face) for multi-class emotion recognition; achieved 95.08% F1-score, published in JDSIS (2026).",
                "Reduced model training latency by ~20% through batching optimisations across classical and transformer-based models.",
                "Developed SoundSense, a multimodal vocal anomaly detection system using Wav2Vec2.0; achieved 78.10% accuracy on CREMA-D, outperforming SVM/RF baselines by 30%."
            ]
        },
        {
            role: "Software Engineer",
            company: "Techise Solutions",
            location: "India",
            duration: "February 2023 – October 2023",
            achievements: [
                "Developed backend systems using Laravel and MySQL for multiple client applications across diverse industry sectors.",
                "Built responsive frontends using React, improving cross-device usability."
            ]
        },
        {
            role: "Software Associate",
            company: "Riss Technologies",
            location: "India",
            duration: "May 2022 – May 2023",
            achievements: [
                "Contributed to delivery and maintenance of 200+ bespoke software solutions across Python, PHP, and React stacks.",
                "Deployed predictive ML models reducing manual data processing and inference optimisation time by ~20%."
            ]
        }
    ],
    projects: [
        {
            name: "VoxChain — Real-Time LLM Voice Agent",
            description: "Built a real-time voice AI system with bidirectional streaming (speech ↔ LLM ↔ audio). Deployed end-to-end agentic pipeline enabling low-latency conversational interaction.",
            tech: ["LangChain", "Qwen LLM", "FastAPI", "WebSockets"],
            link: "https://github.com/s4nkar/VoxChain"
        },
        {
            name: "SmartSafe — Multimodal Liveness Detection",
            description: "Designed biometric attendance system combining facial recognition with audio liveness detection. Generated multimodal confidence score to mitigate replay and spoofing attacks.",
            tech: ["Python", "OpenCV", "face_recognition", "Audio Processing"],
            link: "https://github.com/s4nkar/SmartSafe"
        },
        {
            name: "SoundSense — Multimodal Emotion Detection",
            description: "Cross-modal system detecting emotional inconsistencies between speech text and vocal tone. Achieved 78.10% accuracy, outperforming SVM/RF baselines by 30%.",
            tech: ["Wav2Vec2.0", "RoBERTa", "PyTorch", "CREMA-D"],
            link: "https://github.com/s4nkar/SoundSense"
        },
        {
            name: "EmoTract — 28-Class Real-Time Emotion Classifier",
            description: "Built multi-label emotion classifier predicting 28 emotion categories from real-time text input. Deployed full-stack system from fine-tuned transformer model to containerised web interface.",
            tech: ["BERT", "RoBERTa", "Random Forest", "Django", "React", "Docker"],
            link: "https://github.com/s4nkar/MERN-NLP-Emotract"
        }
    ],
    publications: [
        {
            title: "NLP Framework to Safeguard Youngsters Online Using Advanced Transformer-Based Models",
            journal: "Journal of Data Science and Intelligent Systems (JDSIS), Q1-ranked (Scopus indexed, SJR), 2026",
            link: "https://doi.org/10.47852/bonviewJDSIS62025752",
            description: [
                "Developed a sentiment analysis framework achieving a 95.08% F1-score using fine-tuned RoBERTa models.",
                "Benchmarked BERT & RoBERTa against traditional models (LR, RF) to validate superior performance in complex emotion classification."
            ]
        }
    ]
};
