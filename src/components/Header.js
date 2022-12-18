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
                    <img style={{ borderRadius: "50%" }} src={profilePic} alt="" />
                    <img src={border} alt="Border" />
                </Pic>

                <h1>HI, I'M FILIP! <span role="img" aria-label="wave">👋</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent odio ipsum, congue nec facilisis at, lobortis sit amet lectus. Pellentesque quis sapien neque. Cras convallis eleifend leo id viverra.
                </p>
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

const Intro = styled.div`
    position: relative;
    color: #0f0f0f;

    & > h1 {
        font-size: 54px;
        margin: 0;
    }
`

const Pic = styled.div`
    

    & > img {
        height: 180px;
        position: relative;
    }
`

// background-color: #F2F9FE;

export default Header