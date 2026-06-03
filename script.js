// ===============================
// DARK / LIGHT MODE
// ===============================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        themeBtn.innerHTML = "☀️";
        localStorage.setItem("theme","light");
    }
    else{
        themeBtn.innerHTML = "🌙";
        localStorage.setItem("theme","dark");
    }

});

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light");
    themeBtn.innerHTML = "☀️";

}

// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Message Sent Successfully!");

    contactForm.reset();

});

// ===============================
// SMOOTH ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

// ===============================
// PROJECT CARD ANIMATION
// ===============================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform =
        "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "translateY(0) scale(1)";

    });

});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
".skill-card,.project-card,.stat"
);

function revealOnScroll(){

    revealElements.forEach(element=>{

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            element.style.opacity = "1";
            element.style.transform =
            "translateY(0)";

        }

    });

}

revealElements.forEach(element=>{

    element.style.opacity = "0";
    element.style.transform =
    "translateY(40px)";
    element.style.transition =
    "all 0.8s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

// ===============================
// TYPING EFFECT
// ===============================

const roleText =
"Web Developer";

const roleElement =
document.querySelector(".hero-content h2");

let index = 0;

function typeEffect(){

    if(index < roleText.length){

        roleElement.textContent +=
        roleText.charAt(index);

        index++;

        setTimeout(
        typeEffect,
        100
        );

    }

}

if(roleElement){

    roleElement.textContent = "";

    typeEffect();

}

// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.fontSize = "20px";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
topBtn.style.background = "#3b82f6";
topBtn.style.color = "#fff";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }
    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ===============================
// CURRENT YEAR IN FOOTER
// ===============================

const footer =
document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    `© ${new Date().getFullYear()} Narayani | Web Developer Portfolio`;

}
