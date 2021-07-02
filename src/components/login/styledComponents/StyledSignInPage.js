import styled from "styled-components";

const SignIn = styled.div`
  width: 40%;
  display: flex;
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
    width: 100%;
    height: 340px;
  }
`;

export { SignIn };
