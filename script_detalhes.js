document.addEventListener('DOMContentLoaded', () => {
    // 1. Get Store ID from URL parameter
    const params = new URLSearchParams(window.location.search);
    const storeId = params.get('id');

    // 2. Find store in database
    const store = typeof storesData !== 'undefined' ? storesData.find(s => s.id === storeId) : null;
    const container = document.getElementById('details-view-container');

    if (!container) return;

    if (!store) {
        container.innerHTML = `
            <div class="no-results" style="width: 100%; text-align: center;">
                <h3>Erro ao carregar brechó ⚠️</h3>
                <p>O brechó solicitado não foi encontrado em nossa base de dados.</p>
                <br>
                <a href="busca.html" class="search-btn" style="text-decoration: none; padding: 12px 25px; display: inline-block;">Voltar para Busca</a>
            </div>
        `;
        return;
    }

    // 3. Render Store details page
    renderDetailsPage(store);

    function renderDetailsPage(data) {
        // Generate stars HTML
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            starsHTML += i <= data.rating ? '★' : '☆';
        }

        container.innerHTML = `
            <!-- SIDEBAR -->
            <aside class="details-sidebar">
                <!-- Imagem (Slideshow) -->
                <div class="details-img-card">
                    <div class="carousel-container">
                        <div class="carousel-slides" id="carousel-slides">
                            <!-- Imagens injetadas via JS -->
                        </div>
                        <button class="carousel-prev" id="carousel-prev">❮</button>
                        <button class="carousel-next" id="carousel-next">❯</button>
                        <div class="carousel-dots" id="carousel-dots"></div>
                    </div>
                </div>

                <!-- Info Card -->
                <div class="details-info-card">
                    <div class="info-item">
                        <h4>Horário de Funcionamento</h4>
                        <p>${data.hours}</p>
                    </div>
                    <div class="info-item">
                        <h4>Contato</h4>
                        <p>${data.contact}</p>
                    </div>
                    <div class="info-item">
                        <h4>Endereço</h4>
                        <p>${data.address}</p>
                    </div>
                </div>
            </aside>

            <!-- CONTEÚDO PRINCIPAL -->
            <section class="details-main-content">
                <!-- Cabeçalho -->
                <div class="details-header">
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
                        <h1>${data.name}</h1>
                        <button id="favorite-btn" class="details-fav-btn">
                            <span class="fav-icon">♡</span>
                            <span class="fav-text">Favoritar</span>
                        </button>
                    </div>
                    <div class="details-badges">
                        <span class="rating">${starsHTML}</span>
                        <span class="dist-badge">📍 ${data.distance.toFixed(1)} km de você</span>
                        <span class="details-tag-badge">${data.style}</span>
                        <span class="details-tag-badge eco">${data.management}</span>
                    </div>
                </div>

                <!-- Lista de Avaliações -->
                <div class="my-reviews-list-section">
                    <h3 class="profile-section-title"><span>📝</span> Avaliações da Comunidade</h3>
                    <div class="my-reviews-list" id="reviews-list-container">
                        <!-- Avaliações serão inseridas aqui -->
                    </div>
                </div>

                <!-- Formulário de Nova Avaliação -->
                <div class="new-review-card">
                    <h3 class="profile-section-title"><span>✏️</span> Deixe sua Avaliação</h3>
                    <form class="new-review-form" id="new-review-form">
                        <div class="form-row-2">
                            <div class="form-group-details">
                                <label for="reviewer-name">Seu Nome</label>
                                <input type="text" id="reviewer-name" placeholder="Ex: Larissa" value="${localStorage.getItem('userName') || ''}" required>
                            </div>
                            <div class="form-group-details">
                                <label for="reviewer-rating">Sua Nota</label>
                                <select id="reviewer-rating" required>
                                    <option value="5">5 estrelas (Excelente)</option>
                                    <option value="4">4 estrelas (Muito bom)</option>
                                    <option value="3">3 estrelas (Regular)</option>
                                    <option value="2">2 estrelas (Ruim)</option>
                                    <option value="1">1 estrela (Péssimo)</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group-details">
                            <label for="reviewer-comment">Sua Mensagem</label>
                            <textarea id="reviewer-comment" rows="4" placeholder="Escreva o que você achou das peças, do atendimento, dos preços..." required></textarea>
                        </div>
                        <button type="submit" class="submit-btn-details">Enviar Avaliação</button>
                    </form>
                </div>
            </section>
        `;

        // Renderizar slideshow/carousel de fotos
        const slideImages = data.images && data.images.length > 0 ? data.images : [data.bgImage];
        const slidesContainer = document.getElementById('carousel-slides');
        const dotsContainer = document.getElementById('carousel-dots');
        const prevBtn = document.getElementById('carousel-prev');
        const nextBtn = document.getElementById('carousel-next');

        if (slidesContainer) {
            slideImages.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = data.name;
                img.className = 'carousel-slide-img';
                slidesContainer.appendChild(img);
            });

            if (slideImages.length <= 1) {
                if (prevBtn) prevBtn.style.display = 'none';
                if (nextBtn) nextBtn.style.display = 'none';
                if (dotsContainer) dotsContainer.style.display = 'none';
            } else {
                slideImages.forEach((_, index) => {
                    const dot = document.createElement('span');
                    dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
                    dot.addEventListener('click', () => {
                        goToSlide(index);
                    });
                    if (dotsContainer) dotsContainer.appendChild(dot);
                });

                let currentSlide = 0;
                const totalSlides = slideImages.length;

                function goToSlide(index) {
                    currentSlide = index;
                    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
                    
                    if (dotsContainer) {
                        const dots = dotsContainer.querySelectorAll('.carousel-dot');
                        dots.forEach((dot, idx) => {
                            dot.classList.toggle('active', idx === currentSlide);
                        });
                    }
                }

                if (prevBtn) {
                    prevBtn.addEventListener('click', () => {
                        let nextIdx = currentSlide - 1;
                        if (nextIdx < 0) nextIdx = totalSlides - 1;
                        goToSlide(nextIdx);
                    });
                }

                if (nextBtn) {
                    nextBtn.addEventListener('click', () => {
                        let nextIdx = currentSlide + 1;
                        if (nextIdx >= totalSlides) nextIdx = 0;
                        goToSlide(nextIdx);
                    });
                }
            }
        }

        // Render reviews list
        renderReviews(data.reviewsList);

        // Lógica de favoritar brechó
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        if (!favorites) {
            favorites = ['vo-adelaide', 'garagem-mix'];
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }

        const favBtn = document.getElementById('favorite-btn');
        if (favBtn) {
            let isFav = favorites.includes(data.id);
            updateFavButton(favBtn, isFav);

            favBtn.addEventListener('click', () => {
                const index = favorites.indexOf(data.id);
                if (index !== -1) {
                    favorites.splice(index, 1);
                    isFav = false;
                    showToast('Removido dos favoritos');
                } else {
                    favorites.push(data.id);
                    isFav = true;
                    showToast('Adicionado aos favoritos! ❤️');
                }
                localStorage.setItem('favorites', JSON.stringify(favorites));
                updateFavButton(favBtn, isFav);
            });
        }

        function updateFavButton(btn, active) {
            const icon = btn.querySelector('.fav-icon');
            const text = btn.querySelector('.fav-text');
            if (active) {
                btn.classList.add('is-active');
                icon.textContent = '❤️';
                text.textContent = 'Favoritado';
            } else {
                btn.classList.remove('is-active');
                icon.textContent = '♡';
                text.textContent = 'Favoritar';
            }
        }

        // Hook up the form submission
        const reviewForm = document.getElementById('new-review-form');
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const author = document.getElementById('reviewer-name').value.trim();
            const rating = parseInt(document.getElementById('reviewer-rating').value);
            const text = document.getElementById('reviewer-comment').value.trim();
            
            // Format today's date
            const today = new Date();
            const day = String(today.getDate()).padStart(2, '0');
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const year = today.getFullYear();
            const dateStr = `${day}/${month}/${year}`;

            // Add new review to database list
            const newReview = { author, rating, text, date: dateStr };
            data.reviewsList.unshift(newReview); // Prepend so it shows first

            // Recalculate store general rating
            const total = data.reviewsList.reduce((acc, r) => acc + r.rating, 0);
            data.rating = Math.round(total / data.reviewsList.length);
            data.reviewsCount = data.reviewsList.length;
            data.reviewText = `"${text}"`;

            // Save updated database to localStorage
            if (typeof storesData !== 'undefined') {
                localStorage.setItem('storesData', JSON.stringify(storesData));
            }

            // Re-render header stars
            updateHeaderStars(data.rating);

            // Re-render the reviews list
            renderReviews(data.reviewsList);

            // Reset form
            reviewForm.reset();

            // Display Toast notification
            showToast('Sua avaliação foi enviada e integrada com sucesso!');
        });
    }

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    }

    function renderReviews(list) {
        const reviewsContainer = document.getElementById('reviews-list-container');
        if (!reviewsContainer) return;
        reviewsContainer.innerHTML = '';

        if (list.length === 0) {
            reviewsContainer.innerHTML = '<p style="color:#A37566; font-style:italic;">Nenhuma avaliação ainda. Seja o primeiro a avaliar!</p>';
            return;
        }

        list.forEach(review => {
            let reviewStars = '';
            for (let i = 1; i <= 5; i++) {
                reviewStars += i <= review.rating ? '★' : '☆';
            }

            const rCard = document.createElement('div');
            rCard.className = 'my-review-card';
            rCard.innerHTML = `
                <div class="my-review-header">
                    <h4>${escapeHTML(review.author)}</h4>
                    <span class="date">${escapeHTML(review.date)}</span>
                </div>
                <div class="rating">${reviewStars}</div>
                <p class="my-review-text">"${escapeHTML(review.text)}"</p>
            `;
            reviewsContainer.appendChild(rCard);
        });
    }

    function updateHeaderStars(rating) {
        const starsEl = document.querySelector('.details-header .rating');
        if (!starsEl) return;
        
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            starsHTML += i <= rating ? '★' : '☆';
        }
        starsEl.textContent = starsHTML;
    }

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
            zIndex: '1000',
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
