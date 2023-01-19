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
            <h2>{props.title.toUpperCase()}</h2>
            <p>{props.text}</p>

            <Info>
                <Tags>
                    {props.tags.map(tag => <ProjectTag tag={tag} key={props.openLink} />)}
                </Tags>

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

export default SmallProject

// Style
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 230px;
    width: 230px;
    margin: 32px;
    padding: 12px;
    border-radius: 12px;
    background-color: white;
    -webkit-box-shadow: 0px 0px 40px 5px rgba(0,0,0,0.2); 
    box-shadow: 0px 0px 40px 5px rgba(0,0,0,0.2);

    & > h1 {
        margin: 0;
        font-size: 52px;
    }

    & > h2 {
        margin: 0;
        font-size: 24px;
    }

    & > p {
        margin: 0;
        font-size: 14px;
    }
`

const Tags = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
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
`