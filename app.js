// Navegação por abas modular
function switchTab(tabId) {
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}

// Consumo das Edge Functions e Renderização dos Carrosséis
async function fetchEdgeData() {
    try {
        // Substitua pelo seu endpoint real da Edge Function quando necessário
        // const res = await fetch('https://sua-edge-function.supabase.co/functions/v1/api');
        // const data = await res.json();

        // Mock estruturado modularmente
        const data = {
            highlights: [
                { title: "Streaming 4K Ultra", desc: "Baixa latência com WebRTC" },
                { title: "Interface Orbital", desc: "Navegação fluida e moderna" },
                { title: "Edge Security", desc: "Isolamento total de arquivos" }
            ],
            media: [
                { title: "Canal 01 - Live TV", desc: "Transmissão ao vivo 24h" },
                { title: "Filmes & Séries OIO", desc: "Catálogo sob demanda atualizado" },
                { title: "Podcast Space", desc: "Áudio espacial imersivo" }
            ],
            tools: [
                { title: "Supabase Sync", desc: "Banco de dados em tempo real" },
                { title: "GitHub Pages", desc: "Deploy contínuo e automatizado" }
            ],
            ideas: [
                { title: "IA Local Integrada", desc: "Comandos rápidos processados diretamente no dispositivo." },
                { title: "Player Lyria Audio", desc: "Trilhas sonoras dinâmicas baseadas no feed de uso." },
                { title: "Modo Família Seguro", desc: "Painel restrito com permissões granulares por pasta." }
            ]
        };

        renderData(data);
    } catch (err) {
        console.error("Erro ao carregar dados das Edge Functions:", err);
    }
}

function renderData(data) {
    document.getElementById('home-carousel').innerHTML = data.highlights.map(item => `
        <div class="carousel-card">
            <div class="card-title">${item.title}</div>
            <div class="card-desc">${item.desc}</div>
        </div>
    `).join('');

    document.getElementById('media-carousel').innerHTML = data.media.map(item => `
        <div class="carousel-card">
            <div class="card-title">${item.title}</div>
            <div class="card-desc">${item.desc}</div>
        </div>
    `).join('');

    document.getElementById('tools-carousel').innerHTML = data.tools.map(item => `
        <div class="carousel-card">
            <div class="card-title">${item.title}</div>
            <div class="card-desc">${item.desc}</div>
        </div>
    `).join('');

    document.getElementById('ideas-grid').innerHTML = data.ideas.map(item => `
        <div class="glass-card">
            <div class="card-title" style="margin-bottom: 6px;">${item.title}</div>
            <div class="card-desc">${item.desc}</div>
        </div>
    `).join('');
}

window.onload = fetchEdgeData;
