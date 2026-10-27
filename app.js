'use strict';

const basePages = [
  { path: '/', title: 'Início', desc: 'Página principal do portal e das instituições nacionais.' },
  { path: '/lider', title: 'O Líder', desc: 'Perfil, funções, mensagem e agenda da Chefia Nacional.' },
  { path: '/governo', title: 'Governo', desc: 'Ação governativa, órgãos de coordenação e serviços centrais.' },
  { path: '/estado', title: 'O Estado', desc: 'Organização institucional e administração nacional.' },
  { path: '/prioridades', title: 'Prioridades', desc: 'Programa nacional e eixos de desenvolvimento.' },
  { path: '/atualidade', title: 'Atualidade', desc: 'Comunicados e iniciativas institucionais.' },
  { path: '/documentos', title: 'Documentos', desc: 'Textos de referência e publicações institucionais.' },
  { path: '/simbolos', title: 'Símbolos Nacionais', desc: 'Brasão e elementos da identidade nacional.' },
  { path: '/contactos', title: 'Contactos', desc: 'Informações institucionais e contactos do portal.' },
  { path: '/acessibilidade', title: 'Acessibilidade', desc: 'Ferramentas de navegação e apresentação.' }
];

const news = [
  { date: '27 OUT 2026', type: 'COMUNICADO', title: 'Chefia Nacional recebe estruturas do Estado para sessão de coordenação', intro: 'A Chefia Nacional reuniu os serviços centrais num encontro dedicado à articulação institucional e ao acompanhamento das prioridades nacionais.', icon: 'fa-landmark' },
  { date: '24 OUT 2026', type: 'AGENDA', title: 'Programa de proximidade com as comunidades entra em nova fase', intro: 'Foi anunciada a continuação de um ciclo de visitas e sessões públicas dedicado à valorização do território e das instituições.', icon: 'fa-calendar-days' },
  { date: '20 OUT 2026', type: 'INSTITUIÇÕES', title: 'Atualização do quadro de identidade visual do Estado', intro: 'Os símbolos nacionais e os elementos cerimoniais foram reorganizados numa nova apresentação digital.', icon: 'fa-shield-halved' },
  { date: '18 OUT 2026', type: 'CULTURA', title: 'Património, memória e continuidade institucional em destaque', intro: 'O portal dedica uma nova área à história simbólica e à valorização do património nacional.', icon: 'fa-book-open' }
];

const docs = [
  ['Lei Fundamental', 'Texto conceptual relativo à organização e às instituições do Estado.', 'fa-book'],
  ['Programa Nacional', 'Quadro orientador de prioridades e objetivos de desenvolvimento.', 'fa-file-lines'],
  ['Regulamento Protocolar', 'Regras ilustrativas de símbolos, honras e cerimónias institucionais.', 'fa-scroll'],
  ['Guia de Identidade', 'Apresentação dos elementos gráficos e heráldicos do portal.', 'fa-shield-halved']
];

const action = (url, text = 'Saber mais', cls = 'text-link') => `<a class="${cls}" href="${url}">${text}<i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>`;
const crumb = (parts = []) => `<div class="breadcrumbs container"><a href="#/">Início</a>${parts.map((x) => `<i class="fa-solid fa-angle-right"></i><span>${x}</span>`).join('')}</div>`;
const title = (eyebrow, heading, intro) => `<div class="page-heading"><div class="container"><div class="eyebrow">${eyebrow}</div><h1>${heading}</h1><p>${intro}</p></div></div>`;
const iconCard = (icon, name, desc, url) => `<a class="icon-card" href="${url}"><span class="round-icon"><i class="fa-solid ${icon}"></i></span><h3>${name}</h3><p>${desc}</p><span class="card-arrow"><i class="fa-solid fa-arrow-right"></i></span></a>`;
const storyCard = (n, i) => `<article class="news-card"><div class="news-art"><i class="fa-solid ${n.icon}"></i></div><div class="news-body"><div class="metadata">${n.type} <span>·</span> ${n.date}</div><h3>${n.title}</h3><p>${n.intro}</p>${action(`#/atualidade?artigo=${i}`, 'Ler comunicado')}</div></article>`;

