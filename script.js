// Mobile menu, copy email, current year. No dependencies.
(function () {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  function setOpen(open) {
    links.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  links.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  var copyBtn = document.getElementById('copyEmail');
  var email = document.getElementById('email').textContent.trim();

  copyBtn.addEventListener('click', function () {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(email).then(function () {
      copyBtn.textContent = 'Copied';
      setTimeout(function () { copyBtn.textContent = 'Copy'; }, 1600);
    }).catch(function () {
      copyBtn.textContent = 'Select it';
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
