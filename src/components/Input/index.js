import styled from "styled-components"

const Input = styled.input`
    text-align: center
    border: 1px solid #FFF;
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;

    input::placeholder {
        text-align: center;
    }

    &::placeholder {
        color: #FFF;
        font-size: 16px;
        text-align: center;
    }
`

export default Input