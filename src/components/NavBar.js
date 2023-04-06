import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

// Components
// import Hamburger from "./Hamburger"

const NavBar = () => {

    return (
        <Nav id="top">
            {/* Open Resume */}
            <Contact>
                <a href="mailto:filip.bagen@gmail.com"><span role="img" aria-label="email">📨</span> Contact me</a>
            </Contact>

            {/* <Hamburger /> */}

            <Navigation>
                <Link to="about" spy={true} smooth={true} offset={-20} duration={500}>About Me</Link>
                <Link to="experience" spy={true} smooth={true} offset={160} duration={500}>Experience</Link>
                <Link to="skills" spy={true} smooth={true} offset={-20} duration={500}>Skills</Link>
                <Link to="projects" spy={true} smooth={true} offset={180} duration={500}>Projects</Link>

                {/* With emoji */}
                {/* <Link to="about" spy={true} smooth={true} offset={-20} duration={500}><span role="img" aria-label="eyes">👀</span> About Me</Link>
                <Link to="experience" spy={true} smooth={true} offset={160} duration={500}><span role="img" aria-label="map">🗺️</span> Experience</Link>
                <Link to="skills" spy={true} smooth={true} offset={-20} duration={500}><span role="img" aria-label="dart">🎯</span> Skills</Link>
                <Link to="projects" spy={true} smooth={true} offset={180} duration={500}><span role="img" aria-label="rocket">🚀</span> Projects</Link> */}
            </Navigation>
        </Nav>
    )
}

export default NavBar

// Syle
const Nav = styled.div`
    z-index: 2;
    width: 840px;
    min-width: 300px;
    height: 76px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    box-sizing: border-box;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`

const Navigation = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 360px;

    & > a {
        color: #f2f2f2;
        white-space: nowrap;
        text-decoration: none;
        transition: .2s;
        padding: 12px;

        &:hover {
            cursor: pointer;
            text-shadow: 0 2px 28px pink;
        } 
    }

    @media (max-width: 590px) {
        display: none;
    }
`

const Contact = styled.div`

    & > a {
        color: #f2f2f2;
        white-space: nowrap;
        text-decoration: none;
        transition: .2s;
        padding: 12px;

        &:hover {
            cursor: pointer;
            text-shadow: 0 2px 28px pink;
        } 
    }
`