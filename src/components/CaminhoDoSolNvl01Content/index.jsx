import styled from 'styled-components'
import { ProjectLink } from '../projectLink'
import { ProjectTitle } from '../projectTitle'

const CaminhoDoSolNvl01Container = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: 1fr 6fr;
    grid-gap: 10px;
`

export function CaminhoDoSolNvl01Content() {
	return (
		<CaminhoDoSolNvl01Container>
            <ProjectTitle title='Caminho do Sol LVL 01' />
            <ProjectLink link='https://danielmacedo.vercel.app/' description='The caminho-do-sol level 1 project landing page.' />
        </CaminhoDoSolNvl01Container>
	)
}
