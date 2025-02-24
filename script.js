// Animate sections on scroll
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    elements.forEach(el => observer.observe(el));
  });
  
// Handle form submission with EmailJS
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Send form data via EmailJS
  emailjs.sendForm('service_r742ika', 'template_bex23gv', form)
    .then(() => {
      alert('Thank you! Your message has been sent successfully.');
      form.reset(); // Clear the form
    }, (error) => {
      alert('Oops! Something went wrong. Please try again.');
      console.error('EmailJS error:', error);
    });
});