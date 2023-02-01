import React from "react"
import styled, { keyframes } from "styled-components"
import profilePic from "../img/profile.jpg"
import border from "../img/border.svg"
import handwritten from '../img/handwritten.svg'

// img
import hero from "../img/hero.svg"

const HeroSection = () => {

    return (
        <Head>
            <Intro>

                <Pic>

                    <Border>
                        <svg width="100%" height="100%" viewBox="0 0 1303 1154" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <linearGradient x1="0" y1="0" x2="100%" y2="100%" id="gradient">
                                <stop stop-color="#b3cff2" offset="0" />
                                <stop stop-color="#3ea5e0" offset="100%" />
                            </linearGradient>
                            <path
                                fill="url(#gradient)"
                                d="M695.222,27.11c312.617,108.379 541.655,304.683 587.929,632.301c22.117,156.594 -90.427,274.585 -189.187,355.093c-258.897,211.051 -655.941,117.191 -689.217,-42.046c-33.966,-162.545 -230.132,-72.196 -353.828,-317.225c-46.592,-92.295 -53.829,-247.837 32.362,-306.976c156.304,-107.248 418.066,-388.36 611.941,-321.147Zm-11.041,31.85c-69.218,-23.997 -147.479,4.766 -226.185,50.428c-131.517,76.302 -262.394,202.681 -355.644,266.664c-27.258,18.703 -41.592,50.234 -47.949,85.249c-10.781,59.387 1.617,129.236 26.608,178.741c68.961,136.604 163.131,159.841 233.476,190.143c60.767,26.176 106.899,57.096 123.257,135.378c5.177,24.776 22.614,46.856 47.308,66.073c28.717,22.347 67.09,40.33 111.237,52.745c137.592,38.692 330.373,23.015 476.376,-96.005c90.689,-73.929 197.418,-180.453 177.108,-324.251c-44.394,-314.307 -265.677,-501.19 -565.592,-605.165Z"
                            // d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"
                            // stroke="url(#gradient)"
                            // stroke-width="8"
                            />

                        </svg>
                    </Border>

                    <Profile />

                </Pic>

                <Handwritten>
                    <img src={handwritten} alt="" />
                    <p>I'm currently studying MSc in Media Technology and Engineering</p>
                </Handwritten>

            </Intro>
        </Head>
    )
}

export default HeroSection

// Style
const Head = styled.header`
    height: 90vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${hero});
    background-position: 50% 100%;
    background-size: cover;
`

const Intro = styled.div`
    width: 800px;
    position: relative;
    bottom: 60px;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #0f0f0f;

    & > h1 {
        font-size: 54px;
        margin: 0;
    }

    @media (max-width: 670px) {
        flex-direction: column;
    }
`

const Pic = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    & > div {
        background-position: center;
        background-repeat: no-repeat;
    }
`

const move = keyframes`
  0%   { transform: scale(1) rotate(0deg); }
  25%  { transform: scale(0.9, 1.2) rotate(90deg); }
  50%  { transform: scale(1.1, 0.9) rotate(180deg); }
  75%  { transform: scale(0.9, 1.1) rotate(270deg); }
  100% { transform: scale(1) rotate(359deg); }
`

const Border = styled.div`
    position: absolute;
    /* background-image: url(${border}); */
    height: 270px;
    width: 270px;
    /* width: 35%; */

    /* position: absolute; */
    /* top: 0; */
    /* left: 0; */
    fill: none;
    /* width: 50vmax; */
    /* z-index: -1; */
    animation: ${move} 18s linear infinite;
    transform-origin: 50% 50%;
`

const Profile = styled.div`
    background-image: url(${profilePic});
    background-size: cover;
    border-radius: 50%;
    height: 210px;
    width: 210px;
    /* z-index: 1; */
`

const Handwritten = styled.div`
    margin-left: 60px;
    width: 340px;

    @media (max-width: 670px) {
            margin: 0;
    }

    & > p {
        margin: 0;
        color: #FAF9F6;
        line-height: 1.5;
    }

    & > img {
        height: 100px;

        @media (max-width: 670px) {
            margin: 0;
        }
    }
    
`
