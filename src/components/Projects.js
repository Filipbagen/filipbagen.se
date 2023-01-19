import React from "react"
import styled from "styled-components"

// Components
import Tag from "./Tag"
import Footer from "./Footer"
import Project from "./Project"
import OtherProjects from './OtherProjects'

// Database
import { ProjectList } from "../data/DB"

const Projects = () => {

    return (
        <Container>
            <Tag title={'🚀 Projects'} />
            <h1>WHAT HAVE I DONE?</h1>

            {ProjectList.map((project, index) => (
                <Project
                    title={project.title}
                    text={project.text}
                    image={project.image}
                    tags={project.tags}
                    githubLink={project.githubLink}
                    projectLink={project.projectLink}
                    key={project.title}
                />
            ))}

            <h2>OTHER NOTEWORTHY PROJECTS</h2>
            <OtherProjects />

            <Footer />
        </Container>
    )
}

export default Projects

// Style
const Container = styled.div`
    height: 2000px;
    /* position: relative;
    bottom: 400px; */
    background-color: #426490;
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;

    & > h1 {
        margin: 0;
        font-size: 56px;
        color: white;
    }

    & > h2 {
        color: white;
    }
`
