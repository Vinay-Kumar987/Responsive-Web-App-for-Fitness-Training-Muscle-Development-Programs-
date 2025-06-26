

// fitness.js

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


// Function to handle smooth scrolling
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add event listeners to the navigation links
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior
        const target = this.getAttribute('href'); // Get the target section ID
        if (target.startsWith('#')) {
            smoothScroll(target); // Smooth scroll to the target section
        } else {
            window.location.href = target; // Navigate to external links
        }
    });
});

    // const navMenu = document.getElementById('nav-manu');
    // const navToggle = document.getElementById('nav-toggle');
    // const navClose = document.getElementById('nav-close');

    // if (navToggle) {
    //     navToggle.addEventListener('click', () => {
    //         navMenu.classList.add('show-menu');
    //     })
    // }

    // if (navClose) {
    //     navClose.addEventListener('click', () => {
    //         navMenu.classList.remove('show-menu');
    //     })
    // }

    document.addEventListener('DOMContentLoaded', function () {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');
        const navLinks = document.querySelectorAll('.nav__link');
    
        // Show menu
        if (navToggle) {
            navToggle.addEventListener('click', function () {
                navMenu.classList.add('show-menu');
            });
        }
    
        // Close menu
        if (navClose) {
            navClose.addEventListener('click', function () {
                navMenu.classList.remove('show-menu');
            });
        }
    
        // Close menu when link is clicked
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('show-menu');
            });
        });
    });
    


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

// document.addEventListener('DOMContentLoaded', function () {
//     const navMenu = document.getElementById('nav-menu');
//     const navToggle = document.getElementById('nav-toggle');
//     const navClose = document.getElementById('nav-close');
//     const navLinks = document.querySelectorAll('.nav__link');

//     // Show menu
//     if (navToggle) {
//         navToggle.addEventListener('click', function () {
//             navMenu.classList.add('show-menu');
//         });
//     }

//     // Close menu
//     if (navClose) {
//         navClose.addEventListener('click', function () {
//             navMenu.classList.remove('show-menu');
//         });
//     }

//     // Close menu when link is clicked
//     navLinks.forEach(function (link) {
//         link.addEventListener('click', function () {
//             navMenu.classList.remove('show-menu');
//         });
//     });

//     // Add active class to current section link
//     const sections = document.querySelectorAll('section[id]');
//     const scrollActive = ()=>{
//     // function scrollActive() {
//         const scrollY = window.pageYOffset

//         sections.forEach(current => {
//             const sectionHeight = current.offsetHeight;
//             const sectionTop = current.offsetTop - 50;
//             sectionId = current.getAttribute('id');

//             if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//                 document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.add('active-link');
//             } else {
//                 document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.remove('active-link');
//             }
//         });
//     }

//     window.addEventListener('scroll', scrollActive);
// });


window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active-link');
        }
    });
});


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/

document.getElementById('calculate-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input values
    let heightCm = document.getElementById('calculate-cm').value;
    let weightKg = document.getElementById('calculate-kg').value;
    let message = document.getElementById('calculate-message');

    // Convert height to meters
    let heightM = heightCm / 100;

    // Check for valid input
    if (heightCm <= 0 || weightKg <= 0) {
        message.textContent = 'Please enter positive values for height and weight.';
        return;
    }

    // Calculate BMI
    let bmi = weightKg / (heightM * heightM);

    // Determine BMI category
    if (bmi < 18.5) {
        message.textContent = `Your BMI is ${bmi.toFixed(2)}. You are underweight.🙃`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message.textContent = `Your BMI is ${bmi.toFixed(2)}. You have a normal weight. `;
    } else if (bmi >= 25 && bmi < 29.9) {
        message.textContent = `Your BMI is ${bmi.toFixed(2)}. You are overweight.`;
    } else {
        message.textContent = `Your BMI is ${bmi.toFixed(2)}. You are obese.`;
    }
});



/*=============== EMAIL JS ===============*/