// ══════════════════════════════════════════
// DATA
// ══════════════════════════════════════════

const EQUIPMENT_LIST = [
  'barbell','dumbbell','kettlebell','pull-up bar','rings',
  'box','jump rope','rower','ski erg','assault bike',
  'wall ball','medicine ball','rope','echo bike','sled'
];

const EQUIPMENT_LABELS = {
  'barbell':'Barbell','dumbbell':'Dumbbell','kettlebell':'Kettlebell',
  'pull-up bar':'Pull-up Bar','rings':'Rings','box':'Box',
  'jump rope':'Jump Rope','rower':'Rower','ski erg':'Ski Erg',
  'assault bike':'Assault Bike','wall ball':'Wall Ball',
  'medicine ball':'Med Ball','rope':'Rope Climb','echo bike':'Echo Bike','sled':'Sled'
};

const MOVEMENTS = [
  // GYMNASTICS
  { id:'pull-ups', name:'Pull-ups', category:'gymnastics', equipment:['pull-up bar'], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:5,max:15}, unit:'reps' },
  { id:'c2b', name:'Chest-to-Bar Pull-ups', category:'gymnastics', equipment:['pull-up bar'], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:5,max:12}, unit:'reps' },
  { id:'ttb', name:'Toes-to-Bar', category:'gymnastics', equipment:['pull-up bar'], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:5,max:15}, unit:'reps' },
  { id:'bar-mu', name:'Bar Muscle-ups', category:'gymnastics', equipment:['pull-up bar'], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:2,max:6}, unit:'reps' },
  { id:'ring-mu', name:'Ring Muscle-ups', category:'gymnastics', equipment:['rings'], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:2,max:5}, unit:'reps' },
  { id:'push-ups', name:'Push-ups', category:'gymnastics', equipment:[], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:10,max:25}, unit:'reps' },
  { id:'hspu', name:'Handstand Push-ups', category:'gymnastics', equipment:[], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:5,max:15}, unit:'reps' },
  { id:'hsw', name:'Handstand Walk', category:'gymnastics', equipment:[], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:5,max:15}, unit:'meters' },
  { id:'air-squat', name:'Air Squats', category:'gymnastics', equipment:[], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:10,max:30}, unit:'reps' },
  { id:'pistols', name:'Pistols', category:'gymnastics', equipment:[], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:5,max:12}, unit:'reps' },
  { id:'box-jumps', name:'Box Jumps', category:'gymnastics', equipment:['box'], isWeighted:false, rxMale:'24 in', rxFemale:'20 in', repRange:{min:10,max:24}, unit:'reps' },
  { id:'bjo', name:'Box Jump Overs', category:'gymnastics', equipment:['box'], isWeighted:false, rxMale:'24 in', rxFemale:'20 in', repRange:{min:8,max:20}, unit:'reps' },
  { id:'burpees', name:'Burpees', category:'gymnastics', equipment:[], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:5,max:15}, unit:'reps' },
  { id:'bbjo', name:'Burpee Box Jump Overs', category:'gymnastics', equipment:['box'], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:5,max:10}, unit:'reps' },
  { id:'situps', name:'Sit-ups', category:'gymnastics', equipment:[], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:10,max:20}, unit:'reps' },
  { id:'ring-dips', name:'Ring Dips', category:'gymnastics', equipment:['rings'], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:5,max:15}, unit:'reps' },
  { id:'rope-climbs', name:'Rope Climbs', category:'gymnastics', equipment:['rope'], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:1,max:4}, unit:'reps' },
  { id:'du', name:'Double-Unders', category:'gymnastics', equipment:['jump rope'], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:20,max:50}, unit:'reps' },
  { id:'lunges', name:'Lunges', category:'gymnastics', equipment:[], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:10,max:20}, unit:'reps' },
  // WEIGHTLIFTING
  { id:'deadlift', name:'Deadlift', category:'weightlifting', equipment:['barbell'], isWeighted:true, rxMale:'100 kg', rxFemale:'70 kg', repRange:{min:5,max:15}, unit:'reps' },
  { id:'clean', name:'Clean', category:'weightlifting', equipment:['barbell'], isWeighted:true, rxMale:'60 kg', rxFemale:'40 kg', repRange:{min:3,max:10}, unit:'reps' },
  { id:'power-clean', name:'Power Clean', category:'weightlifting', equipment:['barbell'], isWeighted:true, rxMale:'60 kg', rxFemale:'40 kg', repRange:{min:3,max:10}, unit:'reps' },
  { id:'hpc', name:'Hang Power Clean', category:'weightlifting', equipment:['barbell'], isWeighted:true, rxMale:'60 kg', rxFemale:'40 kg', repRange:{min:3,max:10}, unit:'reps' },
  { id:'cnj', name:'Clean & Jerk', category:'weightlifting', equipment:['barbell'], isWeighted:true, rxMale:'60 kg', rxFemale:'40 kg', repRange:{min:2,max:6}, unit:'reps' },
  { id:'snatch', name:'Snatch', category:'weightlifting', equipment:['barbell'], isWeighted:true, rxMale:'43 kg', rxFemale:'30 kg', repRange:{min:2,max:6}, unit:'reps' },
  { id:'power-snatch', name:'Power Snatch', category:'weightlifting', equipment:['barbell'], isWeighted:true, rxMale:'43 kg', rxFemale:'30 kg', repRange:{min:3,max:8}, unit:'reps' },
  { id:'thruster', name:'Thruster', category:'weightlifting', equipment:['barbell'], isWeighted:true, rxMale:'43 kg', rxFemale:'30 kg', repRange:{min:5,max:15}, unit:'reps' },
  { id:'sdhp', name:'Sumo Deadlift High Pull', category:'weightlifting', equipment:['barbell'], isWeighted:true, rxMale:'43 kg', rxFemale:'30 kg', repRange:{min:5,max:12}, unit:'reps' },
  { id:'ohs', name:'Overhead Squat', category:'weightlifting', equipment:['barbell'], isWeighted:true, rxMale:'43 kg', rxFemale:'30 kg', repRange:{min:3,max:10}, unit:'reps' },
  { id:'front-squat', name:'Front Squat', category:'weightlifting', equipment:['barbell'], isWeighted:true, rxMale:'60 kg', rxFemale:'40 kg', repRange:{min:5,max:12}, unit:'reps' },
  { id:'push-press', name:'Push Press', category:'weightlifting', equipment:['barbell'], isWeighted:true, rxMale:'43 kg', rxFemale:'30 kg', repRange:{min:5,max:12}, unit:'reps' },
  { id:'push-jerk', name:'Push Jerk', category:'weightlifting', equipment:['barbell'], isWeighted:true, rxMale:'60 kg', rxFemale:'40 kg', repRange:{min:3,max:8}, unit:'reps' },
  { id:'s2o', name:'Shoulder to Overhead', category:'weightlifting', equipment:['barbell'], isWeighted:true, rxMale:'60 kg', rxFemale:'40 kg', repRange:{min:5,max:12}, unit:'reps' },
  { id:'wall-balls', name:'Wall Balls', category:'weightlifting', equipment:['wall ball'], isWeighted:true, rxMale:'9 kg', rxFemale:'6 kg', repRange:{min:10,max:25}, unit:'reps' },
  { id:'kb-swings', name:'KB Swings', category:'weightlifting', equipment:['kettlebell'], isWeighted:true, rxMale:'24 kg', rxFemale:'16 kg', repRange:{min:10,max:25}, unit:'reps' },
  { id:'db-snatch', name:'DB Snatch', category:'weightlifting', equipment:['dumbbell'], isWeighted:true, rxMale:'22.5 kg', rxFemale:'15 kg', repRange:{min:5,max:12}, unit:'reps' },
  { id:'db-thruster', name:'DB Thrusters', category:'weightlifting', equipment:['dumbbell'], isWeighted:true, rxMale:'22.5 kg', rxFemale:'15 kg', repRange:{min:5,max:15}, unit:'reps' },
  // MONOSTRUCTURAL
  { id:'row', name:'Row', category:'monostructural', equipment:['rower'], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:10,max:25}, unit:'cals' },
  { id:'ski', name:'Ski Erg', category:'monostructural', equipment:['ski erg'], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:10,max:25}, unit:'cals' },
  { id:'bike', name:'Assault Bike', category:'monostructural', equipment:['assault bike'], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:8,max:20}, unit:'cals' },
  { id:'echo-bike', name:'Echo Bike', category:'monostructural', equipment:['echo bike'], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:8,max:20}, unit:'cals' },
  { id:'run', name:'Run', category:'monostructural', equipment:[], isWeighted:false, rxMale:null, rxFemale:null, repRange:{min:200,max:800}, unit:'meters' },
];

