---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>
<!-- ========================================================================================================================================== -->
Now I am an undergraduate student at Wuhan University, majoring in Information and Computational Science(also called Computational Mathematics). During my undergraduate studies, I was fortunate to receive guidance from Prof. [ZHANG Jiwei(张继伟)](https://scholar.google.com.hk/citations?user=8yZhQ7kAAAAJ&hl=en&oi=ao) and Prof. HU Jie(胡捷).

I will begin my doctoral studies in Fall 2025, at [CS department](https://www.cs.cityu.edu.hk/) of City University of Hong Kong, where I will supervised by Prof. [MA Ziye(马梓业)](https://gavenma.github.io/).

My research interest lies in understanding machine learning from an optimization perspective, including non-convex problems and new optimization algorithm.

Here are my CV(Curriculum Vitae)
- [CV in English](https://drive.google.com/file/d/1o9ylZCkhPpjhzNQq3MjY2oKJDbbUHz08/view?usp=sharing)
- [CV in Chinese](https://drive.google.com/file/d/1dT1rMi2gaGKwHVtpV89YlYGM1c2sl__V/view?usp=sharing)
<!-- ========================================================================================================================================== -->
# 🎯 News
- *2025.04* I was selected as the [outstanding undergraduate graduate of the School of Mathematics and Statistics in 2025](https://maths.whu.edu.cn/info/1197/134921.htm).
- *2025.05.10* I have completed my undergraduate thesis defense, so happy!
- *2025.05.06* I accepted the PhD offer from CS department of CityUHK!
- *2023.11* I won the ***[National Second Prize (Top 2% of 180,000)](https://www.mcm.edu.cn/upload_cn/node/701/6XE4ZF5Oc3573e0779f6cd8e31d79a6e9f6fd13d.pdf)*** at the *[China Undergraduate Mathematical Contest in Modeling](https://en.mcm.edu.cn/)* with my teammates LIAO Yang(廖洋) and ZHOU Dingbo(周定波)!
<!-- ========================================================================================================================================== -->
# 📚️ Publications
- No one here
<!-- ========================================================================================================================================== -->
# 🏆️ Honors and Awards
- *2025.04* Outstanding undergraduate graduates of the School of Mathematics and Statistics, Class of 2025
- *2023.12* National Encouragement Scholarship.
- *2023.11* National Second Prize (Top 2% of 180,000) (China Undergraduate Mathematical Contest in Modeling(CUMCM)).
- *2021.09* Freshman Scholarship(Undergraduate) (Top 10%).
<!-- ========================================================================================================================================== -->
# 📖 Educations
- *2025.09 (next) -～*, Phd student, Computer Science, City University of Hong Kong.
- *2023.02 - 2025.06 (now)*, Undergraduate, Information and Computational Science, Wuhan University, Wuhan.
- *2021.09 - 2023.02*, Undergraduate, [Hongyi Honor College](https://hyxt.whu.edu.cn/)(Mathematics), Wuhan University, Wuhan.
- *2018.09 - 2021.06*, [Chuzhou Middle School](http://www.ahczzx.cn/Site/index.html), Chuzhou
<!-- ========================================================================================================================================== -->
# 📸 Hobbies
- Traveling with my girlfriend 🥰
- Photography 📸
- Running 🏃🏻‍➡️
<!-- ========================================================================================================================================== -->
# 📝 Reading Notes
I enjoy taking notes when I learn new things and I put them on Github. Here is the list:
- [Machine Learning](https://github.com/0917Ray/Reading_Notes/tree/main/CS229), [CS229](https://cs229.stanford.edu/), Stanford
- [Reinforcement Learning](https://github.com/0917Ray/Reading_Notes/tree/main/Reinfoce%20Learning), by [Shiyu Zhao](https://www.shiyuzhao.net/), Westlake University
- [Optimization for data analysis](https://github.com/0917Ray/Reading_Notes/tree/main/Optimization%20for%20Data%20Analysis), by [STEPHEN J. WRIGHT](https://wrightstephen.github.io/sw_proj/) and [BENJAMIN RECHT](https://people.eecs.berkeley.edu/~brecht/index.html)
<!-- ========================================================================================================================================== -->
# 📕 Rednote Followers
<!-- 小红书粉丝统计可视化 -->
<div id="fans-wrapper" style="max-width: 800px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <!-- 卡片统计区 -->
  <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: space-between; margin-bottom: 16px;">
    <div class="fans-card" id="card-total"></div>
    <div class="fans-card" id="card-today"></div>
    <div class="fans-card" id="card-7d"></div>
    <div class="fans-card" id="card-30d"></div>
    <div class="fans-card" id="card-maxday"></div>
    <div class="fans-card" id="card-growthrate"></div>
  </div>

  <!-- 图表切换按钮 -->
  <div style="margin-bottom: 10px;">
    <button onclick="switchChart('total')">Total Followers</button>
    <button onclick="switchChart('daily')">Daily Growth</button>
    <button onclick="switchChart('rate')">Growth Rate (%)</button>
  </div>

  <!-- 图表容器 -->
  <div style="height: 240px;">
    <canvas id="fansChart" style="width: 100%;"></canvas>
  </div>
</div>

<style>
  .fans-card {
    flex: 1;
    min-width: 160px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.05);
    padding: 14px 18px;
    color: #333;
    font-size: 0.9rem;
  }
  .fans-card span {
    display: block;
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 6px;
    color: rgb(125,181,168);
  }
  button {
    border: none;
    background: rgb(125,181,168,0.65);
    color: white;
    border-radius: 6px;
    padding: 6px 12px;
    margin-right: 10px;
    cursor: pointer;
    font-size: 0.9rem;
  }
  button:hover {
    background: rgb(105,161,148);
  }
</style>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQUX3jbmcxIjz_VyFAy33PJzbYPVKPVXIEOSMdoy7bqRPOl-y1n-lZe8pkZ55WYwkQaqGEAQ0D_idrc/pub?output=csv';
  const chartColor = 'rgba(125,181,168,0.95)';
  const fillColor = 'rgba(125,181,168,0.25)';
  let chart, totalData = [], dailyData = [], rateData = [], labels = [];

  async function fetchData() {
    const res = await fetch(SHEET_CSV_URL);
    const text = await res.text();
    const rows = text.trim().split(/\r?\n/).map(line => line.split(','));
    const head = rows[0];
    const dateIdx = head.findIndex(h => h.trim().toLowerCase() === 'date');
    const countIdx = head.findIndex(h => h.trim().toLowerCase() === 'count');
    const dates = [], counts = [];

    for (let i = 1; i < rows.length; i++) {
      const date = rows[i][dateIdx]?.trim();
      const count = parseInt(rows[i][countIdx]?.trim(), 10);
      if (date && !isNaN(count)) {
        dates.push(date);
        counts.push(count);
      }
    }

    labels = dates;
    totalData = counts;
    dailyData = [0];
    rateData = [0];
    for (let i = 1; i < counts.length; i++) {
      const diff = counts[i] - counts[i - 1];
      dailyData.push(diff);
      rateData.push(parseFloat(((diff / counts[i - 1]) * 100).toFixed(2)));
    }

    updateStats();
    drawChart('total');
  }

  function updateStats() {
    const latest = totalData.at(-1);
    const yesterday = totalData.at(-2);
    const last7 = totalData.slice(-7);
    const last30 = totalData.slice(-30);
    const sum7 = last7.at(-1) - last7[0];
    const sum30 = last30.at(-1) - last30[0];
    const avgRate7 = rateData.slice(-7).reduce((a, b) => a + b, 0) / 7;

    const maxGrowth = Math.max(...dailyData);
    const maxIndex = dailyData.findIndex(x => x === maxGrowth);
    const maxDate = labels[maxIndex];

    document.getElementById('card-total').innerHTML = `Total Followers<span>${latest}</span>`;
    document.getElementById('card-today').innerHTML = `Today's Growth<span>${latest - yesterday}</span>`;
    document.getElementById('card-7d').innerHTML = `7-Day Growth<span>${sum7}</span>`;
    document.getElementById('card-30d').innerHTML = `30-Day Growth<span>${sum30}</span>`;
    document.getElementById('card-maxday').innerHTML = `Max Daily Growth<span>${maxGrowth} (${maxDate})</span>`;
    document.getElementById('card-growthrate').innerHTML = `Avg 7-Day Rate<span>${avgRate7.toFixed(2)}%</span>`;
  }

  function drawChart(type = 'total') {
    const dataSet = type === 'total' ? totalData : (type === 'daily' ? dailyData : rateData);
    const label = type === 'total' ? 'Total Followers' : (type === 'daily' ? 'Daily Growth' : 'Growth Rate (%)');

    if (chart) chart.destroy();

    chart = new Chart(document.getElementById('fansChart'), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: label,
          data: dataSet,
          borderColor: chartColor,
          backgroundColor: fillColor,
          fill: true,
          pointRadius: function(ctx) {
            const index = ctx.dataIndex;
            if (type === 'daily' && dailyData[index] === Math.max(...dailyData)) {
              return 3;
            }
            return 0;
          },
          pointBackgroundColor: function(ctx) {
            const index = ctx.dataIndex;
            if (type === 'daily' && dailyData[index] === Math.max(...dailyData)) {
              return 'rgb(207, 10, 36)'; // 胭脂红色
            }
            return chartColor;
          },
          pointHoverRadius: function(ctx) {
            const index = ctx.dataIndex;
            if (type === 'daily' && dailyData[index] === Math.max(...dailyData)) {
              return 10;
            }
            return 3;
          },
          tension: 0.3,
          borderWidth: 1.5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { ticks: { maxTicksLimit: 10 } },
          y: {
            beginAtZero: (type === 'rate'),  // 只有 growth rate 视图从 0 开始
            suggestedMin: (type === 'rate') ? 0 : Math.floor(Math.min(...dataSet) * 0.95),
            suggestedMax: Math.ceil(Math.max(...dataSet) * 1.05)
          }
        }
      }
    });
  }

  function switchChart(viewType) {
    drawChart(viewType);
  }

  window.addEventListener('DOMContentLoaded', fetchData);
</script>
<!-- ========================================================================================================================================== -->
<style>
/* 只影响正文内容区的超链接 */
.page__content p a,
.page__content li a,
.post-content p a,
.post-content li a {
  color: rgb(125,181,168);
  background-color: rgba(125,181,168, 0.00);
  padding: 2px 4px;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.page__content p a:hover,
.page__content li a:hover,
.post-content p a:hover,
.post-content li a:hover {
  color: rgb(105,161,148);
  background-color: rgba(125,181,168, 0.12);
}
</style>
<!-- ========================================================================================================================================== -->
