import React, { useState } from "react";
import styled from "styled-components"

// Components
import Tag from "./Tag"
import ProjectTag from "./ProjectTag"

// Database
import { Experiences } from "../data/DB"

const Experience = () => {

    const [num, setNum] = useState(0)

    function MTD() {
        setNum(0);
    }

    function LiU() {
        setNum(1);
    }

    function UU() {
        setNum(2);
    }

    const array = Experiences[num]

    return (
        <Content>
            <Tag title={'🗺️ Experience'} />
            <h1>WHAT HAVE I DONE?</h1>

            <Container>

                <Buttons>
                    <button onClick={MTD}>MEDIA TECHNOLOGY DAY</button>
                    <button onClick={LiU}>LINKÖPING UNIVERSITY</button>
                    <button onClick={UU}>UNGA UTVECKLARE</button>
                </Buttons>

                <Test>

                    <h3>{array.title}</h3>
                    <h5>{array.date}</h5>

                    <Tags>
                        {array.tags.map(tag => (
                            <ProjectTag tag={tag} />
                        )
                        )}
                    </Tags>

                    <p>{array.text}</p>

                </Test>

            </Container>
        </Content>
    )
}

export default Experience

//Style
const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    background: -webkit-linear-gradient(#75ACF3, #426490);
    /* height: 1000px; */
    /* position: relative; */
    /* bottom: 260px; */
    /* z-index: -1; */



    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100vw; */

    & > h1 {
        margin: 0;
        font-size: 56px;
        color: white;
    }
`

const Test = styled.div`
    /* height: 500px;
    width: 700px; */
    color: white;
`

const Tags = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`

const Content = styled.div`
    /* display: flex;
    flex-direction: column; */
`