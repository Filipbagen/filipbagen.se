const skills = [
    {
        emoji: "👨🏽‍💻",
        title: "Programming",
        text: "I am a self-taught coder with over " + (new Date().getFullYear() - 2016) + " years of experience. I enjoy the problem-solving aspect of programming and the satisfaction of seeing my code come to life.",
        key: 1
    },
    {
        emoji: "🔭",
        title: "Creativity",
        text: "I consider myself to be a curious and creative person and I believe that my curiosity is the key to discovering new things, solving problems and coming up with innovative solutions.",
        key: 5
    },
    {
        emoji: "⚙️",
        title: "Project Managment",
        text: "I have experience in leading and organising teams to achieve specific goals and objectives. I enjoy the challenge of coordinating and strategising to ensure a project runs smoothly and efficiently.",
        key: 4
    },
    {
        emoji: "🎥",
        title: "Photogoraphy",
        text: "I started photographing and filming when I  first got a phone with a built in camera. Since then, I have tried to master the art. This includes editing, which I have experience in from both Final Cut Pro and Premiere Pro.",
        key: 3
    },
    {
        emoji: "🎨",
        title: "UX-Design",
        text: "I have an eye for graphical design and I have designed several active apps and websites. My skills include using Figma, Affinity Designer and Adobe Illustrator.",
        key: 2
    },
    {
        emoji: "🍕",
        title: "Cooking",
        text: "This is not a job I'm looking for and it may not be relevant for my next employer, but I’m a self-appointed master in the kitchen. I just want to brag about it.",
        key: 6
    }
]

const Experiences = [
    {
        title: "Project Manager at Media Technology Day",
        employer: "Media Technology Day",
        date: "April - December 2022",
        tags: ['Time Managment', 'Adaptability', 'Problem Solving'],
        text: [
            'I managed the work fair for our program by implementing an agile method with ten colleagues My key strategy was to think innovatively and not rely on decisions and plannings from earlier years to encourage the development of our own work process.',
            'We achieved an all time income record while at the same time cut the working time-frame in half (3 months compared to 6 months).',
            'I was involved in developing pricing strategies and I actively sold the product to companies.'
        ],
        keys: [1, 2, 3]
    },
    {
        title: "Programming Tutor at Linköping University",
        employer: "Linköping University",
        date: "Sep 2021 - Jun 2022",
        tags: ['Programming', 'Tutoring'],
        text: [
            'I was a part of a student-managed project which helps other students with programming.',
            'I helped students with programming questions about JavaScript, C++, MATLAB, OpenGL and Java.'
        ],
        keys: [1, 2]
    },
    {
        title: "Designer & Front End dev. at Unga Utvecklare",
        employer: "Unga Utvecklare",
        date: "May 2016 - Dec 2020",
        tags: ['UI', 'UX', 'Animation', 'Front End', 'Photographer'],
        text: [
            'I ran this consulting firm with a few of my friends. This is where I learnt the basics of customer contact, web development and design principles.',
            'I designed 50+ websites, logos, apps and animations, some of which are still up and running.',
            'I occasionally acted as a photographer and videographer. I feel confident both behind the camera and while editing.'
        ],
        keys: [1, 2, 3]
    }
]

const ProjectList = [
    {
        emoji: "🔥",
        title: "Firebase Authentication",
        text: "I developed a custom Firebase Authentication solution for a company-school fair platform, enabling companies to create an account, book their booth with various accessories, sign contracts and providing admins with features like revenue tracking, display of all participating companies and invoice generation.",
        image: 'img/dashboard.png',
        tags: ['Server', 'React', 'API'],
        key: 1
    },
    {
        emoji: "🚀",
        title: "Rocket Simulation",
        text: "I participated in a group project where we modeled and simulated a rocket in a 3D environment using realistic physics with adjustable variables, such as thrust and angle, programmed in plain JavaScript.",
        image: 'img/rocket.png',
        tags: ['ThreeJS', 'Physics', 'Blender'],
        githubLink: 'https://github.com/Filipbagen/rocket-simulation',
        projectLink: 'https://filipbagen.github.io/rocket-simulation/',
        key: 2

    },
    {
        emoji: "🤖",
        title: "Virtual Guide",
        text: "My Bachelor project involved programming a virtual guide using sound-to-text conversion, an AI chatbot, and text-to-speech synthesis, alongside image analysis for user interaction. The project aimed to enhance visitors' experience at the exhibition, providing them with an interactive way to ask questions while showcasing the potential of AI and computer vision.",
        image: 'img/rocket.png',
        tags: ['Python', 'AI', 'Image analysis'],
        githubLink: 'https://github.com/Filipbagen/virtual-guide',
        key: 3

    },
    {
        emoji: "🪐",
        title: "Solar System",
        text: "A semi-realistic solar system, created with three.js",
        tags: ['ThreeJS'],
        githubLink: 'https://github.com/Filipbagen/threejs-solar-system',
        projectLink: 'https://filipbagen.github.io/threejs-solar-system/',
        key: 4
    },
    {
        emoji: "🗺️",
        title: "Country Finder",
        text: "A geography game,which challenges the user to find a specific country.",
        tags: ['React'],
        githubLink: 'https://github.com/Filipbagen/country-finder',
        projectLink: 'https://filipbagen.github.io/country-finder/',
        key: 5
    },
    {
        emoji: "✂️",
        title: "Looks & Books",
        text: "A website for a hair saloon in all its simplicity.",
        tags: ['CSS'],
        githubLink: 'https://github.com/Filipbagen/looks-and-books',
        projectLink: 'http://www.looksandbooks.se/',
        key: 6
    },
    {
        emoji: "📚",
        title: "Merit",
        text: "Merit is a web app that collects schedules, courses, exams, and stats for MT students at LiU.",
        image: 'img/merit.png',
        tags: ['React'],
        githubLink: 'https://github.com/Filipbagen/merit',
        projectLink: 'https://filipbagen.github.io/merit/',
        key: 7
    },
    {
        emoji: "🧱",
        title: "Lego Search Engine",
        text: "This is a Google inspired search engine which lets you search for Lego bricks, Lego sets and .",
        image: "img/lego.png",
        tags: ['SQL'],
        githubLink: 'https://github.com/Filipbagen/lego-database',
        projectLink: 'http://www.student.itn.liu.se/~filma379/Legodatabas/index.php',
        key: 8
    },
    {
        emoji: "🏎",
        title: "F1",
        text: "It is a website displaying information about Formula 1, that was created with React Three Fiber.",
        image: "img/f1.png",
        tags: ['React Three Fiber'],
        githubLink: 'https://github.com/Filipbagen/f1',
        key: 9
    }
]



export { skills, ProjectList, Experiences }
