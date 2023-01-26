import React from "react"
import styled from "styled-components"

// Components
import Tag from "./Tag"

const AboutMe = () => {

    return (
        <Container id="about">
            <TextBox>
                <Tag title={'👀 About Me'} />
                <h1 className="gradientText">Who Am I?</h1>

                <p>
                    Hey there! My name is Filip and I'm on a mission to master the art of <b>Computer Science
                        as a Master's student.</b> I've always been enamored with the endless possibilities that
                    Artificial Intelligence offers, and I've found that my <b> passion for web design and
                        project management </b> perfectly complements my love for technology. I'm a firm believer
                    that the ability to be curius and to learn new skills is the key to success, and I've
                    honed my skills in Python and Java, as well as machine learning and natural language processing.
                </p>
                <p>
                    When I'm not studying, you can find me <b> building on my own projects </b> using my skills in design and
                    code development. I find it incredibly fascinating how technology and design can work together to create
                    something truly beautiful and functional. <b> My curiosity and experience as given me valuable experience </b>
                    in developing and deploying production-level code, and I am always
                    eager to learn more and take on new challenges. So, whether it's coding, design,
                    project management or exploring new technologies, I'm all in!
                </p>

            </TextBox>
        </Container>
    )
}

export default AboutMe

// Style
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100vw;
    margin-top: -200px;

    @media (max-width: 740px) {
        margin-top: -120px;
    }
`

const TextBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    max-width: 800px;
    background-color: white;
    -webkit-box-shadow: 0px 0px 40px 5px rgba(0,0,0,0.2); 
    box-shadow: 0px 0px 40px 5px rgba(0,0,0,0.2);
    padding: 34px;
    border-radius: 18px;

    & > h1 {
        margin: 0;
        font-size: 56px;

        @media (max-width: 670px) {
            font-size: 26px;
        }
    }
`