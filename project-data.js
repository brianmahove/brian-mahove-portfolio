const projectsData = {
    agriXpert: {
        title: "AgriXpert: AI-Powered Agricultural Assistant",
        tagline: "Empowering farmers with technology for better crop yields.",
        heroImage: "assets/img/project-agrixpert.png",
        description: "AgriXpert is a comprehensive mobile application designed to assist farmers in Zimbabwe by providing instant crop disease diagnosis through their phone's camera. The project's core is a machine learning model trained to identify common local crop diseases with high accuracy. The goal was to create an accessible, offline-first tool to mitigate crop loss and improve food security.",
        keyFeatures: [
            "Real-time image classification for disease detection.",
            "Offline functionality for use in remote areas.",
            "Detailed information on disease treatment and prevention.",
            "User-friendly interface built with Flutter for a native feel."
        ],
        techStack: ["Flutter", "Dart", "TensorFlow Lite", "Firebase", "Python"],
        gallery: [
            "assets/img/project-agrixpert.png", // Main image
            "assets/img/project-agrixpert-2.png", // Add a second screenshot
            "assets/img/project-agrixpert-3.png"  // Add a third screenshot
        ],
        liveLink: "#", // Replace with your live demo link
        githubLink: "#" // Replace with your GitHub repo link
    },
    aiRecruiter: {
        title: "AI Recruiting Platform",
        tagline: "Streamlining the hiring process with intelligent automation.",
        heroImage: "assets/img/project-ai-recruiter.png",
        description: "The AI Recruiting Platform is a web-based solution designed to help HR departments and recruiters manage high volumes of job applications. It uses Natural Language Processing (NLP) to parse resumes, extract key information, and score candidates based on their relevance to a job description. This automation significantly reduces bias and the time required for manual screening.",
        keyFeatures: [
            "Automated resume parsing and data extraction.",
            "Candidate scoring and ranking based on job relevance.",
            "Intuitive dashboard for recruiters to manage applicants.",
            "RESTful API backend built with Python and Flask."
        ],
        techStack: ["Python", "Flask", "PostgreSQL", "JavaScript", "HTML/CSS", "NLP (spaCy)"],
        gallery: [
            "assets/img/project-ai-recruiter.png", // Main image
            "assets/img/project-ai-recruiter-2.png", // Add a second screenshot
            "assets/img/project-ai-recruiter-3.png"  // Add a third screenshot
        ],
        liveLink: "#",
        githubLink: "#"
    }
    // Add more projects here in the future
};