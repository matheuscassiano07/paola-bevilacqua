# Landing page: Paola Bevilacqua

Site estático (HTML + CSS + JS, sem build). Para publicar, suba a pasta inteira em qualquer hospedagem estática (Netlify, Vercel, Hostinger, Cloudflare Pages).

## Falta preencher antes de publicar

1. **Formação, especializações e experiência**: em `index.html`, procure por `class="pendente"` (aparecem em amarelo na página).
2. **Segunda foto** para a seção "Sobre": troque o bloco `sobre__quadro` por `<img src="assets/paola-2.webp">`. Hoje só existe uma foto profissional no material.
3. **Domínio**: `<link rel="canonical">` em `index.html`.
4. **Data** da política de privacidade.
5. **Validar com a Paola** os temas da seção "Talvez algo disso faça sentido para você" e as respostas do FAQ (o briefing pede validação dela).

## Contato configurado

- WhatsApp (16) 98170-2002: constante `WHATSAPP` em `main.js` (`5516981702002`), usada por todos os botões de agendamento.
- E-mail paola@bevilacqua.com.br e Instagram @paolabevilacqua_psicologia no rodapé e na política de privacidade.

## Medição

- Todo botão de agendamento envia `agendar_click` com `local_botao` (topo, hero, modalidades, agendamento, cta-final, rodape, flutuante) para o `dataLayer`.
- O Google Tag Manager está comentado no `<head>`. Só ative junto com um aviso de cookies, e nunca envie dados de saúde.

## Ética (CFP)

- Os valores das sessões não aparecem no site de propósito: o Código de Ética veda usar preço como propaganda. O FAQ direciona para o WhatsApp.
- Sem depoimentos, sem promessa de resultado, sem vocabulário vetado pelo manual de marca ("transforme sua vida", "melhor versão" etc.).
