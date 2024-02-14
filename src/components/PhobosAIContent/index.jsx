import styled from 'styled-components'
import { ProjectLink } from '../projectLink'
import { ProjectTitle } from '../projectTitle'

const PhobosAIContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 6fr;
    grid-template-columns: 1fr;

    margin: auto;
    
    grid-gap: 10px;
`


export function PhobosAiContent() {
	return (
		<PhobosAIContainer>
            <ProjectTitle title='Phobos AI' />
            <ProjectLink link='https://chromewebstore.google.com/detail/phobos-ai/fjnacmagikgpmccnpngbpmbmdbjiclnk' description='A cutting-edge Google extension that enhances your texts according to your unique needs' />
        </PhobosAIContainer>
	)
}