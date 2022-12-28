import React from "react";
import styled from "styled-components";

const Title = (props) => {
    return (
        <div>
            <Heading>{props.title}</Heading>
        </div>
    )
}

export default Title

// Style
const Heading = styled.h1`
    text-align: center;
    margin: 0 0 0 100px;
    opacity: .03;
    font-size: 200px;
    white-space: nowrap;
`