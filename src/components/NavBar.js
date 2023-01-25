import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll";

const NavBar = () => {

    return (
        <Nav>
            {/* <Hamburger for="checkbox_toggle" class="hamburger">&#9776;</Hamburger> */}
            <Navigation>

                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                </a>


                <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>About Me</Link>



                <Link to="experience" spy={true} smooth={true} offset={-50} duration={500}>Experience</Link>



                <Link to="skills" spy={true} smooth={true} offset={-50} duration={500}>Skills</Link>



                <Link to="projects" spy={true} smooth={true} offset={100} duration={500}>Projects</Link>

            </Navigation>

            <Contact>
                <a href="mailto:filip.bagen@gmail.com">Contact me</a>
            </Contact>
        </Nav>
    )
}

export default NavBar

// Syle
const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`

const Navigation = styled.div`
    /* list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: row;

    & > li {
        margin: 0 10px;
    }

    @media (min-width: 670px) {
        display: none;
    } */

    overflow: hidden;
    background-color: #333;

    & > a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;

        

        @media (max-width: 670px) {
            &:not(:first-child) {
                display: none;
            }

            & > label {
                float: right;
                display: block;
            }
        }

        &:hover {
            background-color: #ddd;
            color: black;
        }

        &:active {
            background-color: #04AA6D;
            color: white;
        }

        & > label {
            display: none;
        }   
    }
`

//   @media screen and (max-width: 600px) {
//     .topnav.responsive {position: relative;}
//     .topnav.responsive .icon {
//       position: absolute;
//       right: 0;
//       top: 0;
//     }
//     .topnav.responsive a {
//       float: none;
//       display: block;
//       text-align: left;
//     }
//   }

const Contact = styled.div`

`

const Hamburger = styled.label`

    @media (min-width: 670px) {
        display: none;
    }

    @media (max-width: 670px) {
        display: block;
    }
`