import styled from 'styled-components'
import { useRef, useState } from "react";

import { GlitchedTitle } from "../glitchedTitle";
import { RetroDiv } from "../retroDiv";
import { RpgVttContent } from "../RpgVttContent";
import { CaminhoDoSolNvl01Content } from "../CaminhoDoSolNvl01Content";
import { CaminhoDoSolNvl02Content } from "../CaminhoDoSolNvl02Content";
import { CaminhoDoSolNvl03Content } from "../CaminhoDoSolNvl03Content";
import { PetTrackDesignContent } from "../PetTrackDesignContent";
import { PhobosAiContent } from "../PhobosAIContent";
import { DaffneContent } from "../DaffneContent";
import { MyWebsiteContent } from "../myWebsiteContent";

const ContainerAbout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	

	width: 100%;
`

const ProjectsField = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-gap: 0.4rem;

	margin: auto;

	width: 100%;
`

const ProjectsOptionsField = styled.div`
	display: flex;
	justify-content: center;	
	flex-direction: column;
`

const ProjectItem = styled.div`
	display: flex;
	justify-content: space-between;
	text-align: flex-start;

	width: 10vw;
	min-width: 90px;
	height: 10vh;
	margin-top: 2%;
	margin-bottom: 2%;
	padding: 5px;

	font-family: 'Retro';
	font-size: 60%;
	letter-spacing: 2px;

	color: #ffffffcc;
	text-transform: uppercase;
	white-space: normal;


	border: 3px solid #007337;

	&:hover {
		background-color: #ffffffcc;
		border: 3px solid #00000000;
		color: #000000cc;
	}
`

const ProjectsContentField = styled.div`
	height: 99%;
	width: 100%;
`

const screens = {
	'rpgVttContent': () => <RpgVttContent />,
	'caminhoDoSolNvl01Content': () => <CaminhoDoSolNvl01Content />,
	'caminhoDoSolNvl02Content': () => <CaminhoDoSolNvl02Content />,
	'caminhoDoSolNvl03Content': () => <CaminhoDoSolNvl03Content />,
	'petTrackDesignContent': () => <PetTrackDesignContent />,
	'phobosAIContent': () => <PhobosAiContent />,
	'daffneContent': () => <DaffneContent />,
	'myWebsite': () => <MyWebsiteContent />,
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
						<ProjectItem onClick={(e) => {changeProjectView('rpgVttContent', e)}}>RPG VTT</ProjectItem>
						<ProjectItem onClick={(e) => {changeProjectView('caminhoDoSolNvl01Content', e)}}>Caminho do Sol LVL 01</ProjectItem>
						<ProjectItem onClick={(e) => {changeProjectView('caminhoDoSolNvl02Content', e)}}>Caminho do Sol LVL 02</ProjectItem>
						<ProjectItem onClick={(e) => {changeProjectView('caminhoDoSolNvl03Content', e)}}>Caminho do Sol LVL 03</ProjectItem>
						<ProjectItem onClick={(e) => {changeProjectView('phobosAIContent', e)}}>Phobos AI</ProjectItem>
						<ProjectItem onClick={(e) => {changeProjectView('petTrackDesignContent', e)}}>Design - Pet track</ProjectItem>
						<ProjectItem onClick={(e) => {changeProjectView('daffneContent', e)}}>Design - Daffne</ProjectItem>
						<ProjectItem onClick={(e) => {changeProjectView('myWebsite', e)}}>My Website</ProjectItem>
					</ProjectsOptionsField>
					<ProjectsContentField>
						{screen !== '' && screens[screen]()}
					</ProjectsContentField>
				</ProjectsField>
			</RetroDiv>
		</ContainerAbout>
	)
}
