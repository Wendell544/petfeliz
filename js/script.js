document.addEventListener('DOMContentLoaded', () => {
    // ==================== ESTADO GLOBAL ====================
    let appState = {
        pet: "cachorro", idade: "adulto", petName: "Meu Pet", realAge: "", petWeight: "",
        checklist: [{ text: "Passeio diário (20min)", checked: false }, { text: "Escovação dental", checked: false }],
        reminders: [], vaccines: [], gallery: [],
        diaryEntries: [], favoriteRecipes: []
    };

    function showToast(msg) { let t = document.getElementById('toastMsg'); t.textContent = msg; t.style.opacity = '1'; setTimeout(()=> t.style.opacity='0', 2500); }
    function saveFullState() { localStorage.setItem('petZenProState', JSON.stringify(appState)); }
    function loadState() { let s = localStorage.getItem('petZenProState'); if(s) { try { let p = JSON.parse(s); appState = { ...appState, ...p }; if(!appState.diaryEntries) appState.diaryEntries = []; if(!appState.favoriteRecipes) appState.favoriteRecipes = []; } catch(e){} } }

    // ========== RECEITAS FUNCIONAIS (conteúdo premium) ==========
    const recipesData = {
        filhote: [
            { name:"Super Papinha Imunológica", ingredients:"Coração de frango, fígado, batata-doce, brócolis, óleo de coco", prep:"Cozer e triturar até pastoso", qty:"30-35g/kg", freq:"3-4x", tip:"Rico em ferro e zinco. Vitamina A para desenvolvimento ocular. Adicione probiótico 1x/dia.", why:"Coração fornece taurina (essencial), fígado = vitamina A natural, óleo de coco MCT para energia cerebral." },
            { name:"Creme de Peixe com Abóbora", ingredients:"Pescada, abóbora, espinafre, gema cozida", prep:"Cozer, desfiar, amassar", qty:"28g/kg", freq:"3x", tip:"Ômega 3 para mielinização neural. Cálcio da gema. Ideal para raças grandes." },
            { name:"Mix de Carne e Quinoa", ingredients:"Carne moída magra, quinoa real, cenoura, couve", prep:"Refogar sem óleo e cozinhar", qty:"30g/kg", freq:"3-4x", tip:"Quinoa = proteína completa + fibras prebióticas. Ajuda flora intestinal." }
        ],
        adulto: [
            { name:"Proteína de Alto Valor Biológico", ingredients:"Peito de frango, brócolis, arroz integral, sardinha em lata (água)", prep:"Cozer tudo e desfiar", qty:"20-25g/kg", freq:"2x", tip:"Sardinha = ômega 3 anti-inflamatório. Brócolis = sulforafano antioxidante." },
            { name:"Fórmula para Pelagem Premium", ingredients:"Salmão, batata-doce, espinafre, gengibre, azeite extra virgem", prep:"Assar ou cozinhar", qty:"22g/kg", freq:"2x", tip:"Ácidos graxos EPA/DHA + zinco natural. Gengibre reduz inflamação sistêmica." },
            { name:"Recuperação Muscular", ingredients:"Coração de boi, inhame, abóbora, açafrão + pimenta preta", prep:"Cozer e triturar", qty:"20-25g/kg", freq:"2x", tip:"Coração rico em CoQ10, açafrão potencializado pela piperina. Para cães atletas." }
        ],
        idoso: [
            { name:"Suporte Articular Avançado", ingredients:"Frango, mandioquinha, gelatina sem sabor, cúrcuma, colágeno hidrolisado", prep:"Cozer e adicionar gelatina", qty:"18g/kg", freq:"2x", tip:"Colágeno tipo II + glicosamina natural. Cúrcuma = anti-inflamatório potente." },
            { name:"Patê Renal Suave", ingredients:"Clara de ovo, abóbora, arroz cateto, azeite", prep:"Cozer e amassar", qty:"15-18g/kg", freq:"2x", tip:"Baixo fósforo, proteína de alta digestibilidade. Ideal para início de doença renal." },
            { name:"Energia Cognitiva", ingredients:"Miúdos de frango, beterraba, óleo de coco, brócolis", prep:"Cozer", qty:"18g/kg", freq:"2x", tip:"Betacianina antioxidante cerebral, MCT melhora função cognitiva." }
        ]
    };
    function renderAllRecipes() {
        let container = document.getElementById('recipesFullContainer');
        let html = '';
        const stages = ['filhote', 'adulto', 'idoso'];
        const stageNames = { filhote:'🐣 FILHOTES - Desenvolvimento Máximo', adulto:'⚡ ADULTOS - Performance e Manutenção', idoso:'👑 IDOSOS - Longevidade Ativa' };
        stages.forEach(stage => {
            html += `<div><h3>${stageNames[stage]}</h3><div class="grid-2col">` + recipesData[stage].map(r => `<div class="recipe-card"><h4>🍲 ${r.name}</h4><p><strong>Ingredientes:</strong> ${r.ingredients}<br><strong>Preparo:</strong> ${r.prep}<br><strong>Porção:</strong> ${r.qty}<br><strong>Frequência:</strong> ${r.freq}<br><strong>🧠 Por que funciona:</strong> ${r.why || r.tip}<br><i class="fas fa-star-of-life"></i> Dica Pro: ${r.tip}</p><button class="favSingleRecipe btn-icon" data-recipe="${r.name}">⭐ Salvar favorita</button></div>`).join('') + `</div></div>`;
        });
        container.innerHTML = html;
        document.querySelectorAll('.favSingleRecipe').forEach(btn => btn.addEventListener('click', (e) => { let rec = btn.dataset.recipe; if(!appState.favoriteRecipes.includes(rec)) appState.favoriteRecipes.push(rec); saveFullState(); showToast(`Receita "${rec}" salva nos favoritos!`); }));
    }

    // TREINAMENTO PREMIUM
    const trainingLibrary = [
        { title:"🎯 Condicionamento Operante Avançado", steps:"Use clicker para marcar comportamentos exatos. Reforce em janela de 0,5 seg. Atraso reduz aprendizado em 40%.", duration:"5-10 min/dia", tip:"Mantenha sessões curtas, encerre sempre com sucesso." },
        { title:"🧠 Neurociência do Sentar", steps:"Posicione petisco acima da cabeça, espere o movimento natural. Nunca pressione a garupa. Associe comando após 3 repetições.", duration:"3 min", tip:"Estímulo visual precede o verbal: primeiramente só gesto." },
        { title:"🐕‍🦺 Controle de Impulsos: 'Espera' Profundo", steps:"Peça sentar, coloque petisco no chão, cubra com a mão. Libere com 'ok'. Aumente distância e tempo gradual.", duration:"8 min", tip:"Use porta de casa para treinar paciência antes de sair." },
        { title:"🚶 Caminhada em 'Posição de Ouro'", steps:"Ensine o pet a andar rente à perna esquerda sem puxar. Use vara de treino ou petisco fixo na cintura. Reforce a cada 3 passos corretos.", duration:"10 min passeio", tip:"Peitoral com presilha frontal reduz força." },
        { title:"🔄 Rolar com Liberdade", steps:"A partir do deitado, guie o petisco em arco atrás da cabeça. Se ele resistir, pare e recompense a tentativa. Respeite a anatomia.", duration:"5 min", tip:"Nunca force a rolagem; alguns cães tem limitação." },
        { title:"🔇 Silêncio Premiado", steps:"Quando latir, apresente petisco silenciosamente e espere 2 seg de silêncio. Aumente gradativamente.", duration:"8 min", tip:"Não use 'não' aos gritos – o cão associa o grito ao momento de latir." },
        { title:"🚫 'Deixa' em Situações de Risco", steps:"Treine com objetos de baixo valor, depois aumente dificuldade (comida no chão). Recompense com algo de valor superior.", duration:"10 min", tip:"Use frango desfiado como recompensa principal." },
        { title:"🚪 Porta com Autocontrole", steps:"Treine sentar antes de abrir a porta. Se levantar, feche. Só libera quando mantiver sentado.", duration:"12 min", tip:"Use coleira de treino para segurança." },
        { title:"🐾 Socialização Estratégica", steps:"Exponha a ambientes controlados com reforço positivo. Evite encontros forçados. Leia linguagem corporal (orelhas, cauda).", duration:"15 min", tip:"Cães tensos mostram 'olho de baleia'. Respeite." },
        { title:"🧩 Enriquecimento Cognitivo", steps:"Crie desafios: garrafas pet com furos, tapetes farejadores, caixas de papelão com petiscos. Mude 2x semana.", duration:"diário", tip:"Estimula neurônios-espelho e reduz ansiedade." }
    ];
    function renderFullTraining() { document.getElementById('trainingGridFull').innerHTML = trainingLibrary.map(t => `<div class="training-card"><h4>${t.title}</h4><p>${t.steps}</p><small>⏱️ ${t.duration}</small><br><i class="fas fa-gem"></i> ${t.tip}</div>`).join(''); }

    // NUTRIÇÃO AVANÇADA
    const nutritionArticles = [
        { title:"Cálculo Calórico Personalizado", content:"NER = 70 * (peso kg)^0,75. Para cães castrados multiplique por 1,6, ativos por 2,0. Gatos castrados 1,2. Ajuste semanal." },
        { title:"Análise de Rótulo: % de Proteína na Matéria Seca", content:"(proteína % / (100 - umidade %)) * 100. Mínimo 30% para cães, 40% para gatos. Evite subprodutos e corantes." },
        { title:"Suplementação Funcional", content:"Ômega-3 (EPA/DHA): 40mg/kg/dia para efeito anti-inflamatório. Glucosamina: 15mg/kg para idosos. Probióticos: cepas Enterococcus faecium." },
        { title:"Dieta Mista: Ração + Natural", content:"Nunca misture no mesmo horário (diferença de digestão). Forneça natural em refeição separada. Mantenha proporção 70/30." },
        { title:"Alimentos Proibidos com Justificativa", content:"Uva e uva passa: nefrotoxicidade. Chocolate: teobromina causa arritmia. Xilitol: hipoglicemia fulminante. Alho em excesso: anemia oxidativa." }
    ];
    function renderNutrition() { document.getElementById('nutritionGrid').innerHTML = nutritionArticles.map(a => `<div class="card-premium"><h3><i class="fas fa-leaf"></i> ${a.title}</h3><p>${a.content}</p></div>`).join(''); }

    // SAÚDE PREVENTIVA AVANÇADA
    const healthTopics = [
        { title:"Sinais Precoces de Doença Renal", content:"Polidipsia (>100ml/kg/dia), halitose amoniacal, perda de peso. Exame: creatinina, SDMA, urinálise. Intervenção nutricional precoce prolonga sobrevida em 2 anos." },
        { title:"Displasia Coxofemoral: Prevenção", content:"Evite sobrepeso nos primeiros 12 meses. Suplemente com colágeno e ômega-3. Radiografia aos 2 anos para rastreio." },
        { title:"Doença Periodontal Silenciosa", content:"70% dos cães acima de 3 anos têm periodontite. Escovação diária + enzimas (polipeptídeos). Sem tratamento, bactérias atingem coração e rins." },
        { title:"Vacinação de Alto Risco", content:"Além da V10, considere vacina contra leptospirose (sorvariedades) para cães com acesso a área urbana. Revacinação por título de anticorpos." }
    ];
    function renderHealth() { document.getElementById('healthGrid').innerHTML = healthTopics.map(h => `<div class="card-premium"><h3><i class="fas fa-thermometer-half"></i> ${h.title}</h3><p>${h.content}</p></div>`).join(''); }

    // DICAS PRO
    const proTipsList = [
        "💎 Use tapete de farejamento para reduzir ansiedade em 40% em apenas 15 minutos/dia.",
        "💰 Economize: compre suplementos em pó (glucosamina) ao invés de mastigáveis – custo 60% menor.",
        "🧊 Congele caldo de ossos em forminhas de gelo para hidratação e enriquecimento no verão.",
        "📈 Treine micro-comportamentos: 3 minutos antes das refeições aumentam foco e obediência.",
        "🌿 Fitoterapia funcional: camomila para ansiedade, alecrim para repelir pulgas (uso externo).",
        "📊 Use planilha de indicadores: apetite, fezes (escala de Bristol), consumo de água – detecta problemas 3 dias antes.",
        "🦷 Escovação com pasta enzimática + escova de dedo reduz tártaro 80% em 6 meses.",
        "🎒 Cães de trabalho (pastoreio, farejadores) precisam de 2h de estímulo cognitivo diário para evitar estereotipias."
    ];
    function renderProTips() { document.getElementById('proTipsGridFull').innerHTML = proTipsList.map(tip => `<div class="card-premium golden-card"><i class="fas fa-crown"></i> ${tip}</div>`).join(''); }

    // DIÁRIO INTELIGENTE
    function analyzeDiaryPatterns() {
        let entries = appState.diaryEntries;
        if(entries.length === 0) { document.getElementById('diaryInsights').innerHTML = '<i class="fas fa-chart-line"></i> Após 3 registros, insights automáticos aparecerão aqui.'; return; }
        let lowMoodCount = entries.filter(e => e.mood && (e.mood.includes('Triste') || e.mood.includes('Letargia'))).length;
        let weightFluctuations = entries.some(e => e.weight && appState.petWeight && Math.abs(parseFloat(e.weight) - parseFloat(appState.petWeight)) > 0.5);
        let repeatedFood = entries.slice(0,5).map(e=>e.food).filter((v,i,a)=>a.indexOf(v)===i).length < 3;
        let insights = [];
        if(lowMoodCount >= 2) insights.push("⚠️ Padrão de baixa disposição detectado. Avalie dor oculta (articulações/dentes) ou enriquecimento ambiental.");
        if(weightFluctuations) insights.push("📉 Variação de peso significativa. Recalcule porção alimentar e considere check-up metabólico.");
        if(repeatedFood && entries.length>4) insights.push("🥩 Rotatividade alimentar baixa. Varie fontes proteicas para evitar intolerâncias silenciosas.");
        if(insights.length === 0) insights.push("✅ Sem alertas críticos. Continue o monitoramento diário.");
        document.getElementById('diaryInsights').innerHTML = `<i class="fas fa-brain"></i> <strong>Análise inteligente:</strong> ${insights.join(' ')}`;
    }
    function renderDiary() {
        let listDiv = document.getElementById('diaryHistoryList');
        if(!appState.diaryEntries.length) { listDiv.innerHTML = '<p>Nenhum registro ainda. Crie o diário do seu pet!</p>'; analyzeDiaryPatterns(); return; }
        listDiv.innerHTML = appState.diaryEntries.slice().reverse().slice(0,15).map(e=>`<div class="diary-entry"><strong>${e.date}</strong> | 🐕 ${e.petNameEntry || "Sem nome"} | Peso: ${e.weight}kg | Alimentação: ${e.food} | Humor: ${e.mood}<br>📝 ${e.notes}</div>`).join('');
        analyzeDiaryPatterns();
    }
    function addDiaryEntry() {
        let name = document.getElementById('diaryPetName').value.trim() || appState.petName;
        let weight = document.getElementById('diaryWeight').value;
        let food = document.getElementById('diaryFood').value;
        let mood = document.getElementById('diaryMood').value;
        let notes = document.getElementById('diaryNotes').value;
        if(!food && !weight && !notes) { showToast("Preencha ao menos um campo"); return; }
        let newEntry = { date: new Date().toLocaleString(), petNameEntry: name, weight, food, mood, notes };
        appState.diaryEntries.unshift(newEntry);
        saveFullState();
        renderDiary();
        document.getElementById('diaryWeight').value = ''; document.getElementById('diaryFood').value = ''; document.getElementById('diaryNotes').value = ''; document.getElementById('diaryPetName').value = '';
        showToast("Registro salvo! Insights atualizados.");
    }

    // SOLUÇÕES: DIAGNÓSTICO COMPORTAMENTAL
    const solutionsDB = {
        cachorro_filhote: { titulo:"Filhote: Janela de Socialização", conteudo:["Período crítico até 16 semanas. Exponha a 100+ estímulos (superfícies, sons, pessoas) de forma positiva. Use contracondicionamento para medos. Erro comum: proteger demais gera insegurança."] },
        cachorro_adulto: { titulo:"Adulto: Ansiedade por Separação", conteudo:["Treine ausências graduais (1min, 5min, 20min). Ofereça Kong congelado. Nunca faça despedidas emocionadas. Estudos mostram que 70% reduzem sintomas em 3 semanas."] },
        cachorro_idoso: { titulo:"Idoso: Disfunção Cognitiva", conteudo:["Sinais: desorientação, alteração ciclo sono. Suplemente com MCT, fosfatidilserina. Enriquecimento olfativo reduz progressão em 30%."] },
        gato_filhote:{ titulo:"Gato Filhote: Arranhadura", conteudo:["Use arranhadores verticais e horizontais, posicione perto de áreas de descanso. Feliway ajuda. Nunca corte as unhas com guilhotina – use cortador específico."] },
        gato_adulto:{ titulo:"Gato Adulto: Estresse e Cistite", conteudo:["Estresse é principal gatilho para cistite idiopática. Caixas de areia: nº de gatos +1, limpeza diária. Ofereça esconderijos elevados."] },
        gato_idoso:{ titulo:"Gato Idoso: Dores Articulares", conteudo:["Aumente acessibilidade com rampas, aqueça camas. Suplementação com ácidos graxos. Dores crônicas causam agressividade."] }
    };
    function getCurrentKey() { return appState.pet && appState.idade ? `${appState.pet}_${appState.idade}` : null; }
    function renderSolucoes() { let key = getCurrentKey(), container = document.getElementById('solucoesGrid'); if(!key||!solutionsDB[key]) { container.innerHTML = '<div class="card-premium">Selecione o perfil do pet para ver diagnóstico comportamental personalizado.</div>'; return; } let data = solutionsDB[key]; container.innerHTML = `<div class="card-premium golden-card"><h3><i class="fas fa-diagnoses"></i> ${data.titulo}</h3><p>${data.conteudo[0]}</p><hr><p><strong>Protocolo premium:</strong> ${data.conteudo[0]}</p></div>`; }

    function updateClientAreaDisplay() { document.getElementById('clientPetNameDisplay').innerText = appState.petName; document.getElementById('clientAgeDisplay').innerText = appState.realAge || "Não informado"; document.getElementById('clientWeightDisplay').innerText = appState.petWeight || "?"; document.getElementById('petNameSummary').innerText = appState.petName; }
    function openProfileModal() { document.getElementById('profilePetName').value = appState.petName; document.getElementById('profileType').value = appState.pet; document.getElementById('profileAgeStage').value = appState.idade; document.getElementById('profileRealAge').value = appState.realAge || ''; document.getElementById('profileWeight').value = appState.petWeight || ''; document.getElementById('profileModal').classList.add('active'); }
    document.getElementById('saveProfileBtn')?.addEventListener('click',()=>{ appState.petName = document.getElementById('profilePetName').value; appState.pet = document.getElementById('profileType').value; appState.idade = document.getElementById('profileAgeStage').value; appState.realAge = document.getElementById('profileRealAge').value; appState.petWeight = document.getElementById('profileWeight').value; saveFullState(); updateClientAreaDisplay(); renderSolucoes(); document.getElementById('profileModal').classList.remove('active'); showToast("Perfil salvo! Conteúdo personalizado."); });
    document.getElementById('editPetProfileBtn')?.addEventListener('click', openProfileModal);
    document.getElementById('editProfileFromClient')?.addEventListener('click', openProfileModal);
    document.getElementById('profileSummaryBtn')?.addEventListener('click', openProfileModal);

    // Funções de gestão (checklist, reminders, vacinas, gallery)
    function renderChecklist() { let container = document.getElementById('advancedChecklist'); let html = ''; appState.checklist.forEach((item,idx)=>{ html+=`<div style="display:flex; gap:8px; align-items:center; margin:8px 0;"><input type="checkbox" ${item.checked?'checked':''} data-idx="${idx}" class="checkItem"> <span style="flex:1">${item.text}</span><button class="delCheck" data-idx="${idx}">🗑️</button></div>`; }); container.innerHTML = html; attachCheckEvents(); }
    function attachCheckEvents() { document.querySelectorAll('.checkItem').forEach(cb=>cb.addEventListener('change',function(){ let idx=this.dataset.idx; appState.checklist[idx].checked=this.checked; saveFullState(); })); document.querySelectorAll('.delCheck').forEach(btn=>btn.addEventListener('click',function(){ let idx=this.dataset.idx; appState.checklist.splice(idx,1); saveFullState(); renderChecklist(); })); }
    function renderReminders() { let container = document.getElementById('remindersList'); if(!appState.reminders.length){ container.innerHTML='<p>Sem lembretes</p>';return;} let html=''; appState.reminders.forEach((r,i)=>{ html+=`<div>📌 ${r.text} - ${r.date||'sem data'} <button class="delRem" data-idx="${i}">❌</button></div>`; }); container.innerHTML=html; document.querySelectorAll('.delRem').forEach(btn=>btn.addEventListener('click',function(){ let idx=this.dataset.idx; appState.reminders.splice(idx,1); saveFullState(); renderReminders(); })); }
    function renderVaccines() { let container=document.getElementById('vaccinesList'); if(!appState.vaccines.length){ container.innerHTML='<p>Adicione vacinas</p>';return;} let html=''; appState.vaccines.forEach((v,i)=>{ html+=`<div>💉 ${v.name} - ${v.date} <button class="delVac" data-idx="${i}">🗑️</button></div>`; }); container.innerHTML=html; document.querySelectorAll('.delVac').forEach(btn=>btn.addEventListener('click',function(){ let idx=this.dataset.idx; appState.vaccines.splice(idx,1); saveFullState(); renderVaccines(); })); }
    function renderGallery() { let container=document.getElementById('galleryGrid'); if(!appState.gallery.length){ container.innerHTML='<p>Adicione fotos</p>';return;} let html=''; appState.gallery.forEach((url,i)=>{ html+=`<div><img src="${url}" style="width:80px;height:80px;object-fit:cover;border-radius:16px;" onerror="this.src='https://placehold.co/80x80?text=Erro'"><br><button class="delGal" data-idx="${i}">Remover</button></div>`; }); container.innerHTML=html; document.querySelectorAll('.delGal').forEach(btn=>btn.addEventListener('click',function(){ let idx=this.dataset.idx; appState.gallery.splice(idx,1); saveFullState(); renderGallery(); })); }
    document.getElementById('addCheckItemBtn')?.addEventListener('click',()=>{ let val=document.getElementById('newCheckItem').value.trim(); if(val){ appState.checklist.push({text:val,checked:false}); saveFullState(); renderChecklist(); document.getElementById('newCheckItem').value=''; } });
    document.getElementById('addReminderBtn')?.addEventListener('click',()=>{ let txt=document.getElementById('reminderText').value; let date=document.getElementById('reminderDate').value; if(txt){ appState.reminders.push({text:txt,date}); saveFullState(); renderReminders(); document.getElementById('reminderText').value=''; document.getElementById('reminderDate').value=''; } });
    document.getElementById('addVaccineBtn')?.addEventListener('click',()=>{ let name=document.getElementById('vacName').value; let date=document.getElementById('vacDate').value; if(name){ appState.vaccines.push({name,date}); saveFullState(); renderVaccines(); document.getElementById('vacName').value=''; document.getElementById('vacDate').value=''; } });
    document.getElementById('addImageBtn')?.addEventListener('click',()=>{ let url=document.getElementById('imgUrl').value.trim(); if(url){ appState.gallery.push(url); saveFullState(); renderGallery(); document.getElementById('imgUrl').value=''; } });
    document.getElementById('saveDiaryBtn')?.addEventListener('click', addDiaryEntry);
    document.getElementById('installAppBigBtn')?.addEventListener('click',()=>{ let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent); let msg = isIOS ? "Safari: compartilhar → 'Adicionar à Tela de Início'." : "Chrome: 3 pontos → 'Adicionar à tela inicial'."; document.getElementById('installInstructions').innerHTML = msg; document.getElementById('installModal').classList.add('active'); });
    document.getElementById('installAppBtn')?.addEventListener('click',()=>{ let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent); let msg = isIOS ? "Safari: compartilhar → 'Adicionar à Tela de Início'." : "Chrome: menu → Adicionar à tela inicial."; document.getElementById('installInstructions').innerHTML = msg; document.getElementById('installModal').classList.add('active'); });
    document.getElementById('closeModalBtn')?.addEventListener('click',()=>document.getElementById('installModal').classList.remove('active'));

    function initTabs() { const btns = document.querySelectorAll('.tab-btn'); const panes = document.querySelectorAll('.tab-pane'); btns.forEach(btn=>{ btn.addEventListener('click',()=>{ let tabId = btn.dataset.tab; btns.forEach(b=>b.classList.remove('active')); btn.classList.add('active'); panes.forEach(p=>p.classList.remove('active-pane')); document.getElementById(`${tabId}Pane`).classList.add('active-pane'); }); }); }

    loadState(); if(!appState.pet) appState.pet = "cachorro"; if(!appState.idade) appState.idade = "adulto"; if(!appState.petName) appState.petName = "Meu Pet"; saveFullState();
    updateClientAreaDisplay(); renderSolucoes(); renderAllRecipes(); renderFullTraining(); renderNutrition(); renderHealth(); renderProTips(); renderDiary(); renderChecklist(); renderReminders(); renderVaccines(); renderGallery(); initTabs();
});