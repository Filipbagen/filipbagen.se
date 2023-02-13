import React from "react"
import styled from "styled-components"

const ProjectTag = (props) => {

    return (
        <Tags>
            {/* Bad key */}
            {props.tag.map(tag => (<Tag key={1}>{tag}</Tag>))}
        </Tags>
    )
}

export default ProjectTag

// Styling
const Tags = styled.div`
    display: flex;
    flex-direction: row;
    gap: 6px;

    

    flex-direction: row;
    overflow: scroll;
    white-space: nowrap;
    /* min-width: 280px; */
    /* width: 50vw; */
    /* max-width: 1000px; */

    &::-webkit-scrollbar {
        display: none;
    }

    & > p {
        /* color: #4d7ac8; */
        mix-blend-mode: difference;
        margin: 0;
        border-radius: 50px;
    }
`

const Tag = styled.p`
    font-size: 14px;
    /* padding: 6px 18px; */
    margin: 0;
    /* background-color: #4d7ac8; */
    /* border-radius: 32px; */
    color: white;
    white-space: nowrap;
`