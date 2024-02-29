function toggleMode() {
  const checkbox = document.getElementById('modeSwitch');
  document.body.classList.toggle('dark-mode', checkbox.checked);
  document.body.classList.toggle('light-mode', !checkbox.checked);
}
