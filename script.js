const questions = [
  {
    id: 'platform-entry',
    title: '平台入口',
    text: '晚上刷小红书/抖音时，你看到一个同学也在用的好物推荐，会点进淘宝、京东或拼多多看看吗？',
    options: [
      { label: '几乎每次都会', source: '总是', sample: { female: 39.4, male: 27.3 } },
      { label: '经常会', source: '经常', sample: { female: 38.6, male: 34.3 } },
      { label: '偶尔会', source: '有时', sample: { female: 20.5, male: 35.4 } },
      { label: '很少会', source: '很少', sample: { female: 1.5, male: 3.0 } },
    ],
  },
  {
    id: 'visual-display',
    title: '视觉呈现',
    text: '在淘宝或小红书看同一件商品时，你会多在意实拍图、穿搭图、使用场景和视频展示吗？',
    options: [
      { label: '非常在意', source: '非常重视', sample: { female: 24.2, male: 15.2 } },
      { label: '比较在意', source: '比较重视', sample: { female: 53.0, male: 32.3 } },
      { label: '一般', source: '一般重视', sample: { female: 18.2, male: 38.4 } },
      { label: '不太在意', source: '不太重视', sample: { female: 3.0, male: 12.1 } },
      { label: '完全不在意', source: '完全不重视', sample: { female: 1.5, male: 2.0 } },
    ],
  },
  {
    id: 'price-signal',
    title: '价格线索',
    text: '准备买 B站大会员、网课、软件工具或游戏道具前，你会先比较价格、优惠和性价比吗？',
    options: [
      { label: '非常在意', source: '非常重视', sample: { female: 31.8, male: 32.3 } },
      { label: '比较在意', source: '比较重视', sample: { female: 54.5, male: 46.5 } },
      { label: '一般', source: '一般重视', sample: { female: 13.6, male: 19.2 } },
      { label: '不太在意', source: '不太重视', sample: { female: 0.0, male: 1.0 } },
      { label: '完全不在意', source: '完全不重视', sample: { female: 0.0, male: 1.0 } },
    ],
  },
  {
    id: 'decision-speed',
    title: '决策速度',
    text: '看到喜欢的会员、课程或数码小工具时，你通常会怎么决定？',
    options: [
      { label: '很快下单', source: '非常快', sample: { female: 0.0, male: 8.1 } },
      { label: '比较快决定', source: '比较快', sample: { female: 22.7, male: 23.2 } },
      { label: '看情况', source: '一般', sample: { female: 31.1, male: 36.4 } },
      { label: '比较慢', source: '比较慢', sample: { female: 38.6, male: 25.3 } },
      { label: '反复比较很久', source: '非常慢', sample: { female: 7.6, male: 7.1 } },
    ],
  },
  {
    id: 'post-purchase-share',
    title: '购后传播',
    text: '如果你买到不错的 B站会员、网课资源、音乐会员或实用软件，会推荐给同学朋友吗？',
    options: [
      { label: '非常像我', source: '非常符合', sample: { female: 18.9, male: 19.2 } },
      { label: '比较像我', source: '比较符合', sample: { female: 53.0, male: 42.4 } },
      { label: '一般', source: '一般', sample: { female: 25.0, male: 32.3 } },
      { label: '不太像我', source: '不太符合', sample: { female: 1.5, male: 3.0 } },
      { label: '完全不像我', source: '很不符合', sample: { female: 1.5, male: 3.0 } },
    ],
  },
];

