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
        // <Content>
        //     <Tag title={'🗺️ Experience'} />
        //     <h1>Where I have Worked?</h1>

        <Container>

            <Test>
                <Line />

                <Buttons>
                    <p onClick={MTD}
                        style={{
                            fontWeight: num == 0 ? 'bold' : 'normal',
                            opacity: num == 0 ? 1 : 0.5
                        }}>MEDIA TECHNOLOGY DAY</p>

                    <p onClick={LiU}
                        style={{
                            fontWeight: num == 1 ? 'bold' : 'normal',
                            opacity: num == 1 ? 1 : 0.5
                        }}>LINKÖPING UNIVERSITY</p>

                    <p onClick={UU}
                        style={{
                            fontWeight: num == 2 ? 'bold' : 'normal',
                            opacity: num == 2 ? 1 : 0.5
                        }}>UNGA UTVECKLARE</p>
                </Buttons>
            </Test>

            <ProjectContent>
                <h2>{array.title}</h2>
                <h4>{array.date}</h4>

                <Tags>
                    {array.tags.map(tag => (
                        <ProjectTag tag={tag} />
                    )
                    )}
                </Tags>

                <p>{array.text}</p>
            </ProjectContent>

        </Container>
        // </Content>
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


    height: 700px;
    color: white;

    & > h1 {
        margin: 0;
        font-size: 56px;
        color: white;
    }
`

const Tags = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    & > p {
        cursor: pointer;
        margin: 4px;
        transition: .2s;
    }
`

const Content = styled.div`
    /* display: flex;
    flex-direction: column; */
`

const ProjectContent = styled.div`
    max-width: 700px;
    margin-left: 48px;

    & > h2 {
        margin: 0;
        font-size: 26px;
    }

    & > h4 {
        margin: 8px 0;
        font-weight: 500;
    }
`

const Line = styled.div`
    height: 110px;
    width: 3px;
    background-color: white;
    border-radius: 99px;
    margin: 0 20px;

`

const Test = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`