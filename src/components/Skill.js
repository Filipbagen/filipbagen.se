import React from "react"
import styled from "styled-components"

// Components

const Skill = (props) => {
    return (
        <Container>
            {/* <h1>{props.emoji}</h1> */}
            <h3>{props.emoji} {props.title}</h3>
            <p>{props.text}</p>
        </Container>
    )
}

export default Skill

// Style
const Container = styled.div`
    width: 48%;

    & > h1 {
        margin: 0;
    }

    & > h3 {
        margin: 0;
        color: #404245;
        font-size: 20px;
    }

    @media (max-width: 610px) {
        width: 100%;
    }
`