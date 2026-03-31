// ======================== BANCO DE CONTEÚDO 100% PERSONALIZADO ========================
const CONTENT_DB = {
  cachorro: {
    filhote: {
      recipes: [
        { name: "🥣 Super Leite Materno Artificial", ingredients: "Leite específico, gema de ovo, probiótico", prep: "Morno, oferecer 4x ao dia", qty: "15ml/kg", tip: "Fortalecimento imunológico" },
        { name: "🍲 Patê Energético de Frango e Batata", ingredients: "Peito frango, batata-doce, óleo de coco", prep: "Cozer e triturar", qty: "30g/kg", tip: "Alto teor proteico" },
        { name: "🥩 Mix Anti-Anêmico", ingredients: "Coração, fígado, cenoura", prep: "Cozer e amassar", qty: "25g/kg", tip: "Ferro heme para desenvolvimento" },
        { name: "🐟 Ômega 3 Power", ingredients: "Sardinha, abóbora, espinafre", prep: "Cozer e servir", qty: "20g/kg", tip: "Essencial para neurodesenvolvimento" }
      ],
      trainings: [
        { title: "🎾 Socialização Precoce", steps: "Apresentar pessoas, sons suaves e outros pets vacinados", duration: "5 min/dia", tip: "Fase crítica até 16 semanas" },
        { title: "🐕 Ensinar 'Senta'", steps: "Use petisco guiando o focinho para trás", duration: "3 min", tip: "Reforço positivo imediato" },
        { title: "🦮 Andar na guia", steps: "Coleira leve, recompensar passos", duration: "5 min", tip: "Nunca puxar" },
        { title: "🧩 Estímulo mental", steps: "Brinquedos interativos com petisco", duration: "10 min", tip: "Evita ansiedade" }
      ],
      healthTopics: [
        { title: "💉 Calendário Vacinal Filhote", content: "V8/V10 aos 45 dias, reforço a cada 21 dias. Vermifugação quinzenal." },
        { title: "🦷 Dentição e troca de dentes", content: "Ofereça mordedores próprios. Evite objetos duros." },
        { title: "⚡ Cardioversão e energia", content: "Filhotes precisam de 18-22% de proteína. Evite sobrepeso." },
        { title: "🐛 Protozoários comuns", content: "Giárdia é frequente; fezes mal cheirosas merecem atenção." }
      ],
      proTips: [
        "💡 Crie uma rotina fixa de alimentação para evitar ansiedade.",
        "🧸 Brinquedos de textura variada previnem comportamentos destrutivos.",
        "🏠 Use tapetes higiênicos com feromônios para acelerar o aprendizado.",
        "🎓 Nunca use castigo físico; filhotes associam medo."
      ]
    },
    adulto: {
      recipes: [
        { name: "🔥 Bowl Alta Performance", ingredients: "Músculo bovino, quinoa, brócolis", prep: "Grelhar e misturar", qty: "22g/kg", tip: "Músculo para massa magra" },
        { name: "🐔 Frango com Cúrcuma", ingredients: "Peito frango, arroz integral, açafrão", prep: "Cozer e adicionar azeite", qty: "20g/kg", tip: "Anti-inflamatório natural" },
        { name: "🐟 Salmão e Abóbora", ingredients: "Salmão, abóbora cabotiá, linhaça", prep: "Assado e desfiado", qty: "25g/kg", tip: "Ômega 3 para pelagem" },
        { name: "🥩 Mix de Vísceras", ingredients: "Moela, coração, cenoura", prep: "Cozer lentamente", qty: "18g/kg", tip: "Rico em taurina e vitaminas B" }
      ],
      trainings: [
        { title: "🚶‍♂️ Passeio com Foco", steps: "Treinar olhar para o tutor ao passar por distrações", duration: "10 min", tip: "Use petiscos de alto valor" },
        { title: "🏆 Obediência Avançada", steps: "Comandos: deita, rola, espera", duration: "8 min", tip: "Divida em pequenas sessões" },
        { title: "🔄 Rotina de Agilidade", steps: "Pular obstáculos baixos, cones", duration: "12 min", tip: "Aumenta confiança" },
        { title: "🔇 Controle de latidos", steps: "Recompensar silêncio, comando 'quieto'", duration: "5 min", tip: "Consistência diária" }
      ],
      healthTopics: [
        { title: "🦷 Saúde periodontal", content: "70% dos cães adultos têm doença gengival. Escove 3x/semana." },
        { title: "⚖️ Controle de peso", content: "Manter escore corporal 4-5/9. Exercícios diários obrigatórios." },
        { title: "🧪 Check-up anual", content: "Hemograma, bioquímica e urinálise anuais para detecção precoce." }
      ],
      proTips: [
        "🎯 Treine 10 min diários, cérebro cansa igual ao corpo.",
        "🍖 Varie proteínas para evitar alergias alimentares.",
        "💧 Ofereça água filtrada em múltiplos pontos.",
        "🛏️ Crie um local de descanso exclusivo para redução de estresse."
      ]
    },
    idoso: {
      recipes: [
        { name: "🦴 Suporte Articular", ingredients: "Frango, gelatina sem sabor, glucosamina", prep: "Cozer e adicionar gelatina", qty: "18g/kg", tip: "Colágeno tipo II" },
        { name: "🥣 Sopa Renal Leve", ingredients: "Clara de ovo, abóbora, inhame", prep: "Cozer e amassar", qty: "15g/kg", tip: "Baixo fósforo" },
        { name: "🐟 Ômega 3 Sênior", ingredients: "Sardinha, arroz, brócolis", prep: "Cozer e desfiar", qty: "20g/kg", tip: "Reduz inflamação crônica" },
        { name: "🥑 Mix Antioxidante", ingredients: "Músculo, mirtilo, couve", prep: "Cozer levemente", qty: "18g/kg", tip: "Combate radicais livres" }
      ],
      trainings: [
        { title: "🧠 Jogos de memória", steps: "Esconder petiscos em copos, estimular farejamento", duration: "5-8 min", tip: "Previne declínio cognitivo" },
        { title: "🐾 Caminhada suave", steps: "Trajetos curtos com muitas pausas", duration: "10 min", tip: "Respeite o ritmo" },
        { title: "🛋️ Massagem relaxante", steps: "Movimentos circulares nas articulações", duration: "5 min", tip: "Aumenta circulação" },
        { title: "🎵 Música terapêutica", steps: "Colocar sons calmos e recompensar calma", duration: "5 min", tip: "Reduz ansiedade noturna" }
      ],
      healthTopics: [
        { title: "🧑‍🦳 Artrite e mobilidade", content: "Suplemente com condroitina, evite escorregões." },
        { title: "👀 Perda de visão/audição", content: "Ambientes previsíveis, não mover móveis com frequência." },
        { title: "💊 Disfunção cognitiva", content: "Suplementos com MCT e antioxidantes ajudam na memória." },
        { title: "❤️ Doenças cardíacas", content: "Check-up ecocardiográfico anual após os 8 anos." }
      ],
      proTips: [
        "🛏️ Camas ortopédicas aliviam dores nas articulações.",
        "🍲 Alimentação úmida ajuda hidratação e mastigação.",
        "🔔 Use sinos ou guizos para localizar o tutor.",
        "🌿 Fitoterápicos como cúrcuma e chá de camomila com supervisão."
      ]
    }
  },
  gato: {
    filhote: {
      recipes: [
        { name: "🥛 Fórmula Láctea Felina", ingredients: "Leite específico, gema, taurina", prep: "Morno, mamadeira", qty: "20ml/kg", tip: "Essencial para 0-4 semanas" },
        { name: "🐟 Patê de Salmão", ingredients: "Salmão cozido, cenoura, óleo de salmão", prep: "Amassar bem", qty: "25g/kg", tip: "Alto teor de DHA" },
        { name: "🍗 Frango com Fígado", ingredients: "Frango, fígado, abóbora", prep: "Cozer e liquidificar", qty: "22g/kg", tip: "Rico em vitamina A" },
        { name: "🥚 Papinha de Ovos", ingredients: "Ovo cozido, iogurte natural", prep: "Amassar", qty: "20g/kg", tip: "Proteína de alta digestibilidade" }
      ],
      trainings: [
        { title: "📦 Uso da caixinha", steps: "Após refeições, colocar na caixa, recompensar", duration: "3 min", tip: "Areia fina sem perfumes" },
        { title: "🐾 Arranhador vertical", steps: "Guiar as patas no arranhador, petisco", duration: "5 min", tip: "Evita móveis estragados" },
        { title: "🤝 Socialização com humanos", steps: "Manuseio suave, carinho e recompensas", duration: "10 min", tip: "Período crítico até 9 semanas" }
      ],
      healthTopics: [
        { title: "😷 Rinotraqueíte", content: "Vacina quádrupla (V4) a partir de 60 dias." },
        { title: "🐛 Vermifugação mensal", content: "Larvas de Toxocara são comuns; ambiente limpo." },
        { title: "👂 Otite e ácaros", content: "Limpeza auricular semanal com solução adequada." }
      ],
      proTips: [
        "🎣 Varie os brinquedos: varinhas e bolinhas despertam instinto caçador.",
        "🏠 Ofereça esconderijos seguros para que ele se sinta protegido.",
        "🍽️ Alimente 4x ao dia em potes rasos para evitar aerofagia."
      ]
    },
    adulto: {
      recipes: [
        { name: "🐟 Prevenção Urológica", ingredients: "Atum, abóbora, água filtrada", prep: "Cozer e servir com caldo", qty: "20g/kg", tip: "Aumenta ingestão hídrica" },
        { name: "🍗 Frango com Ervas", ingredients: "Peito frango, salsa, cenoura", prep: "Cozer e desfiar", qty: "22g/kg", tip: "Antioxidantes naturais" },
        { name: "🥫 Patê de Fígado", ingredients: "Fígado de frango, arroz, espinafre", prep: "Cozer e triturar", qty: "18g/kg", tip: "Vitaminas do complexo B" },
        { name: "🦐 Camarão e Abobrinha", ingredients: "Camarão, abobrinha, óleo de coco", prep: "Refogar leve", qty: "20g/kg", tip: "Gourmet funcional" }
      ],
      trainings: [
        { title: "🎯 Clicker para comandos", steps: "Associar click a petisco, ensinar 'senta'", duration: "5 min", tip: "Sessões curtas e frequentes" },
        { title: "🚫 Evitar mesas", steps: "Usar superfície adesiva temporária e redirecionar", duration: "5 min", tip: "Nunca punir" },
        { title: "🧩 Enriquecimento alimentar", steps: "Espalhar ração em comedouros lentos", duration: "10 min", tip: "Estimula caça" }
      ],
      healthTopics: [
        { title: "💧 Doença do trato urinário inferior", content: "Alimentação úmida e fontes de água corrente reduzem risco." },
        { title: "🦷 Gengivite felina", content: "Escovação 2x semana com pasta enzimática." },
        { title: "⚖️ Obesidade", content: "Gatos castrados têm redução de 30% no metabolismo; controle rigoroso." }
      ],
      proTips: [
        "🌿 Catnip pode ser usada para enriquecimento 2x/semana.",
        "🪶 Invista em nichos verticais (prateleiras) para segurança.",
        "🚰 Fonte de água corrente estimula consumo hídrico."
      ]
    },
    idoso: {
      recipes: [
        { name: "🥣 Renal Support", ingredients: "Clara de ovo, batata-doce, óleo de salmão", prep: "Cozer e amassar", qty: "15g/kg", tip: "Proteína de alta qualidade baixo fósforo" },
        { name: "🐟 Sardinha e Abóbora", ingredients: "Sardinha em água, abóbora cabotiá", prep: "Amassar", qty: "18g/kg", tip: "Ômega 3 e fibras" },
        { name: "🥑 Patê Articular", ingredients: "Frango, gelatina, cúrcuma", prep: "Cozer e adicionar gelatina", qty: "15g/kg", tip: "Colágeno + curcumina" },
        { name: "🍲 Sopa de Frango Fácil", ingredients: "Peito frango desfiado, caldo caseiro", prep: "Morno", qty: "20ml/kg", tip: "Hidratação extra" }
      ],
      trainings: [
        { title: "🧩 Jogos de farejamento", steps: "Esconder petiscos em caixas de papelão", duration: "5 min", tip: "Manutenção cognitiva" },
        { title: "🛌 Rotina de toque", steps: "Escovação suave + massagem nas costas", duration: "5 min", tip: "Fortalecimento vínculo" },
        { title: "🌿 Estímulo com ervas", steps: "Oferecer catnip ou valeriana em brinquedos", duration: "3 min", tip: "Alivia estresse" }
      ],
      healthTopics: [
        { title: "🩺 Hipertireoidismo", content: "Perda de peso com apetite voraz exige exame T4 total." },
        { title: "🦴 Osteoartrite", content: "Rampas para acessar locais altos e camas aquecidas." },
        { title: "💊 Insuficiência renal crônica", content: "Fosfato controlado, acesso fácil à água e vasilhas baixas." }
      ],
      proTips: [
        "📏 Monitore ingestão hídrica diariamente com medidor.",
        "🪞 Evite mudanças bruscas de ambiente; manten rotina.",
        "🧴 Suplementos com glucosamina sob supervisão veterinária."
      ]
    }
  }
};

