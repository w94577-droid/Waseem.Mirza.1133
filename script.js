// Display the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Contact button alert
function contact() {
  alert('Thanks! Waseem will contact you soon.');
}
