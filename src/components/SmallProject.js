import React from "react"
import styled from "styled-components"

// img
import gh from '../img/github.svg'
import open from '../img/open.svg'

// Components
import ProjectTag from "./ProjectTag"

const SmallProject = (props) => {

    return (
        <Container>
            <h1>{props.emoji}</h1>
            <h2>{props.title}</h2>
            <p>{props.text}</p>

            <Info>
                <Tags>
                    <ProjectTag tag={props.tag} />
                </Tags>

                <Links>
                    {
                        props.githubLink !== '' ? (<a href={props.githubLink} target="_blank" rel="noopener noreferrer"><img src={gh} alt="github" /></a>) : (null)
                    }
                    {
                        props.projectLink !== '' ? (<a href={props.projectLink} target="_blank" rel="noopener noreferrer"><img src={open} alt="project" /></a>) : (null)
                    }
                </Links>

            </Info>
        </Container>
    )
}

export default SmallProject

// Style
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    height: 230px;
    width: 230px;
    margin: 32px;
    padding: 18px;
    border-radius: 12px;
    background-color: white;
    -webkit-box-shadow: 0px 0px 40px 5px rgba(0,0,0,0.2); 
    box-shadow: 0px 0px 40px 5px rgba(0,0,0,0.2);

    & > h1 {
        margin: -24px 0 0 0;
        font-size: 52px;
    }

    & > h2 {
        margin-top: -12px;
        font-size: 24px;
    }

    & > p {
        margin-top: -14px;
        font-size: 14px;
        line-height: 1.5;
    }
`

const Tags = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    margin-left: -6px;
`

const Links = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0 8px 0 0;

    & > a {
        margin: 0 0 0 14px;
        transition: .2s;

        & > img {
            filter: invert(1);
        }

        &:hover {
            transform: scale(1.07);
        }
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`