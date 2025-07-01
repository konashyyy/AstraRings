// Alternância entre abas
const tabLogin = document.getElementById("tab-login");
const tabRegister = document.getElementById("tab-register");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const formTitle = document.getElementById("form-title");

tabLogin.addEventListener("click", function (e) {
  e.preventDefault();
  tabLogin.classList.add("active");
  tabRegister.classList.remove("active");
  formTitle.textContent = "ENTRAR";
  loginForm.classList.remove("hidden-form");
  loginForm.classList.add("active-form");
  registerForm.classList.add("hidden-form");
  registerForm.classList.remove("active-form");
});

tabRegister.addEventListener("click", function (e) {
  e.preventDefault();
  tabRegister.classList.add("active");
  tabLogin.classList.remove("active");
  formTitle.textContent = "REGISTRAR-SE";
  registerForm.classList.remove("hidden-form");
  registerForm.classList.add("active-form");
  loginForm.classList.add("hidden-form");
  loginForm.classList.remove("active-form");
});

// Redireciona após login
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // Aqui pode colocar validação real
  window.location.href = "main.html";
});

// Registro simulado
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Registro efetuado com sucesso!");
  window.location.href = "main.html";
});