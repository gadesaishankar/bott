// small helpers for year and form behavior
document.addEventListener('DOMContentLoaded', function () {
  // Set current year in footer
  const y = new Date().getFullYear();
  document.getElementById('year')?.textContent = y;
  document.getElementById('year2')?.textContent = y;
  document.getElementById('year3')?.textContent = y;

  // Contact form validation & submit
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('contactAlert');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      // Simulate successful submit
      form.reset();
      form.classList.remove('was-validated');
      if (alertBox) {
        alertBox.classList.remove('d-none');
        setTimeout(()=> alertBox.classList.add('d-none'), 5000);
      }
    }, false);
  }
});
