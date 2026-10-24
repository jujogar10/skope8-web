// skope8 — comportamiento del sitio

// Datos de contacto. whatsapp: número con indicativo de país, sin "+" ni espacios.
const CONTACT = {
  whatsapp: "573164437124",
  email: "juan.garcia@skope8.com",
  whatsappText: "Hola Juan, quiero contarte un proceso de mi empresa en 30 minutos.",
  emailSubject: "Quiero contarte un proceso en 30 minutos",
};

document.documentElement.classList.add("js");

// Enlaces de contacto: [data-wa] y [data-mail], con texto opcional en data-wa-text
document.querySelectorAll("[data-wa]").forEach((el) => {
  const text = el.dataset.waText || CONTACT.whatsappText;
  el.href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
  el.target = "_blank";
  el.rel = "noopener";
});
document.querySelectorAll("[data-mail]").forEach((el) => {
  el.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(CONTACT.emailSubject)}`;
});
document.querySelectorAll("[data-mail-text]").forEach((el) => { el.textContent = CONTACT.email; });
document.querySelectorAll("[data-wa-display]").forEach((el) => {
  const n = CONTACT.whatsapp;
  el.textContent = n.startsWith("57") ? `+57 ${n.slice(2, 5)} ${n.slice(5, 8)} ${n.slice(8)}` : `+${n}`;
});

// Menú móvil
const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
if (toggle) {
  const setOpen = (open) => {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };
  toggle.addEventListener("click", () => setOpen(!document.body.classList.contains("nav-open")));
  document.querySelectorAll(".nav a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
}

// Borde del header al hacer scroll
const onScroll = () => header && header.classList.toggle("is-scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Aparición al hacer scroll
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-in"));
}

// Año del footer
document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