let appState = {
  pet: "cachorro",
  idade: "adulto",
  petName: "Meu Pet",
  realAge: "",
  petWeight: "",
  checklist: [],
  reminders: [],
  vaccines: [],
  gallery: [],
  diaryEntries: []
};

function showToast(msg) {
  let t = document.getElementById('toastMsg');
  t.textContent = msg;
  t.style.opacity = '1';
  setTimeout(() => t.style.opacity = '0', 2500);
}

function saveFullState() {
  localStorage.setItem('petZenProState', JSON.stringify(appState));
}

function loadState() {
  let s = localStorage.getItem('petZenProState');
  if (s) {
    try {
      let p = JSON.parse(s);
      appState = { ...appState, ...p, diaryEntries: p.diaryEntries || [], checklist: p.checklist || [], reminders: p.reminders || [], vaccines: p.vaccines || [], gallery: p.gallery || [] };
    } catch (e) { }
  }
}

function getCurrentContent() {
  return CONTENT_DB[appState.pet]?.[appState.idade] || CONTENT_DB.cachorro.adulto;
}

function renderAllPersonalized() {
  const content = getCurrentContent();
  // Nutrição
  document.getElementById('recipesFullContainer').innerHTML = `<div class="grid-2col">` + content.recipes.map(r => `<div class="recipe-card"><h4>🍽️ ${r.name}</h4><p><strong>Ingredientes:</strong> ${r.ingredients}<br><strong>Preparo:</strong> ${r.prep}<br><strong>Porção:</strong> ${r.qty}<br><i class="fas fa-star-of-life"></i> ${r.tip}</p></div>`).join('') + `</div>`;
  document.getElementById('nutritionSubtitle').innerHTML = `📌 Cardápio exclusivo para ${appState.pet === 'cachorro' ? '🐶 Cachorro' : '🐱 Gato'} ${appState.idade === 'filhote' ? 'Filhote' : appState.idade === 'adulto' ? 'Adulto' : 'Idoso'}`;
  // Treinos
  document.getElementById('trainingGridFull').innerHTML = content.trainings.map(t => `<div class="training-card"><h4>${t.title}</h4><p>${t.steps}</p><small>⏱️ ${t.duration}</small><br><i class="fas fa-gem"></i> ${t.tip}</div>`).join('');
  // Saúde
  document.getElementById('healthGrid').innerHTML = content.healthTopics.map(h => `<div class="card-premium"><h3><i class="fas fa-thermometer-half"></i> ${h.title}</h3><p>${h.content}</p></div>`).join('');
  // Dicas PRO
  document.getElementById('proTipsGridFull').innerHTML = content.proTips.map(tip => `<div class="card-premium golden-card"><i class="fas fa-crown"></i> ${tip}</div>`).join('');
  // Dashboard dinâmico
  updateDashboardPersonalized();
  updateClientAreaDisplay();
}

