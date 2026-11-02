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

{% assign sorted_tags = site.tags | sort %}
<div class="post-filters" role="group" aria-label="Filter posts by tag">
  <button class="post-filter is-active" type="button" data-post-filter="" aria-pressed="true">All</button>
  {% for tag in sorted_tags %}
    <span class="post-filter-separator" aria-hidden="true">·</span>
    <button class="post-filter" type="button" data-post-filter="{{ tag[0] | escape }}" aria-pressed="false">{{ tag[0] | escape }}</button>
  {% endfor %}
</div>

<div data-post-list>
{% for post in site.posts %}
  {% assign last_updated = post.updated | default: post.date %}
  <article class="post-entry" data-post-tags="{{ post.tags | jsonify | escape }}">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>
    <p class="post-meta">Last updated: <time datetime="{{ last_updated | date: '%Y-%m-%d' }}">{{ last_updated | date: "%Y-%m-%d" }}</time>{% for tag in post.tags %} · {{ tag | escape }}{% endfor %}</p>
    <p>{{ post.description | escape }}</p>
  </article>
{% endfor %}
</div>
<p class="post-meta" data-post-empty hidden>No posts with this tag.</p>
<script src="{{ '/assets/js/post-filters.js' | relative_url }}" defer></script>
