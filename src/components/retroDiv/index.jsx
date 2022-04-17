import styled, { keyframes } from 'styled-components'

const lazyAppear = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const RetroDivContainer = styled.div`
    position: relative;
    width: 90%;
    height: 54vh;
    border: 2px solid #007337;
    border-top: 24px solid #007337;
    padding: 10px;
    margin: 20px;
    overflow: scroll;
    backdrop-filter: blur(2px);
    animation: ${lazyAppear} 1s forwards;

    &::-webkit-scrollbar {
        width: 16px;
    }

    &::-webkit-scrollbar-button {
        background: #007337;
    }
    &::-webkit-scrollbar-corner {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: #007337;
    }
`

export function RetroDiv({ children }) {
    return (
        <RetroDivContainer>
            {children}
        </RetroDivContainer>
    )

}