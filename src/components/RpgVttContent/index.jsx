import styled from 'styled-components'
import { ProjectLink } from '../projectLink'
import { ProjectTitle } from '../projectTitle'

const RpgVttContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: 1fr 6fr;
    grid-gap: 10px;
`

export function RpgVttContent() {
	return (
		<RpgVttContainer>
            <ProjectTitle title='RPG VTT' />
            <ProjectLink link='https://lucca-jade.vercel.app/' description='A lightweight, web-based VTT designed to streamline RPG sessions with intuitive tools, dice rolling, and real-time token management.' />
        </RpgVttContainer>
	)
}
