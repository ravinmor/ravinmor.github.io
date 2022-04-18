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
    display: grid;
    place-content: center;
    
    width: 100vw;
    height: 100vh;
    margin: 0;

    font-family: 'Retro';
    text-align: center;
    
    background: black;

    animation: ${turnOffPreLoader} 1.5s steps(24) 8.5s forwards;

    z-index: 100;
`

const blink = keyframes`
    to {
        background-color: #007337;
    }
`

const loadBar = keyframes`
    to {
        width: 100%;
    }
`

const ProgessBarBox = styled.div`
    display: flex;
    justify-content: flex-start;

    width: 40vw;

    padding: 0.4rem;
    border: 4px solid #007337;
`

const Progress = styled.div`
    position: relative;

    padding: 10px;
    width: 0;

    background-color: #007337;

    animation: ${loadBar} 3s steps(24) 1s forwards;
`

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

const TypedText = styled.p`
    position: relative;

    width: max-content;

    font-size: 2.2rem;
    line-height: 3.5rem;
    font-family: "RetroAtari";
    text-transform: uppercase;

    color: #007337;

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
