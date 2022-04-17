import styled from 'styled-components'
import { ProjectLink } from '../projectLink'
import { ProjectTitle } from '../projectTitle'

const MyWebsiteContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: 1fr 6fr;
    grid-gap: 10px;
`


export function MyWebsiteContent() {
	return (
		<MyWebsiteContainer>
            <ProjectTitle title='My Website' />
            <ProjectLink link={window.location.href} description='A site to gather all the information you need to get to know Ravin Mor. Probably you have already noticed, but if not, you are already on it.' />
        </MyWebsiteContainer>
	)
}