const testFindings = [
  {
    id: 'platform-entry',
    label: '平台进入频率',
    status: '显著',
    stat: 'χ²=6.63，p=0.010',
    pLabel: 'p=0.010',
    meter: 10,
    text: '女生“经常/总是”进入线上消费场景的比例更高，这个差异在样本中比较稳定。',
  },
  {
    id: 'visual-display',
    label: '视觉呈现重视',
    status: '显著',
    stat: 'χ²=20.66，p<0.001',
    pLabel: 'p<0.001',
    meter: 2,
    text: '视觉展示是最清晰的差异环节之一，说明图片、视频和场景化内容值得单独观察。',
  },
  {
    id: 'post-purchase-share',
    label: '购后推荐行为',
    status: '趋势',
    stat: 'χ²=2.31，p=0.128',
    pLabel: 'p=0.128',
    meter: 88,
    text: '比例上能看到方向，但统计上不够稳定，所以更适合说“可能存在趋势”。',
  },
];

const regressionFindings = [
  {
    id: 'platform-entry',
    label: '平台消费强度',
    status: '显著正向',
    coef: '+0.24',
    p: 'p=0.004',
    marker: 64,
    text: '控制家庭收入和学科类型后，性别变量对平台消费强度仍有稳定影响。',
  },
  {
    id: 'visual-display',
    label: '视觉信息敏感度',
    status: '显著正向',
    coef: '+0.48',
    p: 'p<0.001',
    marker: 78,
    text: '这是回归中最突出的环节，视觉线索对理解平台消费差异很关键。',
  },
  {
    id: 'post-purchase-share',
    label: '购后传播反应',
    status: '趋势',
    coef: '+0.17',
    p: 'p=0.086',
    marker: 56,
    text: '方向上存在差异，但证据不够强，适合谨慎表达。',
  },
  {
    id: 'symbolic',
    label: '符号/关系动机',
    status: '不显著',
    coef: '+0.11',
    p: 'p=0.413',
    marker: 43,
    text: '不能简单说某一类人更重视身份标识或圈层符号。',
  },
];

let gender = '';
let step = 0;
let answers = {};
let page = 'quiz';

const genderNames = { female: '女性', male: '男性' };
const quizPage = document.querySelector('#quizPage');
const resultPage = document.querySelector('#resultPage');
const statLab = document.querySelector('.stat-lab');
const stepText = document.querySelector('#stepText');
const topicText = document.querySelector('#topicText');
const progressBar = document.querySelector('#progressBar');
const questionText = document.querySelector('#questionText');
const optionsEl = document.querySelector('#options');
const barsEl = document.querySelector('#bars');
const resultEl = document.querySelector('#result');
const nextBtn = document.querySelector('#nextBtn');
const resetBtn = document.querySelector('#resetBtn');
const backBtn = document.querySelector('#backBtn');
const restartBtn = document.querySelector('#restartBtn');
const replayLabBtn = document.querySelector('#replayLabBtn');
const summaryList = document.querySelector('#summaryList');
const finalGender = document.querySelector('#finalGender');
const profileTitle = document.querySelector('#profileTitle');
const profileText = document.querySelector('#profileText');
const profileTags = document.querySelector('#profileTags');
const distributionList = document.querySelector('#distributionList');
const testList = document.querySelector('#testList');
const regressionList = document.querySelector('#regressionList');
const labNavButtons = document.querySelectorAll('[data-lab-target]');
const labSlides = document.querySelectorAll('[data-lab-panel]');
const labNextButtons = document.querySelectorAll('[data-lab-next]');
const genderButtons = document.querySelectorAll('[data-gender]');

