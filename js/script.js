
const darkModeToggle = document.querySelector('.fa-solid.fa-moon')
const firstPart = document.querySelector('.home')

const backgroundToggle = document.getElementById('background-toggle');

darkModeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');

  const isDarkMode = document.body.classList.contains('dark-mode');
  darkModeToggle.style.color = isDarkMode ? '#8D5733' : '#000000';
  firstPart.classList.toggle('bg-dark');
});