import React from "react"
import styled from "styled-components"

// Components

const Skill = (props) => {
    return (
        <Container>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </Container>
    )
}

export default Skill

// Style
const Container = styled.div`
    width: 48%;
`