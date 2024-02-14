import styled from 'styled-components'
import { ProjectLink } from '../projectLink'
import { ProjectTitle } from '../projectTitle'

const MyWebsiteContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: 1fr 6fr;
    grid-gap: 10px;
`


export function GuerrilaMailAPI() {
	return (
		<MyWebsiteContainer>
            <ProjectTitle title='Guerrilamail Node API' />
            <ProjectLink link='https://github.com/ravinmor/guerrillamail-node-api' description='A nodejs api to interact with guerrilamail api.' />
        </MyWebsiteContainer>
	)
}