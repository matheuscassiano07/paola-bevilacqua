# Landing page: Paola Bevilacqua

Site estático (HTML + CSS + JS, sem build). Para publicar, suba a pasta inteira em qualquer hospedagem estática (Netlify, Vercel, Hostinger, Cloudflare Pages).

## Falta preencher antes de publicar

1. **Segunda foto** para a seção "Sobre": troque o bloco `sobre__quadro` por `<img src="assets/paola-2.webp">`. Hoje só existe uma foto profissional no material.
2. **ID da tag das campanhas**: `TAG_ID` em `main.js`. Sem ele, nada do Google carrega e o aviso de cookies não aparece.
3. **Domínio próprio**: hoje canonical e og apontam para `paola-bevilacqua.vercel.app`. Ao trocar, atualizar `canonical`, `og:url` e `og:image` em `index.html`.
4. **Validar com a Paola** as respostas do FAQ (o briefing pede validação dela).

## Contato configurado

- WhatsApp (16) 98170-2002: constante `WHATSAPP` em `main.js` (`5516981702002`), usada por todos os botões de agendamento.
- E-mail paola@bevilacqua.com.br e Instagram @paolabevilacqua_psicologia no rodapé e na política de privacidade.

## Medição

- Todo botão de agendamento envia `agendar_click` com `local_botao` (topo, hero, modalidades, agendamento, cta-final, rodape, flutuante) para o `dataLayer`.
- `TAG_ID` em `main.js` aceita `GTM-...` (Tag Manager) ou `G-...`/`AW-...` (Google Tag). Só carrega depois de o visitante aceitar os cookies.
- No Tag Manager, crie um acionador de evento personalizado `agendar_click` e ligue nele a conversão. Com Google Ads direto, preencha também `CONVERSAO_ADS` (`AW-.../rotulo`).
- A personalização de anúncios fica sempre negada (área da saúde). Nunca envie dados de saúde.

## Ética (CFP)

- Os valores das sessões não aparecem no site de propósito: o Código de Ética veda usar preço como propaganda. O FAQ direciona para o WhatsApp.
- Sem depoimentos, sem promessa de resultado, sem vocabulário vetado pelo manual de marca ("transforme sua vida", "melhor versão" etc.).
