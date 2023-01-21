import React from "react"
import styled from "styled-components"
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {

    return (
        <div>
            <Navigation>
                <li>
                    <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>About Me</Link>
                </li>

                <li>
                    <Link to="experience" spy={true} smooth={true} offset={-50} duration={500}>Experience</Link>
                </li>

                <li>
                    <Link to="skills" spy={true} smooth={true} offset={-50} duration={500}>Skills</Link>
                </li>

                <li>
                    <Link to="projects" spy={true} smooth={true} offset={100} duration={500}>Projects</Link>
                </li>
            </Navigation>
        </div>
    )
}

export default NavBar

// Syle
const Navigation = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: row;

    & > li {
        margin: 0 10px;
    }
`