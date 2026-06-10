import styled from 'styled-components'
import { ProjectLink } from '../projectLink'
import { ProjectTitle } from '../projectTitle'

const CaminhoDoSolNvl03Container = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: 1fr 6fr;
    grid-gap: 10px;
`

export function CaminhoDoSolNvl03Content() {
	return (
		<CaminhoDoSolNvl03Container>
            <ProjectTitle title='Caminho do Sol LVL 03' />
            <ProjectLink link='https://www.caminho-do-sol.org/' description='The caminho-do-sol level 3 project landing page.' />
        </CaminhoDoSolNvl03Container>
	)
}
