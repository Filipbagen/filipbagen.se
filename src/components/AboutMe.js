import React from "react"
import styled from "styled-components"

// Components
import Title from "./Title"

const AboutMe = () => {

    return (
        <div>
            <Title
                title='👨🏽‍💻 ABOUT ME'
            />

            <Container>

                <Side>
                    <SmallTitle>
                        MY <br />BIOGRAPHY
                    </SmallTitle>

                    <Button>
                        <p>DOWNLOAD CV</p>
                    </Button>
                </Side>


                <TextBox>
                    Vestibulum vel metus. Donec sagittis velit vel augue.
                    Fusce in nisl vitae massa venenatis rhoncus. Praesent
                    orci velit, lobortis eget, suscipit semper, congue eu,
                    est. Quisque malesuada volutpat enim. Vestibulum leo
                    sem, molestie a, mattis bibendum, feugiat facilisis, nisl.
                    Nam scelerisque odio. Suspendisse fermentum faucibus felis.
                    Praesent pharetra. In consequat felis in tellus. In mi enim,
                    rhoncus ullamcorper, sagittis at, placerat eget, mauris.
                    Suspendisse auctor erat at ipsum. Aliquam vitae tortor i
                    d massa tincidunt eleifend. <br /><br /> In hac habitasse platea dictumst.
                    Mauris rutrum enim vitae mauris. Proin mattis eleifend pede.
                    Sed pretium ante sit amet elit. Quisque pede tellus, dictum eget,
                    dapibus ac, sodales dictum, lectus. Pellentesque mi dui, molestie
                    sit amet, adipiscing id, iaculis quis, arcu. Nulla tellus
                </TextBox>

            </Container>
        </div>
    )
}

export default AboutMe

// Style
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100vw;
`

const Side = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
`

const SmallTitle = styled.h3`
    /* text-align: right; */
`

const TextBox = styled.p`
    max-width: 1000px;
    background-color: white;
    -webkit-box-shadow: 0px 0px 40px 5px rgba(0,0,0,0.2); 
    box-shadow: 0px 0px 40px 5px rgba(0,0,0,0.2);
    padding: 34px;
    border-radius: 18px;
    line-height: 1.8;
    margin-left: 30px;
`

const Button = styled.div`
    background-color: #3D7CCE;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    & > p {
        margin: 0;
        white-space: nowrap;
        color: white;
    }
`