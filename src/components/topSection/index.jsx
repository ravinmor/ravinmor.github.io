import { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Tilt from 'react-vanilla-tilt'

import { About } from "../about/index";
import { Projects } from "../projects/index";
import { Contacts } from "../contacts/index";
import { Skills } from "../skills";
import FontStyles from "../globalStyles";

const TopSectionContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-end;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;
	
	background-color: #00000072;
	z-index: 90;

	@media (max-width: 728px) { 
		flex-direction: column;
  	}
`;

const Menu = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	overflow: hidden;

	width: 50%;
	height: 100%;

	@media (max-width: 728px) { 
		width:100%;
  	}
`;

const List = styled.ul`
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	flex-direction: column;

	width: 90%;
	height: 65%;

	list-style: none;

    border-bottom: 2px solid #ffffffb5;
	
	@media (max-width: 728px) { 
		flex-direction: row;
		height: 40%;
		justify-content: space-around;
  	}
`

const glitchOne = keyframes`
	0% {
    	clip: rect(132px, auto, 101px, 30px);
	}
	5% {
		clip: rect(17px, auto, 94px, 30px);
	}
	10% {
		clip: rect(40px, auto, 66px, 30px);
	}
	15% {
		clip: rect(87px, auto, 82px, 30px);
	}
	20% {
		clip: rect(137px, auto, 61px, 30px);
	}
	25% {
		clip: rect(34px, auto, 14px, 30px);
	}
	30% {
		clip: rect(133px, auto, 74px, 30px);
	}
	35% {
		clip: rect(76px, auto, 107px, 30px);
	}
	40% {
		clip: rect(59px, auto, 130px, 30px);
	}
	45% {
		clip: rect(29px, auto, 84px, 30px);
	}
	50% {
		clip: rect(22px, auto, 67px, 30px);
	}
	55% {
		clip: rect(67px, auto, 62px, 30px);
	}
	60% {
		clip: rect(10px, auto, 105px, 30px);
	}
	65% {
		clip: rect(78px, auto, 115px, 30px);
	}
	70% {
		clip: rect(105px, auto, 13px, 30px);
	}
	75% {
		clip: rect(15px, auto, 75px, 30px);
	}
	80% {
		clip: rect(66px, auto, 39px, 30px);
	}
	85% {
		clip: rect(133px, auto, 73px, 30px);
	}
	90% {
		clip: rect(36px, auto, 128px, 30px);
	}
	95% {
		clip: rect(68px, auto, 103px, 30px);
	}
	100% {
		clip: rect(14px, auto, 100px, 30px);
	}
`

const glitchTwo = keyframes`
	0% {
		clip: rect(129px, auto, 36px, 30px);
	}
	5% {
		clip: rect(36px, auto, 4px, 30px);
	}
	10% {
		clip: rect(85px, auto, 66px, 30px);
	}
	15% {
		clip: rect(91px, auto, 91px, 30px);
	}
	20% {
		clip: rect(148px, auto, 138px, 30px);
	}
	25% {
		clip: rect(38px, auto, 122px, 30px);
	}
	30% {
		clip: rect(69px, auto, 54px, 30px);
	}
	35% {
		clip: rect(98px, auto, 71px, 30px);
	}
	40% {
		clip: rect(146px, auto, 34px, 30px);
	}
	45% {
		clip: rect(134px, auto, 43px, 30px);
	}
	50% {
		clip: rect(102px, auto, 80px, 30px);
	}
	55% {
		clip: rect(119px, auto, 44px, 30px);
	}
	60% {
		clip: rect(106px, auto, 99px, 30px);
	}
	65% {
		clip: rect(141px, auto, 74px, 30px);
	}
	70% {
		clip: rect(20px, auto, 78px, 30px);
	}
	75% {
		clip: rect(133px, auto, 79px, 30px);
	}
	80% {
		clip: rect(78px, auto, 52px, 30px);
	}
	85% {
		clip: rect(35px, auto, 39px, 30px);
	}
	90% {
		clip: rect(67px, auto, 70px, 30px);
	}
	95% {
		clip: rect(71px, auto, 103px, 30px);
	}
	100% {
		clip: rect(83px, auto, 40px, 30px);
	}
`

const blink = keyframes`
	0% {
		opacity: 100%;
	}
	75% {
		opacity: 100%;
	}
	100% {
		opacity: 0;
	}
`

const ListItem = styled.li`
	margin-top: 0.8rem;
	margin-bottom: 0.8rem;
	padding-left: 1.0rem;

	font-weight: 500;
	font-size: 1.6rem;
	text-decoration: none;

	color: #ffffffb5;

	transition: 0.6;
	animation: ${blink} 0.34s infinite reverse;

	&:before {
		content: '${props=>props.content}';

		position: absolute;
		overflow: hidden;

		width: 40%;
		text-align: start;
		left: 0.8rem;
		padding: 0.5rem;
		padding-left: 3.0rem;

		color: #ffffffb5;
		background: transparent;
		text-shadow: -2px;

		animation: ${glitchOne} ${props=>props.number}s infinite reverse;
	}
	&:after {
		content: '${props=>props.content}';

		position: absolute;
		overflow: hidden;

		height: 4%;
		left: 0.4rem;
		padding: 1.2rem;
		padding-left: 3.0rem;

		background: transparent;
		color: #ffffffb5;
		text-shadow: -2px 0 blue;

  		animation: ${glitchTwo} ${props=>props.number}s linear infinite reverse;
	}
	&:hover {
		border-left: 6px solid #ffffffb5;
	}
`;

const Description = styled.p`
	width: 90%;
	height: 5%;
	
	font-size: 1.4rem;
	line-height: 3rem;
	font-weight: 400;
	text-decoration: none;

	color: #ffffffb5;

	&:before {
		content: '${props=>props.content}';

		position: absolute;
		overflow: hidden;
		
		width: 100%;
		left: 4px;
		padding: 6px;
		padding-left: 30px;

		color: #ffffffb5;
		text-shadow: -2px;
		background: transparent;

		animation: ${glitchOne} 2s infinite reverse;
	}
	&:after {
		content: '${props=>props.content}';

		position: absolute;
		overflow: hidden;

		width: 20%;
		height: 2%;
		padding: 1.2rem;
		padding-left: 3.0rem;
		left: -0.4rem;

		color: #ffffffb5;
		background: transparent;
		text-shadow: -2px 0 blue;

		animation: ${glitchTwo} 2s linear infinite reverse;
	}

	@media (max-width: 728px) { 
		text-align: center;
		height: 10%;
  	}
`

const ContainerAligner = styled.div`
	display: flex;
	justify-content: center;
	align-self: center;

	width: 50%;
	height: 100%;

	@media (max-width: 728px) { 
		width: 100%;
  	}
`

const lazyAppear = keyframes`
    0% {
        height: 2vh;
    }
    100% {
        height: 80vh;
    }
`

const GlassCard = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	overflow: hidden;

	width: 46vw;
	height: 80vh;
	margin: 3.0rem;
	
	border-radius: 15px;
	box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
	background: rgba(255, 255, 255, 0.055);
	border-top: 1px solid rgba(255, 255, 255, 0.2);
	border-left: 1px solid rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(4px);
	transform-style: preserve-3d;
	transform-origin: left right;
    animation: ${lazyAppear} 1s forwards;
	
	@media (max-width: 728px) {
		width: 90vw;
  	}
`

const screens = {
	'about': () => <About />,
	'projects': () => <Projects />,
	'contacts': () => <Contacts />,
	'skills': () => <Skills />,
}

export function TopSection() {
	const [ screen, setScreen ] = useState('');
	const [ showGlassCard, setShowGlassCard ] = useState(false);
	const [ description, setDescription ] = useState('');
	const [ isFirstClick, setIsFirsClick ] = useState(true);

	const glassCardRef = useRef();

	function changeGlassCardContent(screen) {
		setShowGlassCard(true);
		if(isFirstClick) {
			setIsFirsClick(false)
		} else {
			glassCardRef.current.style.transition = '0.8s';
			if(glassCardRef.current.style.transform === "rotateY(360deg)") {
				glassCardRef.current.style.transform = "rotateY(0deg)";
			} else {
				glassCardRef.current.style.transform = "rotateY(360deg)";
			}
		}
		setTimeout(() => {setScreen(screen)}, 250)
	}
	
	return (
		<TopSectionContainer>
			<FontStyles />
			<Menu>
				<List>
					<ListItem 
						onMouseOver={() => setDescription('A couple of informations to know Ravin Mor')}
						onMouseLeave={() => setDescription('')}
						onClick={() => {changeGlassCardContent('about')}}
						number={2}
						content="About"
					>
						About
					</ListItem>
					<ListItem 
						onMouseOver={() => setDescription('Some projects made to learn or just to do some cool stuff')}
						onMouseLeave={() => setDescription('')}
						onClick={() => {changeGlassCardContent('projects')}}
						number={3}
						content="Projects"
					>
						Projects
					</ListItem>
					<ListItem 
						onMouseOver={() => setDescription('All my techs Skills')}
						onMouseLeave={() => setDescription('')}
						onClick={() => {changeGlassCardContent('skills')}}
						number={1}
						content="Skills"
					>
						Skills
					</ListItem>
					<ListItem 
						onMouseOver={() => setDescription('All ways you have to contact Ravin Mor')}
						onMouseLeave={() => setDescription('')}
						onClick={() => { changeGlassCardContent('contacts')}}
						number={1}
						content="Contacts"
					>
						Contacts
					</ListItem>
				</List>
				<Description content={description}>{description}</Description>
			</Menu>
			<ContainerAligner>	
				{showGlassCard && (
						<Tilt style={{
								background: '#0000000',
								boxShadow: 'none',
								perspective: 1000,
							}}
						>
							<GlassCard ref={glassCardRef}>
								{screen !== '' && screens[screen]()}
							</GlassCard>
						</Tilt>
				)}
			</ContainerAligner>
		</TopSectionContainer>
	);
}