function updateDashboardPersonalized() {
  const content = getCurrentContent();
  const planoLabel = `✨ Plano ideal para ${appState.pet === 'cachorro' ? '🐕 Cachorro' : '🐈 Gato'} ${appState.idade === 'filhote' ? 'Filhote' : appState.idade === 'adulto' ? 'Adulto' : 'Idoso'}`;
  const recRecipe = content.recipes[0]?.name || "Receita especial";
  const recTraining = content.trainings[0]?.title || "Treino personalizado";
  const healthAdvice = content.healthTopics[0]?.title || "Check-up preventivo";
  document.getElementById('dashboardCards').innerHTML = `
        <div class="dashboard-card"><h3><i class="fas fa-star-of-life"></i> ${planoLabel}</h3><p>🍲 Alimentação: ${recRecipe}<br>🎓 Treino: ${recTraining}<br>🩺 Foco: ${healthAdvice}</p></div>
        <div class="dashboard-card"><h3><i class="fas fa-utensils"></i> Nutrição do dia</h3><p>${recRecipe}: seguindo orientações exclusivas para ${appState.petName}.</p><button class="btn-icon" onclick="document.querySelector('[data-tab=\\\"alimentacao\\\"]').click()">Ver receitas</button></div>
        <div class="dashboard-card"><h3><i class="fas fa-dumbbell"></i> Treino principal</h3><p>${recTraining}</p><button class="btn-icon" onclick="document.querySelector('[data-tab=\\\"treinamento\\\"]').click()">Ver todos</button></div>
        <div class="dashboard-card"><h3><i class="fas fa-heartbeat"></i> Cuidado em destaque</h3><p>${healthAdvice}</p></div>`;
  document.getElementById('petSummaryArea').innerHTML = `<div><i class="fas fa-paw"></i> <strong>${appState.petName}</strong> • ${appState.pet === 'cachorro' ? '🐶' : '🐱'} • ${appState.idade === 'filhote' ? 'Filhote' : appState.idade === 'adulto' ? 'Adulto' : 'Idoso'} • ${appState.petWeight ? appState.petWeight + 'kg' : 'Peso'}</div><div><button id="quickEditProfile" class="btn-outline" style="padding:0.3rem 1rem;"><i class="fas fa-edit"></i> Editar</button></div>`;
  document.getElementById('quickEditProfile')?.addEventListener('click', () => openProfileModal());
}

