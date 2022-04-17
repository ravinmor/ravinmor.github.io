import styled, { keyframes } from "styled-components";
import FontStyles from "../globalStyles";

const turnOffPreLoader = keyframes`
    to{
        opacity: 0;
        display: none;
    }
`

const PreLoaderContainer = styled.div`
    position: absolute;
    margin: 0;
    font-family: 'Retro';
    width: 100vw;
    height: 100vh;
    display: grid;
    place-content: center;
    text-align: center;
    background: black;
    animation: ${turnOffPreLoader} 1.5s steps(24) 8.5s forwards;
    z-index: 100;
`;

const typewriter = keyframes`
    0%{
        left: 0;
    }
    50%{
        left: 0;
    }
    100% {
        left: 100%;
    }
`

const blink = keyframes`
    to {
        background-color: #007337;
    }
`


const TypedText = styled.p`
    position: relative;

    font-size: 2vw;
    font-family: "RetroAtari";
    text-transform: uppercase;
    color: #007337;
    width: max-content;

    &::before,
    &::after{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
  
    &::before{
        background: black;
        animation: ${typewriter} 3s steps(24) 4.6s forwards;
    }

    &::after{
        width: 0.500em;
        background: transparent;
        animation: ${typewriter} 3s steps(24) 4.6s forwards,  750ms ${blink} 4.6s steps(24) infinite;
    }
`

const loadBar = keyframes`
    to {
        width: 95.7%;
    }
`

const ProgessBarBox = styled.div`
    border: 4px solid #007337;
    width: 40vw;
`

const Progress = styled.div`
    position: relative;
    margin: 3px;
    padding: 10px;
    width: 0;
    background-color: #007337;
    animation: ${loadBar} 3s steps(24) 1s forwards;
`

export function PreLoader() {
	
	return (
		<PreLoaderContainer>
			<FontStyles />
            <ProgessBarBox>
                <Progress></Progress>
            </ProgessBarBox>
            <TypedText>Welcome aboard, mate.</TypedText>
		</PreLoaderContainer>
	);
}
