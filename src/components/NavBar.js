import React from "react"
import styled from "styled-components"

const NavBar = () => {

    return (
        <div>
            <Navigation>
                <li>About me</li>
                <li>Experience</li>
                <li>Skills</li>
                <li>Projects</li>
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