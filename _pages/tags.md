---
title: "Tags"
permalink: /tags/
layout: default
author_profile: true
---

<div class="page__content">
  <h1>Tags</h1>
  {% assign all_tags = site.tags | sort %}
  <ul>
    {% for tag in all_tags %}
      <li id="{{ tag[0] | escape }}">
        <h3>#{{ tag[0] }}</h3>
        <ul>
          {% for post in tag[1] %}
            <li>
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
              <small>· {{ post.date | date: "%Y-%m-%d" }} · {{ post.lang | upcase }}</small>
            </li>
          {% endfor %}
        </ul>
      </li>
    {% endfor %}
  </ul>
</div>
