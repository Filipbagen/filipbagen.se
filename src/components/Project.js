import React from "react"
import styled from "styled-components"

import gh from '../img/github.svg'
import open from '../img/open.svg'

// Components
import ProjectTag from "./ProjectTag"

const Project = (props) => {

    return (
        <Container>
            <Image src={props.image} />

            <Info>
                <h2>{props.title}</h2>

                <Text>
                    {props.text}
                </Text>

                <Tags>
                    {props.tags.map(tag => <ProjectTag tag={tag} key={props.githubLink} />)}
                </Tags>

                {/* only render if there are any links */}
                <Links>
                    {
                        props.githubLink !== '' ? (<a href={props.githubLink}><img src={gh} alt="github" /></a>) : (null)
                    }
                    {
                        props.projectLink !== '' ? (<a href={props.projectLink}><img src={open} alt="project" /></a>) : (null)
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
    justify-content: center;
    align-items: center;

    margin: 32px;
`

const Info = styled.div`
    position: relative;
    right: 58px;

    & > h2 {
        margin: 0;
        text-align: right;
    }
`

const Text = styled.p`
    color: black;
    background-color: white;
    padding: 22px;
    border-radius: 10px;
    width: 400px;

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

const Tags = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const Image = styled.img`
    border-radius: 10px;
    height: 300px;
    width: 600px;
`
// background: ${props => `url(${props.background}) no-repeat top center`};