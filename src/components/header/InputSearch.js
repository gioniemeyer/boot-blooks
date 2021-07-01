import React from "react";
import styled from "styled-components";

export default function InputSearch() {
  return (
      <SearchInput
      type="text" name="username" placeholder="Pesquisar" 
      className="search-box" value="value" onChange=""
      debounceTimeout={300}
      ></SearchInput>
  );
}

const SearchInput = styled.input`
width: 100px;
height: 15px;
text-decoration: none;
outline: 1px solid black;
`;
