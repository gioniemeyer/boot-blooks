
 function ErrorSignUp({error}) {
    if (error.response.status === 409) {
        alert(
          "Esse e-mail nao está disponível. Outro usuário já é cadastrado com o respectivo endereço."
        );
        return;
      } 
      else if (error.response.status === 400) {
        alert("Preencha os campos corretamente.");
        return;
      }
}