function home() {
  return `
    <section class="hero-banner">
      <div class="container hero-content">
        <div class="hero-copy">
          <div class="eyebrow light"><span class="eyebrow-dash"></span> PORTAL INSTITUCIONAL</div>
          <h1>Um Estado.<br><em>Uma visão de futuro.</em></h1>
          <p>Conheça a liderança nacional, as instituições, as prioridades e a atividade do Estado Nacional Ferreirista através de um portal concebido em linguagem institucional.</p>
          <div class="hero-cta">
            <a class="btn btn-white" href="#/lider">Conhecer o Líder <i class="fa-solid fa-arrow-right"></i></a>
            <a class="hero-quiet" href="#/governo">Explorar o Governo <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <aside class="hero-sidecard">
          <img src="assets/brasao.png" alt="Brasão do Estado Nacional Ferreirista" />
          <div class="eyebrow light">CHEFIA NACIONAL</div>
          <h3>Santiago Ferreira</h3>
          <p>Líder Nacional do Estado Nacional Ferreirista</p>
          <div class="hero-meta">
            <div><i class="fa-solid fa-location-dot"></i><span><strong>Sede</strong><br>Palácio de S. Bento, Praça da Constituição de 1976, 1249-068 Lisboa</span></div>
            <div><i class="fa-solid fa-envelope"></i><span><strong>Email</strong><br>public@enf.gov</span></div>
            <div><i class="fa-solid fa-phone"></i><span><strong>Telefone</strong><br>(+351) 213 919 000</span></div>
          </div>
        </aside>
      </div>
    </section>

    <section class="quick-area">
      <div class="container quick-grid">
        ${iconCard('fa-user-tie','O Líder','Conheça a Chefia Nacional, a mensagem e a agenda institucional.','#/lider')}
        ${iconCard('fa-landmark','O Governo','Estrutura e ação dos órgãos de governação.','#/governo')}
        ${iconCard('fa-list-check','Prioridades','As áreas estratégicas do programa nacional.','#/prioridades')}
        ${iconCard('fa-file-lines','Documentos','Consulte os textos de referência do projeto.','#/documentos')}
      </div>
    </section>

    <section class="section container">
      <div class="section-top">
        <div>
          <div class="eyebrow">EM DESTAQUE</div>
          <h2>A Chefia Nacional</h2>
          <p>Uma área própria dedicada ao líder, à sua mensagem e às principais linhas de representação institucional.</p>
        </div>
        ${action('#/lider', 'Ver perfil institucional')}
      </div>
      <div class="feature-layout">
        <div class="feature-copy">
          <div class="feature-bar">MENSAGEM INSTITUCIONAL</div>
          <h2>Servir a nação é construir o seu amanhã.</h2>
          <p class="feature-quote">«O progresso nacional constrói-se com responsabilidade, conhecimento e dedicação ao bem comum.»</p>
          <p>Na apresentação oficial do Estado Nacional Ferreirista, a Chefia Nacional assume a representação da continuidade institucional, o estímulo ao desenvolvimento e a valorização do património coletivo.</p>
          <p>O portal passa a incluir uma secção própria dedicada ao Líder, com fotografia, agenda e informações institucionais.</p>
          <div class="signature">Santiago Ferreira <span>— Chefia Nacional</span></div>
        </div>
        <div class="feature-panel">
          <div class="panel-photo">
            <img src="assets/leader-portrait.png" alt="Retrato institucional do líder Santiago Ferreira" />
          </div>
          <div class="info-pills">
            <span class="pill">Liderança Nacional</span>
            <span class="pill">Representação do Estado</span>
            <span class="pill">Agenda Institucional</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section soft">
      <div class="container">
        <div class="section-top">
          <div>
            <div class="eyebrow">ATIVIDADE INSTITUCIONAL</div>
            <h2>Atualidade</h2>
            <p>Comunicados e destaques sobre a atividade do Estado Nacional Ferreirista.</p>
          </div>
          ${action('#/atualidade','Ver toda a atualidade')}
        </div>
        <div class="news-grid">${news.slice(0,3).map(storyCard).join('')}</div>
      </div>
    </section>

    <section class="section container">
      <div class="section-top">
        <div>
          <div class="eyebrow">AÇÃO NACIONAL</div>
          <h2>Áreas de prioridade</h2>
        </div>
        ${action('#/prioridades','Conhecer todas as prioridades')}
      </div>
      <div class="priority-grid">
        <a class="priority" href="#/prioridades"><i class="fa-solid fa-graduation-cap"></i><h3>Educação e conhecimento</h3><p>Qualificação, ensino e desenvolvimento científico.</p><i class="fa-solid fa-arrow-right priority-arrow"></i></a>
        <a class="priority" href="#/prioridades"><i class="fa-solid fa-industry"></i><h3>Economia e produção</h3><p>Capacidade produtiva, inovação e valorização do trabalho.</p><i class="fa-solid fa-arrow-right priority-arrow"></i></a>
        <a class="priority" href="#/prioridades"><i class="fa-solid fa-heart-pulse"></i><h3>Bem-estar e serviços</h3><p>Acesso a serviços essenciais e desenvolvimento social.</p><i class="fa-solid fa-arrow-right priority-arrow"></i></a>
      </div>
    </section>

    <section class="cta-section">
      <div class="container cta-inner">
        <div>
          <div class="eyebrow light">IDENTIDADE NACIONAL</div>
          <h2>Conheça os símbolos que representam o Estado.</h2>
          <p>Uma viagem pela heráldica e pela identidade visual desta identidade nacional.</p>
        </div>
        <a href="#/simbolos" class="btn btn-white">Explorar símbolos <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </section>`;
}

