(function () {
  var lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  var img = lightbox.querySelector('.lightbox-img');
  var caption = lightbox.querySelector('.lightbox-caption');
  var closeBtn = lightbox.querySelector('.lightbox-close');

  function openLightbox(src, alt, captionText) {
    img.src = src;
    img.alt = alt;
    caption.textContent = captionText || '';
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.classList.add('lightbox--open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.classList.remove('lightbox--open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.js-lightbox').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      var src = el.tagName === 'A' ? el.href : el.src;
      var alt = el.tagName === 'A' ? (el.querySelector('img') && el.querySelector('img').alt) || '' : el.alt;
      var caption = el.getAttribute('data-caption') || alt;
      openLightbox(src, alt, caption);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
})();