const DESCENDING_SCHEMES = [
  { scheme:[21,15,9], minTime:0, maxTime:14 },
  { scheme:[15,12,9], minTime:0, maxTime:14 },
  { scheme:[10,8,6], minTime:0, maxTime:14 },
  { scheme:[15,10,5], minTime:0, maxTime:19 },
  { scheme:[21,18,15,12,9,6,3], minTime:20, maxTime:99 },
];

// ══════════════════════════════════════════
// STATE
// ══════════════════════════════════════════

const STATE = {
  format: 'AMRAP',
  duration: 12,
  count: 3,
  mixCategories: true,
  emomStyle: 'single',
  fortimeVariant: 'rounds',
  equipment: new Set(EQUIPMENT_LIST),
  lastMetcon: null,
};

// ══════════════════════════════════════════
// LOGIC
// ══════════════════════════════════════════

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function roundReps(n, unit) {
  if (unit === 'meters') {
    const steps = [50, 100, 200, 400, 800];
    return steps.reduce((prev, curr) => Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev);
  }
  if (unit === 'cals') {
    if (n <= 5) return n;
    if (n <= 10) return Math.round(n / 2) * 2;
    return Math.round(n / 5) * 5;
  }
  // reps
  if (n <= 5) return n;
  if (n <= 10) return Math.round(n / 2) * 2;
  if (n <= 20) return Math.round(n / 5) * 5;
  return Math.round(n / 5) * 5;
}