function leader() {
  return `${crumb(['O Líder'])}${title('CHEFIA NACIONAL','O Líder','Conheça o titular da Chefia Nacional, a sua mensagem institucional e os contactos da representação nacional.')}
    <section class="section container leader-grid">
      <div class="leader-image">
        <img src="assets/leader-portrait.png" alt="Fotografia institucional do líder Santiago Ferreira" />
        <div class="leader-caption">
          <span>Retrato institucional</span>
          <span>Santiago Ferreira — Líder Nacional</span>
        </div>
      </div>
      <div>
        <div class="eyebrow">LIDERANÇA NACIONAL</div>
        <h2 class="leader-name">Santiago Ferreira</h2>
        <p class="lead">Líder Nacional do Estado Nacional Ferreirista</p>
        <div class="gold-line"></div>
        <p>No quadro institucional deste enquadramento institucional, Santiago Ferreira exerce a Chefia Nacional, representando a continuidade das instituições e estabelecendo as linhas gerais da ação do Estado.</p>
        <p>A sua intervenção organiza-se em torno de compromissos como serviço público, desenvolvimento nacional, valorização do património coletivo e presença institucional junto dos órgãos do Estado.</p>
        <div class="leader-actions">
          <a href="#/lider?sec=mensagem" class="btn btn-primary">Mensagem do Líder <i class="fa-solid fa-arrow-right"></i></a>
          <a href="#/lider?sec=agenda" class="btn btn-outline">Agenda institucional</a>
        </div>
        <div class="contact-stack">
          <div class="contact-card"><i class="fa-solid fa-location-dot"></i><div><strong>Sede</strong><span>Palácio de S. Bento, Praça da Constituição de 1976, 1249-068 Lisboa</span></div></div>
          <div class="contact-card"><i class="fa-solid fa-envelope"></i><div><strong>Email</strong><span>public@enf.gov</span></div></div>
          <div class="contact-card"><i class="fa-solid fa-phone"></i><div><strong>Telefone</strong><span>(+351) 213 919 000</span></div></div>
        </div>
      </div>
    </section>

    <section class="section soft" id="mensagem">
      <div class="container narrow">
        <div class="eyebrow">MENSAGEM DO LÍDER</div>
        <h2>Uma palavra à nação</h2>
        <blockquote class="leader-quote">«O progresso nacional constrói-se com responsabilidade, conhecimento e dedicação ao bem comum.»</blockquote>
        <p>Dirijo-me a todos os cidadãos desta comunidade nacional com um propósito claro: apresentar uma visão de continuidade institucional, trabalho e confiança no futuro.</p>
        <p>Na vida de uma nação, as instituições encontram o seu sentido no serviço prestado à comunidade. A educação, a capacidade de criar, a defesa do património e o funcionamento dos serviços são compromissos permanentes.</p>
        <p>Este portal traduz essa realidade oficializada, com uma linguagem de representação institucional e uma apresentação centrada na liderança, nas estruturas do Estado e no seu programa de ação.</p>
      </div>
    </section>

    <section class="section container">
      <div class="section-top">
        <div>
          <div class="eyebrow">INSTITUIÇÃO</div>
          <h2>Funções da Chefia Nacional</h2>
        </div>
      </div>
      <div class="three-grid">
        <div class="info-card"><i class="fa-solid fa-flag"></i><h3>Representação nacional</h3><p>Representar o Estado nas cerimónias, nos atos oficiais e nas grandes comunicações institucionais.</p></div>
        <div class="info-card"><i class="fa-solid fa-scale-balanced"></i><h3>Coordenação institucional</h3><p>Definir orientações gerais e promover a articulação entre os serviços e os órgãos do Estado.</p></div>
        <div class="info-card"><i class="fa-solid fa-handshake"></i><h3>Relações institucionais</h3><p>Reforçar a presença da Chefia Nacional junto das estruturas administrativas e representativas.</p></div>
      </div>
    </section>

    <section class="section soft" id="agenda">
      <div class="container">
        <div class="section-top">
          <div>
            <div class="eyebrow">AGENDA</div>
            <h2>Agenda institucional</h2>
            <p>Compromissos representativos e momentos de presença institucional associados à Chefia Nacional.</p>
          </div>
        </div>
        <div class="agenda-list">
          <article class="agenda-item"><span class="agenda-day">28</span><div><h3>Sessão no Palácio de S. Bento, Praça da Constituição de 1976, 1249-068 Lisboa</h3><p>Encontro institucional com representantes do Estado e dos serviços centrais.</p></div><i class="fa-solid fa-landmark"></i></article>
          <article class="agenda-item"><span class="agenda-day">30</span><div><h3>Mensagem à nação</h3><p>Comunicação dedicada às prioridades do programa nacional e à ação institucional.</p></div><i class="fa-solid fa-microphone"></i></article>
          <article class="agenda-item"><span class="agenda-day">04</span><div><h3>Visita de representação</h3><p>Presença em iniciativa pública de valorização do património e da identidade nacional.</p></div><i class="fa-solid fa-people-group"></i></article>
        </div>
      </div>
    </section>`;
}

function government() {
  return `${crumb(['Governo'])}${title('AÇÃO GOVERNATIVA','Governo','A estrutura governativa do universo ferreirista organiza-se em torno da Chefia Nacional, do Conselho de Estado e dos serviços executivos.')}
    <section class="section container">
      <div class="structure-grid">
        <article class="structure-card"><i class="fa-solid fa-user-tie"></i><h3>Chefia Nacional</h3><p>Centro de representação política e institucional do Estado, com funções de orientação geral e presença pública.</p></article>
        <article class="structure-card"><i class="fa-solid fa-building-columns"></i><h3>Conselho de Estado</h3><p>Órgão de coordenação estratégica responsável pelo acompanhamento das principais áreas governativas.</p></article>
        <article class="structure-card"><i class="fa-solid fa-gears"></i><h3>Serviços Centrais</h3><p>Estruturas encarregadas da execução administrativa, da implementação programática e do apoio institucional.</p></article>
      </div>
    </section>
    <section class="section soft">
      <div class="container">
        <div class="section-top"><div><div class="eyebrow">ÁREAS DE GOVERNAÇÃO</div><h2>Domínios prioritários</h2></div></div>
        <div class="three-grid">
          <div class="info-card"><i class="fa-solid fa-graduation-cap"></i><h3>Educação e formação</h3><p>Consolidação do ensino, do conhecimento e da capacitação cívica.</p></div>
          <div class="info-card"><i class="fa-solid fa-chart-line"></i><h3>Economia e desenvolvimento</h3><p>Reforço da produção, da inovação e da projeção nacional.</p></div>
          <div class="info-card"><i class="fa-solid fa-people-roof"></i><h3>Coesão social</h3><p>Melhoria dos serviços públicos e valorização da proximidade institucional.</p></div>
        </div>
      </div>
    </section>`;
}

