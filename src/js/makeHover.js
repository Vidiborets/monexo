(() => {
  const hoverBtn = document.querySelector('.js_hover_element');
  const hoverMenu = document.querySelector('.js_hover_Menu');

  hoverBtn.addEventListener('mouseover', () => {
    const expanded = hoverBtn.getAttribute('aria-expanded') === 'true' || false;

    hoverBtn.classList.toggle('is-open');
    hoverBtn.setAttribute('aria-expanded', !expanded);

    hoverMenu.classList.toggle('is-open');
  });
})();
