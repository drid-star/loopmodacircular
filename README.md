# Loop - Localizador de Brechós (Multitelas)

Este é um projeto web completo, interativo e responsivo composto por nove páginas principais. A interface foi construída utilizando a tipografia premium **Satoshi** (importada via CDN do Fontshare), estilos compartilhados integrados em uma folha de estilos externa (`style.css`), imagens reais, foto de perfil gerada por IA, logotipo oficial (`logo-loop.png`) e interações avançadas controladas por JavaScript.

---

## 📂 Estrutura do Projeto

* 📄 **[index.html](file:///C:/Users/Larissa/.gemini/antigravity/scratch/web-interface-template/index.html)** - Homepage limpa do aplicativo contendo:
  * Navbar superior integrada com logo da Loop e link para as páginas de Busca, Perfil, Cadastre-se e Login.
  * Hero Section de introdução ("Encontre brechós incríveis...").
  * Grade de vantagens ("Encontre, reuse").
  * Seção contendo o mapa do Google Maps incorporado.
* 📄 **[busca.html](file:///C:/Users/Larissa/.gemini/antigravity/scratch/web-interface-template/busca.html)** - Página de pesquisa contendo:
  * Navbar com os links e a aba "Busca" ativa.
  * O buscador principal (barra de busca por texto).
  * 5 seletores de filtragem avançada (Distância, Estrelas, Qtd. de Avaliações, Estilos e Gestão).
  * Área de renderização dinâmica dos resultados de brechós com distâncias de você.
* 📄 **[perfil.html](file:///C:/Users/Larissa/.gemini/antigravity/scratch/web-interface-template/perfil.html)** - Página de Perfil contendo:
  * Navbar com a aba "Perfil" ativa.
  * Cartão lateral com foto de perfil e nome de usuário personalizáveis. Inclui o botão "Editar Perfil" que abre um modal para upload de nova foto e alteração de nome e biografia.
  * Sincronização automática das avaliações antigas com o novo nome escolhido na edição.
  * Seção de Brechós Favoritados com links diretos de acesso e remoção/favoritar sincronizada.
  * Seção contendo a listagem das avaliações deixadas pela usuária em brechós locais.
* 📄 **[detalhes.html](file:///C:/Users/Larissa/.gemini/antigravity/scratch/web-interface-template/detalhes.html)** - Página de detalhes dinâmica de cada brechó contendo:
  * Informações de horário de funcionamento, contato e localização.
  * Slideshow de fotos realistas dos brechós.
  * Campo de avaliações da comunidade e adição de nova avaliação funcional.
  * Opção de favoritar e desfavoritar com sincronização global.
* 📄 **[anuncie.html](file:///C:/Users/Larissa/.gemini/antigravity/scratch/web-interface-template/anuncie.html)** - Página de cadastro de novos brechós contendo:
  * Formulário completo com perguntas dos filtros (Estilo, Gestão) e carregamento de foto.
  * Fonte Satoshi em caixa normal (primeira maiúscula) e sincronização com o banco de dados.
* 📄 **[login.html](file:///C:/Users/Larissa/.gemini/antigravity/scratch/web-interface-template/login.html)** - Página de Login contendo:
  * Logotipo oficial `logo-loop.png` no formulário.
  * Subtítulo e formulário de acesso estruturado (Email, Senha, Botão de Acesso).
  * Link de atalho inferior para direcionar novos usuários para o `cadastro.html`.
* 📄 **[cadastro.html](file:///C:/Users/Larissa/.gemini/antigravity/scratch/web-interface-template/cadastro.html)** - Página de Cadastro contendo:
  * Mesma identidade visual, cores e logotipo oficial de login.html.
  * Campos estruturados (Nome completo, Email, Senha).
  * Link de atalho inferior direcionando usuários existentes para o `login.html`.
* 📄 **[personalizar.html](file:///C:/Users/Larissa/.gemini/antigravity/scratch/web-interface-template/personalizar.html)** - Página de personalização de perfil pós-login:
  * Exibida imediatamente após o login bem-sucedido.
  * Permite ao usuário escolher e configurar seu Nome, Biografia e carregar sua Foto de perfil.
  * Ao prosseguir, migra as avaliações padrão do banco de dados e redireciona de forma fluida para a Home.
* 📄 **[404.html](file:///C:/Users/Larissa/.gemini/antigravity/scratch/web-interface-template/404.html)** - Página de erro 404 estilizada contendo:
  * Recurso visual animado com o asset `Ativo 10.png` flutuante.
  * Botão de voltar para a Home com transições fluidas.
* 🎨 **[style.css](file:///C:/Users/Larissa/.gemini/antigravity/scratch/web-interface-template/style.css)** - Arquivo contendo todos os estilos unificados do projeto, incluindo as fontes, cores terrosas/bege, espaçamentos, hovers, cards de brechós, visual do perfil e regras responsivas.
* ⚡ **[script.js](file:///C:/Users/Larissa/.gemini/antigravity/scratch/web-interface-template/script.js)** - Controla a renderização dinâmica e filtros combinados na busca.
* ⚡ **[data.js](file:///C:/Users/Larissa/.gemini/antigravity/scratch/web-interface-template/data.js)** - Banco de dados local compartilhado e persistido.
* 🖼️ **Imagens no diretório raiz** - Os logos da marca, fachadas físicas dos brechós, asset Ativo 10 e foto de perfil estão localizados diretamente na raiz do projeto.

---

## 🚀 Como Executar no Visual Studio

1. Abra o **Visual Studio**.
2. Vá em `Arquivo -> Abrir -> Pasta...` (File -> Open -> Folder...).
3. Selecione a pasta deste projeto: `C:\Users\Larissa\.gemini\antigravity\scratch\web-interface-template`.
4. Os arquivos carregarão no Gerenciador de Soluções.
5. Clique com o botão direito sobre qualquer uma das páginas (`index.html`, `busca.html`, `perfil.html`, `login.html` ou `cadastro.html`) e selecione **Exibir no Navegador** (ou use as teclas `Ctrl + Shift + W`).
6. Navegue livremente entre a **Home**, a página de **Busca**, a página de **Perfil**, a página de **Login** e a página de **Cadastro** usando os links correspondentes ou clicando nas logos.
