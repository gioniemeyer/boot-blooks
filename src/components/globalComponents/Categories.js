import styled from "styled-components";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const req = axios.get(`${process.env.REACT_APP_API_BASE_URL}/categories`);
    req.then((res) => {
      setCategories(res.data);
    });
  }, []);
  return (
    <Container> 
      {categories.map((e) => {
        return (<p>{e.name}</p>);
      })}
    </Container>
  );
}

const Container = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color:black;

  p {
    font-weight: bold;
    letter-spacing: 0.8;
    :hover {
      cursor: pointer;
    }
  }
`;
