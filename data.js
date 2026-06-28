// Banco de dados compartilhado de brechós
const defaultStoresData = [
    {
        id: 'garagem-mix',
        name: 'Garagem Mix Brechó',
        rating: 4,
        reviewsCount: 14,
        reviewText: '"Amo... Lugar limpo, organizado, ótimo atendimento. Já encontrei excelentes peças. Super recomendo!"',
        hours: 'Seg-Sex: 9h-18h | Sáb: 9h - 13h',
        address: 'Rua Dr. Bozano, 799 - Bonfim, Santa Maria - RS, 97015-001',
        contact: 'WhatsApp: (55) 99123-4567 | Instagram: @garagemmix_sm',
        distance: 0.8,
        style: 'streetwear',
        management: 'privado',
        bgImage: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        ],
        customClass: '',
        reviewsList: [
            { author: 'Larissa', rating: 4, text: 'Lugar limpo, muito organizado e com atendimento excelente. Encontrei uma jaqueta jeans oversized maravilhosa!', date: '05/06/2026' },
            { author: 'Marcos Silva', rating: 4, text: 'Muito bem localizado, variedade muito boa de casacos. Recomendo.', date: '22/05/2026' },
            { author: 'Ana Júlia', rating: 5, text: 'Meu brechó favorito na cidade! As araras são organizadas por tamanho, o que poupa muito tempo de garimpo.', date: '10/05/2026' }
        ]
    },
    {
        id: 'vo-adelaide',
        name: 'Brechó Vó Adelaide',
        rating: 5,
        reviewsCount: 42,
        reviewText: '"Excelente atendimento. Muitas coisas boas para garimpar."',
        hours: 'Seg-Sex: 9h-18h | Sáb: 9h - 13h',
        address: 'R. Serafim Valandro, 501 - Centro, Santa Maria - RS, 97015-631',
        contact: 'Telefone: (55) 3028-9876 | Instagram: @brechovoadelaide',
        distance: 2.4,
        style: 'vintage',
        management: 'privado',
        bgImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        ],
        customClass: 'vo-adelaide',
        reviewsList: [
            { author: 'Larissa', rating: 5, text: 'O atendimento é impecável. A seleção de peças retrô e vintage é incrível, garimpei um vestido dos anos 80 perfeito!', date: '12/06/2026' },
            { author: 'Juliana Costa', rating: 5, text: 'Um dos brechós mais antigos e tradicionais de Santa Maria. Muitas antiguidades, louças e roupas vintage legítimas.', date: '01/06/2026' },
            { author: 'Carlos Henrique', rating: 5, text: 'Excelente atendimento. Muitas coisas boas para garimpar. Roupas limpas e cheirosas.', date: '15/05/2026' }
        ]
    },
    {
        id: 'retro-vibe',
        name: 'Retro Vibe Brechó',
        rating: 5,
        reviewsCount: 12,
        reviewText: '"Verdadeira viagem no tempo. Peças originais dos anos 70 e 80 muito bem preservadas."',
        hours: 'Seg-Sex: 10h-19h | Sáb: 10h-14h',
        address: 'Rua Alberto Pasqualini, 125 - Centro, Santa Maria - RS, 97015-010',
        contact: 'WhatsApp: (55) 98456-1122 | Instagram: @retrovibesm',
        distance: 1.5,
        style: 'vintage',
        management: 'privado',
        bgImage: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        ],
        customClass: '',
        reviewsList: [
            { author: 'Larissa', rating: 5, text: 'Adorei a seleção dos anos 80 e 90. A curadoria é de alto nível e as roupas estão impecavelmente higienizadas.', date: '28/05/2026' },
            { author: 'Pedro Fagundes', rating: 5, text: 'Verdadeira viagem no tempo. Peças originais dos anos 70 e 80 muito bem preservadas. Jaquetas esportivas clássicas sensacionais.', date: '15/05/2026' }
        ]
    },
    {
        id: 'bazar-solidario',
        name: 'Bazar da Solidariedade (Lar de Idosos)',
        rating: 4,
        reviewsCount: 58,
        reviewText: '"Preços imbatíveis e roupas em excelente estado. Toda a renda vai para projetos sociais. Vale muito a visita."',
        hours: 'Seg-Sex: 8:30h-17:30h | Sáb: 9h-12h',
        address: 'Av. Rio Branco, 320 - Centro, Santa Maria - RS, 97010-040',
        contact: 'Telefone: (55) 3221-5000',
        distance: 4.2,
        style: 'casual',
        management: 'beneficente',
        bgImage: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        ],
        customClass: '',
        reviewsList: [
            { author: 'Fernanda Lima', rating: 4, text: 'Preços imbatíveis e roupas em excelente estado. Dá para garimpar peças por R$ 5,00 ou R$ 10,00.', date: '04/06/2026' },
            { author: 'Beto Nogueira', rating: 5, text: 'Lugar ótimo, as voluntárias são muito simpáticas e a causa de ajudar o Lar de Idosos é nobre. Vale muito a pena ir garimpar lá.', date: '20/05/2026' }
        ]
    },
    {
        id: 'cabide-ouro',
        name: 'Cabide de Ouro Streetwear',
        rating: 4,
        reviewsCount: 25,
        reviewText: '"Melhor curadoria de streetwear, corta-ventos e calças cargo. Os preços condizem com a qualidade das marcas."',
        hours: 'Seg-Sáb: 10h-20h',
        address: 'Rua Venâncio Aires, 1450 - Centro, Santa Maria - RS, 97010-003',
        contact: 'WhatsApp: (55) 99988-7766 | Instagram: @cabidedeouro.sm',
        distance: 8.5,
        style: 'streetwear',
        management: 'privado',
        bgImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        ],
        customClass: '',
        reviewsList: [
            { author: 'Gabriel Nunes', rating: 4, text: 'Melhor curadoria de streetwear, corta-ventos e calças cargo. Os preços condizem com a qualidade.', date: '11/06/2026' },
            { author: 'Letícia Vargas', rating: 4, text: 'Muitas camisetas oversized e bonés vintage. Atendimento muito legal.', date: '05/05/2026' }
        ]
    },
    {
        id: 'estilo-curado',
        name: 'Estilo Curado Premium',
        rating: 5,
        reviewsCount: 65,
        reviewText: '"Peças de grife e luxo autênticas. O atendimento é personalizado e o espaço é lindo."',
        hours: 'Seg-Sex: 9:30h-18:30h | Sáb: 9h-13h',
        address: 'Rua Silva Jardim, 1820 - N. Sra. do Rosário, Santa Maria - RS, 97010-492',
        contact: 'WhatsApp: (55) 99655-4433 | Instagram: @estilocuradopremium',
        distance: 12.3,
        style: 'grife',
        management: 'privado',
        bgImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        ],
        customClass: '',
        reviewsList: [
            { author: 'Mariana Pires', rating: 5, text: 'Peças de grife e luxo legítimas. As donas explicam a história de cada bolsa. Experiência de compra impecável!', date: '08/06/2026' },
            { author: 'Luiza Amaral', rating: 5, text: 'Ótimo para encontrar casacos de lã pura e lenços importados. As peças parecem novas.', date: '19/05/2026' }
        ]
    },
    {
        id: 'crescer-feliz',
        name: 'Crescer Feliz Brechó Infantil',
        rating: 3,
        reviewsCount: 9,
        reviewText: '"Ótima opção para economizar com roupas infantis, que perdem muito rápido. Brinquedos em ótimo estado."',
        hours: 'Seg-Sex: 9h-18h | Sáb: 9h-12h',
        address: 'Av. Medianeira, 880 - Medianeira, Santa Maria - RS, 97060-001',
        contact: 'Telefone: (55) 3219-5566 | Instagram: @crescerfelizinfantil',
        distance: 3.8,
        style: 'infantil',
        management: 'privado',
        bgImage: 'https://images.unsplash.com/photo-1519689680058-324335c77eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1519689680058-324335c77eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1471286174240-e6458e7d4a73?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        ],
        customClass: '',
        reviewsList: [
            { author: 'Carla Dias', rating: 3, text: 'Ótima opção para economizar com roupas de bebês, mas o espaço físico é um pouco apertado.', date: '30/05/2026' },
            { author: 'Roberto Santos', rating: 4, text: 'Muitos calçados infantis e brinquedos educativos. Os preços são ótimos pelo estado das peças.', date: '14/05/2026' }
        ]
    },
    {
        id: 'bazar-central',
        name: 'Bazar Beneficente Central',
        rating: 3,
        reviewsCount: 32,
        reviewText: '"Preços simbólicos excelentes para garimpar com paciência. Bastante bagunçado."',
        hours: 'Quintas e Sextas: 14h-17h',
        address: 'Rua Astrogildo de Azevedo, 220 - Centro, Santa Maria - RS, 97015-020',
        contact: 'Telefone Paróquia: (55) 3221-1200',
        distance: 0.5,
        style: 'casual',
        management: 'beneficente',
        bgImage: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        ],
        customClass: '',
        reviewsList: [
            { author: 'Thiago Schmitt', rating: 2, text: 'Muito bagunçado. Roupas misturadas em bacias gigantes. Precisa ter muita paciência e tempo para encontrar algo útil.', date: '12/06/2026' },
            { author: 'Cleusa Maria', rating: 4, text: 'Peças por R$ 2,00 ou R$ 5,00. Lavando bem em casa fica tudo ótimo. Ajudo sempre comprando lá.', date: '02/06/2026' }
        ]
    },
    {
        id: 'grife-vintage',
        name: 'Grife & Vintage Curadoria',
        rating: 5,
        reviewsCount: 18,
        reviewText: '"Curadoria espetacular de óculos de sol, lenços e acessórios vintage originais das décadas de 70 e 80."',
        hours: 'Seg-Sex: 10h-18:30h | Sáb: 10h-16h',
        address: 'Rua Floriano Peixoto, 1112 - Centro, Santa Maria - RS, 97015-372',
        contact: 'WhatsApp: (55) 98877-6655 | Instagram: @grifeandvintage',
        distance: 5.1,
        style: 'grife',
        management: 'privado',
        bgImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        ],
        customClass: '',
        reviewsList: [
            { author: 'Patrícia Werner', rating: 5, text: 'Curadoria espetacular de óculos de sol, lenços e bolsas clássicas. Peças exclusivas e impecáveis.', date: '05/06/2026' },
            { author: 'Jonas Silveira', rating: 5, text: 'Ótimo atendimento. Encontrei uma gravata de seda vintage incrível dos anos 70.', date: '20/05/2026' }
        ]
    },
    {
        id: 'street-style',
        name: 'Street Style Garimpar',
        rating: 4,
        reviewsCount: 15,
        reviewText: '"Variedade boa de moletons esportivos e jaquetas puffer, com preços um pouco salgados, mas de qualidade."',
        hours: 'Ter-Sáb: 13h-19h',
        address: 'Rua Duque de Caxias, 620 - Dores, Santa Maria - RS, 97050-180',
        contact: 'Instagram: @streetstylegarimpar',
        distance: 7.2,
        style: 'streetwear',
        management: 'privado',
        bgImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        images: [
            'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        ],
        customClass: '',
        reviewsList: [
            { author: 'Rodrigo Lima', rating: 3, text: 'Muitos moletons e jaquetas esportivas legais, mas o preço é um pouco elevado para peças usadas.', date: '10/06/2026' },
            { author: 'Alice Dorneles', rating: 4, text: 'Curadoria focada em marcas de skate dos anos 2000. Peças muito legais e raras.', date: '01/06/2026' }
        ]
    }
];

// Inicializar do localStorage ou usar o padrão
let storesData = JSON.parse(localStorage.getItem('storesData'));
if (storesData) {
    let needsUpdate = false;
    storesData.forEach(store => {
        if (store.bgImage === 'garagem_mix.png' || store.bgImage === 'assets/garagem_mix.png') {
            store.bgImage = 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
            needsUpdate = true;
        }
        if (store.bgImage === 'vo_adelaide.png' || store.bgImage === 'assets/vo_adelaide.png') {
            store.bgImage = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
            needsUpdate = true;
        }
        if (store.images) {
            store.images = store.images.map(img => {
                if (img === 'garagem_mix.png' || img === 'assets/garagem_mix.png') {
                    needsUpdate = true;
                    return 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
                }
                if (img === 'vo_adelaide.png' || img === 'assets/vo_adelaide.png') {
                    needsUpdate = true;
                    return 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
                }
                return img;
            });
        }
    });
    if (needsUpdate) {
        localStorage.setItem('storesData', JSON.stringify(storesData));
    }
} else {
    storesData = defaultStoresData;
    localStorage.setItem('storesData', JSON.stringify(storesData));
}
