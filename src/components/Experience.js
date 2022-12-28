import React from "react";
import styled from "styled-components";

// Components
import Title from "./Title";

const Experience = () => {

    return (
        <div>
            <Title
                title='🎯 EXPERIENCE'
            />

            <Container>

                <Side>

                </Side>


                <p>
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
                </p>

            </Container>
        </div>
    )
}

export default Experience

//Style
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