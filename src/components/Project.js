import React from "react"
import styled from "styled-components"

import gh from '../img/github.svg'
import open from '../img/open.svg'

// Components
// import ProjectTag from "./ProjectTag"

const Project = (props) => {

    return (
        <Container>
            <a href={props.projectLink} target="_blank" rel="noopener noreferrer">
                <Image src={props.image} />
            </a>

            <Info>
                <h2>{props.title}</h2>

                <Text>
                    {props.text}
                </Text>

                {/* <ProjectTag tag={props.tag} /> */}

                {/* only render if there are any links */}
                <Links>
                    {
                        props.githubLink ? (<a href={props.githubLink} target="_blank" rel="noopener noreferrer"><img src={gh} alt="github" /></a>) : (null)
                    }
                    {
                        props.projectLink ? (<a href={props.projectLink} target="_blank" rel="noopener noreferrer"><img src={open} alt="project" /></a>) : (null)
                    }
                </Links>

            </Info>
        </Container>
    )
}

export default Project

// Style
const Container = styled.div`
    color: white;
    display: flex;
    align-items: center;
    margin: 32px;

    @media (max-width: 780px) {
        margin: 0 22px;
    }
`

const Info = styled.div`
    margin-left: -120px;
    max-width: 400px;

    /* background-color: red; */

    & > h2 {
        margin: 0;
        text-align: right;

        @media (max-width: 780px) {
            text-align: left;
        }
    }

    @media (max-width: 780px) {
        margin-left: 0;
    }
`

const Text = styled.p`
    background-color: white;
    padding: 22px;
    border-radius: 10px;

    -webkit-box-shadow: 0px 0px 40px 5px rgba(0,0,0,0.2); 
    box-shadow: 0px 0px 40px 5px rgba(0,0,0,0.2);    
`

const Links = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 16px 0;

    & > a {
        margin: 0 0 0 14px;
        transition: .2s;

        &:hover {
            transform: scale(1.07);
        }
    }
`

const Image = styled.img`
    width: 100%;
    max-width: 560px;
    height: auto;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 780px) {
        display: none;
    }
`