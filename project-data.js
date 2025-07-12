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
            "assets/img/project-agrixpert-1.jpg",
            "assets/img/project-agrixpert-2.jpg",
            "assets/img/project-agrixpert-3.jpg",
            "assets/img/project-agrixpert-4.jpg",
            "assets/img/project-agrixpert-5.jpg",
            "assets/img/project-agrixpert-6.jpg",
            "assets/img/project-agrixpert-7.jpg",
            "assets/img/project-agrixpert-8.jpg",
            "assets/img/project-agrixpert-9.jpg",
            "assets/img/project-agrixpert-10.jpg",
            "assets/img/project-agrixpert-11.jpg",
            "assets/img/project-agrixpert-12.jpg",
            "assets/img/project-agrixpert-13.jpg",
            "assets/img/project-agrixpert-14.jpg",
            "assets/img/project-agrixpert-15.jpg",
            "assets/img/project-agrixpert-16.jpg",
            "assets/img/project-agrixpert-17.jpg",
            "assets/img/project-agrixpert-18.jpg",
            "assets/img/project-agrixpert-19.jpg",
            "assets/img/project-agrixpert-20.jpg",
            "assets/img/project-agrixpert-21.jpg",
            "assets/img/project-agrixpert-22.jpg", 
            "assets/img/project-agrixpert-23.jpg",
            "assets/img/project-agrixpert-24.jpg"
        ],
        liveLink: "https://youtu.be/qHkTNgT9UC8?si=ltwn7ZgvmStM2Ty9",
        githubLink: "https://github.com/brianmahove"
    },
    guesthouseApp: {
        title: "Guest House App",
        tagline: "Automating daily operations for lodges and guesthouses.",
        heroImage: "assets/img/project-guesthouse.png",
        description: "The Guest House App is designed to help receptionists streamline bookings, check-ins, and guest service requests in lodges or guesthouses. It simplifies daily administrative operations using a mobile-first approach.",
        keyFeatures: [
            "Guest registration and booking management.",
            "Service request and check-out automation.",
            "Real-time updates and intuitive UI.",
            "Optimized for small- to medium-scale guesthouses."
        ],
        techStack: ["Flutter", "Firebase", "REST API"],
        gallery: [
            "assets/img/project-guesthouse-1.jpg",
            "assets/img/project-guesthouse-2.jpg",
            "assets/img/project-guesthouse-3.jpg",
            "assets/img/project-guesthouse-4.jpg",
            "assets/img/project-guesthouse-5.jpg",
            "assets/img/project-guesthouse-6.jpg",
            "assets/img/project-guesthouse-7.jpg",
            "assets/img/project-guesthouse-8.jpg",
            "assets/img/project-guesthouse-9.jpg",
            "assets/img/project-guesthouse-10.jpg",
        ],
        liveLink: "https://youtu.be/-EoM0JkiK5Q?si=SNiPNAZpfofj9U2D",
        githubLink: "https://github.com/brianmahove"
    },
    notesApp: {
        title: "Notes App",
        tagline: "Capture your thoughts quickly and efficiently.",
        heroImage: "assets/img/project-notes.png",
        description: "The Notes App is a simple yet effective tool for writing, editing, and storing notes locally. It allows users to keep track of ideas and tasks with a sleek and responsive interface.",
        keyFeatures: [
            "Create, read, update, and delete notes.",
            "Persistent local storage with SQFlite.",
            "Minimalist user interface for distraction-free writing."
        ],
        techStack: ["Flutter", "Dart", "SQFlite", "REST API"],
        gallery: [
            "assets/img/project-notes.png"
        ],
        liveLink: "https://youtu.be/1Q4l48konDw?si=wJ01WNuv4AC05z0T",
        githubLink: "https://github.com/brianmahove/flutter-notes-app"
    },
    todoApp: {
        title: "Todo App",
        tagline: "Manage your daily tasks with ease.",
        heroImage: "assets/img/project-todo.png",
        description: "A modern task management web app allowing users to organize and prioritize tasks. Includes a sleek interface, status filters, and deadline tracking.",
        keyFeatures: [
            "Task creation with due dates and priorities.",
            "Intuitive status tracking (completed, pending).",
            "Responsive web interface with dark/light modes."
        ],
        techStack: ["React", "Node.js", "MongoDB"],
        gallery: [
            "assets/img/project-todo.png"
        ],
        liveLink: "https://youtu.be/Vi7F1D1sBsE?si=pVkCY4NWIne-BAHa",
        githubLink: "https://github.com/brianmahove/flutter-todo-app"
    },
    snakeGame: {
        title: "Classic Snake Game (Gesture Controlled)",
        tagline: "Bringing back nostalgia with modern controls.",
        heroImage: "assets/img/project-snake.png",
        description: "A fun twist on the classic snake game using real-time hand gesture recognition through your webcam. Built for both desktop and mobile browsers using Python.",
        keyFeatures: [
            "Hand-gesture based control using OpenCV.",
            "Cross-platform support.",
            "Fast and lightweight game engine."
        ],
        techStack: ["Python", "OpenCV", "Pygame"],
        gallery: [
            "assets/img/project-snake.png"
        ],
        liveLink: "https://www.youtube.com/@techondemand_/featured",
        githubLink: "#"
    },
    eduConnect: {
        title: "EduConnect: Online Learning Platform",
        tagline: "Enabling remote education through technology.",
        heroImage: "assets/img/project-educonnect.png",
        description: "EduConnect is a full-stack e-learning platform that offers course delivery, quizzes, video content, and student analytics for schools and universities.",
        keyFeatures: [
            "Course creation and enrollment system.",
            "Student performance tracking and analytics.",
            "Video lessons and content management."
        ],
        techStack: ["Flutter", "Node.js", "MongoDB"],
        gallery: [
            "assets/img/project-educonnect.png"
        ],
        liveLink: "https://youtu.be/QjFmgaT_fCE?si=WDSHagVGx5RPW95c",
        githubLink: "https://github.com/brianmahove/educonnect-frontend-flutter"
    },
    whatsappClone: {
        title: "WhatsApp Clone",
        tagline: "Real-time messaging with a familiar interface.",
        heroImage: "assets/img/project-whatsapp.png",
        description: "A clone of WhatsApp built using React Native and Firebase for real-time messaging. Supports chat, status, and media uploads.",
        keyFeatures: [
            "One-on-one and group chat functionality.",
            "Live typing and message indicators.",
            "Push notifications and file sharing."
        ],
        techStack: ["React Native", "Firebase", "Socket.io"],
        gallery: [
            "assets/img/project-whatsapp.png"
        ],
        liveLink: "https://www.youtube.com/@techondemand_/featured",
        githubLink: "https://github.com/brianmahove/whatsapp-clone-flutter-app"
    },
    seniorCare: {
        title: "Senior Care Assistant",
        tagline: "Supporting elderly care through technology.",
        heroImage: "assets/img/project-seniorcare.png",
        description: "An app designed to connect seniors with caregivers. Includes appointment booking, health tracking, medication reminders, and emergency SOS functionality.",
        keyFeatures: [
            "Caregiver discovery and profile validation.",
            "In-app messaging and appointment scheduling.",
            "Emergency SOS system and real-time alerts."
        ],
        techStack: ["React Native", "Firebase", "Google Maps API"],
        gallery: [
            "assets/img/project-seniorcare.png"
        ],
        liveLink: "https://youtube.com/shorts/B-f2Np5V5mU?si=BWIsXboGTeSEFoq-",
        githubLink: "#"
    },
    smolVLM: {
        title: "SmolVLM Realtime",
        tagline: "Offline visual assistant using LLM and Flutter.",
        heroImage: "assets/img/project-smolvlm.png",
        description: "SmolVLM Realtime is a lightweight, offline AI assistant built using Flutter and SmolVLM-500M with llama.cpp. It processes images in real-time to provide contextual scene descriptions.",
        keyFeatures: [
            "Offline AI vision assistant.",
            "Real-time image-to-text generation.",
            "Minimal resource footprint using llama.cpp."
        ],
        techStack: ["Flutter", "SmolVLM-500M", "llama.cpp", "WebSocket"],
        gallery: [
            "assets/img/project-smolvlm-1.jpg",
            "assets/img/project-smolvlm-2.jpg"
        ],
        liveLink: "https://www.youtube.com/@techondemand_/featured",
        githubLink: "https://github.com/brianmahove/SmolVLM-Flutter-App"
    },
    handGestureSnake: {
        title: "Hand-Gesture Controlled Snake Game",
        tagline: "Play classic Snake using your hands.",
        heroImage: "assets/img/project-gesture-snake.png",
        description: "A computer vision-based game that allows users to play the classic snake game using hand gestures detected via webcam.",
        keyFeatures: [
            "Hand detection and motion tracking.",
            "Python-based real-time interaction.",
            "Engaging and educational gameplay."
        ],
        techStack: ["Python", "OpenCV", "MediaPipe"],
        gallery: [
            "assets/img/project-gesture-snake.png"
        ],
        liveLink: "https://www.youtube.com/@techondemand_/featured",
        githubLink: "#"
    },
    oneLineDraw: {
        title: "Hand-Gesture One Line Draw Game",
        tagline: "Solve visual puzzles with your hands.",
        heroImage: "assets/img/project-oneline.png",
        description: "A gesture-controlled puzzle game where players draw a single line to connect all points in a pattern, using hand movement captured by camera.",
        keyFeatures: [
            "Gesture recognition for drawing.",
            "Puzzle logic with visual feedback.",
            "Web-based interaction via Flask backend."
        ],
        techStack: ["Python", "OpenCV", "Flask"],
        gallery: [
            "assets/img/project-oneline.png"
        ],
        liveLink: "https://www.youtube.com/@techondemand_/featured",
        githubLink: "#"
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
            "assets/img/project-ai-recruiter.png",
            "assets/img/project-ai-recruiter-2.png",
            "assets/img/project-ai-recruiter-3.png"
        ],
        liveLink: "https://www.youtube.com/@techondemand_/featured",
        githubLink: "https://github.com/brianmahove/recruiting-ai"
    }
};