function updateClientAreaDisplay() {
  document.getElementById('clientPetNameDisplay').innerText = appState.petName;
  document.getElementById('clientStageDisplay').innerText = `${appState.pet === 'cachorro' ? 'Cachorro' : 'Gato'} - ${appState.idade === 'filhote' ? 'Filhote' : appState.idade === 'adulto' ? 'Adulto' : 'Idoso'}`;
  document.getElementById('clientWeightDisplay').innerText = appState.petWeight || "?";
  document.getElementById('petNameSummary').innerText = appState.petName;
}

function renderDiary() {
  let listDiv = document.getElementById('diaryHistoryList');
  if (!appState.diaryEntries.length) {
    listDiv.innerHTML = '<p>Sem registros.</p>';
    document.getElementById('diaryInsights').innerHTML = '<i class="fas fa-chart-line"></i> Registre 3 dias para análise preditiva.';
    return;
  }
  listDiv.innerHTML = appState.diaryEntries.slice().reverse().slice(0, 12).map(e => `<div class="diary-entry"><strong>${e.date}</strong> | ${e.petNameEntry || appState.petName} | Peso: ${e.weight}kg | Humor: ${e.mood}<br>📝 ${e.notes}</div>`).join('');
  let lowMood = appState.diaryEntries.filter(e => e.mood && (e.mood.includes('Triste') || e.mood.includes('Letargia'))).length;
  let insights = lowMood > 1 ? "⚠️ Baixa disposição recorrente, avalie dor ou estresse." : "✅ Sem alertas críticos no histórico recente.";
  document.getElementById('diaryInsights').innerHTML = `<i class="fas fa-brain"></i> <strong>Análise preditiva:</strong> ${insights}`;
}

