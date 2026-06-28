document.addEventListener('DOMContentLoaded', () => {
    // 1. Carregar perfil do localStorage ou definir padrões
    let currentName = localStorage.getItem('userName') || 'Larissa';
    let currentBio = localStorage.getItem('userBio') || 'Apaixonada por moda circular, garimpos vintage e consumo consciente. Moradora de Santa Maria - RS.';
    let currentAvatar = localStorage.getItem('userAvatar') || 'assets/user_profile.png';

    // Referências do DOM do Perfil
    const profileAvatar = document.getElementById('profile-avatar');
    const profileName = document.getElementById('profile-name');
    const profileBio = document.getElementById('profile-bio');

    // Inicializar os dados na tela
    function updateProfileUI() {
        if (profileAvatar) profileAvatar.src = currentAvatar;
        if (profileName) profileName.textContent = currentName;
        if (profileBio) profileBio.textContent = currentBio;
    }
    updateProfileUI();

    // 2. Carregar favoritos do localStorage ou iniciar com o padrão (Larissa favoritou estes dois no design)
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (!favorites) {
        favorites = ['vo-adelaide', 'garagem-mix'];
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    // 3. Carregar dados dos brechós (loaded from data.js)
    let stores = [];
    if (localStorage.getItem('storesData')) {
        stores = JSON.parse(localStorage.getItem('storesData'));
    } else if (typeof storesData !== 'undefined') {
        stores = storesData;
    }

    // 4. Renderizar Favoritos Dinamicamente
    function renderFavorites() {
        const favContainer = document.querySelector('.favorites-list');
        if (!favContainer) return;
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
    renderFavorites();

    // 5. Renderizar Avaliações do Usuário Dinamicamente
    function renderUserReviews() {
        const reviewsContainer = document.querySelector('.my-reviews-list');
        if (!reviewsContainer) return;
        reviewsContainer.innerHTML = '';
        let count = 0;

        stores.forEach(store => {
            // Busca as avaliações deixadas por este usuário neste brechó
            const storeReviews = store.reviewsList.filter(r => r.author === currentName);
            storeReviews.forEach(review => {
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
            });
        });

        if (count === 0) {
            reviewsContainer.innerHTML = `
                <div style="text-align: center; padding: 30px; color: #A37566; font-style: italic;">
                    Você ainda não fez nenhuma avaliação. Visite a página de um brechó para deixar sua opinião!
                </div>
            `;
        }

        // 6. Atualizar Estatísticas da Barra Lateral
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
    renderUserReviews();

    // --- LOGICA DO MODAL ---
    const editBtn = document.getElementById('edit-profile-btn');
    const modal = document.getElementById('edit-profile-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const editForm = document.getElementById('edit-profile-form');
    const editNameInput = document.getElementById('edit-name-input');
    const editBioInput = document.getElementById('edit-bio-input');
    const uploadInput = document.getElementById('upload-avatar-input');
    const avatarPreview = document.getElementById('avatar-preview');
    const fileHint = document.getElementById('file-name-hint');

    let tempAvatarBase64 = currentAvatar;

    // Abrir Modal
    if (editBtn && modal) {
        editBtn.addEventListener('click', () => {
            // Pre-preencher inputs
            if (editNameInput) editNameInput.value = currentName;
            if (editBioInput) editBioInput.value = currentBio;
            if (avatarPreview) avatarPreview.src = currentAvatar;
            tempAvatarBase64 = currentAvatar;
            if (fileHint) fileHint.textContent = 'Nenhum arquivo selecionado';

            modal.classList.add('is-open');
        });
    }

    // Fechar Modal
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('is-open');
        });
        
        // Fechar ao clicar fora
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('is-open');
            }
        });
    }

    // Handle Upload Foto de Perfil
    if (uploadInput) {
        uploadInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                if (fileHint) fileHint.textContent = file.name;
                
                const reader = new FileReader();
                reader.onload = (event) => {
                    tempAvatarBase64 = event.target.result;
                    if (avatarPreview) avatarPreview.src = tempAvatarBase64;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Função de migração de avaliações do nome antigo para o novo nome
    function migrateReviews(oldName, newName) {
        if (!oldName || !newName || oldName === newName) return;
        
        let localStores = JSON.parse(localStorage.getItem('storesData'));
        if (!localStores && typeof storesData !== 'undefined') {
            localStores = storesData;
        }

        if (localStores) {
            let updated = false;
            localStores.forEach(store => {
                store.reviewsList.forEach(r => {
                    if (r.author === oldName) {
                        r.author = newName;
                        updated = true;
                    }
                });
            });
            if (updated) {
                localStorage.setItem('storesData', JSON.stringify(localStores));
                stores = localStores; // Atualiza a referência local
                
                // Atualiza em memória também caso data.js esteja rodando globalmente
                if (typeof storesData !== 'undefined') {
                    storesData.forEach(store => {
                        store.reviewsList.forEach(r => {
                            if (r.author === oldName) {
                                r.author = newName;
                            }
                        });
                    });
                }
            }
        }
    }

    // Salvar formulário
    if (editForm) {
        editForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const oldName = currentName;
            const newName = editNameInput.value.trim();
            const newBio = editBioInput.value.trim();

            if (!newName) return;

            // Salvar no localStorage
            localStorage.setItem('userName', newName);
            localStorage.setItem('userBio', newBio);
            localStorage.setItem('userAvatar', tempAvatarBase64);

            // Atualizar variáveis locais
            currentName = newName;
            currentBio = newBio;
            currentAvatar = tempAvatarBase64;

            // Migrar avaliações caso o nome tenha mudado
            migrateReviews(oldName, newName);

            // Atualizar UI
            updateProfileUI();
            renderUserReviews();

            // Fechar Modal
            if (modal) modal.classList.remove('is-open');

            // Exibir Toast
            showToast('Perfil atualizado com sucesso! ✨');
        });
    }

    // Função Toast Notification customizada
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.innerHTML = `
            <div style="display:flex; align-items:center; gap:0.75rem;">
                <span style="font-size:1.25rem;">✨</span>
                <span>${message}</span>
            </div>
        `;

        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: '10000',
            backgroundColor: '#8C3D2B',
            color: '#FFFFFF',
            padding: '1rem 1.75rem',
            borderRadius: '50px',
            boxShadow: '0 10px 30px rgba(140, 61, 43, 0.2)',
            transform: 'translateY(100px)',
            opacity: '0',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        });

        document.body.appendChild(toast);

        // Slide in
        setTimeout(() => {
            toast.style.transform = 'translateY(0)';
            toast.style.opacity = '1';
        }, 50);

        // Slide out and destroy
        setTimeout(() => {
            toast.style.transform = 'translateY(100px)';
            toast.style.opacity = '0';
            setTimeout(() => {
                toast.remove();
            }, 400);
        }, 3000);
    }
});
