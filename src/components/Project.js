import React from "react"
import styled from "styled-components"

// import img from '../img/leegle.png'

// Components
import ProjectTag from "./ProjectTag"

const Project = (props) => {

    return (
        <Container>
            <Image>
                {/* <h1>Test</h1> */}
            </Image>

            <Info>
                <h2>{props.title}</h2>

                <Text>
                    {props.text}
                </Text>

                <Tags>
                    {props.tags.map(tag => <ProjectTag tag={tag} />)}
                </Tags>
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
    right: 38px;
    margin: 12px;
    width: 600px;

    display: flex;
    flex-direction: column;
    justify-content: end;

    background-color: green;

    & > h2 {
        margin: 0;
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

const Tags = styled.div`
    display: flex;
    /* justify-content: center; */
    flex-direction: row;
    /* align-items: center; */
`

const Image = styled.div`
    background-color: red;

    background-image: url("../img/leegle.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    border-radius: 10px;
    height: 300px;
    width: 600px;
`
// background: ${props => `url(${props.background}) no-repeat top center`};