import React from "react";
import styled from "styled-components";

// Components
import Tag from "./Tag";

const Experience = () => {

    return (
        <Container>
            <Tag title={'🗺️ Experience'} />
            <h1>WHAT HAVE I DONE?</h1>

            <Test>

            </Test>


        </Container>
    )
}

export default Experience

//Style
const Container = styled.div`
    background: -webkit-linear-gradient(#75ACF3, #426490);
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;

    & > h1 {
        margin: 0;
        font-size: 56px;
        color: white;
    }
`

const Test = styled.div`
    height: 500px;
    width: 700px;
    background-color: white;
`
