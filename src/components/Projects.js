import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

// Components
import Tag from "./Tag"
import Footer from "./Footer"
import Project from "./Project"
import SmallProject from "./SmallProject"

// Database
import { ProjectList } from "../data/DB"

const Projects = () => {

    {/* Only display the first 3 projects in big format, and the other in small format */ }
    const projects = ProjectList.reduce((result, project, index) => {
        const Component = index < 3 ? Project : SmallProject

        const props = {
            title: project.title,
            emoji: project.emoji,
            text: project.text,
            image: project.image,
            tag: project.tags,
            githubLink: project.githubLink,
            projectLink: project.projectLink,
            key: project.key,
            flip: index % 2 === 0 ? false : true
        }

        result[index < 3 ? 0 : 1].push(<Component {...props} />)

        return result

    }, [[], []])

    return (
        <Container id="projects">
            <Tag title={'🚀 Projects'} />
            <h1>What I Have Done</h1>

            {/* Render first part */}
            <div>{projects[0]}</div>

            {/* Render second part */}
            <h2>Other Noteworthy Projects</h2>
            <OtherProjects>{projects[1]}</OtherProjects>

            <Link to="top" spy={true} smooth={true} offset={-20} duration={500}><span role="img" aria-label="top">⬆</span> Back to Top <span role="img" aria-label="top">⬆</span></Link>

            <Footer />
        </Container>
    )
}

export default Projects

// Style
const Container = styled.div`
    width: 100vw;
    min-width: 380px;

    padding-top: 200px;
    margin-top: -160px;
    
    background: -webkit-linear-gradient(#4684BF, #164C7F);
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    & > h2 {
        color: white;
        margin: 42px 12px 18px 12px;
        text-align: center;

    }

    & > h1 {
        margin: 0;
        font-size: 56px;
        color: white;
        text-align: center;

        @media (max-width: 780px) {
            font-size: 36px;
            margin-bottom: 24px;
        }
    }

    & > a {
        margin-top: 54px;
        font-size: 12px;
        padding: 14px;
        border-radius: 8px;
        background-color: white;
        font-weight: 600;

        &:hover {
            cursor: pointer;
        }
    }
`

const OtherProjects = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;

    max-width: 1000px;
    margin: 0 18px;
`
