import styled from 'styled-components'
import { ProjectLink } from '../projectLink'
import { ProjectTitle } from '../projectTitle'

const SkyWatcherContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: 1fr 6fr;
    grid-gap: 10px;
`


export function SkyWatcherContent() {
	return (
		<SkyWatcherContainer>
            <ProjectTitle title='Sky Watcher' />
            <ProjectLink link='https://github.com/ravinmor/sky-watcher' description='Package built to gather information about sky' />
        </SkyWatcherContainer>
	)
}