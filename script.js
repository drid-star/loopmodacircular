document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const filterSelects = document.querySelectorAll('.filter-select');
    const container = document.getElementById('stores-list-container');

    // Use global database storesData (loaded from data.js)
    const stores = typeof storesData !== 'undefined' ? storesData : [];

    // Filter and Render Logic
    function filterAndRender() {
        const query = searchInput.value.trim().toLowerCase();

        // Get filter values based on index
        const distFilter = filterSelects[0].value;
        const starsFilter = filterSelects[1].value;
        const reviewsFilter = filterSelects[2].value;
        const styleFilter = filterSelects[3].value;
        const managementFilter = filterSelects[4].value;

        // Filter the array
        const filtered = stores.filter(store => {
            // 1. Search Query Check (Name, reviewText, address, style)
            if (query) {
                const matchesName = store.name.toLowerCase().includes(query);
                const matchesReviewText = store.reviewText.toLowerCase().includes(query);
                const matchesAddress = store.address.toLowerCase().includes(query);
                const matchesStyle = store.style.toLowerCase().includes(query);
                
                if (!matchesName && !matchesReviewText && !matchesAddress && !matchesStyle) {
                    return false;
                }
            }

            // 2. Distance Filter
            if (distFilter) {
                if (distFilter === '2km' && store.distance > 2) return false;
                if (distFilter === '5km' && store.distance > 5) return false;
                if (distFilter === '10km' && store.distance > 10) return false;
                if (distFilter === '20km' && store.distance <= 10) return false; // "Mais de 10km"
            }

            // 3. Stars Filter
            if (starsFilter) {
                const minStars = parseInt(starsFilter);
                if (minStars === 5 && store.rating !== 5) return false;
                if (minStars === 4 && store.rating < 4) return false;
                if (minStars === 3 && store.rating < 3) return false;
            }

            // 4. Quantity of Reviews Filter
            if (reviewsFilter) {
                if (reviewsFilter === 'poucas' && store.reviewsCount > 15) return false;
                if (reviewsFilter === 'medias' && (store.reviewsCount <= 15 || store.reviewsCount > 50)) return false;
                if (reviewsFilter === 'muitas' && store.reviewsCount <= 50) return false;
            }

            // 5. Styles Filter
            if (styleFilter && store.style !== styleFilter) return false;

            // 6. Management Type Filter
            if (managementFilter && store.management !== managementFilter) return false;

            return true;
        });

        // Render to DOM
        renderStores(filtered);
    }

    // Render HTML Cards to DOM
    function renderStores(list) {
        if (!container) return;
        container.innerHTML = '';

        if (list.length === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <h3>Nenhum brechó encontrado 🔍</h3>
                    <p>Tente ajustar a busca ou os filtros para ver outros resultados.</p>
                </div>
            `;
            return;
        }

        list.forEach(store => {
            const card = document.createElement('div');
            card.className = `store-card ${store.customClass}`;
            
            // Set dynamic background styling combining overlay gradient and store image
            card.style.background = `linear-gradient(90deg, #8C3D2B 60%, rgba(140, 61, 43, 0.75) 100%), url('${store.bgImage}')`;
            card.style.backgroundSize = 'cover';
            card.style.backgroundPosition = 'right center';

            // Generate rating stars
            let starsHTML = '';
            for (let i = 1; i <= 5; i++) {
                starsHTML += i <= store.rating ? '★' : '☆';
            }

            card.innerHTML = `
                <h3>${store.name}</h3>
                <div class="rating">
                    ${starsHTML}
                    <span class="dist-badge">📍 ${store.distance.toFixed(1)} km</span>
                </div>
                <p class="review">${store.reviewText}</p>
                <div class="store-info">
                    <p>📅 ${store.hours}</p>
                    <p>📍 ${store.address}</p>
                </div>
            `;

            // Clicking the card redirects to the details page with the store id
            card.addEventListener('click', () => {
                window.location.href = `detalhes.html?id=${store.id}`;
            });

            container.appendChild(card);
        });
    }

    // Set up listeners
    if (searchBtn) {
        searchBtn.addEventListener('click', filterAndRender);
    }

    if (searchInput) {
        // Search instantly while typing
        searchInput.addEventListener('input', filterAndRender);
    }

    filterSelects.forEach(select => {
        select.addEventListener('change', filterAndRender);
    });

    // Initial render
    filterAndRender();
});
