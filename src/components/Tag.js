import React from "react";
import styled from "styled-components";

const Tag = (props) => {
    return (
        <Container>
            <h3>{props.title}</h3>
        </Container>
    )
}

export default Tag

// Styles
const Container = styled.div`
    margin: 12px 0;
    padding: 2px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E3F1FF;
    border-radius: 50px;

    & > h3 {
        margin: 0;
        color: #3D7CCE;
    }

`