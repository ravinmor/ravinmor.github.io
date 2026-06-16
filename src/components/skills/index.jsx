import { GlitchedTitle } from "../glitchedTitle";
import styled from 'styled-components'
import { RetroDiv } from "../retroDiv";
import { retroList } from '../../components/retroList'
import { Bot, BriefcaseBusiness, MousePointer2, Network, ScanFace, SearchCode, ShieldCheck, Workflow } from 'lucide-react';

const ContainerAbout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	width: 100%;
`

const SkillLabel = styled.span`
	margin-left: auto;
	text-align: right;
`

const skillIconStyle = {
	width: '2.2rem',
	height: '2.2rem',
	margin: '0px 6px -4px 0px',
	flexShrink: 0,
}

export function Skills() {
	
	return (
		<ContainerAbout>
			<GlitchedTitle title="Skills" />
			<RetroDiv>
				<retroList.List>
					<retroList.ListItem>
						<retroList.ListItemField>
							<i style={{fontSize: '2.2rem', margin: '0px 6px -4px 0px'}} className="devicon-nodejs-plain"></i>Node Js
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<i style={{fontSize: '2.2rem', margin: '0px 6px -4px 0px'}} className="devicon-typescript-plain"></i>Typescript
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<BriefcaseBusiness style={skillIconStyle} />Dynamics 365
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<Workflow style={skillIconStyle} />Power Platform
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<i style={{fontSize: '2.2rem', margin: '0px 6px -4px 0px'}} className="devicon-react-original"></i>React Js
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<i style={{fontSize: '2.2rem', margin: '0px 6px -4px 0px'}} className="devicon-react-original"></i>React Native
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<i style={{fontSize: '2.2rem', margin: '0px 6px -4px 0px'}} className="devicon-php-plain"></i>PHP
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<i style={{fontSize: '2.2rem', margin: '0px 6px -4px 0px'}} className="devicon-jest-plain"></i>Jest
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<i style={{fontSize: '2.2rem', margin: '0px 6px -4px 0px'}} className="devicon-threejs-original"></i>ThreeJS
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<i style={{fontSize: '2.2rem', margin: '0px 6px -4px 0px'}} className="devicon-docker-plain"></i>Docker
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<i style={{fontSize: '2.2rem', margin: '0px 6px -4px 0px'}} className="devicon-git-plain"></i>Git
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<i style={{fontSize: '2.2rem', margin: '0px 6px -4px 0px'}} className="devicon-github-plain"></i>Github
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<i style={{fontSize: '2.2rem', margin: '0px 6px -4px 0px'}} className="devicon-mongodb-plain"></i>MongoDB
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<i style={{fontSize: '2.2rem', margin: '0px 6px -4px 0px'}} className="devicon-postgresql-plain"></i>PostgreSQL
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<i style={{fontSize: '2.2rem', margin: '0px 6px -4px 0px'}} className="devicon-sqlite-plain"></i>Sqlite
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<i style={{fontSize: '2.2rem', margin: '0px 6px -4px 0px'}} className="devicon-mysql-plain"></i>MySQL
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<i style={{fontSize: '2.2rem', margin: '0px 6px -4px 0px'}} className="devicon-linux-plain"></i>Linux
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<ShieldCheck style={skillIconStyle} /><SkillLabel>Front-end security and vulnerabilities</SkillLabel>
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<SearchCode style={skillIconStyle} /><SkillLabel>Crawlers</SkillLabel>
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<Bot style={skillIconStyle} /><SkillLabel>Non-human and inconsistent user behavior detection</SkillLabel>
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<MousePointer2 style={skillIconStyle} /><SkillLabel>Human behavior simulation</SkillLabel>
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<ScanFace style={skillIconStyle} /><SkillLabel>Human fingerprint recognition and spoofing</SkillLabel>
						</retroList.ListItemField>
					</retroList.ListItem>
					<retroList.ListItem>
						<retroList.ListItemField>
							<Network style={skillIconStyle} /><SkillLabel>Proxies, VPN, multi-hop VPN and Tor bridges</SkillLabel>
						</retroList.ListItemField>
					</retroList.ListItem>
				</retroList.List>
			</RetroDiv>
		</ContainerAbout>
	)
}
