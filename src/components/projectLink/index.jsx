import styled, { keyframes } from 'styled-components'

const ProjectLinkContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;

    width: 96%;
    height: 40vh;
` 

const ProjectDescription = styled.div`
    display: flex;
    justify-content: flex-start;

    height: 33.4%;
    
    font-family: 'Retro';
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 100;
    color: #ffffffcc;
    line-height: 1rem;

    margin: 0px 5px 10px 5px;
    padding: 0;
`

const LinkField = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 66.6%;

    border: 0.3rem solid #ffffffcc;
`

const Link = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 90%;
    padding: 4.0rem 1px;
    margin: auto;

    background-color: #007337;
    color: #000000cc;

    &:hover {
        background-color: #ffffffcc;
    }
`

const blinker = keyframes`
    from { 
        opacity: 0;
    }
    to { 
        opacity: 1;
    }
`

const LinkText = styled.h6`
    margin: 0;
    padding: 0;

    font-family: 'Retro';
    font-size: 1.6rem;
    text-transform: uppercase;
    text-align: center;

    animation: ${blinker} .6s linear infinite;
`

export function ProjectLink(props) {
    return (
        <ProjectLinkContainer>
            <ProjectDescription>{props.description}</ProjectDescription>
            <LinkField>
                <a style={{textDecoration: 'none'}} href={props.link} rel="noopener noreferrer" target='_blank'>
                    <Link>
                        <LinkText>Visit Project</LinkText>
                    </Link>
                </a>
            </LinkField>
        </ProjectLinkContainer>
    )
}