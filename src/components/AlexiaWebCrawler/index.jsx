import styled from 'styled-components'
import { ProjectLink } from '../projectLink'
import { ProjectTitle } from '../projectTitle'

const MyWebsiteContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: 1fr 6fr;
    grid-gap: 10px;
`


export function AlexiaWebCrawler() {
	return (
		<MyWebsiteContainer>
            <ProjectTitle title='Alexia Web Crawler' />
            <ProjectLink link='https://github.com/ravinmor/Alexia-Web-crawler' description='Webcrawler able to extract data from all properties from a real estate called "Imobiliaria Figueiras"' />
        </MyWebsiteContainer>
	)
}