function addDiaryEntry() {
  let name = document.getElementById('diaryPetName').value.trim() || appState.petName;
  let weight = document.getElementById('diaryWeight').value;
  let food = document.getElementById('diaryFood').value;
  let mood = document.getElementById('diaryMood').value;
  let notes = document.getElementById('diaryNotes').value;
  if (!food && !weight && !notes) {
    showToast("Preencha ao menos um campo");
    return;
  }
  let newEntry = { date: new Date().toLocaleString(), petNameEntry: name, weight, food, mood, notes };
  appState.diaryEntries.unshift(newEntry);
  saveFullState();
  renderDiary();
  document.getElementById('diaryWeight').value = '';
  document.getElementById('diaryFood').value = '';
  document.getElementById('diaryNotes').value = '';
  showToast("Registro salvo!");
}

function renderChecklist() {
  let container = document.getElementById('advancedChecklist');
  let html = '';
  (appState.checklist || []).forEach((item, idx) => {
    html += `<div style="display:flex; gap:8px; margin:8px 0;"><input type="checkbox" ${item.checked ? 'checked' : ''} data-idx="${idx}" class="checkItem"> <span style="flex:1">${item.text}</span><button class="delCheck" data-idx="${idx}">🗑️</button></div>`;
  });
  container.innerHTML = html;
  attachCheckEvents();
}

