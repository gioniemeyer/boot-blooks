export default function ErrorSignIn({error}) {
     if (error.response.status === 401) {
        alert("Senha incorreta! Tente novamente.");
        return;
      }
     else  if (error.response.status === 400) {
        alert("Preencha os campos corretamente.");
        return;
      }
     else if (error.response.status === 409) {
        alert("Não encontramos um registro de usuário para esse e-mail.");
        return;
      }

}

