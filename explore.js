function scrollToElement(element) {
  window.scrollTo({
    behavior: 'smooth',
    top: element.offsetTop - 50 // Adjust this value to offset any fixed headers
  });
}

// Attach smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      scrollToElement(target);
    }
  });
});