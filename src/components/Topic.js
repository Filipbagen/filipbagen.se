import React from "react";
import styled from "styled-components";

const Topic = (props) => {
    return (
        <Box>
            <h1>{props.emoji}</h1>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </Box>
    )
}

const Box = styled.div`
    height: 200px;
    width: 250px;
    background-color: white;
    margin: 50px;
    -webkit-box-shadow: 0px 0px 40px 5px rgba(0,0,0,0.2); 
    box-shadow: 0px 0px 40px 5px rgba(0,0,0,0.2);
    border-radius: 10px;

`

export default Topic