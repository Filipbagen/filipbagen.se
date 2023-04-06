import React, { useState } from "react";
import styled from "styled-components"

// Components
import Tag from "./Tag"
// import ProjectTag from "./ProjectTag"

// Database
import { Experiences } from "../data/DB"

const Experience = () => {

    const [num, setNum] = useState(0)

    const handleButtonClick = (index) => {
        setNum(index)
    }

    const project = Experiences[num]


    return (
        <Container id="experience">
            <Content>
                <Tag title={'🗺️ Experience'} />
                <h1>Where I Have Worked</h1>

                <Wrapper>
                    <Sidebar>
                        <Line />

                        <Buttons>
                            {Experiences.map((experience, index) => (
                                <p
                                    key={experience.keys[index]}
                                    onClick={() => handleButtonClick(index)}
                                    style={{
                                        fontWeight: num === index ? 'bold' : 'normal',
                                        color: num === index ? 'white' : '#a0bcdf'
                                    }}>
                                    {experience.employer}
                                </p>))}
                        </Buttons>
                    </Sidebar>

                    <ProjectContent>
                        <h2>{project.title}</h2>
                        <h4>{project.date}</h4>

                        {/* <ProjectTag tag={project.tags} /> */}

                        <ul>
                            {project.text.map(text => <li>{text}</li>)}
                        </ul>
                    </ProjectContent>
                </Wrapper>
            </Content>
        </Container>
    )
}

export default Experience

//Style
const Container = styled.div`
    background: -webkit-linear-gradient(#5A9CDA, #4684BF);
    color: white;

    width: 100vw;
    min-width: 380px;
    min-height: 680px;
    padding: 100px 0 300px 0;
    margin-top: -150px;

    display: flex;
    flex-direction: column;

    @media (max-width: 670px) {
        padding: 200px 0;
        min-height: 880px;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;

    & > h1 {
        margin: 0;
        font-size: 56px;
        text-align: center;

        @media (max-width: 670px) {
            font-size: 36px;
            /* margin-top: -100px; */
        }
    }

    @media (max-width: 670px) {
        margin-top: 0px;
    }
`

const Wrapper = styled.div`
    height: 240px;

    display: flex;
    align-items: center;
    /* justify-content: center; */
    box-sizing: border-box;

    padding: 0 12px;
    margin: 0 40px;

    @media (max-width: 670px) {
        flex-direction: column;
        padding: 0;
        height: 440px;
    }
`

const Sidebar = styled.div`
    display: flex;

    align-items: center;
    margin-right: 38px;

    @media (max-width: 670px) {
        flex-direction: column-reverse;
        margin-top: 22px;
    }
`

const Line = styled.div`
    height: 110px;
    width: 3px;
    background-color: white;
    border-radius: 99px;

    @media (max-width: 670px) {
        width: 95%;
        height: 2px;
        margin-top: 12px;
        opacity: .4;
    }
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;

    &::-webkit-scrollbar {
        display: none;
    }

    & > p {
        cursor: pointer;
        margin: 0;
        padding: 2px 8px;
        transition: .2s;
        border-radius: 6px;
        white-space: nowrap;

        &:hover {
            background-color: #4d7ac8;
        }

        @media (max-width: 670px) {
            padding: 8px 8px;
            font-size: 14px;
        }
    }

    @media (max-width: 670px) {
        flex-direction: row;
        overflow: scroll;
        white-space: nowrap;
        width: 80vw;
    }
`

const ProjectContent = styled.div`
    max-width: 500px;
    height: 100%;
    width: auto;

    & > h2 {
        margin: 0;
        font-size: 18px;
    }

    & > h4 {
        margin: 0 0 14px 0;
        font-weight: 400;
        font-size: 14px;
    }

    & > ul {
        padding-left: 16px;

        & > li {
            margin: 10px 0;
        }
    }

    @media (max-width: 670px) {
        margin: 28px 32px 0 32px;
    }
`