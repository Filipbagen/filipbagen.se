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
                <h1>WHAT CAN I DO?</h1>

                <p>
                    Vestibulum vel metus. Donec sagittis velit vel augue.
                    Fusce in nisl vitae massa venenatis rhoncus. Praesent
                    orci velit, lobortis eget, suscipit semper, congue eu,
                    est. Quisque malesuada volutpat enim. Vestibulum leo
                    sem, molestie a, mattis bibendum, feugiat facilisis, nisl.
                    Nam scelerisque odio. Suspendisse fermentum faucibus felis.
                    Praesent pharetra. In consequat felis in tellus. In mi enim,
                    rhoncus ullamcorper, sagittis at, placerat eget, mauris.
                    Suspendisse auctor erat at ipsum. Aliquam vitae tortor i
                    d massa tincidunt eleifend.
                </p>

                <SkillSection>
                    {skills.map(skill => (<Skill title={skill.title} text={skill.text} key={skill.title} />))}
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
    background: -webkit-linear-gradient(left, #75ACF3, #548FDD);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`

const SkillSection = styled.div`
    margin: 34px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`