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
    width: 100vw;
    min-width: 300px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -140px;

    @media (max-width: 670px) {
        /* margin-top: -14px; */
        height: 100%;
    }
`

const TextBox = styled.div`
    background-color: white;

    display: flex;
    align-items: center;
    flex-direction: column;

    box-sizing: border-box;
    padding: 34px 58px;
    margin: 0 12px;
    max-width: 800px;
    border-radius: 18px;
    
    -webkit-box-shadow: 0px 0px 40px 5px rgba(0,0,0,0.2); 
    box-shadow: 0px 0px 40px 5px rgba(0,0,0,0.2);

    @media (max-width: 670px) {
        padding: 34px 48px;
    }

    & > h1 {
        margin: 0;
        font-size: 56px;
        text-align: center;

        @media (max-width: 670px) {
            font-size: 36px;
            padding: 0;
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