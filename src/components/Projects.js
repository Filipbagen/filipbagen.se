import React from "react"
import styled from "styled-components"

// Components
import Tag from "./Tag"
import Footer from "./Footer"
import Project from "./Project"

// Database
import { ProjectList } from "../data/DB"

const Projects = () => {

    return (
        <Container>
            <Tag title={'🚀 Projects'} />
            <h1>WHAT HAVE I DONE?</h1>

            {ProjectList.map(project => (
                <Project
                    title={project.title}
                    text={project.text}
                    image={project.image}
                    tags={project.tags}
                />
            ))}

            <Footer />
        </Container>
    )
}

export default Projects

// Style
const Container = styled.div`
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
`
