import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export default function InputSearch() {
  const [search, setSearch] = useState("");
  return (
    <InputContainer>
      <SearchInput
        type="text"
        name="booksTitle"
        placeholder="Pesquisar"
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
  @media (max-width: 614px) {
    width: 100%;
    border: 1px solid white;
  }
`;
const InputContainer = styled.div`
  position: relative;
  width: 82%;
  padding-left: 10px;
`;

const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  top: 4.5px;
  right: 5px;
  font-size: 15px;
  cursor: pointer;
`;
