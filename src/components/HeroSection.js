import React from "react"
import styled from "styled-components"
import profilePic from "../img/profile.jpg"
// import border from "../img/border.svg"
import hero from '../img/hero.png'

// Components
// import Buttons from "./Buttons"

const HeroSection = () => {

    return (
        <Container>
            <Head>
                <Intro>
                    <Pic>
                        <img style={{ borderRadius: "50%" }} src={profilePic} alt="portrait" />
                        {/* <img src={border} alt="Border" /> */}
                    </Pic>

                    <TextContainer>
                        <h1>HI, I'M FILIP! <span role="img" aria-label="wave">👋</span></h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent odio ipsum, congue nec facilisis at, lobortis sit amet lectus. Pellentesque quis sapien neque. Cras convallis eleifend leo id viverra.
                        </p>
                    </TextContainer>
                </Intro>

                <Hero src={hero} alt="background" />
            </Head>

            {/* <Buttons /> */}
        </Container>
    )
}

export default HeroSection

// Style
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 1vh;

    display: flex;
    align-items: center;
    flex-direction: column;
`

const Head = styled.header`
    border-radius: 20px;
    height: 80vh;
    width: 98vw;
    overflow: hidden;
`

const Hero = styled.img`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: contain;
`

const TextContainer = styled.div`
    width: 520px;

    & > h1 {
        font-size: 62px;
        margin: 0;
    }
`

const Intro = styled.div`
    width: 800px;

    display: flex;
    justify-content: space-evenly;
    color: #0f0f0f;

    & > h1 {
        font-size: 54px;
        margin: 0;
    }
`

const Pic = styled.div`

    & > img {
        height: 180px;
        /* position: absolute; */
    }
`