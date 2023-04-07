import React from "react"
import styled from "styled-components"

// imag
import gh from '../img/github.svg'
import open from '../img/open.svg'


const Project = (props) => {

    return (
        <Container style={{
            flexDirection: props.flip ? 'row-reverse' : 'row',
        }} >

            <a href={props.projectLink} target="_blank" rel="noopener noreferrer">
                <Image src={props.image} />
            </a>

            <Info
                style={{
                    marginLeft: props.flip ? '0' : '-100px',
                    marginRight: props.flip ? '-100px' : '0',
                    zIndex: props.flip ? '1' : '0',
                    alignItems: props.flip ? 'flex-start' : 'flex-end',
                }}>
                <h2>{props.title}</h2>

                <Text>{props.emoji}{props.text}</Text>

                {/* only render if there are any links */}
                <Links>
                    {props.githubLink ? (<a href={props.githubLink} target="_blank" rel="noopener noreferrer"><img src={gh} alt="github" /></a>) : (null)}
                    {props.projectLink ? (<a href={props.projectLink} target="_blank" rel="noopener noreferrer"><img src={open} alt="project" /></a>) : (null)}
                </Links>
            </Info>

        </Container >
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

    display: flex;
    flex-direction: column;
    justify-content: center;

    & > h2 {
        margin: 0;

        @media (max-width: 780px) {
            text-align: left;
        }
    }

    @media (max-width: 780px) {
        margin-left: 0 !important;
        margin-right: 0 !important;
        align-items: normal !important;
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
    margin: 16px 0;

    & > a {
        margin: 0 0 0 14px;
        transition: .2s;

        &:hover {
            transform: scale(1.07);
        }
    }

    @media (max-width: 780px) {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
`

const Image = styled.img`
    width: 100%;
    max-width: 540px;
    height: auto;
    border-radius: 10px;

    @media (max-width: 780px) {
        display: none;
    }
`