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
                                    color: num === 0 ? 'white' : '#a0bcdf'
                                }}>Media Technology Day</p>

                            <p onClick={LiU}
                                style={{
                                    fontWeight: num === 1 ? 'bold' : 'normal',
                                    color: num === 1 ? 'white' : '#a0bcdf'
                                }}>Linköping University</p>

                            <p onClick={UU}
                                style={{
                                    fontWeight: num === 2 ? 'bold' : 'normal',
                                    color: num === 2 ? 'white' : '#a0bcdf'
                                }}>Unga Utvecklare</p>
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

                        <ul>
                            {array.text.map(text => <li>{text}</li>)}
                        </ul>

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

    background: -webkit-linear-gradient(#5A9CDA, #4684BF);

    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-top: -150px;

    @media (max-width: 670px) {
        margin-top: -190px;
        height: 930px;
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
            margin-bottom: 38px;
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

    @media (max-width: 740px) {
        flex-direction: column-reverse;
    }
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
    overflow: scroll;

    @media (max-width: 740px) {
        max-width: 300px;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    &::-webkit-scrollbar {
        display: none;
    }

    & > p {
        cursor: pointer;
        margin: 0;
        transition: .2s;
        color: white;
        transition: .2s;
        font-size: 12px;
        border-radius: 6px;
        width: 200px;

        &:hover {
            background-color: #4d7ac8;
        }

        @media (max-width: 740px) {
            padding: 8px 8px;
            font-size: 14px;
        }
    }

    @media (max-width: 740px) {
        flex-direction: row;
        overflow: scroll;
        white-space: nowrap;
        width: 90vw;
        overflow: scroll;
    }
`

const ProjectContent = styled.div`
    max-width: 700px;
    margin: 0 32px;
    height: 250px;

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
        max-width: 550px;
    }

    @media (max-width: 670px) {
        margin-top: 28px;
    }
`

const Line = styled.div`
    height: 110px;
    width: 3px;
    background-color: white;
    border-radius: 99px;
    margin: 0 20px;

    @media (max-width: 740px) {
        width: 100%;
        height: 2px;
        margin-top: 12px;
        opacity: .4;
    }
    
    

`