function filterMovements(equipment) {
  return MOVEMENTS.filter(m =>
    m.equipment.length === 0 || m.equipment.every(e => equipment.has(e))
  );
}

function pickMovements(pool, count, mixCategories) {
  if (pool.length < count) return null;

  if (!mixCategories) {
    return shuffle(pool).slice(0, count);
  }

  const cats = { gymnastics: [], weightlifting: [], monostructural: [] };
  pool.forEach(m => cats[m.category].push(m));

  const cats3 = ['gymnastics', 'weightlifting', 'monostructural'];
  const perCat = Math.floor(count / 3);
  let remainder = count % 3;

  const selected = [];
  const shuffledCats = shuffle(cats3);

  for (const cat of shuffledCats) {
    const available = shuffle(cats[cat]);
    const want = perCat + (remainder > 0 ? 1 : 0);
    const take = Math.min(want, available.length);
    selected.push(...available.slice(0, take));
    if (remainder > 0 && take >= perCat + 1) remainder--;
  }

  // If not enough from balanced, fill from remaining
  if (selected.length < count) {
    const selectedIds = new Set(selected.map(m => m.id));
    const remaining = shuffle(pool.filter(m => !selectedIds.has(m.id)));
    selected.push(...remaining.slice(0, count - selected.length));
  }

  return shuffle(selected.slice(0, count));
}

function generateReps(movement, format, emomStyle) {
  const { min, max } = movement.repRange;
  let val;

  if (format === 'EMOM') {
    const ceiling = min + (max - min) * 0.4;
    val = rand(min, Math.ceil(ceiling));
    if (emomStyle === 'multi') {
      const factor = Math.max(1, STATE.count / 2);
      val = Math.max(1, Math.round(val / factor));
    }
  } else {
    val = rand(min, max);
  }

  return roundReps(val, movement.unit);
}

function formatQty(reps, unit) {
  if (unit === 'cals') return `${reps} Cal`;
  if (unit === 'meters') return `${reps}m`;
  return `${reps}`;
}

function formatRx(m) {
  if (!m.isWeighted) return null;
  if (m.rxMale && m.rxFemale) return `${m.rxMale} / ${m.rxFemale}`;
  if (m.rxMale) return m.rxMale;
  return null;
}

function generateEmom(movements, totalTime, style) {
  const mvts = movements.map(m => ({
    movement: m,
    reps: generateReps(m, 'EMOM', style),
    rx: formatRx(m),
  }));

  const minutes = [];
  for (let i = 0; i < totalTime; i++) {
    if (style === 'single') {
      minutes.push({ minuteNum: i + 1, items: [mvts[i % mvts.length]] });
    } else {
      minutes.push({ minuteNum: i + 1, items: mvts });
    }
  }

  return { format: 'EMOM', totalTime, emomStyle: style, minutes, movements: mvts };
}

function generateAmrap(movements, totalTime) {
  const mvts = movements.map(m => ({
    movement: m,
    reps: generateReps(m, 'AMRAP'),
    rx: formatRx(m),
  }));
  return { format: 'AMRAP', totalTime, movements: mvts };
}

