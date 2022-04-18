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
    overflow: scroll;

    width: 90%;
    height: 66vh;
    padding: 1.0rem;
    
    border: 2px solid #007337;
    border-top: 24px solid #007337;
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