import styled from "styled-components"

const textoOpcoes = ['Categorias', 'Minha Estante', 'Favoritos']

const Opcoes = styled.ul`
    display: flex;
`
const Opcao = styled.li`
    font-size: 16px;
    min-width: 120px;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

function OpcoesHeader () {
    return (
        <Opcoes>

            {textoOpcoes.map( (texto) => (
              <Opcao className='opcao'>{texto}</Opcao>
            ))}
          
        </Opcoes>
    )
}

export default OpcoesHeader