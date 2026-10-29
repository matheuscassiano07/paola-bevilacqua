// Configuração do contato. Preencha o número com DDI + DDD, só dígitos (ex.: 5531999999999).
const WHATSAPP = "";
const MENSAGEM = "Olá, Paola! Vim pelo site e gostaria de informações sobre o atendimento.";

document.documentElement.classList.add("js");

const linkWhats = WHATSAPP
  ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MENSAGEM)}`
  : "#duvidas"; // sem número configurado, o botão leva às dúvidas em vez de quebrar

window.dataLayer = window.dataLayer || [];

document.querySelectorAll("[data-agendar]").forEach((a) => {
  a.href = linkWhats;
  if (WHATSAPP) {
    a.target = "_blank";
    a.rel = "noopener";
  }
  // Mede só qual botão foi clicado; nenhum dado pessoal ou de saúde é enviado.
  a.addEventListener("click", () => {
    window.dataLayer.push({ event: "agendar_click", local_botao: a.dataset.agendar });
  });
});

const topo = document.getElementById("topo");
const flutuante = document.querySelector(".flutuante");
const aoRolar = () => {
  const y = window.scrollY;
  topo.classList.toggle("rolou", y > 8);
  flutuante.classList.toggle("ver", y > window.innerHeight * 0.6);
};
window.addEventListener("scroll", aoRolar, { passive: true });
aoRolar();

const itens = document.querySelectorAll(".revela");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("ok");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px" }
  );
  itens.forEach((el) => io.observe(el));
} else {
  itens.forEach((el) => el.classList.add("ok"));
}

document.querySelectorAll("[data-ano]").forEach((el) => (el.textContent = new Date().getFullYear()));
