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

Now I am an undergraduate student at Wuhan University, majoring in Information and Computational Science(also called Computational Mathematics). During my undergraduate studies, I was fortunate to receive guidance from Prof. [ZHANG Jiwei(张继伟)](https://scholar.google.com.hk/citations?user=8yZhQ7kAAAAJ&hl=en&oi=ao) and Prof. HU Jie(胡捷).

I will begin my doctoral studies in Fall 2025, at [CS department](https://www.cs.cityu.edu.hk/) of City University of Hong Kong, where I will supervised by Prof. [MA Ziye(马梓业)](https://gavenma.github.io/).

My research interest lies in understanding machine learning from an optimization perspective, including non-convex problems and new optimization algorithm.

Here are my CV(Curriculum Vitae)
- [CV in English](https://drive.google.com/file/d/1o9ylZCkhPpjhzNQq3MjY2oKJDbbUHz08/view?usp=sharing)
- [CV in Chinese](https://drive.google.com/file/d/1dT1rMi2gaGKwHVtpV89YlYGM1c2sl__V/view?usp=sharing)

# 🎯 News
- *2025.04* I was selected as the [outstanding undergraduate graduate of the School of Mathematics and Statistics in 2025](https://maths.whu.edu.cn/info/1197/134921.htm).
- *2025.05.10* I have completed my undergraduate thesis defense, so happy!
- *2025.05.06* I accepted the PhD offer from CS department of CityUHK!
- *2023.11* I won the ***[National Second Prize (Top 2% of 180,000)](https://www.mcm.edu.cn/upload_cn/node/701/6XE4ZF5Oc3573e0779f6cd8e31d79a6e9f6fd13d.pdf)*** at the *[China Undergraduate Mathematical Contest in Modeling](https://en.mcm.edu.cn/)* with my teammates LIAO Yang(廖洋) and ZHOU Dingbo(周定波)!

# 📚️ Publications 
- No one here

# 🏆️ Honors and Awards
- *2025.04* Outstanding undergraduate graduates of the School of Mathematics and Statistics, Class of 2025
- *2023.12* National Encouragement Scholarship.
- *2023.11* National Second Prize (Top 2% of 180,000) (China Undergraduate Mathematical Contest in Modeling(CUMCM)).
- *2021.09* Freshman Scholarship(Undergraduate) (Top 10%).

# 📖 Educations
- *2025.09 (next) -～*, Phd student, Computer Science, City University of Hong Kong.
- *2023.02 - 2025.06 (now)*, Undergraduate, Information and Computational Science, Wuhan University, Wuhan.
- *2021.09 - 2023.02*, Undergraduate, [Hongyi Honor College](https://hyxt.whu.edu.cn/)(Mathematics), Wuhan University, Wuhan.
- *2018.09 - 2021.06*, [Chuzhou Middle School](http://www.ahczzx.cn/Site/index.html), Chuzhou

# 📸 Hobbies
- Traveling with my girlfriend 🥰
- Photography 📸
- Running 🏃🏻‍➡️

# 📝 Reading Notes
I enjoy taking notes when I learn new things and I put them on Github. Here is the list:
- [Machine Learning](https://github.com/0917Ray/Reading_Notes/tree/main/CS229), [CS229](https://cs229.stanford.edu/), Stanford
- [Reinforcement Learning](https://github.com/0917Ray/Reading_Notes/tree/main/Reinfoce%20Learning), by [Shiyu Zhao](https://www.shiyuzhao.net/), Westlake University
- [Optimization for data analysis](https://github.com/0917Ray/Reading_Notes/tree/main/Optimization%20for%20Data%20Analysis), by [STEPHEN J. WRIGHT](https://wrightstephen.github.io/sw_proj/) and [BENJAMIN RECHT](https://people.eecs.berkeley.edu/~brecht/index.html)

# 📕 Xiaohongshu(Rednote) Followers Tracker
<div style="max-width: 700px; margin: 0 auto; padding: 24px; background: white; border-radius: 18px; box-shadow: 0 8px 30px rgba(0,0,0,0.05); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 10px;">Current Xiaohongshu Followers: 
    <span id="current-fans" style="color: #007aff;">Loading...</span>
  </h2>
  <canvas id="fansChart" style="width: 100%; height: 300px;"></canvas>
  <p style="font-size: 0.85rem; color: #888; margin-top: 12px;">* Data manually updated daily from <strong>Google Sheet: xiahongshu_fans</strong></p>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  async function loadCSVData() {
    const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQUX3jbmcxIjz_VyFAy33PJzbYPVKPVXIEOSMdoy7bqRPOl-y1n-lZe8pkZ55WYwkQaqGEAQ0D_idrc/pub?output=csv');
    const csvText = await response.text();

    const lines = csvText.trim().split(/\r?\n/);
    const headers = lines[0].replace(/^\uFEFF/, '').split(',');
    const dateIndex = headers.findIndex(h => h.trim().toLowerCase() === 'date');
    const countIndex = headers.findIndex(h => h.trim().toLowerCase() === 'count');

    const labels = [], data = [];

    for (let i = 1; i < lines.length; i++) {
      const parts = lines[i].split(',');
      const date = parts[dateIndex]?.trim();
      const count = parseInt(parts[countIndex]?.trim(), 10);
      if (!isNaN(count) && date) {
        labels.push(date);
        data.push(count);
      }
    }

    if (data.length === 0) {
      document.getElementById('current-fans').innerText = 'No data';
      return;
    }

    document.getElementById('current-fans').innerText = data.at(-1);

    new Chart(document.getElementById('fansChart'), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Follower Count',
          data: data,
          borderWidth: 2,
          fill: true,
          pointRadius: 0,
          tension: 0.3,
          backgroundColor: 'rgba(0, 122, 255, 0.1)',
          borderColor: 'rgba(0, 122, 255, 1)'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            title: { display: false },
            ticks: {
              color: '#666',
              font: { size: 11 }
            }
          },
          y: {
            title: { display: false },
            ticks: {
              color: '#666',
              font: { size: 11 }
            },
            beginAtZero: false
          }
        }
      }
    });
  }

  window.addEventListener('DOMContentLoaded', loadCSVData);
</script>