function state() {
  return `${crumb(['O Estado'])}${title('ORGANIZAÇÃO INSTITUCIONAL','O Estado','Uma apresentação sintética da arquitetura institucional, dos serviços e da administração do Estado Nacional Ferreirista.')}
    <section class="section container">
      <div class="intro-columns">
        <h2>Instituições e administração</h2>
        <p>O Estado apresenta-se como uma estrutura de continuidade, composta por órgãos centrais, entidades de representação e serviços de proximidade. A organização assenta na unidade da direção política, na coordenação administrativa e na execução por áreas especializadas.</p>
      </div>
      <div class="structure-grid">
        <div class="structure-card"><i class="fa-solid fa-landmark-flag"></i><h3>Instituições centrais</h3><p>Asseguram a direção, a coordenação superior e a representação geral do Estado.</p></div>
        <div class="structure-card"><i class="fa-solid fa-map"></i><h3>Administração territorial</h3><p>Garante a presença do Estado no território, através de estruturas desconcentradas e serviços de proximidade.</p></div>
        <div class="structure-card"><i class="fa-solid fa-folder-tree"></i><h3>Serviços públicos</h3><p>Executam programas, regulamentos, comunicações e procedimentos de interesse coletivo.</p></div>
      </div>
    </section>
    <section class="section soft">
      <div class="container">
        <div class="section-top"><div><div class="eyebrow">NÚMEROS-CHAVE</div><h2>Indicadores ilustrativos</h2></div></div>
        <div class="stats-grid">
          <div class="stat"><strong>12</strong><span>Serviços centrais</span></div>
          <div class="stat"><strong>6</strong><span>Áreas estratégicas</span></div>
          <div class="stat"><strong>18</strong><span>Programas setoriais</span></div>
          <div class="stat"><strong>1</strong><span>Chefia Nacional</span></div>
        </div>
      </div>
    </section>`;
}

function priorities() {
  return `${crumb(['Prioridades'])}${title('PROGRAMA NACIONAL','Prioridades','Os compromissos de desenvolvimento nacional organizam-se em seis eixos apresentados em linguagem institucional.')}
    <section class="section container">
      <div class="intro-columns">
        <h2>Compromissos de desenvolvimento</h2>
        <p>O programa apresentado organiza as propostas de desenvolvimento nacional em áreas temáticas. Os conteúdos organizam os eixos programáticos da instituição.</p>
      </div>
      <div class="program-list">
        <article class="program-item"><span class="program-num">01</span><div><h3>Educação, ciência e formação</h3><p>Investimento no conhecimento, na investigação e na qualificação ao longo da vida.</p></div><i class="fa-solid fa-book-open"></i></article>
        <article class="program-item"><span class="program-num">02</span><div><h3>Economia e capacidade produtiva</h3><p>Incentivo à inovação, criação de valor e modernização dos setores económicos.</p></div><i class="fa-solid fa-chart-line"></i></article>
        <article class="program-item"><span class="program-num">03</span><div><h3>Saúde e proteção social</h3><p>Reforço do acesso a serviços e da atenção ao bem-estar das comunidades.</p></div><i class="fa-solid fa-heart-pulse"></i></article>
        <article class="program-item"><span class="program-num">04</span><div><h3>Território e infraestruturas</h3><p>Melhoria da mobilidade, manutenção de equipamentos e coesão territorial.</p></div><i class="fa-solid fa-road"></i></article>
        <article class="program-item"><span class="program-num">05</span><div><h3>Cultura e património</h3><p>Preservação de referências históricas, símbolos e criação cultural.</p></div><i class="fa-solid fa-landmark"></i></article>
        <article class="program-item"><span class="program-num">06</span><div><h3>Serviços públicos e modernização</h3><p>Digitalização, simplificação de procedimentos e melhor atendimento.</p></div><i class="fa-solid fa-laptop-code"></i></article>
      </div>
    </section>`;
}

function actualidad() {
  const params = new URLSearchParams(location.hash.split('?')[1] || '');
  const n = params.get('artigo');
  if (n !== null && news[Number(n)]) {
    const item = news[Number(n)];
    return `${crumb(['Atualidade', item.title])}${title(item.type, item.title, item.date)}
      <section class="section container narrow">
        <p class="lead">${item.intro}</p>
        <p>Esta comunicação integra a programação editorial do Estado Nacional Ferreirista.</p>
        <p></p>
        ${action('#/atualidade', 'Voltar à atualidade')}
      </section>`;
  }

  return `${crumb(['Atualidade'])}${title('COMUNICAÇÃO INSTITUCIONAL','Atualidade','Acompanhe os comunicados, iniciativas e destaques institucionais.')}
    <section class="section container">
      <div class="filter-bar">
        <label for="newsFilter">Filtrar por categoria</label>
        <select id="newsFilter">
          <option value="all">Todas as categorias</option>
          <option value="COMUNICADO">Comunicados</option>
          <option value="AGENDA">Agenda</option>
          <option value="INSTITUIÇÕES">Instituições</option>
          <option value="CULTURA">Cultura</option>
        </select>
      </div>
      <div class="news-grid" id="newsGrid">${news.map(storyCard).join('')}</div>
    </section>`;
}

