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
        title: "Merit",
        text: "📚 Merit is a web application that gathers schedules, current courses, future examinations and exam statistics for MT students at Linköping University.",
        image: 'img/merit.png',
        tags: ['React', 'Styled Components', 'API'],
        githubLink: 'https://github.com/Filipbagen/merit',
        projectLink: 'https://filipbagen.github.io/merit/',
        key: 1
    },
    {
        title: "Lego Search Engine",
        text: "🧱 This is a school project in the course TNMK30, which lets you search for Lego sets.",
        image: "img/lego.png",
        tags: ['VS Code', 'JavaScript', 'SQL', 'CSS'],
        githubLink: 'https://github.com/Filipbagen/lego-database',
        projectLink: 'http://www.student.itn.liu.se/~filma379/Legodatabas/index.php',
        key: 2
    },
    {
        title: "F1",
        text: "🏎 It is a website displaying information about Formula 1, that was created with React Three Fiber.",
        image: "img/f1.png",
        tags: ['React Three Fiber', 'Blender', 'Physics'],
        githubLink: 'https://github.com/Filipbagen/f1',
        projectLink: '',
        key: 3
    }
]

const OtherProjectsList = [
    {
        emoji: "🪐",
        title: "Solar System",
        text: "A semi-realistic solar system, created with three.js",
        tags: ['ThreeJS'],
        githubLink: 'https://github.com/Filipbagen/threejs-solar-system',
        projectLink: 'https://filipbagen.github.io/threejs-solar-system/',
        key: 1
    },
    {
        emoji: "🗺️",
        title: "Country Finder",
        text: "A geography game,which challenges the user to find a specific country.",
        tags: ['React'],
        githubLink: 'https://github.com/Filipbagen/country-finder',
        projectLink: 'https://filipbagen.github.io/country-finder/',
        key: 2
    },
    {
        emoji: "🥑",
        title: "Guac-A-Mole",
        text: "A Whack-a-mole game made as an inside joke.",
        tags: ['JavaScript'],
        githubLink: 'https://github.com/Filipbagen/guac-a-mole',
        projectLink: 'https://filipbagen.github.io/Guac-a-mole/',
        key: 3
    },
    {
        emoji: "✂️",
        title: "Looks & Books",
        text: "A website for a hair saloon in all its simplicity.",
        tags: ['CSS'],
        githubLink: 'https://github.com/Filipbagen/looks-and-books',
        projectLink: 'http://www.looksandbooks.se/',
        key: 4
    }
]

export { skills, ProjectList, OtherProjectsList, Experiences }
