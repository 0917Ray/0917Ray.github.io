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
<!-- ========================================================================================================================================== -->
{% include_relative about/about-me.md %}
{% include_relative about/news.md %}
{% include_relative about/publications.md %}
{% include_relative about/honors.md %}
{% include_relative about/educations.md %}
{% include_relative about/hobbies.md %}
{% include_relative about/reading-notes.md %}
{% include_relative about/rednote-followers.md %}
<!-- ========================================================================================================================================== -->
<!-- <span class='anchor' id='about-me'></span>
<!-- ========================================================================================================================================== -->
<!-- Now I am an undergraduate student at Wuhan University, majoring in Information and Computational Science(also called Computational Mathematics). During my undergraduate studies, I was fortunate to receive guidance from Prof. [ZHANG Jiwei(张继伟)](https://scholar.google.com.hk/citations?user=8yZhQ7kAAAAJ&hl=en&oi=ao) and Prof. HU Jie(胡捷).

I will begin my doctoral studies in Fall 2025, at [CS department](https://www.cs.cityu.edu.hk/) of City University of Hong Kong, where I will supervised by Prof. [MA Ziye(马梓业)](https://gavenma.github.io/).

My research interest lies in understanding machine learning from an optimization perspective, including non-convex problems and new optimization algorithm.

Here are my CV(Curriculum Vitae): [CV in English](https://drive.google.com/file/d/1o9ylZCkhPpjhzNQq3MjY2oKJDbbUHz08/view?usp=sharing), [CV in Chinese](https://drive.google.com/file/d/1dT1rMi2gaGKwHVtpV89YlYGM1c2sl__V/view?usp=sharing).
<!-- ========================================================================================================================================== -->
<!-- 
<span class="anchor" id="news"></span>
# 🎯 News
- *2025.05.10* I have completed my undergraduate thesis defense, so happy!
- *2025.05.06* I accepted the PhD offer from CS department of CityUHK!
- *2025.04.01* I was selected as the [outstanding undergraduate graduate of the School of Mathematics and Statistics in 2025](https://maths.whu.edu.cn/info/1197/134921.htm).
- *2023.11* I won the ***[National Second Prize (Top 2% of 180,000)](https://www.mcm.edu.cn/upload_cn/node/701/6XE4ZF5Oc3573e0779f6cd8e31d79a6e9f6fd13d.pdf)*** at the *[China Undergraduate Mathematical Contest in Modeling](https://en.mcm.edu.cn/)* with my teammates LIAO Yang(廖洋) and ZHOU Dingbo(周定波)!
<!-- ========================================================================================================================================== -->
<!-- 
<span class="anchor" id="publications"></span>
# 📚️ Publications
- No one here
<!-- ========================================================================================================================================== -->
<!-- 
<span class="anchor" id="honors-and-awards"></span>
# 🏆️ Honors and Awards
- *2025.04* Outstanding undergraduate graduates of the School of Mathematics and Statistics, Class of 2025
- *2023.12* National Encouragement Scholarship.
- *2023.11* National Second Prize (Top 2% of 180,000) (China Undergraduate Mathematical Contest in Modeling(CUMCM)).
- *2021.09* Freshman Scholarship(Undergraduate) (Top 10%).

<!-- ========================================================================================================================================== -->
<!-- 
<span class="anchor" id="educations"></span>
# 📖 Educations
- *2025.09 (next) -～*, Phd student, Computer Science, City University of Hong Kong.
- *2023.02 - 2025.06 (now)*, Undergraduate, Information and Computational Science, Wuhan University, Wuhan.
- *2021.09 - 2023.02*, Undergraduate, [Hongyi Honor College](https://hyxt.whu.edu.cn/)(Mathematics), Wuhan University, Wuhan.
- *2018.09 - 2021.06*, [Chuzhou Middle School](http://www.ahczzx.cn/Site/index.html), Chuzhou
<!-- ========================================================================================================================================== -->
<!-- 
<span class="anchor" id="hobbies"></span>
# 📸 Hobbies
- Traveling with my girlfriend 🥰
- Photography 📸
- Running 🏃🏻‍➡️
<!-- ========================================================================================================================================== -->
<!-- 
<span class="anchor" id="reading-notes"></span>
# 📝 Reading Notes ![GitHub stars](https://img.shields.io/github/stars/0917Ray/Reading_Notes?style=flat-square&color=7db5a8)
I enjoy taking notes when I learn new things and I put them on GitHub. Here is the list:
- [Machine Learning](https://github.com/0917Ray/Reading_Notes/tree/main/CS229), [CS229](https://cs229.stanford.edu/), Stanford
- [Reinforcement Learning](https://github.com/0917Ray/Reading_Notes/tree/main/Reinfoce%20Learning), by [Shiyu Zhao](https://www.shiyuzhao.net/), Westlake University
- [Optimization for data analysis](https://github.com/0917Ray/Reading_Notes/tree/main/Optimization%20for%20Data%20Analysis), by [STEPHEN J. WRIGHT](https://wrightstephen.github.io/sw_proj/) and [BENJAMIN RECHT](https://people.eecs.berkeley.edu/~brecht/index.html)
<!-- ========================================================================================================================================== -->
<!-- 
<span class="anchor" id="rednote-followers"></span>
# 📕 Rednote Followers
<!-- 小红书粉丝统计可视化 -->

<!-- ========================================================================================================================================== -->
