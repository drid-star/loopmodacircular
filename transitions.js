document.addEventListener('DOMContentLoaded', () => {
    // Interceptar cliques em links para efeito de transição de saída
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        
        // Ignora links vazios, âncoras, javascript, links externos (com nova aba) ou protocolos especiais
        if (href && 
            !href.startsWith('#') && 
            !href.startsWith('javascript:') && 
            !href.startsWith('mailto:') && 
            !href.startsWith('tel:') && 
            !link.hasAttribute('download') &&
            link.target !== '_blank') {
            
            // Verifica se o link é local (não possui protocolo ou é do mesmo domínio)
            const isLocal = !href.includes('://') || href.includes(window.location.hostname);
            
            if (isLocal) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetUrl = link.href;

                    // Adiciona a classe de fade-out no body
                    document.body.classList.add('page-fade-out');

                    // Aguarda a animação terminar (200ms) e redireciona
                    setTimeout(() => {
                        window.location.href = targetUrl;
                    }, 200);
                });
            }
        }
    });
});
