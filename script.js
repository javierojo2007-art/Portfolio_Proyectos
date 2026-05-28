  // Fade-in al hacer scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Animación de barras de habilidades
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.transform = `scaleX(${parseFloat(bar.dataset.width) / 100})`;
        });
      }
    });
  }, { threshold: 0.2 });
  const skillsSection = document.getElementById('habilidades');
  if (skillsSection) skillObserver.observe(skillsSection);

  // Resaltar enlace activo en el nav
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 80) current = s.id; });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? 'var(--blue)' : '';
    });
  }, { passive: true });