// Typed Text
var typed = new Typed('#text', { 
    strings: ['Graphic Designer.', 'Web Developer.', 'Data Engineer.'], 
    typeSpeed: 100, 
    backSpeed: 100, 
    loop: true 
});

// Show skill
let skillBtn = document.querySelector('.skill_btn'); 
let skillDet = document.querySelector('.about_bottom'); 

skillBtn.addEventListener('click', () => {
    skillDet.classList.toggle('show_skills');
});

// Sticky nav 
let nav = document.querySelector('nav'); 
window.addEventListener('scroll', () => { 
    if (window.scrollY > 100) { 
        nav.classList.add('sticky_nav'); 
    } else { 
        nav.classList.remove('sticky_nav'); 
    } 
});

// Filters
var mixer = mixitup('.portfolio_images');

// Portfolio 
var swiper = new Swiper('.blogSwiper', { 
    slidesPerView: 3, 
    spaceBetween: 30, 
    loop: true, 
    autoplay: true, 
    breakpoints: { 
        1200: { 
            slidesPerView: 2, 
            spaceBetween: 10, 
        }, 
        900: { 
            slidesPerView: 2, 
            spaceBetween: 10, 
        },      
        500: { 
            slidesPerView: 2, 
            spaceBetween: 10, 
        }, 
    }, 
});

// Show nav
let bar = document.querySelector('.bars'); 
let menu = document.querySelector('.menu'); 

bar.addEventListener('click', () => {
    menu.classList.toggle('show_nav');
});

//Form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contact");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const message = document.querySelector("#notes").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        return;
      }

      alert("Thank you for reaching out, " + name + "! Your message has been sent.");
      
      form.reset();
    });
  });
