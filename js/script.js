
// Atualizar automaticamente o ano do rodapé
const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Funcionalidade do formulário de contacto
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        // Impedir o envio tradicional do formulário
        event.preventDefault();

        // Obter os dados preenchidos
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        const formMessage = document.getElementById("formMessage");

        // Verificar os campos
        if (nome === "" || email === "" || mensagem === "") {
            formMessage.textContent = "Por favor, preenche todos os campos.";
            formMessage.className = "mt-3 text-danger";
            return;
        }

        // Apresentar mensagem de sucesso
        formMessage.textContent =
            "Obrigado, " + nome + "! A tua mensagem foi validada com sucesso.";

        formMessage.className = "mt-3 text-success fw-bold";

        // Limpar o formulário
        contactForm.reset();
    });
}
