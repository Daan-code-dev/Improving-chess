document.addEventListener('DOMContentLoaded', function () {
  const tocBoxes = Array.from(document.querySelectorAll('.toc-box'));

  tocBoxes.forEach(function (box) {
    const toggle = box.querySelector('.toc-toggle');
    const list = box.querySelector('.toc-list');
    const icon = box.querySelector('.toc-toggle-icon');

    if (!toggle || !list || !icon) {
      return;
    }

    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      list.classList.remove('is-collapsed');
      icon.textContent = '−';
    } else {
      list.classList.add('is-collapsed');
      icon.textContent = '+';
    }

    toggle.addEventListener('click', function () {
      const isExpandedNow = toggle.getAttribute('aria-expanded') === 'true';

      if (isExpandedNow) {
        toggle.setAttribute('aria-expanded', 'false');
        list.classList.add('is-collapsed');
        icon.textContent = '+';
      } else {
        toggle.setAttribute('aria-expanded', 'true');
        list.classList.remove('is-collapsed');
        icon.textContent = '−';
      }
    });
  });
});
