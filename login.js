function redirectToTrabalho() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    // Verifica se o e-mail e a senha foram preenchidos
    if (email && senha) {
        // Redireciona para a página trabalho.html
        window.location.href = "trabalho.html";
        return false;  // Impede o envio real do formulário
    } else {
        alert("Por favor, preencha todos os campos.");
        return false;  // Impede o envio se os campos estiverem vazios
    }
}
