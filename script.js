document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "&#9776;";
    document.querySelector("header").prepend(menuToggle);
    const nav = document.querySelector("nav ul");
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Smooth Scroll Effect
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Scroll Fade-in Effect
    const sections = document.querySelectorAll("section");
    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    };
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();

    // Back to Top Button
    const backToTop = document.createElement("button");
    backToTop.classList.add("back-to-top");
    backToTop.innerHTML = "&#8679;";
    document.body.appendChild(backToTop);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Typing Effect
    const typingText = document.querySelector(".typing-text");
    if (typingText) {
        const words = ["Welcome to Goodness Schools!", "Where Excellence is Our Priority!", "Shaping Future Leaders!"];
        let wordIndex = 0, charIndex = 0;
        const typeEffect = () => {
            if (charIndex < words[wordIndex].length) {
                typingText.textContent += words[wordIndex][charIndex];
                charIndex++;
                setTimeout(typeEffect, 100);
            } else {
                setTimeout(() => {
                    typingText.textContent = "";
                    charIndex = 0;
                    wordIndex = (wordIndex + 1) % words.length;
                    typeEffect();
                }, 2000);
            }
        };
        typeEffect();
    }

    // Dark Mode Toggle
    const darkModeToggle = document.createElement("button");
    darkModeToggle.classList.add("dark-mode-toggle");
    darkModeToggle.innerHTML = "🌙";
    document.body.appendChild(darkModeToggle);
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".testimonial-slide");
    const totalSlides = slides.length;

    // Function to show a slide
    const showSlide = (index) => {
        slides.forEach(slide => slide.style.display = "none");
        slides[index].style.display = "block";
    };

    // Show the first slide
    showSlide(currentSlide);

    // Auto-Slide every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 5000);

    // Manual Navigation
    document.querySelector(".prev-btn").addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    document.querySelector(".next-btn").addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const eventsContainer = document.querySelector(".events-container");

    if (eventsContainer) {
        let scrollAmount = 0;
        const scrollStep = 2; // Speed of scrolling
        const scrollInterval = 50; // Time between scroll steps (lower is faster)
        let autoScroll;

        function startScrolling() {
            autoScroll = setInterval(() => {
                if (scrollAmount < eventsContainer.scrollWidth - eventsContainer.clientWidth) {
                    scrollAmount += scrollStep;
                    eventsContainer.scrollLeft += scrollStep;
                } else {
                    scrollAmount = 0;
                    eventsContainer.scrollLeft = 0; // Reset scroll position
                }
            }, scrollInterval);
        }

        function stopScrolling() {
            clearInterval(autoScroll);
        }

        // Start auto-scroll when page loads
        startScrolling();

        // Pause scrolling when user interacts with the section
        eventsContainer.addEventListener("mouseenter", stopScrolling);
        eventsContainer.addEventListener("mouseleave", startScrolling);
    }
});
