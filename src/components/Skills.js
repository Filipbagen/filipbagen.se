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
                    Here are some skills that I have learnt and developed through out the years:
                </p>

                <SkillSection>
                    {skills.map(skill => (<Skill emoji={skill.emoji} title={skill.title} text={skill.text} key={skill.key} />))}
                </SkillSection>
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