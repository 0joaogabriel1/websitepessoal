document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form"); // Seleciona o formulário
    const confirmationMessage = document.getElementById("confirmationMessage"); // Mensagem de sucesso
    const errorMessage = document.getElementById("errorMessage"); // Mensagem de erro
    const nameField = form.querySelector("input[type='text']"); // Nome
    const emailField = form.querySelector("input[type='email']"); // Email
    const numberField = form.querySelector("input[type='number']"); // Número

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Previne o envio do formulário

        // Esconde qualquer mensagem anterior
        errorMessage.classList.remove("show");
        confirmationMessage.classList.remove("show");

        // Verificar se todos os campos obrigatórios estão preenchidos
        if (nameField.value.trim() === "" || emailField.value.trim() === "" || numberField.value.trim() === "") {
            // Exibe a mensagem de erro
            errorMessage.classList.add("show");

            // Esconder a mensagem após 5 segundos
            setTimeout(() => {
                errorMessage.classList.remove("show");
            }, 5000);
        } else {
            // Exibe a mensagem de sucesso
            confirmationMessage.classList.add("show");

            // Limpa os campos do formulário
            form.reset();

            // Esconde a mensagem após 5 segundos
            setTimeout(() => {
                confirmationMessage.classList.remove("show");
            }, 5000);
        }
    });
});