function attachCheckEvents() {
  document.querySelectorAll('.checkItem').forEach(cb => cb.addEventListener('change', function () {
    let idx = this.dataset.idx;
    appState.checklist[idx].checked = this.checked;
    saveFullState();
  }));
  document.querySelectorAll('.delCheck').forEach(btn => btn.addEventListener('click', function () {
    let idx = this.dataset.idx;
    appState.checklist.splice(idx, 1);
    saveFullState();
    renderChecklist();
  }));
}

function renderReminders() {
  let container = document.getElementById('remindersList');
  if (!appState.reminders.length) {
    container.innerHTML = '<p>Sem lembretes</p>';
    return;
  }
  let html = '';
  appState.reminders.forEach((r, i) => {
    html += `<div>📌 ${r.text} - ${r.date || ''} <button class="delRem" data-idx="${i}">❌</button></div>`;
  });
  container.innerHTML = html;
  document.querySelectorAll('.delRem').forEach(btn => btn.addEventListener('click', function () {
    let idx = this.dataset.idx;
    appState.reminders.splice(idx, 1);
    saveFullState();
    renderReminders();
  }));
}

function renderVaccines() {
  let container = document.getElementById('vaccinesList');
  if (!appState.vaccines.length) {
    container.innerHTML = '<p>Adicione vacinas</p>';
    return;
  }
  let html = '';
  appState.vaccines.forEach((v, i) => {
    html += `<div>💉 ${v.name} - ${v.date} <button class="delVac" data-idx="${i}">🗑️</button></div>`;
  });
  container.innerHTML = html;
  document.querySelectorAll('.delVac').forEach(btn => btn.addEventListener('click', function () {
    let idx = this.dataset.idx;
    appState.vaccines.splice(idx, 1);
    saveFullState();
    renderVaccines();
  }));
}

function renderGallery() {
  let container = document.getElementById('galleryGrid');
  if (!appState.gallery.length) {
    container.innerHTML = '<p>Adicione fotos</p>';
    return;
  }
  let html = '';
  appState.gallery.forEach((url, i) => {
    html += `<div><img src="${url}" style="width:80px;height:80px;object-fit:cover;border-radius:16px;" onerror="this.src='https://placehold.co/80x80?text=Erro'"><br><button class="delGal" data-idx="${i}">Remover</button></div>`;
  });
  container.innerHTML = html;
  document.querySelectorAll('.delGal').forEach(btn => btn.addEventListener('click', function () {
    let idx = this.dataset.idx;
    appState.gallery.splice(idx, 1);
    saveFullState();
    renderGallery();
  }));
}

function openProfileModal() {
  document.getElementById('profilePetName').value = appState.petName;
  document.getElementById('profileType').value = appState.pet;
  document.getElementById('profileAgeStage').value = appState.idade;
  document.getElementById('profileRealAge').value = appState.realAge || '';
  document.getElementById('profileWeight').value = appState.petWeight || '';
  document.getElementById('profileModal').classList.add('active');
}

function resetAndOnboarding() {
  localStorage.removeItem('petZenProState');
  window.location.reload();
}

function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      let tabId = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active-pane'));
      document.getElementById(`${tabId}Pane`).classList.add('active-pane');
    });
  });
}

