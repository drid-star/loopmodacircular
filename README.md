# Loop - Localizador de Brechós (Multitelas)

Este é um projeto web completo, interativo e responsivo composto por cinco páginas principais. A interface foi construída utilizando a tipografia premium **Satoshi** (importada via CDN do Fontshare), estilos compartilhados integrados em uma folha de estilos externa (`style.css`), imagens reais, foto de perfil gerada por IA, logotipo estilizado em CSS Puro e interações avançadas controladas por JavaScript (`script.js`).

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
* 📄 **[perfil.html](file:///C:/Users/Larissa/.gemini/antigravity/scratch/web-interface-template/perfil.html)** - Nova página de Perfil contendo:
  * Navbar com a aba "Perfil" ativa.
  * Cartão lateral com foto de perfil real (gerada por IA), nome completo ("Larissa"), tag de nível de usuário, biografia e estatísticas de uso.
  * Seção de Brechós Favoritados com links diretos de acesso.
  * Seção contendo a listagem das avaliações deixadas pela usuária em brechós locais.
* 📄 **[login.html](file:///C:/Users/Larissa/.gemini/antigravity/scratch/web-interface-template/login.html)** - Página de Login contendo:
  * Logotipo "Loop" desenhado e estilizado puramente via CSS.
  * Subtítulo e formulário de acesso estruturado (Email, Senha, Botão de Acesso).
  * Link de atalho inferior para direcionar novos usuários para o `cadastro.html`.
* 📄 **[cadastro.html](file:///C:/Users/Larissa/.gemini/antigravity/scratch/web-interface-template/cadastro.html)** - Página de Cadastro contendo:
  * Mesma identidade visual, cores e logotipo de login.html.
  * Campos estruturados (Nome completo, Email, Senha).
  * Link de atalho inferior direcionando usuários existentes para o `login.html`.
* 🎨 **[style.css](file:///C:/Users/Larissa/.gemini/antigravity/scratch/web-interface-template/style.css)** - Arquivo contendo todos os estilos unificados do projeto, incluindo as fontes, cores terrosas/bege, espaçamentos, hovers, cards de brechós, visual do perfil e regras responsivas.
* ⚡ **[script.js](file:///C:/Users/Larissa/.gemini/antigravity/scratch/web-interface-template/script.js)** - Controla a lógica de banco de dados local (com 7 brechós no total) e o filtro combinado instantâneo no `busca.html`.
* 📁 **`assets/`** - Pasta com os logos da marca, fachadas físicas dos brechós e foto de perfil.

---

## 🚀 Como Executar no Visual Studio

1. Abra o **Visual Studio**.
2. Vá em `Arquivo -> Abrir -> Pasta...` (File -> Open -> Folder...).
3. Selecione a pasta deste projeto: `C:\Users\Larissa\.gemini\antigravity\scratch\web-interface-template`.
4. Os arquivos carregarão no Gerenciador de Soluções.
5. Clique com o botão direito sobre qualquer uma das páginas (`index.html`, `busca.html`, `perfil.html`, `login.html` ou `cadastro.html`) e selecione **Exibir no Navegador** (ou use as teclas `Ctrl + Shift + W`).
6. Navegue livremente entre a **Home**, a página de **Busca**, a página de **Perfil**, a página de **Login** e a página de **Cadastro** usando os links correspondentes ou clicando nas logos.
