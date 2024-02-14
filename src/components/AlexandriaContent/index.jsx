import styled from 'styled-components'
import { ProjectLink } from '../projectLink'
import { ProjectTitle } from '../projectTitle'

const AlexandriaContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: 1fr 6fr;
    grid-gap: 10px;
`


export function AlexandriaContent() {
	return (
		<AlexandriaContainer>
            <ProjectTitle title='Design - Alexandria' />
            <ProjectLink link='https://github.com/ravinmor/sky-watcher' description='A web app to read book that save where you stoped.' />
        </AlexandriaContainer>
	)
}