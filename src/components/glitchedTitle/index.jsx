import styled, { keyframes } from "styled-components";

const Container = styled.div`
	display: flex;
	padding: 10px;
`

const glitchOne = keyframes`
    0% {
    clip: rect(132px, auto, 101px, 30px);
    }
    5% {
        clip: rect(17px, auto, 94px, 30px);
    }
    10% {
        clip: rect(40px, auto, 66px, 30px);
    }
    15% {
        clip: rect(87px, auto, 82px, 30px);
    }
    20% {
        clip: rect(137px, auto, 61px, 30px);
    }
    25% {
        clip: rect(34px, auto, 14px, 30px);
    }
    30% {
        clip: rect(133px, auto, 74px, 30px);
    }
    35% {
        clip: rect(76px, auto, 107px, 30px);
    }
    40% {
        clip: rect(59px, auto, 130px, 30px);
    }
    45% {
        clip: rect(29px, auto, 84px, 30px);
    }
    50% {
        clip: rect(22px, auto, 67px, 30px);
    }
    55% {
        clip: rect(67px, auto, 62px, 30px);
    }
    60% {
        clip: rect(10px, auto, 105px, 30px);
    }
    65% {
        clip: rect(78px, auto, 115px, 30px);
    }
    70% {
        clip: rect(105px, auto, 13px, 30px);
    }
    75% {
        clip: rect(15px, auto, 75px, 30px);
    }
    80% {
        clip: rect(66px, auto, 39px, 30px);
    }
    85% {
        clip: rect(133px, auto, 73px, 30px);
    }
    90% {
        clip: rect(36px, auto, 128px, 30px);
    }
    95% {
        clip: rect(68px, auto, 103px, 30px);
    }
    100% {
        clip: rect(14px, auto, 100px, 30px);
    }
`

const glitchTwo = keyframes`
    0% {
        clip: rect(129px, auto, 36px, 30px);
    }
    5% {
        clip: rect(36px, auto, 4px, 30px);
    }
    10% {
        clip: rect(85px, auto, 66px, 30px);
    }
    15% {
        clip: rect(91px, auto, 91px, 30px);
    }
    20% {
        clip: rect(148px, auto, 138px, 30px);
    }
    25% {
        clip: rect(38px, auto, 122px, 30px);
    }
    30% {
        clip: rect(69px, auto, 54px, 30px);
    }
    35% {
        clip: rect(98px, auto, 71px, 30px);
    }
    40% {
        clip: rect(146px, auto, 34px, 30px);
    }
    45% {
        clip: rect(134px, auto, 43px, 30px);
    }
    50% {
        clip: rect(102px, auto, 80px, 30px);
    }
    55% {
        clip: rect(119px, auto, 44px, 30px);
    }
    60% {
        clip: rect(106px, auto, 99px, 30px);
    }
    65% {
        clip: rect(141px, auto, 74px, 30px);
    }
    70% {
        clip: rect(20px, auto, 78px, 30px);
    }
    75% {
        clip: rect(133px, auto, 79px, 30px);
    }
    80% {
        clip: rect(78px, auto, 52px, 30px);
    }
    85% {
        clip: rect(35px, auto, 39px, 30px);
    }
    90% {
        clip: rect(67px, auto, 70px, 30px);
    }
    95% {
        clip: rect(71px, auto, 103px, 30px);
    }
    100% {
        clip: rect(83px, auto, 40px, 30px);
    }
`

const HeaderTitle = styled.h2`
padding-top: 1;
padding-bottom: 1;
background-color: #ffffffe3;
text-transform: uppercase;
width: 190px;
color: #000000dc;
font-family: 'Retro', sans-serif;
font-weight: 400;
padding: 2px;

&:before {
    padding: 6px;
    padding-left: 30px;
    animation: ${glitchOne} 2s infinite reverse;
    color: #000000dc;
    width: 200px;
    content: '${props=>props.content}';
    position: absolute;
    overflow: hidden;
    top: 2;
    left: 3px;
    background-color: #ffffffe3;
    text-shadow: -2px;
}
&:after {
    padding: 12px;
    padding-left: 30px;
    animation: ${glitchTwo} 2s linear infinite reverse;
    color: #000000dc;
    width: 200px;
    content: '${props=>props.content}';
    position: absolute;
    overflow: hidden;
    top: 0;
    left: -3px;
    background-color: #ffffffe3;
    text-shadow: -2px 0 blue;
}
&:hover {
    border: 1px solid #000000;
    color: #ffffffe3;
    text-transform: lowercase;
    letter-spacing: 2px;
    font-weight: 400;
    background-color: #007337;
}
`;

export function GlitchedTitle(props) {
    return (
        <Container>
            <HeaderTitle content={props.title}>{props.title}</HeaderTitle>
        </Container>
    )
}
