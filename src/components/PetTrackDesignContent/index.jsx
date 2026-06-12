import styled from 'styled-components'
import { ProjectLink } from '../projectLink'
import { ProjectTitle } from '../projectTitle'

const PetTrackDesignContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: 1fr 6fr;
    grid-gap: 10px;
`

export function PetTrackDesignContent() {
	return (
		<PetTrackDesignContainer>
            <ProjectTitle title='pet-track-design' />
            <ProjectLink link='https://www.figma.com/design/ap4jATPGehPS57pg23BS3U/Pet-Track?node-id=0-1&t=FpFkQepXvChYuE14-1' description='A mobile application designed to track and manage pet vaccination records.' />
        </PetTrackDesignContainer>
	)
}
