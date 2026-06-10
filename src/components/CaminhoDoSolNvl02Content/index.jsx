import styled from 'styled-components'
import { ProjectLink } from '../projectLink'
import { ProjectTitle } from '../projectTitle'

const CaminhoDoSolNvl02Container = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: 1fr 6fr;
    grid-gap: 10px;
`

export function CaminhoDoSolNvl02Content() {
	return (
		<CaminhoDoSolNvl02Container>
            <ProjectTitle title='Caminho do Sol LVL 02' />
            <ProjectLink link='https://test2-beige-theta.vercel.app/' description='The caminho-do-sol level 2 project landing page.' />
        </CaminhoDoSolNvl02Container>
	)
}
