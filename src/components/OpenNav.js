import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const OpenNav = ({ open }) => {

    return (
        <Nav open={open}>
            <Navigation>
                <Link onClick={() => { }} to="about" spy={true} smooth={true} offset={-20} duration={500}>About Me</Link>
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

export default OpenNav

// Style
const Nav = styled.div`
    z-index: -1;
    display: none;
    text-align: center;
    transition: .2s;
    box-sizing: border-box;
    /* padding-right: 32px; */
    background-color: rgba(50, 88, 136, 0.5);
    backdrop-filter: blur(12px);
    position: fixed;
    top: 76px;
    left: 0;
    height: 400px;
    width: 100vw;
    
    @media (max-width: 590px) {
        display: block;

        transform: ${function ({ open }) {
        return open ? 'translateX(0)' : 'translateX(100%)'
    }};
    }
`

const Navigation = styled.div`
    display: flex;
    flex-direction: column;

    & > a {
        color: #f2f2f2;
        margin-bottom: 24px;
        font-size: 18px;

        &:hover {
            text-shadow: 0 2px 28px pink;
            cursor: pointer;
        }
    }
`