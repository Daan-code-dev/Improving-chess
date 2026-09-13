document.addEventListener('DOMContentLoaded', function () {
  const tocBoxes = Array.from(document.querySelectorAll('.toc-box'));

  tocBoxes.forEach(function (box) {
    const toggle = box.querySelector('.toc-toggle');
    const list = box.querySelector('.toc-list');
    const icon = box.querySelector('.toc-toggle-icon');

    if (!toggle || !list || !icon) {
      return;
    }

    toggle.addEventListener('click', function () {
      const willOpen = toggle.getAttribute('aria-expanded') === 'false';
      toggle.setAttribute('aria-expanded', String(willOpen));
      list.classList.toggle('is-collapsed', !willOpen);
      icon.textContent = willOpen ? '−' : '+';
    });
  });
});
