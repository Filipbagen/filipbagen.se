import React from "react"
import styled from "styled-components"

// Components
import SmallProject from "./SmallProject"

// DB
import { OtherProjectsList } from '../data/DB'

const OtherProjects = () => {

    return (
        <Container>
            {OtherProjectsList.map(project => <SmallProject
                emoji={project.emoji}
                title={project.title}
                text={project.text}
                tags={project.tags}
                githubLink={project.githubLink}
                projectLink={project.projectLink}
            />)}
        </Container>
    )
}

export default OtherProjects

// Style
const Container = styled.div`
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`