import React from "react";
import styled from "styled-components";

const Topic = (props) => {
    return (
        <Box>
            <h2>{props.emoji}</h2>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </Box>
    )
}

export default Topic

// Style
const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    /* position: relative; */
    /* bottom: 120px; */
    /* height: 220px; */
    width: 240px;
    background-color: white;
    margin: 18px;
    padding: 0 14px 14px 14px;
    border-radius: 12px;

    -webkit-box-shadow: 0px 0px 40px 5px rgba(0,0,0,0.2); 
    box-shadow: 0px 0px 40px 5px rgba(0,0,0,0.2);

    & > h2 {    // Emoji
        font-size: 60px;
        position: relative;
        /* top: 32px; */
        margin: 0;
    }

    & > h1 {    // Title
        position: relative;
        bottom: 10px;
        margin: 0;
    }

    & > p {     // Body text
        position: relative;
        bottom: 8px;
        text-align: center;
        font-size: 14px;
    }

    &:hover {
        size: 110%;
  }
`