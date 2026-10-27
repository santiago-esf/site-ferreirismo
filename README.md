# Portal institucional — Publicação GitHub Pages

Site estático em HTML, CSS e JavaScript, com navegação PT/EN.

## Publicar

1. Extrai o ZIP.
2. Abre o teu repositório no GitHub, seleciona **Add file → Upload files** e arrasta **os ficheiros e a pasta assets que estão dentro do ZIP**, sem colocá-los numa pasta adicional.
3. Confirma que `index.html` aparece na raiz do repositório.
4. Em **Settings → Pages → Build and deployment**, seleciona **Deploy from a branch**.
5. Escolhe `main` e `/(root)` e guarda.
6. Aguarda que o GitHub termine a publicação e abre o endereço indicado em Pages.

O site usa caminhos relativos (`style.css`, `app.js`, `assets/...`) e rotas do tipo `#/lider` para funcionar também em repositórios de projeto (`username.github.io/repositorio/`).

## Organização
- `index.html`: estrutura e cabeçalho
- `style.css`: estilos e animações
- `app.js`: rotas, conteúdo e idioma
- `assets/`: imagens locais
- `.nojekyll`: evita processamento Jekyll

As bibliotecas Font Awesome e Google Fonts são carregadas de CDNs públicos, requerendo ligação à Internet para apresentação completa.