function documents() {
  return `${crumb(['Documentos'])}${title('CENTRO DOCUMENTAL','Documentos e publicações','Consulte as fichas descritivas dos textos de referência institucionais.')}
    <section class="section container">
      <div class="notice"><i class="fa-solid fa-circle-info"></i><div><strong>Centro documental</strong><p>As fichas apresentam os documentos disponíveis para consulta neste portal.</p></div></div>
      <div class="document-list">${docs.map((x, i) => `<button class="doc" data-doc="${i}"><span class="doc-icon"><i class="fa-solid ${x[2]}"></i></span><span class="doc-text"><strong>${x[0]}</strong><small>${x[1]}</small></span><i class="fa-solid fa-arrow-right"></i></button>`).join('')}</div>
    </section>
    <dialog id="docDialog">
      <button class="dialog-close" aria-label="Fechar janela" id="dialogClose"><i class="fa-solid fa-xmark"></i></button>
      <div class="eyebrow">CENTRO DOCUMENTAL</div>
      <h2 id="docTitle"></h2>
      <p id="docDescription"></p>
      <div class="notice"><i class="fa-solid fa-circle-info"></i><span>Ficha informativa.</span></div>
    </dialog>`;
}

function symbols() {
  return `${crumb(['Símbolos Nacionais'])}${title('IDENTIDADE DO ESTADO','Símbolos nacionais','Conheça os elementos visuais e heráldicos que identificam o Estado Nacional Ferreirista.')}
    <section class="section container symbol-grid">
      <div class="symbol-image"><img src="assets/brasao.png" alt="Brasão com escudo português, coroa e ramos vegetais" /></div>
      <div>
        <div class="eyebrow">HERÁLDICA</div>
        <h2>O Brasão Nacional</h2>
        <p class="lead">O brasão presente neste portal incorpora elementos tradicionais da heráldica portuguesa.</p>
        <p>Na composição destacam-se o escudo central com quinas, uma bordadura com castelos, uma coroa e ramos vegetais. O conjunto estabelece a identidade visual desta composição heráldica.</p>
        <div class="symbol-points">
          <p><i class="fa-solid fa-shield-halved"></i> <strong>Escudo:</strong> referência visual à tradição heráldica portuguesa.</p>
          <p><i class="fa-solid fa-crown"></i> <strong>Coroa:</strong> elemento de representação cerimonial.</p>
          <p><i class="fa-solid fa-leaf"></i> <strong>Ramos:</strong> composição ornamental de identidade.</p>
        </div>
      </div>
    </section>`;
}

function contacts() {
  return `${crumb(['Contactos'])}${title('CONTACTOS INSTITUCIONAIS','Contactos','Informações institucionais e elementos de contacto desta apresentação digital.')}
    <section class="section container narrow">
      <div class="three-grid contact-links">
        <div class="info-card"><i class="fa-solid fa-location-dot"></i><h3>Sede</h3><p>Palácio de S. Bento, Praça da Constituição de 1976, 1249-068 Lisboa</p></div>
        <div class="info-card"><i class="fa-solid fa-envelope"></i><h3>Email</h3><p>public@enf.gov</p></div>
        <div class="info-card"><i class="fa-solid fa-phone"></i><h3>Telefone</h3><p>(+351) 213 919 000</p></div>
      </div>
      <div class="notice" style="margin-top:24px"><i class="fa-solid fa-circle-info"></i><div><strong>Portal independente</strong><p>O portal é um projeto independente e não integra os serviços do Governo de Portugal.</p></div></div>
      <p></p>
    </section>`;
}

function accessibility() {
  return `${crumb(['Acessibilidade'])}${title('INFORMAÇÕES DO PORTAL','Acessibilidade','Ferramentas de navegação e apresentação disponíveis neste portal.')}
    <section class="section container narrow">
      <h2>Opções disponíveis</h2>
      <p>O site inclui ligação de salto para o conteúdo, elementos semânticos, navegação por teclado, contraste e opções de ajuste do tamanho de texto no cabeçalho.</p>
      <p>Os elementos de interface adaptam-se a dispositivos móveis. Os ícones do Font Awesome e as fontes são carregados de serviços externos quando existe ligação à Internet.</p>
    </section>`;
}

const routes = {
  '/': home,
  '/lider': leader,
  '/governo': government,
  '/estado': state,
  '/prioridades': priorities,
  '/atualidade': actualidad,
  '/documentos': documents,
  '/simbolos': symbols,
  '/contactos': contacts,
  '/acessibilidade': accessibility
};