function generateForTime(movements, totalTime, variant) {
  if (variant === 'descending') {
    const eligible = DESCENDING_SCHEMES.filter(s =>
      totalTime >= s.minTime && totalTime <= s.maxTime
    );
    const schemeObj = eligible.length > 0
      ? eligible[rand(0, eligible.length - 1)]
      : DESCENDING_SCHEMES[0];
    const mvts = movements.map(m => ({
      movement: m,
      rx: formatRx(m),
    }));
    return { format: 'FOR_TIME', totalTime, variant: 'descending', scheme: schemeObj.scheme, movements: mvts };
  }

  // Rounds
  const N = movements.length;
  const rounds = Math.max(2, Math.min(5, Math.floor(totalTime / (N * 1.5))));
  const mvts = movements.map(m => ({
    movement: m,
    reps: generateReps(m, 'FOR_TIME'),
    rx: formatRx(m),
  }));
  return { format: 'FOR_TIME', totalTime, variant: 'rounds', rounds, movements: mvts };
}

function generateMetcon() {
  const pool = filterMovements(STATE.equipment);
  const movements = pickMovements(pool, STATE.count, STATE.mixCategories);

  if (!movements) {
    return { error: "Not enough movements available with selected equipment. Try selecting more equipment or fewer movements." };
  }

  switch (STATE.format) {
    case 'EMOM':    return generateEmom(movements, STATE.duration, STATE.emomStyle);
    case 'AMRAP':   return generateAmrap(movements, STATE.duration);
    case 'FOR_TIME': return generateForTime(movements, STATE.duration, STATE.fortimeVariant);
  }
}

// ══════════════════════════════════════════
// UI RENDER
// ══════════════════════════════════════════

function catLabel(cat) {
  if (cat === 'gymnastics') return 'GYM';
  if (cat === 'weightlifting') return 'WL';
  return 'MONO';
}

function renderMovementItem(item, idx) {
  const qty = formatQty(item.reps, item.movement.unit);
  const rx = item.rx ? `<div class="mvt-rx">${item.rx}</div>` : '';
  return `
    <div class="movement-item">
      <span class="mvt-num">${idx + 1}</span>
      <span class="mvt-qty">${qty}</span>
      <div class="mvt-info">
        <div class="mvt-name">${item.movement.name}</div>
        ${rx}
      </div>
      <span class="mvt-cat ${item.movement.category}">${catLabel(item.movement.category)}</span>
    </div>`;
}

function renderAmrap(metcon) {
  const movementsHtml = metcon.movements.map((m, i) => renderMovementItem(m, i)).join('');
  return `
    <div class="metcon-card">
      <div class="metcon-header">
        <div class="metcon-title-block">
          <div class="format-badge">AMRAP</div>
          <div class="metcon-headline">As Many Rounds<br>As Possible</div>
          <div class="metcon-sub">Complete as many rounds as possible in the time cap</div>
        </div>
        <div class="time-display">
          <div class="time-number">${metcon.totalTime}</div>
          <div class="time-unit">min</div>
        </div>
      </div>
      <div class="movement-list">${movementsHtml}</div>
    </div>`;
}

function renderForTime(metcon) {
  let headline, sub, top = '';

  if (metcon.variant === 'rounds') {
    headline = `${metcon.rounds} Rounds<br>For Time`;
    sub = `Complete ${metcon.rounds} rounds as fast as possible`;
  } else {
    headline = `${metcon.scheme.join('-')}<br>For Time`;
    sub = `Descending reps scheme`;
    const pills = metcon.scheme.map((n, i) =>
      `<span class="scheme-pill">${n}</span>${i < metcon.scheme.length - 1 ? '<span class="scheme-sep">→</span>' : ''}`
    ).join('');
    top = `<div class="descending-scheme"><span class="scheme-label">Scheme</span>${pills}</div>`;
  }

  const movementsHtml = metcon.movements.map((m, i) => {
    if (metcon.variant === 'descending') {
      const rx = m.rx ? `<div class="mvt-rx">${m.rx}</div>` : '';
      return `
        <div class="movement-item">
          <span class="mvt-num">${i + 1}</span>
          <span class="mvt-qty" style="font-size:16px;line-height:1.2;color:var(--text-muted)">—</span>
          <div class="mvt-info">
            <div class="mvt-name">${m.movement.name}</div>
            ${rx}
          </div>
          <span class="mvt-cat ${m.movement.category}">${catLabel(m.movement.category)}</span>
        </div>`;
    }
    return renderMovementItem(m, i);
  }).join('');

  return `
    <div class="metcon-card">
      <div class="metcon-header">
        <div class="metcon-title-block">
          <div class="format-badge">For Time</div>
          <div class="metcon-headline">${headline}</div>
          <div class="metcon-sub">${sub}</div>
        </div>
        <div class="time-display">
          <div class="time-number">${metcon.totalTime}</div>
          <div class="time-unit">min cap</div>
        </div>
      </div>
      ${top}
      <div class="movement-list">${movementsHtml}</div>
    </div>`;
}

