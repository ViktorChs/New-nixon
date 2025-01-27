window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const img = document.querySelector('.img-container img');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 200) {
    header.classList.add('scrolled');
    img.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
    img.classList.remove('scrolled');
  }
});