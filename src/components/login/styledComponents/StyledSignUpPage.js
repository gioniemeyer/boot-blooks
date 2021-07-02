import styled from "styled-components";

const Container = styled.div`
  padding: 100px 0px 100px 0px;
  width: 70%;
  display: flex;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  margin: 0 auto;
  @media (max-width: 614px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Division = styled.div`
  width: 0.5px;
  height: 500px;
  background-color: gray;
  @media (max-width: 614px) {
    display: none;
  }
`;

const SignUp = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: black;
  position: relative;

  h1 {
    font-size: 30px;
    margin-bottom: 20px;
    color: #8e1a0a;
  }
  p {
    font-size: 13px;
    line-height: 18px;
    color: gray;
  }
  @media (max-width: 614px) {
    margin-top: 20px;
    width: 100%;
    height: 640px;
  }
`;

export { Container, Division, SignUp };
