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
            <ProjectLink link='https://www.caminho-do-sol.org/' description='A mobile application designed to track and manage pet vaccination records.' />
        </PetTrackDesignContainer>
	)
}
