document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const matricula = document.getElementById('matricula').value;
  const senha = document.getElementById('senha').value;

  const usuario = {
    nome,
    sobrenome,
    matricula,
    senha
  };

  fetch('/cadastro', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
  })
    .then(response => response.text())
    .then(data => {
      alert(data);
      window.location.href = 'login.html';
    })
    .catch(error => {
      console.error('Erro:', error);
    });
});