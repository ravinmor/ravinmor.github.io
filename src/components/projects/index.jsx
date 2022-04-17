import styled from 'styled-components'
import { useRef, useState } from "react";

import { GlitchedTitle } from "../glitchedTitle";
import { RetroDiv } from "../retroDiv";
import { GymbrohMobileContent } from "../gymbrohMobileContent";
import { GymbrohBackendContent } from "../gymbrohBackendContent";
import { SkyWatcherContent } from "../skyWatcherContent";
import { MyWebsiteContent } from "../myWebsiteContent";
import { AlexiaWebCrawler } from "../AlexiaWebCrawler";

const ContainerAbout = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

const ProjectsField = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
`

const ProjectsOptionsField = styled.div`
	display: flex;
	justify-content: center;	
	flex-direction: column;
`

const ProjectItem = styled.div`
	display: flex;
	justify-content: flex-start;
	text-align: flex-start;
	font-size: .8vw;
	letter-spacing: 2px;
	color: #ffffffcc;
	font-family: 'Retro';
	text-transform: uppercase;
	width: 10vw;
	height: 10vh;
	margin: auto;
	margin-top: 2px;
	margin-bottom: 2px;
	padding: 5px;
	border: 3px solid #007337;

	&:hover {
		background-color: #ffffffcc;
		border: 3px solid #00000000;
		color: #000000cc;
	}
`

const ProjectsContentField = styled.div``

const screens = {
	'gymbrohMobileContent': () => <GymbrohMobileContent />,
	'gymbrohBackendContent': () => <GymbrohBackendContent />,
	'skyWatcherContent': () => <SkyWatcherContent />,
	'myWebsite': () => <MyWebsiteContent />,
	'alexiaWebCrawler': () => <AlexiaWebCrawler />,
}

export function Projects() {
	const [ screen, setScreen ] = useState('');

	const projectsField = useRef();

	function changeProjectView(screen, element) {
		activeProjectFieldSelectedRetroStyle(element)
		setScreen(screen)
	}

	function activeProjectFieldSelectedRetroStyle(element) {
		const choosedProject = element.currentTarget;
		const projectsItems = projectsField.current.getElementsByTagName('div');
		console.log()
		for (let item in  projectsItems) {
			if(projectsItems[item] !== choosedProject) {
				if(typeof projectsItems[item] === 'object') {
					projectsItems[item].style = '3px solid #007337'
				}
			}
			choosedProject.style.border = '3px solid #ffffffcc'
			choosedProject.style.borderLeft = '10px solid #ffffffcc'
			choosedProject.style.borderRight = '10px solid #ffffffcc'
		}
	}
	
	return (
		<ContainerAbout>
			<GlitchedTitle title="Projects" />
			<RetroDiv>
				<ProjectsField>
					<ProjectsOptionsField ref={projectsField}>
						<ProjectItem onClick={(e) => {changeProjectView('gymbrohMobileContent', e)}}>Gymbroh Mobile</ProjectItem>
						<ProjectItem onClick={(e) => {changeProjectView('gymbrohBackendContent', e)}}>Gymbroh Backend</ProjectItem>
						<ProjectItem onClick={(e) => {changeProjectView('skyWatcherContent', e)}}>Skywatcher</ProjectItem>
						<ProjectItem onClick={(e) => {changeProjectView('myWebsite', e)}}>My Website</ProjectItem>
						<ProjectItem onClick={(e) => {changeProjectView('alexiaWebCrawler', e)}}>Alexia Web Crawler</ProjectItem>
					</ProjectsOptionsField>
					<ProjectsContentField>
						{screen !== '' && screens[screen]()}
					</ProjectsContentField>
				</ProjectsField>
			</RetroDiv>
		</ContainerAbout>
		
	)
}