<span class="anchor" id="reading-notes"></span>

<section class="reading-notes" aria-labelledby="reading-notes-title">
  <div class="reading-notes__heading">
    <div>
      <h1 id="reading-notes-title">
        📝 Reading Notes
      </h1>
      <p class="reading-notes__intro">A growing collection of my notes on textbooks, courses, and technical materials.</p>
    </div>
    <a class="reading-notes__github" href="https://github.com/0917Ray/Reading_Notes" target="_blank" rel="noopener">
      <span><i class="fab fa-github" aria-hidden="true"></i> View repository</span>
      <img class="reading-notes__stars" src="https://img.shields.io/github/stars/0917Ray/Reading_Notes?style=flat-square&amp;color=7db5a8" alt="GitHub stars">
    </a>
  </div>

  <div class="reading-notes__summary" aria-label="Reading notes summary">
    <span><strong>{{ site.data.reading_notes | size }}</strong> notes</span>
    <span><strong>{{ site.data.reading_notes | where: "status", "updating" | size }}</strong> updating</span>
    <span><strong>{{ site.data.reading_notes | where: "status", "completed" | size }}</strong> completed</span>
  </div>

  <div class="reading-notes__filters" role="group" aria-label="Filter reading notes by status">
    <button class="reading-filter is-active" type="button" data-reading-filter="all" aria-pressed="true">All</button>
    <button class="reading-filter" type="button" data-reading-filter="updating" aria-pressed="false">Updating</button>
    <button class="reading-filter" type="button" data-reading-filter="completed" aria-pressed="false">Completed</button>
    <button class="reading-filter" type="button" data-reading-filter="planned" aria-pressed="false">Planned</button>
  </div>

  <div class="reading-notes__grid" id="reading-notes-grid">
    {% for note in site.data.reading_notes %}
    <article class="reading-card" data-reading-status="{{ note.status }}">
      <div class="reading-card__cover reading-card__cover--{{ note.cover_theme }}{% if note.cover_image %} reading-card__cover--image{% endif %}">
        {% if note.cover_image %}
          <img class="reading-card__cover-image" src="{{ note.cover_image | relative_url }}" alt="{{ note.title }} cover" loading="lazy">
        {% else %}
          <div class="reading-card__cover-no">RN · {{ forloop.index | prepend: '0' | slice: -2, 2 }}</div>
          <div class="reading-card__cover-copy">
            <span>{{ note.eyebrow }}</span>
            <strong>{{ note.short_title }}</strong>
          </div>
          <div class="reading-card__cover-mark" aria-hidden="true"></div>
        {% endif %}
      </div>

      <div class="reading-card__body">
        <div class="reading-card__topline">
          <span class="reading-card__status reading-card__status--{{ note.status }}">
            <span aria-hidden="true"></span>{{ note.status_label }}
          </span>
          <span class="reading-card__index">{{ forloop.index | prepend: '0' | slice: -2, 2 }}</span>
        </div>
        <h2>{{ note.title }}</h2>
        <p class="reading-card__meta">
          {% for author in note.authors %}
            {% if author.url %}<a href="{{ author.url }}" target="_blank" rel="noopener">{{ author.name }}</a>{% else %}<span>{{ author.name }}</span>{% endif %}{% unless forloop.last %}<span class="reading-card__separator"> · </span>{% endunless %}
          {% endfor %}
        </p>
        <div class="reading-card__descriptions">
          <p lang="en">{{ note.description_en }}</p>
          <p lang="zh-CN">{{ note.description_zh }}</p>
        </div>
        <div class="reading-card__links">
          {% if note.source_url %}<a class="reading-card__source-link" href="{{ note.source_url }}" target="_blank" rel="noopener">Source <span aria-hidden="true">↗</span></a>{% else %}<span class="reading-card__source-link reading-card__source-link--disabled">Source</span>{% endif %}
          <a class="reading-card__notes-link" href="{{ note.notes_url }}" target="_blank" rel="noopener">My Notes <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>
    {% endfor %}
  </div>

  <p class="reading-notes__empty" id="reading-notes-empty" hidden>No notes in this category yet.</p>
</section>