function render() {
  const question = questions[step];
  const selected = answers[question.id];
  const isLastQuestion = step === questions.length - 1;

  quizPage.hidden = page !== 'quiz';
  resultPage.hidden = page !== 'result';

  if (page === 'result') {
    renderResultPage();
    return;
  }

  stepText.textContent = `第 ${step + 1} / ${questions.length} 题`;
  topicText.textContent = question.title;
  progressBar.style.width = `${((step + 1) / questions.length) * 100}%`;
  questionText.textContent = question.text;

  genderButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.gender === gender);
  });

  optionsEl.innerHTML = '';
  question.options.forEach((option) => {
    const canShowSample = Boolean(gender && selected);
    const percent = canShowSample ? option.sample[gender] : 0;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = selected === option.label ? 'option active' : 'option';
    button.style.setProperty('--option-percent', `${percent}%`);
    button.innerHTML = `
      <span class="option-fill"></span>
      <span class="option-text">${option.label}</span>
      <span class="option-percent">${canShowSample ? `${percent}%` : ''}</span>
    `;
    button.addEventListener('click', () => {
      answers[question.id] = option.label;
      render();
    });
    optionsEl.append(button);
  });

  barsEl.innerHTML = '';
  barsEl.hidden = true;

  if (gender && selected) {
    const option = question.options.find((item) => item.label === selected);
    const percent = option.sample[gender];
    resultEl.hidden = false;
    resultEl.innerHTML = `你的选择：<strong>${selected}</strong><br>在有效样本 n=231 中，约 <strong>${percent}%</strong> 的${genderNames[gender]}样本选择了相近答案。`;
  } else {
    resultEl.hidden = true;
  }

  nextBtn.textContent = isLastQuestion ? '查看统计解读' : '下一题';
  nextBtn.disabled = !selected || !gender;
}

function renderResultPage() {
  finalGender.textContent = `${genderNames[gender]}样本比较`;
  summaryList.innerHTML = '';

  questions.forEach((question) => {
    const selected = answers[question.id];
    const option = question.options.find((item) => item.label === selected);
    const percent = option.sample[gender];
    const row = document.createElement('div');
    row.className = 'summary-item';
    row.innerHTML = `
      <span>${question.title}</span>
      <strong>${selected}</strong>
      <p>约 ${percent}% 的${genderNames[gender]}样本选择了相近答案。</p>
      <div class="summary-meter"><i style="width: ${percent}%"></i></div>
    `;
    summaryList.append(row);
  });

  renderProfile();
  renderDistributionLab();
  renderTestLab();
  renderRegressionLab();
  setLabPanel('profile');
  runLabAnimation();
}

function getSelectedOption(id) {
  const question = questions.find((item) => item.id === id);
  return question.options.find((option) => option.label === answers[id]);
}

function getSelectedPercent(id) {
  return getSelectedOption(id).sample[gender];
}

function isHigh(id) {
  return ['几乎每次都会', '经常会', '非常在意', '比较在意', '非常像我', '比较像我'].includes(answers[id]);
}

function renderProfile() {
  const tags = [];
  const entryHigh = isHigh('platform-entry');
  const visualHigh = isHigh('visual-display');
  const priceHigh = isHigh('price-signal');
  const shareHigh = isHigh('post-purchase-share');
  const decision = answers['decision-speed'];
  const slowDecision = ['比较慢', '反复比较很久'].includes(decision);
  const fastDecision = ['很快下单', '比较快决定'].includes(decision);

  let title = '平台信息观察型';
  let text = '你的选择显示，平台上的价格、视觉展示或他人经验会进入你的判断过程。统计上，这类回应更适合理解“决策路径”，而不是直接判断消费金额。';

  if (entryHigh && visualHigh && priceHigh) {
    title = '高进入 · 强比较型';
    text = '你更像会频繁进入平台场景，并在图片、价格和优惠之间来回比较的人。这样的选择正好落在样本中较值得观察的前端环节。';
  } else if (slowDecision && (visualHigh || priceHigh)) {
    title = '谨慎筛选型';
    text = '你的选择更像先看展示、价格和口碑，再慢慢决定。统计学上，这提醒我们关注购买前的信息处理，而不只是最后有没有下单。';
  } else if (fastDecision && !priceHigh) {
    title = '快速决策型';
    text = '你更像目标明确、决策较快的人。这个结果可以和样本中的决策速度差异放在一起看，但不应被解释成“更理性”或“更冲动”。';
  } else if (shareHigh) {
    title = '传播参与型';
    text = '你不只完成消费，也可能把体验推荐给别人。统计上，购后传播有方向性差异，但证据不如平台进入和视觉呈现稳定。';
  }

  if (entryHigh) tags.push('平台入口高');
  if (visualHigh) tags.push('视觉线索敏感');
  if (priceHigh) tags.push('价格比较明显');
  if (slowDecision) tags.push('决策偏谨慎');
  if (fastDecision) tags.push('决策偏快速');
  if (shareHigh) tags.push('愿意推荐');

  profileTitle.textContent = title;
  profileText.textContent = text;
  profileTags.innerHTML = tags.map((tag) => `<span>${tag}</span>`).join('');
}

