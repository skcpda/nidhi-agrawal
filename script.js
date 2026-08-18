function toggleMobileMenu() {
  const menu = document.getElementById("mobileLinks");
  if (!menu) return;
  menu.classList.toggle("is-open");
}

(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
