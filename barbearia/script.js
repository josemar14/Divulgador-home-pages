// =========================
// BARBEARIA ELITE
// script.js
// =========================

// Elementos que terão animação ao aparecer
const animatedElements = document.querySelectorAll(
    ".card, .gallery-grid img, .testimonial, .hours li, .social-icons a"
);

// Adiciona classe fade
animatedElements.forEach(el => {
    el.classList.add("fade");
});

// Observer para animação ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });
},{
    threshold:0.15
});

animatedElements.forEach(el => {
    observer.observe(el);
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){
            target.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });
        }

    });

});

// Efeito leve ao carregar página
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Ano automático no rodapé (opcional)
const footer = document.querySelector("footer p");

if(footer){
    const year = new Date().getFullYear();

    footer.innerHTML =
        `© ${year} Barbearia Elite - Todos os direitos reservados.`;
}

// Pequena vibração visual no botão WhatsApp
const whatsappButton = document.querySelector(".whatsapp-float");

if(whatsappButton){

    setInterval(() => {

        whatsappButton.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.08)" },
            { transform: "scale(1)" }
        ], {
            duration: 800,
            iterations: 1
        });

    }, 8000);

}

console.log("Barbearia Elite carregada com sucesso.");
