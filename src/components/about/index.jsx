import styled from 'styled-components'
import { GlitchedTitle } from '../glitchedTitle';
import Moment from 'moment';

import profilePhoto from '../../assets/images/profile.png'
import { RetroDiv } from '../retroDiv';

const ContainerAbout = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

const InfoField = styled.div`
	display: flex;
  	flex-direction: row;
	border: 2px solid #007337;
	width: 100%;
	height: 50%;
	background: #007337;;
	
`

const ProfileImage = styled.div`
	background-image: url(${profilePhoto});
	background-position: center center;
	background-size: cover;
	border: 2px solid #007337;
	width: 20%;
	height: 90%;
	margin: 8px 0px 3px 5px;
`;

const ListProfile = styled.ul`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	list-style: none;
	flex-direction: column;
`

const ListItemProfile = styled.li`
	font-family: 'Retro';
	font-size: 2.2vh;
	text-transform: uppercase;
	color: #ffffffcc;
	margin: 2px 2px 2px 0px;
`

const Paragraph = styled.p`
	font-family: 'Predator';
	font-size: 22px;
	text-transform: uppercase;
	color: #ffffffe2;
`

export function About() {
	const formatDate = Moment()
	const birthday = Moment('2001-05-10').format("MMM Do YY")
	const formatBirthday = Moment('2001-05-10')
	const age = formatBirthday.diff(formatDate, 'years') * (-1)
	
	return (
		<ContainerAbout>
			<GlitchedTitle title="About" />
			<RetroDiv>
				<InfoField>
					<ProfileImage />
					<ListProfile>
						<ListItemProfile>ID: #50135</ListItemProfile>
						<ListItemProfile>Name: Ravin Menezes Moreno</ListItemProfile>
						<ListItemProfile>Codname: Ravin Mor</ListItemProfile>
						<ListItemProfile>Birhtday: {birthday}</ListItemProfile>
						<ListItemProfile>Age: {age}</ListItemProfile>
						<ListItemProfile>Hability: To be bad to the bones😎</ListItemProfile>
						<ListItemProfile>Planet: Earth</ListItemProfile>
					</ListProfile>
				</InfoField>
				<Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
				<Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
				<Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
			</RetroDiv>
		</ContainerAbout>
	)
}