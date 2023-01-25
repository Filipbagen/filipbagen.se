const AboutMe = [
    {
        emoji: "👨🏽‍💻",
        title: "About Me",
        text: "How to study effectively for exams, with the best evidence-based techniques"
    },
    {
        emoji: "🎯",
        title: "Experience",
        text: "How to study effectively for exams, with the best evidence-based techniques"
    },
    {
        emoji: "🚀",
        title: "Projects",
        text: "How to study effectively for exams, with the best evidence-based techniques"
    }
]

const skills = [
    {
        emoji: "👨🏽‍💻",
        title: "Programming",
        text: "I am a self-taught coder with " + (new Date().getFullYear() - 2016) + " years of experience. I enjoy the problem-solving aspect of programming and the satisfaction of seeing my code come to life."
    },
    {
        emoji: "🎨",
        title: "UX-Design",
        text: "I have a strong sense of graphical design and have designed several active apps and websites. My skills include using Affinity Designer and Adobe Illustrator."
    },
    {
        emoji: "🎥",
        title: "Photogoraphy",
        text: "I have been honing my photography and videography skills since I got my first camera, and have experience in both capturing and editing visual content using Final Cut Pro and Premiere Pro."
    },
    {
        emoji: "⚙️",
        title: "Project Managment",
        text: "I have experience in leading and organising teams to achieve specific goals and objectives. I enjoy the challenge of coordinating and strategising to ensure a project runs smoothly and efficiently."
    },
    {
        emoji: "🔭",
        title: "Creativity",
        text: " consider myself to be a curious and creative person and I believe that my innate curiosity is the key to discovering new things, solving problems and coming up with innovative solutions."
    },
    {
        emoji: "🍕",
        title: "Cooking",
        text: "Not a job I’m looking for and it may not be relevant for my next employer, but I’m a self-appointed master in the kitchen. I just want to brag about it."
    }
]

const ProjectList = [
    {
        title: "Merit",
        text: "📚 Merit is a web application that gathers schedules, current courses, future examinations, and exam statistics for MT students at Linköping University.",
        image: 'img/merit.png',
        tags: ['React', 'Styled Components', 'API'],
        githubLink: 'https://github.com/Filipbagen/merit',
        projectLink: 'https://filipbagen.github.io/merit/'
    },
    {
        title: "Lego Search Engine",
        text: "🧱 This is a school project in the course TNMK30 which lets you search for lego sets",
        image: "img/lego.png",
        tags: ['VS Code', 'JavaScript', 'SQL', 'CSS'],
        githubLink: 'https://github.com/Filipbagen/lego-database',
        projectLink: 'http://www.student.itn.liu.se/~filma379/Legodatabas/index.php'
    },
    {
        title: "F1",
        text: "🏎 A website displaying information about Formal 1, created with React Three Fiber.",
        image: "img/f1.png",
        tags: ['React Three Fiber', 'Blender', 'Physics'],
        githubLink: 'https://github.com/Filipbagen/f1',
        projectLink: ''
    }
]

const OtherProjectsList = [
    {
        emoji: "🪐",
        title: "Solar system",
        text: "A semi-realistic solar system, created with three.js",
        tags: ['ThreeJS'],
        githubLink: 'https://github.com/Filipbagen/threejs-solar-system',
        projectLink: 'https://filipbagen.github.io/threejs-solar-system/'
    },
    {
        emoji: "🗺️",
        title: "Country finder",
        text: "A geography game,which challenges the user to find a specific country.",
        tags: ['React'],
        githubLink: 'https://github.com/Filipbagen/country-finder',
        projectLink: 'https://filipbagen.github.io/country-finder/'
    },
    {
        emoji: "🥑",
        title: "Guac-a-mole",
        text: "A Whack-a-mole game made as an inside joke",
        tags: ['JavaScript'],
        githubLink: 'https://github.com/Filipbagen/guac-a-mole',
        projectLink: 'https://filipbagen.github.io/Guac-a-mole/'
    }
]

const Experiences = [
    {
        title: "Project Manager @ Media Technology Day",
        date: "April - December 2022",
        tags: ['Time managment', 'Adaptability', 'Problem solving'],
        text: 'Sed vitae arcu. Aliquam erat volutpat. Praesent odio nisl, suscipit at, rhoncus sit amet, porttitor sit amet, leo. Aenean hendrerit est. Etiam ac augue. Morbi tincidunt neque ut lacus. Duis vulputate cursus orci. Mauris justo lorem, scelerisque sit amet, placerat sed.'
    },
    {
        title: "Programming Tutor @ Linköping University",
        date: "Jan - Feb 2020",
        tags: ['Programming', 'Tutoring'],
        text: 'Aenean hendrerit est. Etiam ac augue. Morbi tincidunt neque ut lacus. Duis vulputate cursus orci. Mauris justo lorem, scelerisque sit amet, placerat sed, '
    },
    {
        title: "Unga Utvecklare",
        date: "Jan - Feb 2020",
        tags: ['Programming', 'Tutoring'],
        text: 'Aenean hendrerit est. Etiam ac augue. Morbi tincidunt neque ut lacus. Duis vulputate cursus orci. Mauris justo lorem, scelerisque sit amet, placerat sed, '
    }
]

export { AboutMe, skills, ProjectList, OtherProjectsList, Experiences }