function renderDistributionLab() {
  distributionList.innerHTML = questions.map((question) => {
    const percent = getSelectedPercent(question.id);
    const rarity = percent >= 35 ? '多数选择' : percent >= 15 ? '常见选择' : '少数选择';
    return `
      <div class="distribution-item">
        <div>
          <span>${question.title}</span>
          <strong>${answers[question.id]}</strong>
        </div>
        <em>${rarity}</em>
        <div class="distribution-track"><i style="width: ${percent}%"></i></div>
        <p>${percent}% 的${genderNames[gender]}样本选择了相近答案。</p>
      </div>
    `;
  }).join('');
}

function renderTestLab() {
  testList.innerHTML = testFindings.map((item) => {
    const selected = answers[item.id];
    const percent = getSelectedPercent(item.id);
    const verdict = item.status === '显著' ? '通过 0.05 线' : '越过 0.05 线';
    return `
      <div class="test-ticket ${item.status === '显著' ? 'is-strong' : 'is-trend'}">
        <div class="ticket-stamp">${item.status}</div>
        <div class="ticket-main">
          <span>${item.label}</span>
          <strong>${item.stat}</strong>
          <div class="p-meter">
            <i style="left: ${item.meter}%"></i>
            <b style="left: 36%">0.05</b>
          </div>
          <em>${verdict}</em>
          <p>${item.text}</p>
          <small class="you-chip">你的选择：${selected} · ${percent}%</small>
        </div>
      </div>
    `;
  }).join('');
}

function renderRegressionLab() {
  regressionList.innerHTML = regressionFindings.map((item) => {
    const related = answers[item.id];
    const note = related ? `你的相关选择：${related}` : '这一项提示：没有稳定证据时，不要强行解释。';
    return `
      <div class="regression-lane">
        <div class="regression-label">
          <span>${item.label}</span>
          <strong>${item.coef} · ${item.status}</strong>
        </div>
        <div class="coef-track">
          <i style="left: ${item.marker}%"></i>
          <b>0</b>
        </div>
        <div class="lane-note">
          <p>${item.text}</p>
          <small>${item.p}｜${note}</small>
        </div>
      </div>
    `;
  }).join('');
}

function runLabAnimation() {
  statLab.classList.remove('lab-playing');
  void statLab.offsetWidth;
  statLab.classList.add('lab-playing');
}

function setLabPanel(target) {
  labNavButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.labTarget === target);
  });
  labSlides.forEach((slide) => {
    slide.classList.toggle('active', slide.dataset.labPanel === target);
  });
  runLabAnimation();
}

genderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    gender = button.dataset.gender;
    render();
  });
});

nextBtn.addEventListener('click', () => {
  if (step < questions.length - 1) {
    step += 1;
  } else {
    page = 'result';
  }
  render();
});

resetBtn.addEventListener('click', () => {
  restart();
});

backBtn.addEventListener('click', () => {
  page = 'quiz';
  step = questions.length - 1;
  render();
});

restartBtn.addEventListener('click', () => {
  restart();
});

replayLabBtn.addEventListener('click', () => {
  runLabAnimation();
});

labNavButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setLabPanel(button.dataset.labTarget);
  });
});

labNextButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setLabPanel(button.dataset.labNext);
  });
});

function restart() {
  gender = '';
  step = 0;
  answers = {};
  page = 'quiz';
  render();
}

render();
