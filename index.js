function iniciaModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("mostrar");
    modal.addEventListener("click", (e) => {
      if (e.target.id == modalId || e.target.className == "fechar")
        modal.classList.remove("mostrar");
    });
  }
}
function Login() {
  let done = 0;
  let usuario = document.getElementById("email").value;
  let senha = document.getElementById("passwd").value;
  if (usuario == "admin" && senha == "admin") {
    window.location = "/welcome.html";
    done = 1;
  }
  if (done == 0) {
    iniciaModal("modal-alert");
  }
}
