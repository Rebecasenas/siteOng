(function(){
    emailjs.init("SEU_USER_ID"); // substituir com o user id da empresa
})();

// Manipulador de envio do formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // previne o site de recarregar a página

    const templateParams = {
        from_name: document.getElementById('name').value, //nome
        from_email: document.getElementById('email').value, //email
        from_tel: document.getElementById('tel').value, //telefone
        message: document.getElementById('message').value, //mensagem
    };

    // Envie o email
    emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('Email enviado com sucesso!', response.status, response.text);
            alert('Email enviado com sucesso!');
        }, function(error) {
            console.error('Erro ao enviar o email:', error);
            alert('Falha ao enviar o email. Tente novamente!');
        });
});