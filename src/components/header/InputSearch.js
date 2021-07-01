import React from "react";
import styled from "styled-components";
import {AiOutlineSearch
} from "react-icons/ai";

export default function InputSearch() {
  return (
     <InputContainer>
      <SearchInput
      type="text" name="booksTitle" placeholder="Pesquisar" 
      className="search-box" value="" onChange=""
      debounceTimeout={300}
      ></SearchInput>
      <SearchIcon />
    </InputContainer>
  );
}
const SearchInput = styled.input`
width: 170px;
height: 20px;
text-decoration: none;
border: 1px solid black;
border-radius: 2px;
outline: transparent;
padding-left: 10px;
::-webkit-input-placeholder {
      color: #000000;
      font-size: 13px;
    }
`;
const InputContainer = styled.div`
position: relative;
`;

const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  top:4.5px;
  right: 5px;
  font-size: 15px;
  cursor: pointer;
`;