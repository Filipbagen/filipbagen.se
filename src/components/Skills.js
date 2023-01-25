import React from "react"
import styled from "styled-components"

// Components
import Tag from "./Tag"
import Skill from "./Skill"

// Database
import { skills } from '../data/DB'

const Skills = () => {

    return (
        <Container id="skills">

            <TextBox>
                <Tag title={'🎯 Skills'} />
                <h1 className="gradientText">What I Can Do</h1>

                <p>
                    I have a few set of skills which I’m especially proud about.
                    Some skills has the origin from the school, and some derive from my personal projects.
                </p>

                <SkillSection>
                    {skills.map(skill => (<Skill emoji={skill.emoji} title={skill.title} text={skill.text} key={skill.title} />))}
                </SkillSection>

                <p>
                    Vestibulum vel metus. Donec sagittis velit vel augue.
                    Fusce in nisl vitae massa venenatis rhoncus. Praesent
                    orci velit, lobortis eget, suscipit semper, congue eu,
                    est. Quisque malesuada volutpat enim.
                </p>

            </TextBox>

        </Container>

    )
}

export default Skills

// Style
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-top: -460px;

    @media (max-width: 670px) {
        margin-top: -14px;
        height: 100%;
    }
`

const TextBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    max-width: 800px;
    background-color: white;
    -webkit-box-shadow: 0px 0px 40px 5px rgba(0,0,0,0.2); 
    box-shadow: 0px 0px 40px 5px rgba(0,0,0,0.2);
    padding: 34px 58px;
    border-radius: 18px;

    & > h1 {
        margin: 0;
        font-size: 56px;

        @media (max-width: 670px) {
            font-size: 36px;
        }
    }
`

const SkillSection = styled.div`
    margin: 34px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 1030px) {
        /* width: 800px; */
    }
`