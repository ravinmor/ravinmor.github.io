import styled from 'styled-components'

const TitleField = styled.div`
    width: 100%;
    background-color: #007337;
    border: 3px solid #ffffffcc;
`
const Title = styled.h3`
    font-family: 'Retro';
    font-weight: 200;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #ffffffcc;
    font-size: 1vw;
    margin-left: 10px;
`

export function ProjectTitle(props) {
    return (
        <>
            <TitleField>
                <Title>{props.title}</Title>
            </TitleField>
        </>
    )
}