// Configuração do contato. Preencha o número com DDI + DDD, só dígitos (ex.: 5531999999999).
const WHATSAPP = "5516981702002";
const MENSAGEM = "Olá, Paola! Vim pelo site e gostaria de informações sobre o atendimento.";

// As classes "js" e "anima" já vêm do <head>; aqui só garante caso o script inline falte.
document.documentElement.classList.add("js");
const anima = document.documentElement.classList.contains("anima");

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

// Frase do topo entra palavra por palavra.
const frase = document.querySelector(".hero__frase");
if (anima && frase) {
  const palavras = frase.textContent.trim().split(/\s+/);
  frase.textContent = "";
  palavras.forEach((p, i) => {
    const s = document.createElement("span");
    s.className = "pal";
    s.style.setProperty("--i", i);
    s.textContent = p;
    frase.append(s, i < palavras.length - 1 ? " " : "");
  });
  frase.classList.add("dividida");
}

// Entrada ao rolar: blocos de texto e itens de lista, com atraso em cascata entre irmãos.
const alvos = [
  ".sec__cab > *", ".sobre__txt > p", ".sobre__txt > h2", ".credenciais > div",
  ".modal__txt > *", ".praticas li", ".faq__cab > *", ".faq details",
  ".final__in > *", ".demandas > li", ".valores > li", ".passos > li", ".abord__cols > div",
  ".valores__titulo", ".rodape__grid > div",
];
document.querySelectorAll(alvos.join(",")).forEach((el) => el.classList.add("revela"));
document.querySelectorAll(".revela").forEach((el) => {
  const irmaos = [...el.parentElement.children].filter((c) => c.classList.contains("revela"));
  el.style.setProperty("--d", `${Math.min(irmaos.indexOf(el) * 90, 540)}ms`);
});

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

// Rolagem: borda e barra de progresso do topo, botão flutuante e parallax leve.
const topo = document.getElementById("topo");
const flutuante = document.querySelector(".flutuante");
const parallax = anima
  ? [
      [document.querySelector(".hero__ceu"), 0.06],
      [document.querySelector(".padrao"), -0.12],
      [document.querySelector(".sobre__quadro"), 0.04],
    ].filter(([el]) => el)
  : [];

let pendente = false;
const aoRolar = () => {
  pendente = false;
  const y = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  topo.classList.toggle("rolou", y > 8);
  topo.style.setProperty("--prog", total > 0 ? (y / total).toFixed(4) : 0);
  flutuante.classList.toggle("ver", y > window.innerHeight * 0.6);
  // "translate" separado do "transform" para não brigar com as animações de entrada.
  parallax.forEach(([el, f]) => {
    const r = el.getBoundingClientRect();
    const centro = r.top + r.height / 2 - window.innerHeight / 2;
    el.style.translate = `0 ${(centro * f).toFixed(1)}px`;
  });
};
window.addEventListener(
  "scroll",
  () => {
    if (!pendente) {
      pendente = true;
      requestAnimationFrame(aoRolar);
    }
  },
  { passive: true }
);
window.addEventListener("resize", aoRolar);
aoRolar();

document.querySelectorAll("[data-ano]").forEach((el) => (el.textContent = new Date().getFullYear()));
