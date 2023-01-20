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
    font-size: 14px;
    padding: 6px 14px;
    margin: 0 0 0 0px;
    background-color: #4d7ac8;
    border-radius: 32px;
`