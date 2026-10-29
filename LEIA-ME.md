# Landing page: Paola Bevilacqua

Site estático (HTML + CSS + JS, sem build). Para publicar, suba a pasta inteira em qualquer hospedagem estática (Netlify, Vercel, Hostinger, Cloudflare Pages).

## Falta preencher antes de publicar

1. **WhatsApp**: em `main.js`, a constante `WHATSAPP` (DDI + DDD + número, só dígitos). Sem ela, os botões levam às perguntas frequentes.
2. **Formação, especializações e experiência**: em `index.html`, procure por `class="pendente"` (aparecem em amarelo na página).
3. **E-mail profissional**: rodapé do `index.html` e `politica-de-privacidade.html`.
4. **Segunda foto** para a seção "Sobre": troque o bloco `sobre__quadro` por `<img src="assets/paola-2.webp">`. Hoje só existe uma foto profissional no material.
5. **Domínio**: `<link rel="canonical">` em `index.html`.
6. **Data** da política de privacidade.
7. **Validar com a Paola** os temas da seção "Talvez algo disso faça sentido para você" e as respostas do FAQ (o briefing pede validação dela).

## Medição

- Todo botão de agendamento envia `agendar_click` com `local_botao` (topo, hero, modalidades, agendamento, cta-final, rodape, flutuante) para o `dataLayer`.
- O Google Tag Manager está comentado no `<head>`. Só ative junto com um aviso de cookies, e nunca envie dados de saúde.

## Ética (CFP)

- Os valores das sessões não aparecem no site de propósito: o Código de Ética veda usar preço como propaganda. O FAQ direciona para o WhatsApp.
- Sem depoimentos, sem promessa de resultado, sem vocabulário vetado pelo manual de marca ("transforme sua vida", "melhor versão" etc.).
