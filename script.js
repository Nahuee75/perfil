document.querySelector("#year").textContent = new Date().getFullYear();

const copyButton = document.querySelector(".copy-email");

copyButton?.addEventListener("click", async () => {
  const email = copyButton.dataset.email;
  const originalHtml = copyButton.innerHTML;

  try {
    await navigator.clipboard.writeText(email);
    copyButton.setAttribute("title", "Copiado");
    copyButton.setAttribute("aria-label", "Correo copiado");
    copyButton.classList.add("copied");
  } catch {
    copyButton.setAttribute("title", email);
  }

  window.setTimeout(() => {
    copyButton.innerHTML = originalHtml;
    copyButton.setAttribute("title", "Copiar correo");
    copyButton.setAttribute("aria-label", "Copiar correo");
    copyButton.classList.remove("copied");
  }, 1800);
});
