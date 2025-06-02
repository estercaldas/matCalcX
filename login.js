document.querySelector(".botao-entrar").addEventListener("click", function () {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!email || !senha) {
    alert("Preencha todos os campos.");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  // Aceitar nome + sobrenome como usuário
  const usuario = usuarios.find(u => (u.nome + " " + u.sobrenome).toLowerCase() === email.toLowerCase() && u.senha === senha);

  if (usuario) {
    alert("Login realizado com sucesso!");
    window.location.href = "home.html";
  } else {
    alert("Usuário ou senha incorretos.");
  }
});

// Recuperação de senha
document.querySelector(".link").addEventListener("click", function () {
  const email = prompt("Digite seu nome completo para recuperar a senha (Ex: Ana Silva):");
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  const usuario = usuarios.find(u => (u.nome + " " + u.sobrenome).toLowerCase() === email.toLowerCase());
  if (usuario) {
    alert(`Sua senha é: ${usuario.senha}`);
  } else {
    alert("Usuário não encontrado.");
  }
});