function route() {
  const currentRoute = location.hash.replace(/^#/, '').split('?')[0] || '/';
  const renderer = routes[currentRoute] || (() => `${title('NAVEGAÇÃO', 'Página não encontrada', 'A página que procura não existe.')}<section class="section container">${action('#/', 'Voltar ao início')}</section>`);
  document.getElementById('main').innerHTML = renderer();

  document.querySelectorAll('[data-route]').forEach((el) => {
    const active = el.dataset.route === currentRoute;
    el.classList.toggle('active', active);
    if (active) el.setAttribute('aria-current', 'page');
    else el.removeAttribute('aria-current');
  });

  document.title = `${basePages.find((x) => x.path === currentRoute)?.title || 'Portal'} | Estado Nacional Ferreirista`;
  document.getElementById('siteNav').classList.remove('open');
  document.getElementById('menuToggle').setAttribute('aria-expanded', 'false');
  window.scrollTo({ top: 0, behavior: 'auto' });

  if (currentRoute === '/atualidade') {
    const select = document.getElementById('newsFilter');
    if (select) {
      select.addEventListener('change', () => {
        const html = news.map((item, i) => item.type === select.value || select.value === 'all' ? storyCard(item, i) : '').join('');
        document.getElementById('newsGrid').innerHTML = html || '<p>Não foram encontrados resultados.</p>';
      });
    }
  }

  if (currentRoute === '/documentos') {
    const dialog = document.getElementById('docDialog');
    document.querySelectorAll('[data-doc]').forEach((button) => button.addEventListener('click', () => {
      const doc = docs[Number(button.dataset.doc)];
      document.getElementById('docTitle').textContent = doc[0];
      document.getElementById('docDescription').textContent = doc[1];
      dialog.showModal();
    }));
    document.getElementById('dialogClose').addEventListener('click', () => dialog.close());
  }

  if (currentRoute === '/lider') {
    const target = new URLSearchParams(location.hash.split('?')[1] || '').get('sec');
    if (target) requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' }));
  }
}

window.addEventListener('hashchange', route);
route();

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('today').textContent = new Intl.DateTimeFormat('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());

document.getElementById('menuToggle').addEventListener('click', () => {
  const nav = document.getElementById('siteNav');
  const isOpen = nav.classList.toggle('open');
  document.getElementById('menuToggle').setAttribute('aria-expanded', String(isOpen));
});

const searchOverlay = document.getElementById('searchOverlay');
const search = document.getElementById('siteSearch');

function updateSearch() {
  const q = search.value.trim().toLocaleLowerCase('pt-PT');
  const found = basePages.filter((p) => (`${p.title} ${p.desc}`).toLocaleLowerCase('pt-PT').includes(q));
  document.getElementById('searchResults').innerHTML = q
    ? (found.length
      ? found.map((p) => `<a href="#${p.path}"><i class="fa-solid fa-arrow-right"></i><span><strong>${p.title}</strong><small>${p.desc}</small></span></a>`).join('')
      : '<p>Sem resultados para esta pesquisa.</p>')
    : '<p>Pesquise por temas, documentos ou instituições.</p>';
}

document.getElementById('searchOpen').addEventListener('click', () => {
  searchOverlay.hidden = false;
  search.focus();
  updateSearch();
});

function closeSearch() {
  searchOverlay.hidden = true;
  search.value = '';
}

document.getElementById('searchClose').addEventListener('click', closeSearch);
search.addEventListener('input', updateSearch);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSearch(); });
searchOverlay.addEventListener('click', (e) => { if (e.target.closest('a')) closeSearch(); });

let fontSize = Number(localStorage.getItem('enf-font') || 100);
function applyFont() {
  document.documentElement.style.fontSize = `${fontSize}%`;
  localStorage.setItem('enf-font', fontSize);
}
applyFont();

document.getElementById('fontUp').addEventListener('click', () => { fontSize = Math.min(120, fontSize + 5); applyFont(); });
document.getElementById('fontDown').addEventListener('click', () => { fontSize = Math.max(90, fontSize - 5); applyFont(); });



