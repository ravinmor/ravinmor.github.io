import styled, { keyframes } from 'styled-components'

const ProjectLinkContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
`

const ProjectDescription = styled.div`
    display: flex;
    justify-content: flex-start;

    font-family: 'Retro';
    font-size: .6vw;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 100;
    color: #ffffffcc;
    line-height: 14px;

    margin: 0px 5px 10px 5px;
    padding: 0;
`

const LinkField = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 3px solid #ffffffcc;
`

const Link = styled.div`
    color: #000000cc;
    text-align: center;
    background-color: #007337;
    width: 28vw;
    padding: 40px 1px;

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
    font-family: 'Retro';
    font-size: 1.6vw;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    padding: 0;
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