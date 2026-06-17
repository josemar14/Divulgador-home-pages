document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // REVELAÇÃO DO SITE
    // ==========================
    document.body.style.opacity = "1";

    // ==========================
    // ELEMENTOS ANIMADOS
    // ==========================
    const elements = document.querySelectorAll(`
        .card,
        .doctor-card,
        .testimonial,
        .hours li,
        .social-icons a,
        .about,
        .hero-content
    `);

    elements.forEach(el => {
        el.classList.add("fade");
    });

    // ==========================
    // INTERSECTION OBSERVER
    // ==========================
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
    // SCROLL SUAVE
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
            Paciente ${index + 1}
        `;

        card.prepend(badge);

    });

    // ==========================
    // EFEITO 3D NOS CARDS
    // ==========================
    const cards = document.querySelectorAll(".card, .doctor-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 8;
            const rotateX = ((y / rect.height) - 0.5) * -8;

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-5px)
            `;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    // ==========================
    // DESTAQUE DO WHATSAPP
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
    // ANO AUTOMÁTICO
    // ==========================
    const footer = document.querySelector("footer p");

    if(footer){

        footer.innerHTML =
            `© ${new Date().getFullYear()} Clínica Saúde Integral - Todos os direitos reservados.`;

    }

    console.log("Clínica Premium carregada com sucesso.");

});
