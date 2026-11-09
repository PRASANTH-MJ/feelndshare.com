// Replace with the real WhatsApp number (country code, no + or spaces)
const WHATSAPP_NUMBER = "919447828763";

document.getElementById("yr").textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.querySelector(".menu-btn");
const links = document.querySelector(".links");
menuBtn.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));

// Booking form -> WhatsApp
document.getElementById("book-form").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const text =
    `Hello Feel N Share, I'd like to book a session.\n\n` +
    `Name: ${f.get("name")}\nPhone: ${f.get("phone")}\n` +
    `Service: ${f.get("service")}\nMode: ${f.get("mode")}` +
    (f.get("msg") ? `\nNote: ${f.get("msg")}` : "");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
});

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".card, .steps li, .price, details, .two-col > div, .about-grid > div, .doctor-grid > div").forEach(el => {
  el.classList.add("reveal");
  io.observe(el);
});

// Nav shadow on scroll
const nav = document.querySelector(".nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });
