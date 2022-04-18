import { useState } from 'react';
import styled from 'styled-components'

import { GlitchedTitle } from "../glitchedTitle";
import { RetroDiv } from '../retroDiv';
import { retroList } from '../retroList';

const ContainerContacts = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	width: 100%;
`

const EmailField = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`
	
const EmailFieldline = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 10px;
	padding: 2px;
	width: 90%;
	border: 2px solid #007337;
`

const EmailTitle = styled.h3`
	font-family: 'Retro';
	font-size: 1.2rem;
	margin: 4px;
	color: #ffffffe2;
`

const InputField = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: row;
	gap: 1rem;
	margin: 1rem;
	width: 100%;

	@media (max-width: 833px) {
		flex-direction: column;
  	}
`

const RetroInput = styled.input.attrs((props) => ({
		placeholder: props.contentPlaceholder
	}))`
	
	padding: 10px;
	width: 45%;
	background: #ffffffc1;
	border: 3px solid #007337;

	::placeholder,
	::-webkit-input-placeholder {
		font-family: 'Retro';
		color: #00000063;
		font-size: 1.2rem;
		text-transform: uppercase;
	}
  
	@media (max-width: 833px) {
  		width: 96%;
	}
`;

const RetroInputTextArea = styled('textarea').attrs((props) => ({
		placeholder: props.contentPlaceholder,
		rows: props.rowsNumber
}))`
	padding: 1.0rem;
	margin: 1.0rem;
	width: 96%;
	background: #ffffffc1;
	border: 3px solid #007337;

	::placeholder,
	::-webkit-input-placeholder {
		font-family: 'Retro';
		color: #00000063;
		font-size: 12px;
		text-transform: uppercase;
  	}
`;

const ButtonSendEmail = styled.button`
	font-family: 'Retro';
	color: #0000009d;
	background: #007337;
	margin: 10px;
	padding: 1.5rem 7.2rem 1.5rem 7.2rem;

	&:hover {
		color: #0000009d;
  		background: #ffffffc1;
	}
`

export function Contacts() {
	const [ name, setName ] = useState('')
	const [ subject, setSubject ] = useState('')
	const [ body, setBody ] = useState('')

	function sendEmail(e) {
		const initialMessage = `Mr(s). ${name} are getting in touch with you, sir:`
		const contentMessage = `${initialMessage}\n${body}`
		const hyperLink = `mailto:ravinmmor@gmail.com?cc=ravinmenezes@outlook.com&subject=${subject}&body=${contentMessage}`
		window.location.href = hyperLink
		e.preventDefault()

	}

	return (
		<ContainerContacts>
			<GlitchedTitle title="Contacts" />
			<RetroDiv>
				<retroList.List>
					<retroList.ListItem>
						<a style={{textDecoration: 'none'}} href='https://www.linkedin.com/in/ravin-mor/?locale=en_US' rel="noopener noreferrer" target='_blank'>
							<retroList.ListItemField>
									<i style={{fontSize: 22, margin: '0px 6px -4px 0px', }} className="devicon-linkedin-plain"></i>LinkedIN
							</retroList.ListItemField>
						</a>
					</retroList.ListItem>
					<retroList.ListItem>
						<a style={{textDecoration: 'none'}} href='https://twitter.com/ravin_mor' rel="noopener noreferrer" target='_blank'>
							<retroList.ListItemField>
									<i style={{fontSize: 22, margin: '0px 6px -4px 0px', }} className="devicon-twitter-plain"></i>Twitter
							</retroList.ListItemField>
						</a>
					</retroList.ListItem>
					<retroList.ListItem>
						<a style={{textDecoration: 'none'}} href='https://github.com/ravinmor' rel="noopener noreferrer" target='_blank'>
							<retroList.ListItemField>
									<i style={{fontSize: 22, margin: '0px 6px -4px 0px', }} className="devicon-github-plain"></i>Github
							</retroList.ListItemField>
						</a>
					</retroList.ListItem>
				</retroList.List>
				<EmailField>
					<EmailFieldline>
						<EmailTitle>Send me a message</EmailTitle>
						<InputField>
							<RetroInput
								type='text'
								contentPlaceholder='Name'
								value={name}
								onChange={(c) => setName(c.target.value)}
							></RetroInput>
							<RetroInput
								type='text'
								contentPlaceholder='Subject'
								value={subject}
								onChange={(c) => setSubject(c.target.value)}
							>
							</RetroInput>
						</InputField>
						<RetroInputTextArea
							rowsNumber="6"
							contentPlaceholder='Message here'
							value={body}
							onChange={(c) => setBody(c.target.value)}
						>
						</RetroInputTextArea>
						<ButtonSendEmail onClick={(e) => sendEmail(e)}>Send</ButtonSendEmail>
					</EmailFieldline>
				</EmailField>
			</RetroDiv>
		</ContainerContacts>
	)
}