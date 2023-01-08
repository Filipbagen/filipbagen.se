import React from "react"
import styled from "styled-components"
import profilePic from "../img/profile.jpg"
// import border from "../img/border.svg"
import hero from '../img/hero.svg'

// Components


const HeroSection = () => {

    return (
        <Head>
            <Intro>
                <Pic>
                    <img style={{ borderRadius: "50%" }} src={profilePic} alt="portrait" />
                    {/* <img src={border} alt="Border" /> */}
                </Pic>

                <h1>HI, I'M FILIP!</h1>
            </Intro>
        </Head>
    )
}

export default HeroSection

// Style
const Head = styled.header`
    height: 800px;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background-image: url(${hero});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Intro = styled.div`
    width: 800px;
    position: relative;
    bottom: 60px;

    display: flex;
    align-items: center;
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