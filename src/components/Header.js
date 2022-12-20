import React from "react";
import styled from "styled-components";
import profilePic from "../img/profile.jpg"
import border from "../img/border.svg"

const Header = () => {
    return (
        <Head>
            <HeaderBG />
            <Intro>
                <Pic>
                    <img style={{ borderRadius: "50%" }} src={profilePic} alt="portrait" />
                    <img src={border} alt="Border" />
                </Pic>

                <TextContainer>
                    <h1>HI, I'M FILIP! <span role="img" aria-label="wave">👋</span></h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent odio ipsum, congue nec facilisis at, lobortis sit amet lectus. Pellentesque quis sapien neque. Cras convallis eleifend leo id viverra.
                    </p>
                </TextContainer>
            </Intro>
        </Head>
    )
}

const Head = styled.header`
    position: relative;
    height: 80vh;
`

const HeaderBG = styled.div`
    position: absolute;
    width: 100vw;
    height: 100%;
    background-color: #F2F9FE;
    transform: skewY(-6deg);
    transform-origin: top left;
`

const TextContainer = styled.div`
    position: relative;
    width: 520px;
    left: 220px;

    & > h1 {
        font-size: 62px;
        margin: 0;
    }
`

const Intro = styled.div`
    position: absolute;
    top: 220px;
    left: 20vw;
    margin: 0;
    color: #0f0f0f;

    & > h1 {
        font-size: 54px;
        margin: 0;
    }
`

const Pic = styled.div`
    

    & > img {
        height: 180px;
        position: absolute;
    }
`

// background-color: #F2F9FE;

export default Header