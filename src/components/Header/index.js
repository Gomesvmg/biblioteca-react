import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconsHeader from '../IconsHeader'
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: aliceblue;
    display: flex;
    justify-content: space-around;
`

function Header () {

    return (

        <HeaderContainer>

            <Logo/>
            <OpcoesHeader/>
            <IconsHeader/>

        </HeaderContainer>
    )
}

export default Header