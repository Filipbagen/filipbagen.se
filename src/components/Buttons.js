import React from "react"
import styled from "styled-components"
import { buttonData } from "../data/DB"

// Components
import Topic from "./Topic"

const Buttons = () => {

    return (
        <div>
            <Container>
                {buttonData.map(data => (<Topic emoji={data.emoji} title={data.title} text={data.text} key={data.emoji} />))}
            </Container>
        </div>
    )
}

export { buttonData }
export default Buttons

// Style
const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`