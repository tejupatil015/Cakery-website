document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navlist = document.querySelector('.navlist');

  function toggleNav() {
    if (!navlist) return;
    navlist.classList.toggle('active');
    document.body.classList.toggle('nav-open');
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleNav);
  }

  // Close nav when a link is clicked
  document.querySelectorAll('.navlist a').forEach(a => {
    a.addEventListener('click', () => {
      if (navlist) navlist.classList.remove('active');
      document.body.classList.remove('nav-open');
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navlist && navlist.classList.contains('active')) {
      navlist.classList.remove('active');
      document.body.classList.remove('nav-open');
    }
  });
});
