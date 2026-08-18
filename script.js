(() => {
  const btn = document.querySelector(".menu-btn");
  const menu = document.getElementById("mobile");
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  btn?.addEventListener("click", () => {
    const open = menu?.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  menu?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      btn?.setAttribute("aria-expanded", "false");
    });
  });
})();
