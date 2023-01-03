import React from "react"
import styled from "styled-components"
import { buttonData } from "../data/DB"

// Components
import Topic from "./Topic"

const Buttons = () => {

    // {results.map(user => <li key={user.id}>{user.login.username} - {user.login.email}</li>)}


    return (
        <div>
            <Container>
                {buttonData.map(data => (<Topic emoji={data.emoji} title={data.title} text={data.text} />))}
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