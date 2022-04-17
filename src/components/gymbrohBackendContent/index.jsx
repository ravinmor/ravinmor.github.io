import styled from 'styled-components'
import { ProjectLink } from '../projectLink'
import { ProjectTitle } from '../projectTitle'

const GymbrohBackendContentContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: 1fr 6fr;
    grid-gap: 10px;
`


export function GymbrohBackendContent() {
	return (
		<GymbrohBackendContentContainer>
            <ProjectTitle title='Gymbroh Backend' />
            <ProjectLink link='https://github.com/ravinmor/gymbroh-backend' description='Simple app that allows personal trainers and gyms to schedule exercises in a chosen day for his students.' />
        </GymbrohBackendContentContainer>
	)
}