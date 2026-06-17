document.addEventListener('DOMContentLoaded', () => {
    // 1. Carregar favoritos do localStorage ou iniciar com o padrão (Larissa favoritou estes dois no design)
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (!favorites) {
        favorites = ['vo-adelaide', 'garagem-mix'];
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    // 2. Carregar dados dos brechós (loaded from data.js)
    const stores = typeof storesData !== 'undefined' ? storesData : [];

    // 3. Renderizar Favoritos Dinamicamente
    const favContainer = document.querySelector('.favorites-list');
    if (favContainer) {
        favContainer.innerHTML = '';
        
        // Filtra os brechós que estão nos favoritos
        const favStores = stores.filter(s => favorites.includes(s.id));
        
        if (favStores.length === 0) {
            favContainer.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 30px; color: #A37566; font-style: italic;">
                    Nenhum brechó favoritado ainda. Explore a aba de <a href="busca.html" style="color: #8C3D2B; font-weight: 700; text-decoration: none;">Busca</a> para favoritar!
                </div>
            `;
        } else {
            favStores.forEach(store => {
                let starsHTML = '';
                for (let i = 1; i <= 5; i++) {
                    starsHTML += i <= store.rating ? '★' : '☆';
                }

                const card = document.createElement('a');
                card.href = `detalhes.html?id=${store.id}`;
                card.className = 'fav-card';
                card.innerHTML = `
                    <img src="${store.bgImage}" alt="${store.name}" class="fav-img">
                    <div class="fav-info">
                        <h4>${store.name}</h4>
                        <div class="rating">${starsHTML}</div>
                        <span class="dist">📍 ${store.distance.toFixed(1)} km de você</span>
                    </div>
                `;
                favContainer.appendChild(card);
            });
        }
    }

    // 4. Renderizar Avaliações de Larissa Dinamicamente
    const reviewsContainer = document.querySelector('.my-reviews-list');
    if (reviewsContainer) {
        reviewsContainer.innerHTML = '';
        let count = 0;

        stores.forEach(store => {
            // Busca a avaliação deixada por Larissa neste brechó
            const review = store.reviewsList.find(r => r.author === 'Larissa');
            if (review) {
                count++;
                let reviewStars = '';
                for (let i = 1; i <= 5; i++) {
                    reviewStars += i <= review.rating ? '★' : '☆';
                }

                const rCard = document.createElement('div');
                rCard.className = 'my-review-card';
                rCard.innerHTML = `
                    <div class="my-review-header">
                        <h4><a href="detalhes.html?id=${store.id}">${store.name}</a></h4>
                        <span class="date">Avaliado em ${review.date}</span>
                    </div>
                    <div class="rating">${reviewStars}</div>
                    <p class="my-review-text">"${review.text}"</p>
                `;
                reviewsContainer.appendChild(rCard);
            }
        });

        if (count === 0) {
            reviewsContainer.innerHTML = `
                <div style="text-align: center; padding: 30px; color: #A37566; font-style: italic;">
                    Você ainda não fez nenhuma avaliação. Visite a página de um brechó para deixar sua opinião!
                </div>
            `;
        }

        // 5. Atualizar Estatísticas da Barra Lateral
        const statBoxes = document.querySelectorAll('.stat-box');
        if (statBoxes.length >= 2) {
            // Primeira caixa: Avaliações
            const reviewsStat = statBoxes[0].querySelector('.stat-value');
            if (reviewsStat) reviewsStat.textContent = count;

            // Segunda caixa: Favoritos
            const favsStat = statBoxes[1].querySelector('.stat-value');
            if (favsStat) favsStat.textContent = favorites.length;
        }
    }
});