// Portuguese / English interface. Applied to the freshly rendered route and static shell.
const translations = {
 'Início':'Home','O Líder':'The Leader','Governo':'Government','O Estado':'The State',
 'Prioridades':'Priorities','Atualidade':'News','Documentos':'Documents','Símbolos Nacionais':'National Symbols',
 'Contactos':'Contacts','Acessibilidade':'Accessibility','Portal institucional':'Institutional portal',
 'INSTITUIÇÕES NACIONAIS':'NATIONAL INSTITUTIONS','Unidade · Serviço · Futuro':'Unity · Service · Future',
 'Saltar para o conteúdo':'Skip to content','Voltar ao topo':'Back to top',
 'O que procura?':'What are you looking for?', 'Pesquise por temas, documentos ou instituições.':'Search for topics, documents or institutions.',
 'Página principal do portal e das instituições nacionais.':'The main page of the institutional portal.',
 'CHEFIA NACIONAL':'NATIONAL LEADERSHIP','PORTAL INSTITUCIONAL':'INSTITUTIONAL PORTAL',
 'Um Estado.':'One State.','Uma visão de futuro.':'A vision for the future.',
 'Conhecer o Líder':'Meet the Leader','Explorar o Governo':'Explore Government',
 'Líder Nacional do Estado Nacional Ferreirista':'National Leader of the Ferreirista State',
 'Sede':'Headquarters','Email':'Email','Telefone':'Telephone',
 'Conheça a Chefia Nacional, a mensagem e a agenda institucional.':'Discover the National Leadership, its message and institutional agenda.',
 'Estrutura e ação dos órgãos de governação.':'Structure and work of government bodies.',
 'As áreas estratégicas do programa nacional.':'Strategic areas of the national programme.',
 'Consulte os textos de referência do projeto.':'Browse institutional reference documents.',
 'EM DESTAQUE':'FEATURED','A Chefia Nacional':'National Leadership',
 'Ver perfil institucional':'View institutional profile','MENSAGEM INSTITUCIONAL':'INSTITUTIONAL MESSAGE',
 'Servir a nação é construir o seu amanhã.':'To serve the nation is to build its tomorrow.',
 'Liderança Nacional':'National Leadership','Representação do Estado':'State Representation','Agenda Institucional':'Institutional Agenda',
 'ATIVIDADE INSTITUCIONAL':'INSTITUTIONAL ACTIVITY','Ver toda a atualidade':'All news',
 'AÇÃO NACIONAL':'NATIONAL ACTION','Áreas de prioridade':'Priority areas',
 'Conhecer todas as prioridades':'View all priorities',
 'Educação e conhecimento':'Education and knowledge','Economia e produção':'Economy and production',
 'Bem-estar e serviços':'Welfare and public services',
 'Qualificação, ensino e desenvolvimento científico.':'Skills, education and scientific development.',
 'Capacidade produtiva, inovação e valorização do trabalho.':'Productivity, innovation and the value of work.',
 'Acesso a serviços essenciais e desenvolvimento social.':'Access to essential services and social development.',
 'IDENTIDADE NACIONAL':'NATIONAL IDENTITY',
 'Conheça os símbolos que representam o Estado.':'Discover the symbols that represent the State.',
 'Explorar símbolos':'Explore symbols','Ler comunicado':'Read announcement',
 'Mensagem do Líder':'Leader’s message','Agenda institucional':'Institutional agenda',
 'LIDERANÇA NACIONAL':'NATIONAL LEADERSHIP','Retrato institucional':'Institutional portrait',
 'MENSAGEM DO LÍDER':'MESSAGE FROM THE LEADER','Uma palavra à nação':'A message to the nation',
 'INSTITUIÇÃO':'INSTITUTION','Funções da Chefia Nacional':'Functions of the National Leadership',
 'Representação nacional':'National representation','Coordenação institucional':'Institutional coordination',
 'Relações institucionais':'Institutional relations',
 'AGENDA':'AGENDA','AGENDA INSTITUCIONAL':'INSTITUTIONAL AGENDA',
 'AÇÃO GOVERNATIVA':'GOVERNMENT ACTION','ÁREAS DE GOVERNAÇÃO':'POLICY AREAS',
 'Domínios prioritários':'Priority domains',
 'Chefia Nacional':'National Leadership','Conselho de Estado':'Council of State','Serviços Centrais':'Central Services',
 'Educação e formação':'Education and training','Economia e desenvolvimento':'Economy and development','Coesão social':'Social cohesion',
 'ORGANIZAÇÃO INSTITUCIONAL':'INSTITUTIONAL STRUCTURE',
 'Instituições e administração':'Institutions and administration','Instituições centrais':'Central institutions',
 'Administração territorial':'Territorial administration','Serviços públicos':'Public services',
 'NÚMEROS-CHAVE':'KEY FIGURES','Indicadores ilustrativos':'Key indicators',
 'Serviços centrais':'Central services','Áreas estratégicas':'Strategic areas','Programas setoriais':'Sector programmes',
 'PROGRAMA NACIONAL':'NATIONAL PROGRAMME','Compromissos de desenvolvimento':'Development commitments',
 'Educação, ciência e formação':'Education, science and training',
 'Economia e capacidade produtiva':'Economy and productive capacity',
 'Saúde e proteção social':'Health and social protection',
 'Território e infraestruturas':'Territory and infrastructure',
 'Cultura e património':'Culture and heritage','Serviços públicos e modernização':'Public services and modernisation',
 'COMUNICAÇÃO INSTITUCIONAL':'INSTITUTIONAL COMMUNICATION',
 'Filtrar por categoria':'Filter by category','Todas as categorias':'All categories',
 'Comunicados':'Announcements','Agenda':'Agenda','Instituições':'Institutions','Cultura':'Culture',
 'COMUNICADO':'ANNOUNCEMENT','INSTITUIÇÕES':'INSTITUTIONS','CULTURA':'CULTURE',
 'CENTRO DOCUMENTAL':'DOCUMENT CENTRE','Documentos e publicações':'Documents and publications',
 'Centro documental':'Document centre','Lei Fundamental':'Fundamental Law',
 'Programa Nacional':'National Programme','Regulamento Protocolar':'Protocol Regulation',
 'Guia de Identidade':'Identity Guide','Ficha informativa.':'Information sheet.',
 'IDENTIDADE DO ESTADO':'STATE IDENTITY','Símbolos nacionais':'National symbols',
 'HERÁLDICA':'HERALDRY','O Brasão Nacional':'The National Coat of Arms',
 'CONTACTOS INSTITUCIONAIS':'INSTITUTIONAL CONTACTS','Portal independente':'Independent portal',
 'INFORMAÇÕES DO PORTAL':'PORTAL INFORMATION','Opções disponíveis':'Available options',
 'Organização do Estado':'State organisation','Informação':'Information',
 'Portal institucional independente':'Independent institutional portal',
 'Identidade':'Identity','Voltar à atualidade':'Back to news',
 'Sem resultados para esta pesquisa.':'No search results found.',
 'Não foram encontrados resultados.':'No results found.',
 'Projeto independente; não afiliado ao Governo de Portugal.':'Independent project; not affiliated with the Portuguese Government.'
};
const sentenceTranslations = [
 ['Conheça a liderança nacional, as instituições, as prioridades e a atividade do Estado Nacional Ferreirista através de um portal concebido em linguagem institucional.', 'Discover the national leadership, institutions, priorities and activities of the Ferreirista State through an institutional portal.'],
 ['Uma área própria dedicada ao líder, à sua mensagem e às principais linhas de representação institucional.', 'A dedicated section on the leader, his message and principal representative duties.'],
 ['Na apresentação oficial do Estado Nacional Ferreirista, a Chefia Nacional assume a representação da continuidade institucional, o estímulo ao desenvolvimento e a valorização do património coletivo.', 'In this institutional presentation, National Leadership represents continuity, development and the national heritage.'],
 ['O portal passa a incluir uma secção própria dedicada ao Líder, com fotografia, agenda e informações institucionais.', 'The portal includes a dedicated Leader section with a portrait, agenda and institutional information.'],
 ['Comunicados e destaques sobre a atividade do Estado Nacional Ferreirista.', 'Announcements and highlights from the Ferreirista State.'],
 ['Uma viagem pela heráldica e pela identidade visual desta construção ficcional.', 'Explore the heraldry and visual identity of the State.'],
 ['Conheça o titular da Chefia Nacional, a sua mensagem institucional e os contactos da representação nacional.', 'Meet the National Leader and explore his message and institutional contacts.'],
 ['A estrutura governativa do universo ferreirista organiza-se em torno da Chefia Nacional, do Conselho de Estado e dos serviços executivos.', 'Government is organised around National Leadership, the Council of State and executive services.'],
 ['Os compromissos de desenvolvimento nacional organizam-se em seis eixos apresentados em linguagem institucional.', 'National development commitments are organised into six priorities.'],
 ['Acompanhe comunicados, iniciativas e destaques institucionais.', 'Follow announcements, initiatives and institutional highlights.'],
 ['Consulte as fichas descritivas dos textos de referência institucionais.', 'Browse information sheets for institutional reference documents.'],
 ['Conheça os elementos visuais e heráldicos que identificam o Estado Nacional Ferreirista.', 'Learn about the visual and heraldic elements of the Ferreirista State.'],
 ['Informações institucionais e elementos de contacto desta apresentação digital.', 'Institutional information and contact details.'],
 ['Este site apresenta-se como portal institucional de um universo narrativo e não presta serviços governamentais reais.', 'This independent website is not affiliated with public government services.']
];
let currentLanguage = localStorage.getItem('enf-language') === 'en' ? 'en' : 'pt';
const originalNodes = new WeakMap();
function translateNode(node) {
 const original = originalNodes.get(node) ?? node.nodeValue;
 if (!originalNodes.has(node)) originalNodes.set(node, original);
 let translated = original;
 if (currentLanguage === 'en') {
  const trimmed = original.trim();
  const exact = translations[trimmed] || sentenceTranslations.find(([a]) => a === trimmed)?.[1];
  if (exact) translated = original.replace(trimmed, exact);
 }
 node.nodeValue = translated;
}
function applyLanguage() {
 document.documentElement.lang = currentLanguage === 'en' ? 'en' : 'pt-PT';
 document.querySelectorAll('#langPT,#langEN').forEach(button => {
  const selected = button.id === (currentLanguage === 'en' ? 'langEN' : 'langPT');
  button.classList.toggle('is-current', selected);
  button.setAttribute('aria-pressed', String(selected));
 });
 const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
 let node;
 while ((node = walker.nextNode())) {
  if (node.parentElement.closest('script,style')) continue;
  translateNode(node);
 }
 if (currentLanguage === 'en') {
  const placeholder = document.getElementById('siteSearch');
  if (placeholder) placeholder.placeholder = 'Search for leader, institutions, priorities…';
 } else {
  const placeholder = document.getElementById('siteSearch');
  if (placeholder) placeholder.placeholder = 'Pesquise por líder, instituições, prioridades…';
 }
}
function setLanguage(lang) {
 currentLanguage = lang;
 localStorage.setItem('enf-language',lang);
 route();
 applyLanguage();
}
document.getElementById('langPT').addEventListener('click',() => setLanguage('pt'));
document.getElementById('langEN').addEventListener('click',() => setLanguage('en'));
window.addEventListener('hashchange',() => requestAnimationFrame(applyLanguage));
applyLanguage();

const revealObserver = new IntersectionObserver(entries => {
 for (const entry of entries) {
  if (entry.isIntersecting) {entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}
 }
},{threshold:0.08,rootMargin:'0px 0px -20px 0px'});
function watchReveals(){
 document.querySelectorAll('.section,.news-card,.icon-card,.priority,.info-card,.structure-card,.program-item').forEach((el,i)=>{
  if(!el.dataset.reveal){el.dataset.reveal='1';el.classList.add('reveal');el.style.setProperty('--delay',`${Math.min(i%4,3)*70}ms`);}
  if(!el.classList.contains('visible')) revealObserver.observe(el);
 });
}
window.addEventListener('hashchange',()=>requestAnimationFrame(watchReveals));
watchReveals();
