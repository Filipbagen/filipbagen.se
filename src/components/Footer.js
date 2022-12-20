import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <Container>
            <Box />
        </Container>
    )
}

export default Footer

// Style
const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 36px;
`

const Box = styled.div`
    height: 290px;
    width: 95vw;
    background-color: #B4DAF9;
    border-radius: 14px;
`