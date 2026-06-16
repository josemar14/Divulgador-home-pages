// ==========================================
// BURGER HOUSE - script.js
// Lanchonete Premium
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // ANIMAÇÃO AO ROLAR
    // ==========================
    const elements = document.querySelectorAll(`
        .menu-card,
        .testimonial,
        .gallery-grid img,
        .hours li,
        .social-icons a,
        .promo-content,
        .about
    `);

    elements.forEach(el => {
        el.classList.add("fade");
    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");
                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach(el => {
        observer.observe(el);
    });


    // ==========================
    // MENU SUAVE
    // ==========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            const href = this.getAttribute("href");

            if(href.length > 1){

                e.preventDefault();

                const target = document.querySelector(href);

                if(target){

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    // ==========================
    // CONTADOR DE AVALIAÇÕES
    // ==========================
    const testimonials = document.querySelectorAll(".testimonial");

    testimonials.forEach((card, index) => {

        const badge = document.createElement("div");

        badge.className = "review-badge";

        badge.innerHTML = `
            <i class="fa-solid fa-star"></i>
            Cliente ${index + 1}
        `;

        card.prepend(badge);

    });


    // ==========================
    // EFEITO NOS CARDS
    // ==========================
    const cards = document.querySelectorAll(".menu-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 10;
            const rotateX = ((y / rect.height) - 0.5) * -10;

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
            `;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    // ==========================
    // BOTÃO WHATSAPP
    // ==========================
    const whatsapp = document.querySelector(".whatsapp-float");

    if(whatsapp){

        setInterval(() => {

            whatsapp.animate([
                { transform: "scale(1)" },
                { transform: "scale(1.12)" },
                { transform: "scale(1)" }
            ], {
                duration: 900,
                iterations: 1
            });

        }, 7000);

    }


    // ==========================
    // REVELAÇÃO DO BODY
    // ==========================
    document.body.style.opacity = "1";

});


// ==========================
// ANO AUTOMÁTICO
// ==========================
const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =
        `© ${new Date().getFullYear()} Burger House - Todos os direitos reservados.`;

}

console.log("Burger House carregado com sucesso 🚀");
