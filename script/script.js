document.getElementById("menu-btn").addEventListener("click", 
    function() {
    var nav = document.querySelector("#nav-links");
    nav.classList.toggle("show");
}
);

document.getElementById("theme-toggle").addEventListener("click", function() {
    var body = document.body;
    body.classList.toggle("dark-mode");
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

});

const projects = [
    {
        title: "Portfolio site",
        img: "/images/portfolio.jpg",
        link: "#",
        cat: "web"
    },

    {
        title: "Portfolio site 02",
        img: "/images/portfolio2.jpg",
        link: "#",
        cat: "web"
    },

    {
        title: "Mobile App",
        img: "/images/app.jpg",
        link: "#",
        cat: "app"
    },

    {
        title: "Mobile App 02",
        img: "/images/app2.jpg",
        link: "#",
        cat: "app"
    },

    {
        title: "Mobile App 03",
        img: "/images/app3.jpg",
        link: "#",
        cat: "app"
    }

]

const gallery = document.getElementById("project-gallery");
function displayProjects(filter) {
    gallery.innerHTML = "";
    projects.filter(p => filter === "all" || p.cat === filter).forEach(p => {
        let card = document.createElement("div");
        card.className = "card"  ;
        card.innerHTML = `<img src="${p.img}" width="100vh" alt="${p.title}"><h3>${p.title}</h3>`;
        gallery.appendChild(card);
    })
    localStorage.setItem("lastCategory", filter)
}

document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => displayProjects(btn.dataset.cat));
})
displayProjects(localStorage.getItem("lastCategory") || "all");

const testimonials = [
    "Peter Grant 👤 : Great work!",
    "Jack Ayoose 👤 : Amazing developer",
    "Rob Bob 👤 : Highly recommend!",
    "John Doe 👤 : Professional and efficient.",
    "Steph Reed 👤 : Fantastic experience!",
    "Mike Ben 👤 : Very satisfied with the results.",
    "Chris Millan 👤 : Exceptional quality"
]

let index = 0;
const testP = document.getElementById("testimonial");
function showTestimonial(i) {
    testP.textContent = testimonials[i];
}

showTestimonial(index)

document.getElementById("next-test").addEventListener("click", () => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
})

document.getElementById("prev-test").addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
})

setInterval(() => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
}, 5000);

document.getElementById("contact-form").addEventListener("submit", e => {
    let valid = true;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    document.getElementById("name-error").textContent = name ? "" : "Name is required";
    document.getElementById("email-error").textContent = email.includes("@") ? "" : "Invalid email";
    document.getElementById("message-error").textContent = message ? "" : "Message cannot be empty";

    if (!name || !email.includes("@") || !message) {
        valid = false;
    }
    if (!valid) {
        e.preventDefault();
    }
})