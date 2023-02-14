import React, { useState } from "react"
import styled from "styled-components"

// Components
import OpenNav from "./OpenNav"

const Hamburger = () => {

    const [open, setOpen] = useState(true)

    return (
        <>
            <Burger onClick={() => setOpen(!open)}>
                <Line />
                <Line />
                <Line />
            </Burger>

            <OpenNav open={open} />
        </>
    )
}

export default Hamburger

// Style
const Burger = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 16px;
    transition: .2s;

    &:hover {
        cursor: pointer;
        box-shadow: 0 2px 28px pink;
    }

    @media (min-width: 590px) {
        display: none;
    }
`

const Line = styled.div`
    width: 24px;
    height: 2px;
    border-radius: 50px;
    background-color: white;

    &:nth-child(3) {
        width: 18px;
    }
`