function renderEmom(metcon) {
  const styleLabel = metcon.emomStyle === 'single' ? 'Single movement / minute' : 'Full circuit / minute';

  // For single: show grouped minutes pattern (e.g. min 1,4,7… vs min 2,5,8…)
  let minutesHtml = '';
  if (metcon.emomStyle === 'single' && metcon.minutes.length > 6) {
    // Compact: show pattern
    const N = metcon.movements.length;
    const patternRows = metcon.movements.map((mvt, idx) => {
      const minNums = [];
      for (let m = idx; m < metcon.totalTime; m += N) minNums.push(m + 1);
      const label = minNums.length > 3
        ? `Min ${minNums[0]}, ${minNums[1]}… (×${minNums.length})`
        : `Min ${minNums.join(', ')}`;
      const qty = formatQty(mvt.reps, mvt.movement.unit);
      const rx = mvt.rx ? `<div class="mvt-rx">${mvt.rx}</div>` : '';
      return `
        <div class="emom-minute">
          <div class="emom-min-label">${label}</div>
          <div class="emom-content">
            <div class="emom-line">
              <span class="emom-qty">${qty}</span>
              <span>${mvt.movement.name}</span>
            </div>
            ${rx}
          </div>
          <span class="mvt-cat ${mvt.movement.category}">${catLabel(mvt.movement.category)}</span>
        </div>`;
    }).join('');
    minutesHtml = patternRows;
  } else if (metcon.emomStyle === 'single') {
    minutesHtml = metcon.minutes.map(min => {
      const item = min.items[0];
      const qty = formatQty(item.reps, item.movement.unit);
      const rx = item.rx ? `<div style="font-family:'DM Mono',monospace;font-size:11px;color:var(--text-muted);margin-top:2px;">${item.rx}</div>` : '';
      return `
        <div class="emom-minute">
          <div class="emom-min-label">Min ${min.minuteNum}</div>
          <div class="emom-content">
            <div class="emom-line">
              <span class="emom-qty">${qty}</span>
              <span>${item.movement.name}</span>
            </div>
            ${rx}
          </div>
          <span class="mvt-cat ${item.movement.category}">${catLabel(item.movement.category)}</span>
        </div>`;
    }).join('');
  } else {
    // Multi: show the circuit once
    const circuitHtml = metcon.movements.map(m => {
      const qty = formatQty(m.reps, m.movement.unit);
      const rx = m.rx ? `<div style="font-family:'DM Mono',monospace;font-size:11px;color:var(--text-muted);margin-top:2px;">${m.rx}</div>` : '';
      return `
        <div class="emom-minute">
          <div class="emom-min-label" style="color:var(--accent);opacity:0.7;">Every min</div>
          <div class="emom-content">
            <div class="emom-line">
              <span class="emom-qty">${qty}</span>
              <span>${m.movement.name}</span>
            </div>
            ${rx}
          </div>
          <span class="mvt-cat ${m.movement.category}">${catLabel(m.movement.category)}</span>
        </div>`;
    }).join('');
    minutesHtml = circuitHtml;
  }

  return `
    <div class="metcon-card">
      <div class="metcon-header">
        <div class="metcon-title-block">
          <div class="format-badge">EMOM</div>
          <div class="metcon-headline">Every Minute<br>On the Minute</div>
          <div class="metcon-sub">${styleLabel}</div>
        </div>
        <div class="time-display">
          <div class="time-number">${metcon.totalTime}</div>
          <div class="time-unit">min</div>
        </div>
      </div>
      <div class="emom-list">${minutesHtml}</div>
    </div>`;
}

