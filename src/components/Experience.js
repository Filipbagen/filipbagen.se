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
        <Content id="experience">

            <Container>
                <Tag title={'🗺️ Experience'} />
                <h1>Where I have Worked</h1>


                <Test2>

                    <Test>
                        <Line />

                        <Buttons>
                            <p onClick={MTD}
                                style={{
                                    fontWeight: num === 0 ? 'bold' : 'normal',
                                    opacity: num === 0 ? 1 : 0.5
                                }}>MEDIA TECHNOLOGY DAY</p>

                            <p onClick={LiU}
                                style={{
                                    fontWeight: num === 1 ? 'bold' : 'normal',
                                    opacity: num === 1 ? 1 : 0.5
                                }}>LINKÖPING UNIVERSITY</p>

                            <p onClick={UU}
                                style={{
                                    fontWeight: num === 2 ? 'bold' : 'normal',
                                    opacity: num === 2 ? 1 : 0.5
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

                </Test2>

            </Container>

        </Content>
    )
}

export default Experience

//Style
const Content = styled.div`
    width: 100vw;
    height: 1200px;

    background: -webkit-linear-gradient(#90C5F7, #1E69B0);

    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-top: -150px;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-top: -320px;

    color: white;

    & > h1 {
        margin: 0;
        font-size: 56px;
        color: white;
    }
`

const Test = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

const Test2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
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
        color: white;
    }
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

    & > p {
        color: white;
    }
`

const Line = styled.div`
    height: 110px;
    width: 3px;
    background-color: white;
    border-radius: 99px;
    margin: 0 20px;

`