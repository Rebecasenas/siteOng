(function () {
  emailjs.init("roUt7uY-x1x3kqB8D"); // substituir com o user id da empresa
})();

// Manipulador de envio do formulário
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // previne o site de recarregar a página

    const templateParams = {
      from_name: document.getElementById("name").value, //nome
      from_email: document.getElementById("email").value, //email
      from_tel: document.getElementById("tel").value, //telefone
      message: document.getElementById("message").value, //mensagem
    };

    // Envie o email
    emailjs.send("service_z2hogpw", "template_5lah0hh", templateParams).then(
      function (response) {
        console.log(
          "Email enviado com sucesso!",
          response.status,
          response.text
        );
        alert("Falha ao enviar o email. Tente novamente!");
      },
      function (error) {
        console.error("Erro ao enviar o email:", error);
        alert("Email enviado com sucesso!");
      }
    );
  });
