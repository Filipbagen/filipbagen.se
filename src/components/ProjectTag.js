import React from "react"
import styled from "styled-components"

const ProjectTag = (props) => {

    return (
        <div>
            <Tag>{props.tag}</Tag>
        </div>
    )
}

export default ProjectTag

// Styling
const Tag = styled.p`
    padding: 8px 16px;
    margin: 0 8px;
    background-color: #4d7ac8;
    border-radius: 32px;
`