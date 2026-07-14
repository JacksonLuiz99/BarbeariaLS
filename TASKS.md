# Tarefas — Melhorias do Site Barbearia LS

Lista de pontos de melhoria identificados em análise do `index.html`. Marcar `[x]` conforme forem implementados.

## Funcionalidade / bugs

- [ ] Corrigir o link do manifest (`<link rel="manifest" href="/site.webmanifest">`) para apontar para `img/favicon_io/site.webmanifest`, que é onde o arquivo realmente está.
- [ ] Adicionar tags Open Graph e Twitter Card (título, descrição, imagem) para que links compartilhados no WhatsApp/Instagram/Facebook mostrem prévia.
- [ ] Adicionar `<link rel="canonical">` apontando para a URL oficial do site.
- [ ] Adicionar atributo `title` no iframe do Google Maps.
- [ ] Extrair número/mensagem do WhatsApp para uma única constante (JS) usada tanto no rodapé quanto no botão flutuante, evitando divergência futura.

## Performance

- [ ] Substituir o Tailwind via CDN JIT (`cdn.tailwindcss.com`) por um build estático (Tailwind CLI ou PostCSS) com CSS purgado, para produção.
- [ ] Adicionar `width`/`height` e `loading="lazy"` nas imagens (exceto a do hero).
- [ ] Converter imagens para formatos modernos (`.webp`/`.avif`) para reduzir peso da página.
- [ ] Adicionar `rel="preload"` para a imagem do hero (`capa.png`), que é o elemento LCP.

## Acessibilidade

- [ ] Tornar as legendas dos cards de clientes (`#clients`) acessíveis via teclado/toque, não apenas via `group-hover` (usar `focus-visible` ou alternativa sem hover).
- [ ] Adicionar `aria-hidden="true"` nos ícones decorativos (`bi-*`).
- [ ] Verificar contraste de cor de `text-zinc-500`/`text-zinc-600` sobre fundo escuro no rodapé (WCAG AA).

## Conteúdo / SEO

- [ ] Criar `sitemap.xml` e `robots.txt`.
- [ ] Adicionar dados estruturados JSON-LD (`LocalBusiness`) com endereço, telefone e horário de funcionamento.
- [ ] Exibir horário de funcionamento e telefone como texto visível na página (não apenas dentro do link do WhatsApp), incluindo um link `tel:`.

## Organização do código

- [ ] Escrever um `README.md` com descrição mínima do projeto e instruções de uso/deploy.
- [ ] Adicionar `.gitignore` (relevante principalmente se um passo de build for introduzido).

## Concluído

- [x] Corrigir o botão de menu mobile para funcionar de fato (toggle via `js/mobile-menu.js`, ícone dinâmico, fechamento por link/Esc/resize).
