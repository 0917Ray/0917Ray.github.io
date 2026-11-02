(function () {
  var list = document.querySelector('[data-post-list]');
  if (!list) return;
  var buttons = document.querySelectorAll('[data-post-filter]');
  var entries = list.querySelectorAll('[data-post-tags]');
  var empty = document.querySelector('[data-post-empty]');

  function applyFilter(tag) {
    var visible = 0;
    buttons.forEach(function (button) {
      var active = button.dataset.postFilter === tag;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    entries.forEach(function (entry) {
      var matches = !tag || JSON.parse(entry.dataset.postTags).indexOf(tag) !== -1;
      entry.hidden = !matches;
      if (matches) visible += 1;
    });
    empty.hidden = visible !== 0;
  }

  function readFilter() {
    applyFilter(new URL(window.location.href).searchParams.get('tag') || '');
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var tag = button.dataset.postFilter;
      var url = new URL(window.location.href);
      if (tag) url.searchParams.set('tag', tag);
      else url.searchParams.delete('tag');
      window.history.pushState(null, '', url);
      applyFilter(tag);
    });
  });
  window.addEventListener('popstate', readFilter);
  readFilter();
}());
