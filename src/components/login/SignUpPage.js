import SignInPage from "../signIn/SignInPage";
import HomePage from "../../home/HomePage";
import FormSignUp from "./FormSignUp";
import { Container, SignUp, Division } from "../styledComponents/StyledSignUpPage";

export default function SignUpPage() {
  return (
    <>
      <HomePage />
      <Container>
        <SignInPage />
        <Division>
        </Division>
        <SignUp>
          <h1>Criar novo cadastro</h1>
          <p>
            Use o formulário abaixo para cadastrar-se na loja.
            <br /> É rápido e fácil.
          </p>
          <FormSignUp />
        </SignUp>
      </Container>
    </>
  );
}