import Input from "../Input"
import styled from "styled-components"
import { useState } from "react"
import { books } from "./dataSearch"

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

function Search () {

    const [bookSearch, setBookSearch] = useState([])

    console.log(bookSearch)
    
    return (
    <SearchContainer>
        <Title>Já sabe por onde começar?</Title>
        <Subtitle>Pesquise seu livro aqui</Subtitle>
        <Input
            placeholder="Escreva sua proxima leitura"
            onBlur={(event) => {
                const textInput = event.target.value;
                const resultSearch = books.filter(book => book.name?.toLowerCase().includes(textInput.toLowerCase()));
                setBookSearch(resultSearch)
            }}
        />
        { bookSearch.map( book => (
            <div key={book.id}>
                <img src={book.src} alt={book.name} />
                <p>{book.name}</p>
            </div>
            ))
        }
    </SearchContainer>
    )
}

export default Search