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
                <h1>Where I Have Worked</h1>


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

    @media (max-width: 670px) {
        margin-top: -14px;
        height: 700px;
    }
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

        @media (max-width: 670px) {
            font-size: 26px;
            margin-bottom: 30px;
        }
    }

    @media (max-width: 670px) {
        margin-top: 22px;
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

    @media (max-width: 740px) {
        flex-direction: column;
    }
`

const Tags = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;

    @media (max-width: 740px) {
        flex-wrap: wrap;
    }
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    & > p {
        cursor: pointer;
        padding: 4px;
        margin: 0;
        transition: .2s;
        color: white;
        transition: .2s;

        &:hover {
            background-color: gray;
        }

        @media (max-width: 740px) {
            padding: 0 12px;
            font-size: 14px;
        }
    }

    @media (max-width: 740px) {
        flex-direction: row;
        overflow: scroll;
        white-space: nowrap;
        width: 100vw;
        overflow: scroll;
    }
`

const ProjectContent = styled.div`
    max-width: 700px;
    margin-left: 48px;

    & > h2 {
        margin: 0;
        font-size: 18px;
    }

    & > h4 {
        margin: 0 0 14px 0;
        font-weight: 400;
        font-size: 14px;
    }

    & > p {
        color: white;

        @media (max-width: 740px) {
            margin: 0 10px;
        }
    }

    @media (max-width: 670px) {
        margin: 28px;
    }
`

const Line = styled.div`
    height: 110px;
    width: 3px;
    background-color: white;
    border-radius: 99px;
    margin: 0 20px;

    @media (max-width: 740px) {
        display: none;
    }

`