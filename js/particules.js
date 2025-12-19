//Particules
particlesJS("particles-js", {
    particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: ["#a855f7", "#38bdf8", "#f5c542"] },
        shape: { type: "circle" },
        opacity: { value: 0.7 },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.2, width: 1 },
        move: { enable: true, speed: 2, direction: "none", out_mode: "bounce" }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            repulse: { distance: 100 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});