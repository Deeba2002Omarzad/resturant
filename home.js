let slideIndex = 0;

    function showSlides(index) {
        let slides = document.getElementsByClassName("slides");
        let dots = document.getElementsByClassName("dot");

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active-dot");
        }

        slides[index].classList.add("active");
        dots[index].classList.add("active-dot");
    }

    function currentSlide(index) {
        slideIndex = index;
        showSlides(slideIndex);
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % 3;
        showSlides(slideIndex);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds



//     //// Responsive Menue
    

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navmenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

    


/////// Counting
window.onload = function() {
    const counters = [
        { id: 'counter1', target: 300, speed: 5 },
        { id: 'counter2', target: 200, speed: 5 },
        { id: 'counter3', target: 12, speed: 200 },
        { id: 'counter4', target: 150, speed: 5}
    ];

    function startCounting(counterElement, target, speed) {
        let count = 0;
        const interval = setInterval(function() {
            counterElement.textContent = count;
            count++;
            if (count > target) {
                clearInterval(interval);
            }
        }, speed); // Adjust this value to control speed
    }

    counters.forEach(counter => {
        const counterElement = document.getElementById(counter.id);
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounting(counterElement, counter.target, counter.speed);
                    observer.disconnect(); // Stop observing once started
                }
            });
        }, {
            threshold: 0.1 // Start counting when 10% of the counter is visible
        });

        observer.observe(counterElement);
    });
};


/////// Testimonal 

let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    if (i === index) {
      testimonial.classList.add('active');
    }
  });
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

setInterval(nextTestimonial, 3000); // Change testimonial every 3 seconds