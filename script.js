(() => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  toggle?.addEventListener("click", () => {
    const open = nav?.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  const items = [...document.querySelectorAll(".block .reveal")];
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.16 }
    );
    items.forEach((el, i) => {
      el.style.animationDelay = `${Math.min(i * 0.06, 0.4)}s`;
      io.observe(el);
    });
  } else {
    items.forEach((el) => el.classList.add("in"));
  }
})();
