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
{% assign ordered_tags = site.data.post_tags %}
<div class="post-filters" role="group" aria-label="Filter posts by tag">
  <button class="post-filter is-active" type="button" data-post-filter="" aria-pressed="true">All</button>
  {% for tag_name in ordered_tags %}
    {% if site.tags[tag_name] %}
      <span class="post-filter-separator" aria-hidden="true">·</span>
      <button class="post-filter" type="button" data-post-filter="{{ tag_name | escape }}" aria-pressed="false">{{ tag_name | escape }}</button>
    {% endif %}
  {% endfor %}
  {% for tag in sorted_tags %}
    {% if ordered_tags contains tag[0] %}{% continue %}{% endif %}
    <span class="post-filter-separator" aria-hidden="true">·</span>
    <button class="post-filter" type="button" data-post-filter="{{ tag[0] | escape }}" aria-pressed="false">{{ tag[0] | escape }}</button>
  {% endfor %}
</div>

<div data-post-list>
{% for post in site.posts %}
  {% if post.lang == 'zh-CN' and post.translation_key %}
    {% assign english_versions = site.posts | where: "translation_key", post.translation_key | where: "lang", "en" %}
    {% if english_versions.size > 0 %}{% continue %}{% endif %}
  {% endif %}
  {% assign last_updated = post.updated | default: post.date %}
  <article class="post-entry" data-post-tags="{{ post.tags | jsonify | escape }}">
    <h2><a href="{{ post.url | relative_url }}" lang="{{ post.lang | default: 'en' }}">{{ post.title | escape }}</a></h2>
    <p class="post-meta">Last updated: <time datetime="{{ last_updated | date: '%Y-%m-%d' }}">{{ last_updated | date: "%Y-%m-%d" }}</time>{% for tag in post.tags %} · {{ tag | escape }}{% endfor %}</p>
    <p>{{ post.description | escape }}</p>
    {% if post.translation_key %}
      {% assign chinese_versions = site.posts | where: "translation_key", post.translation_key | where: "lang", "zh-CN" %}
      {% assign chinese_post = chinese_versions | first %}
      {% if chinese_post %}<p class="post-entry-languages"><a href="{{ post.url | relative_url }}" lang="en">English</a> · <a href="{{ chinese_post.url | relative_url }}" lang="zh-CN">中文</a></p>{% endif %}
    {% endif %}
  </article>
{% endfor %}
</div>
<p class="post-meta" data-post-empty hidden>No posts with this tag.</p>
<script src="{{ '/assets/js/post-filters.js' | relative_url }}" defer></script>
