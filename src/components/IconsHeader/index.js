import perfil from '../../assets/perfil.svg'
import cart from '../../assets/sacola.svg'
import styled from 'styled-components'

const imagens = [perfil, cart]

const Icons = styled.ul`
    display: flex;
    align-items: center;
`
const Icon = styled.li`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 25px;
    margin-right: 40px;
`

function IconsHeader() {
    return (
        <Icons>
          {imagens.map((icone) => (
            <Icon><img src={icone} alt='icone'></img></Icon>
          ))}
        </Icons>
    )
}

export default IconsHeader