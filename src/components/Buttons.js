import React from "react";
import styled from "styled-components";

// Components
import Topic from "./Topic"

const Buttons = () => {

    return (
        <div>
            <Container>
                <Topic
                    emoji="👨🏽‍💻"
                    title="ABOUT ME"
                    text="How to study effectively for exams, with the best evidence-based techniques"
                />
                <Topic
                    emoji="🎯"
                    title="EXPERIENCE"
                    text="How to study effectively for exams, with the best evidence-based techniques"
                />
                <Topic
                    emoji="🚀"
                    title="PROJECTS"
                    text="How to study effectively for exams, with the best evidence-based techniques"
                />
            </Container>
        </div>
    )
}

export default Buttons

// Style
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`