<style>
.reading-notes { margin-top: 2.5rem; }
.reading-notes__heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 1.5rem; margin-bottom: 1rem; }
.reading-notes__heading h1 { display: flex; align-items: center; flex-wrap: wrap; gap: .55rem; margin: 0 0 .45rem; font-size: 1.75rem; line-height: 1.2; }
.reading-notes__stars { width: auto; height: 18px; margin: 0; border-radius: 0; vertical-align: middle; }
.reading-notes__intro { max-width: 38rem; margin: 0; color: #64706d; font-size: .95rem; }
.reading-notes__github { flex: 0 0 auto; display: inline-flex; align-items: center; gap: .65rem; padding: .5rem .65rem .5rem .8rem !important; border: 1px solid rgba(125,181,168,.42); border-radius: .6rem !important; color: #527f75 !important; background: rgba(125,181,168,.07) !important; font-size: .78rem; font-weight: 700; }
.reading-notes__github > span { display: inline-flex; align-items: center; gap: .4rem; }
.reading-notes__summary { display: flex; gap: 1.25rem; margin: 1.1rem 0 1.15rem; color: #7a8582; font-size: .75rem; text-transform: uppercase; letter-spacing: .06em; }
.reading-notes__summary strong { color: #344642; font-size: .9rem; }
.reading-notes__filters { display: flex; flex-wrap: wrap; gap: .45rem; margin-bottom: 1.25rem; }
.reading-filter { appearance: none; border: 1px solid #dce5e2; border-radius: 999px; padding: .43rem .88rem; background: transparent; color: #65716e; font: inherit; font-size: .78rem; font-weight: 700; cursor: pointer; transition: .2s ease; }
.reading-filter:hover { border-color: #8fbeb3; color: #527f75; }
.reading-filter.is-active { border-color: #7db5a8; background: #7db5a8; color: #fff; box-shadow: 0 4px 12px rgba(77,130,117,.18); }
.reading-notes__grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: .85rem; }
.reading-card { min-width: 0; overflow: hidden; border: 1px solid #e1e8e6; border-radius: .8rem; background: #fff; box-shadow: 0 5px 18px rgba(42,61,56,.055); transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
.reading-card:hover { transform: translateY(-3px); border-color: rgba(125,181,168,.6); box-shadow: 0 10px 28px rgba(42,61,56,.11); }
.reading-card[hidden] { display: none; }
.reading-card__cover { position: relative; display: flex; flex-direction: column; justify-content: space-between; aspect-ratio: 4 / 3; padding: .85rem; overflow: hidden; color: white; }
.reading-card__cover::before { content: ""; position: absolute; width: 9rem; height: 9rem; right: -3.5rem; bottom: -4.5rem; border: 1px solid rgba(255,255,255,.3); border-radius: 50%; box-shadow: 0 0 0 1.7rem rgba(255,255,255,.06), 0 0 0 3.4rem rgba(255,255,255,.04); }
.reading-card__cover--sage { background: linear-gradient(145deg, #466f65, #8bb6a9); }
.reading-card__cover--blue { background: linear-gradient(145deg, #3f6078, #7ea6b9); }
.reading-card__cover--violet { background: linear-gradient(145deg, #5f567c, #9b8eb9); }
.reading-card__cover--coral { background: linear-gradient(145deg, #965d58, #d89985); }
.reading-card__cover--amber { background: linear-gradient(145deg, #8c7047, #d5ae6b); }
.reading-card__cover--teal { background: linear-gradient(145deg, #356b6f, #6cb2ac); }
.reading-card__cover--image { padding: 0; background: #f2f3f5; }
.reading-card__cover--image::before { display: none; }
.reading-card__cover-image { display: block; width: 100%; height: 100%; margin: 0; border-radius: 0; object-fit: cover; object-position: center; }
.reading-card__cover-no { position: relative; z-index: 1; font-size: .65rem; font-weight: 700; letter-spacing: .14em; opacity: .8; }
.reading-card__cover-copy { position: relative; z-index: 1; display: flex; flex-direction: column; gap: .35rem; max-width: 90%; }
.reading-card__cover-copy span { font-size: .62rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; opacity: .82; }
.reading-card__cover-copy strong { font-family: Georgia, serif; font-size: 1.08rem; line-height: 1.08; letter-spacing: -.02em; }
.reading-card__cover-mark { position: absolute; top: 1rem; right: 1rem; width: .55rem; height: .55rem; border: 1px solid rgba(255,255,255,.8); transform: rotate(45deg); }
.reading-card__body { display: flex; min-height: 17rem; flex-direction: column; padding: .9rem .85rem .95rem; }
.reading-card__topline { display: flex; justify-content: space-between; align-items: center; margin-bottom: .65rem; }
.reading-card__status { display: inline-flex; align-items: center; gap: .35rem; color: #66716f; font-size: .65rem; font-weight: 800; letter-spacing: .05em; text-transform: uppercase; }
.reading-card__status span { width: .38rem; height: .38rem; border-radius: 50%; background: #a7afad; }
.reading-card__status--updating span { background: #5aa994; box-shadow: 0 0 0 3px rgba(90,169,148,.13); }
.reading-card__status--completed span { background: #6889a5; box-shadow: 0 0 0 3px rgba(104,137,165,.13); }
.reading-card__status--planned span { background: #c3995a; box-shadow: 0 0 0 3px rgba(195,153,90,.13); }
.reading-card__index { color: #abb3b1; font-size: .65rem; font-weight: 700; }
.reading-card h2 { margin: 0; color: #263835; font-family: Georgia, serif; font-size: 1.02rem; line-height: 1.25; }
.reading-card__meta { margin: .32rem 0 .72rem; color: #74817e; font-size: .73rem; line-height: 1.45; }
.page__content .reading-card__meta a { padding: 0; color: #657873; background: none; font-weight: 700; }
.page__content .reading-card__meta a:hover { color: #527f75; background: none; }
.reading-card__separator { color: #a0aaa7; }
.reading-card__descriptions { flex: 1; }
.reading-card__descriptions p { margin: 0 0 .48rem; color: #56615f; font-size: .74rem; line-height: 1.55; }
.reading-card__descriptions p[lang="zh-CN"] { color: #7a8582; }
.reading-card__links { display: flex; align-items: center; flex-wrap: wrap; gap: .45rem .7rem; padding-top: .7rem; border-top: 1px solid #edf1f0; }
.page__content .reading-card__links a { padding: 0; color: #62736f; background: none; font-size: .8rem; font-weight: 700; line-height: 1.35; }
.page__content .reading-card__links a:hover { color: #527f75; background: none; }
.reading-card__source-link--disabled { color: #a8b0ae; font-size: .8rem; font-weight: 700; cursor: default; }
.page__content .reading-card__links .reading-card__notes-link { margin-left: auto; color: #527f75; font-size: .82rem; }
.reading-notes__empty { padding: 2rem; border: 1px dashed #d7e1de; border-radius: .8rem; color: #7d8986; text-align: center; font-size: .85rem; }
html[data-theme="dark"] .reading-notes__intro, html[data-theme="dark"] .reading-card__meta { color: #aab4b2; }
html[data-theme="dark"] .reading-notes__summary { color: #9da8a5; }
html[data-theme="dark"] .reading-notes__summary strong, html[data-theme="dark"] .reading-card h2 { color: #e4eae8; }
html[data-theme="dark"] .reading-filter { border-color: #52615e; color: #bdc7c4; }
html[data-theme="dark"] .reading-filter.is-active { border-color: #7db5a8; color: #14211e; }
html[data-theme="dark"] .reading-card { border-color: #43514e; background: #293330; box-shadow: none; }
html[data-theme="dark"] .reading-card__descriptions p { color: #c2ccca; }
html[data-theme="dark"] .reading-card__descriptions p[lang="zh-CN"] { color: #9faaa7; }
html[data-theme="dark"] .reading-card__links { border-color: #43514e; }
@media (max-width: 1100px) { .reading-notes__grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
@media (max-width: 800px) { .reading-notes__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 600px) {
  .reading-notes__heading { align-items: flex-start; flex-direction: column; gap: .8rem; }
  .reading-notes__summary { gap: .8rem; }
  .reading-notes__grid { grid-template-columns: 1fr; }
  .reading-card__cover { aspect-ratio: 4 / 3; }
  .reading-card__body { min-height: 0; }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var filters = document.querySelectorAll('[data-reading-filter]');
  var cards = document.querySelectorAll('[data-reading-status]');
  var empty = document.getElementById('reading-notes-empty');

  filters.forEach(function (button) {
    button.addEventListener('click', function () {
      var selected = button.getAttribute('data-reading-filter');
      var visibleCount = 0;

      filters.forEach(function (item) {
        var active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      cards.forEach(function (card) {
        var visible = selected === 'all' || card.getAttribute('data-reading-status') === selected;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      empty.hidden = visibleCount !== 0;
    });
  });
});
</script>
