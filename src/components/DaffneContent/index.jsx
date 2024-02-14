import styled from 'styled-components'
import { ProjectLink } from '../projectLink'
import { ProjectTitle } from '../projectTitle'

const DaffneContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: 1fr 6fr;
    grid-gap: 10px;
`


export function DaffneContent() {
	return (
		<DaffneContainer>
            <ProjectTitle title='Design - Daffne mobile app' />
            <ProjectLink link='https://www.figma.com/file/dTKVa5U1scKsWErbcsKqqu/Daffnee?type=design&node-id=0-1&mode=design&t=u7YcGoBsQVYAmPJF-0' description='The design of an app that I am developing' />
        </DaffneContainer>
	)
}