function loadFullApp() {
  renderAllPersonalized();
  renderDiary();
  renderChecklist();
  renderReminders();
  renderVaccines();
  renderGallery();
  initTabs();
  document.getElementById('editPetProfileBtn')?.addEventListener('click', openProfileModal);
  document.getElementById('editProfileFromClient')?.addEventListener('click', openProfileModal);
  document.getElementById('profileSummaryBtn')?.addEventListener('click', openProfileModal);
  document.getElementById('changeProfileBtn')?.addEventListener('click', resetAndOnboarding);
  document.getElementById('saveProfileBtn')?.addEventListener('click', () => {
    appState.petName = document.getElementById('profilePetName').value;
    appState.pet = document.getElementById('profileType').value;
    appState.idade = document.getElementById('profileAgeStage').value;
    appState.realAge = document.getElementById('profileRealAge').value;
    appState.petWeight = document.getElementById('profileWeight').value;
    saveFullState();
    renderAllPersonalized();
    renderDiary();
    document.getElementById('profileModal').classList.remove('active');
    showToast("Perfil atualizado! Conteúdo 100% personalizado.");
  });
  document.getElementById('addCheckItemBtn')?.addEventListener('click', () => {
    let val = document.getElementById('newCheckItem').value.trim();
    if (val) {
      if (!appState.checklist) appState.checklist = [];
      appState.checklist.push({ text: val, checked: false });
      saveFullState();
      renderChecklist();
      document.getElementById('newCheckItem').value = '';
    }
  });
  document.getElementById('addReminderBtn')?.addEventListener('click', () => {
    let txt = document.getElementById('reminderText').value;
    let date = document.getElementById('reminderDate').value;
    if (txt) {
      if (!appState.reminders) appState.reminders = [];
      appState.reminders.push({ text: txt, date });
      saveFullState();
      renderReminders();
      document.getElementById('reminderText').value = '';
      document.getElementById('reminderDate').value = '';
    }
  });
  document.getElementById('addVaccineBtn')?.addEventListener('click', () => {
    let name = document.getElementById('vacName').value;
    let date = document.getElementById('vacDate').value;
    if (name) {
      if (!appState.vaccines) appState.vaccines = [];
      appState.vaccines.push({ name, date });
      saveFullState();
      renderVaccines();
      document.getElementById('vacName').value = '';
      document.getElementById('vacDate').value = '';
    }
  });
  document.getElementById('addImageBtn')?.addEventListener('click', () => {
    let url = document.getElementById('imgUrl').value.trim();
    if (url) {
      if (!appState.gallery) appState.gallery = [];
      appState.gallery.push(url);
      saveFullState();
      renderGallery();
      document.getElementById('imgUrl').value = '';
    }
  });
  document.getElementById('saveDiaryBtn')?.addEventListener('click', addDiaryEntry);
  document.getElementById('installAppBigBtn')?.addEventListener('click', () => {
    let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    let msg = isIOS ? "Safari: compartilhar → 'Adicionar à Tela de Início'." : "Chrome: 3 pontos → 'Adicionar à tela inicial'.";
    document.getElementById('installInstructions').innerHTML = msg;
    document.getElementById('installModal').classList.add('active');
  });
  document.getElementById('closeModalBtn')?.addEventListener('click', () => document.getElementById('installModal').classList.remove('active'));
}

document.addEventListener('DOMContentLoaded', () => {
  loadState();
  const hasProfile = appState.petName && appState.pet && appState.idade && appState.petWeight;
  if (!hasProfile || appState.petName === "Meu Pet" && !appState.petWeight) {
    document.getElementById('onboardingScreen').style.display = 'flex';
    document.getElementById('mainApp').style.display = 'none';
  } else {
    document.getElementById('onboardingScreen').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
    loadFullApp();
  }
  let selectedPet = "cachorro", selectedAge = "adulto";
  document.querySelectorAll('.pet-option').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('.pet-option').forEach(o => o.classList.remove('selected'));
      el.classList.add('selected');
      selectedPet = el.dataset.pet;
    });
  });
  document.querySelectorAll('.age-option').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('.age-option').forEach(o => o.classList.remove('selected'));
      el.classList.add('selected');
      selectedAge = el.dataset.age;
    });
  });
  document.getElementById('completeOnboardingBtn').addEventListener('click', () => {
    let name = document.getElementById('onboardingName').value.trim();
    let weight = document.getElementById('onboardingWeight').value.trim();
    if (!name || !weight) {
      showToast("Preencha nome e peso");
      return;
    }
    appState.petName = name;
    appState.petWeight = weight;
    appState.pet = selectedPet;
    appState.idade = selectedAge;
    appState.realAge = (selectedAge === 'filhote' ? '0-12 meses' : (selectedAge === 'idoso' ? '7+ anos' : '2-6 anos'));
    if (!appState.checklist) appState.checklist = [{ text: "Passeio diário", checked: false }];
    saveFullState();
    document.getElementById('onboardingScreen').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
    loadFullApp();
    showToast(`Perfil ${appState.petName} carregado! Conteúdo 100% personalizado.`);
  });
});