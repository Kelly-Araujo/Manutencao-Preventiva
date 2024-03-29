document.getElementById('maintenanceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter os dados do formulário
    var formData = new FormData(this);
    var name = formData.get('name');
    var email = formData.get('email');
    var datetime = formData.get('datetime');

    // Exibir uma mensagem de confirmação
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = '<p>Olá, ' + name + '! Seu agendamento para ' + datetime + ' foi confirmado. Enviaremos um e-mail para ' + email + ' com mais detalhes.</p>';

    // Limpar o formulário
    this.reset();
});
