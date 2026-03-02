function showTab(n) {
  document.querySelectorAll('.tab').forEach((t, i) => t.classList.toggle('active', i === n));
  document.querySelectorAll('.section').forEach((s, i) => s.classList.toggle('active', i === n));
}