function renderMetcon(metcon) {
  const resultEl = document.getElementById('result');
  if (metcon.error) {
    resultEl.innerHTML = `<div class="error-card">⚠ ${metcon.error}</div>`;
    return;
  }

  let html = '';
  if (metcon.format === 'AMRAP') html = renderAmrap(metcon);
  else if (metcon.format === 'FOR_TIME') html = renderForTime(metcon);
  else if (metcon.format === 'EMOM') html = renderEmom(metcon);

  resultEl.innerHTML = html;
  // Re-trigger animation
  const card = resultEl.querySelector('.metcon-card');
  if (card) {
    card.style.animation = 'none';
    card.offsetHeight; // reflow
    card.style.animation = 'fadeIn 0.35s ease';
  }
}

function renderCondPanels() {
  document.getElementById('cond-emom').classList.toggle('visible', STATE.format === 'EMOM');
  document.getElementById('cond-fortime').classList.toggle('visible', STATE.format === 'FOR_TIME');
}

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════

function buildEquipmentGrid() {
  const grid = document.getElementById('equip-grid');
  grid.innerHTML = EQUIPMENT_LIST.map(e => `
    <label class="equip-item">
      <input type="checkbox" value="${e}" checked>
      <span class="equip-check"></span>
      <span class="equip-text">${EQUIPMENT_LABELS[e]}</span>
    </label>
  `).join('');

  grid.querySelectorAll('input[type=checkbox]').forEach(cb => {
    cb.addEventListener('change', () => {
      if (cb.checked) STATE.equipment.add(cb.value);
      else STATE.equipment.delete(cb.value);
    });
  });
}

function setEquipAll(checked) {
  document.querySelectorAll('#equip-grid input[type=checkbox]').forEach(cb => {
    cb.checked = checked;
    if (checked) STATE.equipment.add(cb.value);
    else STATE.equipment.delete(cb.value);
  });
}

function setEquipBodyweight() {
  document.querySelectorAll('#equip-grid input[type=checkbox]').forEach(cb => {
    // Bodyweight: no equipment required => uncheck everything
    cb.checked = false;
    STATE.equipment.delete(cb.value);
  });
}

function setupSlider(sliderId, valId, unit, setState) {
  const slider = document.getElementById(sliderId);
  const val = document.getElementById(valId);
  slider.addEventListener('input', () => {
    const n = parseInt(slider.value);
    setState(n);
    val.textContent = unit ? `${n} ${unit}` : `${n}`;
  });
}

function setupToggleGroup(groupId, stateKey, onChange) {
  const group = document.getElementById(groupId);
  group.querySelectorAll('.toggle-btn, .mini-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      group.querySelectorAll('.toggle-btn, .mini-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE[stateKey] = btn.dataset.val;
      if (onChange) onChange(btn.dataset.val);
    });
  });
}

function init() {
  buildEquipmentGrid();

  // Set initial active format
  document.querySelector('#format-group .toggle-btn').classList.add('active');

  // Sliders
  setupSlider('s-duration', 'v-duration', 'min', v => STATE.duration = v);
  setupSlider('s-count', 'v-count', '', v => STATE.count = v);

  // Format toggle
  setupToggleGroup('format-group', 'format', () => renderCondPanels());

  // EMOM style & FOR TIME variant
  setupToggleGroup('emom-style-group', 'emomStyle', null);
  setupToggleGroup('fortime-variant-group', 'fortimeVariant', null);

  // Mix categories
  document.getElementById('opt-mix').addEventListener('change', e => {
    STATE.mixCategories = e.target.checked;
  });

  // Options panel
  const toggle = document.getElementById('options-toggle');
  const panel = document.getElementById('options-panel');
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    panel.classList.toggle('open');
  });

  // Equipment shortcuts
  document.getElementById('btn-all').addEventListener('click', () => setEquipAll(true));
  document.getElementById('btn-none').addEventListener('click', () => setEquipAll(false));
  document.getElementById('btn-basic').addEventListener('click', () => setEquipBodyweight());

  // Generate
  document.getElementById('btn-generate').addEventListener('click', () => {
    const metcon = generateMetcon();
    STATE.lastMetcon = metcon;
    renderMetcon(metcon);
    document.getElementById('btn-regen').classList.add('visible');
    // Scroll to result
    document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Re-generate
  document.getElementById('btn-regen').addEventListener('click', () => {
    const metcon = generateMetcon();
    STATE.lastMetcon = metcon;
    renderMetcon(metcon);
    document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Initial conditional panels
  renderCondPanels();
}

document.addEventListener('DOMContentLoaded', init);
