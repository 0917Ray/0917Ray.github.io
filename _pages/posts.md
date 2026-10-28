---
layout: default
title: "Posts"
description: "Personal writing on research, tools, and everyday life."
permalink: /posts/
redirect_from:
  - /wiki/
author_profile: false
posts_page: true
lang: en
---

# Posts

Notes and thoughts on research, tools, and everyday life.

{% for post in site.posts %}
## [{{ post.title }}]({{ post.url | relative_url }})

<p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}{% if post.category %} · {{ post.category | escape }}{% endif %}</p>

{{ post.description }}
{% endfor %}
