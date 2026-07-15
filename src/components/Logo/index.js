import logo from '../../assets/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 20px;
    align-items: center;
`

const ImgLogo = styled.img`
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    margin-right: 10px;
    display: flex;
    margin: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <ImgLogo src={logo} alt="logo"/>
            <p><strong>Alura</strong> books</p>
        </LogoContainer>
    )
}

export default Logo