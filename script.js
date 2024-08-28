document.querySelector('.order-now').addEventListener('click', function () {
    alert('Order functionality coming soon!');
});
document.querySelector('.order-process').addEventListener('click', function() {
        alert('Order Process button clicked!');
    });

document.querySelector('.delivery-type').addEventListener('click', function() {
        alert('Thank you for choosing us!');
    });

// Select all elements with the class 'add-to-cart'
const buttons = document.querySelectorAll('.add-to-cart');

// Loop through each button and attach the event listener
buttons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Added to cart successfully!');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const seeMoreButton = document.getElementById('see-more');
    const hiddenProducts = document.querySelectorAll('.hidden-product');

    seeMoreButton.addEventListener("click", () => {
        hiddenProducts.forEach(product => {
            if (product.style.display === "none" || product.style.display === "") {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });

        if (seeMoreButton.textContent === 'See More Products') {
            seeMoreButton.textContent = 'See Less Products';
        } else {
            seeMoreButton.textContent = 'See More Products';
        }
    });

    // Initially hide the hidden products
    hiddenProducts.forEach(product => product.style.display = "none");
});


document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.querySelector('.testimonial-nav.prev');
    const nextButton = document.querySelector('.testimonial-nav.next');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.classList.add('active');
            } else {
                testimonial.classList.remove('active');
            }
        });
    }

    prevButton.addEventListener('click', function() {
        currentTestimonial--;
        if (currentTestimonial < 0) {
            currentTestimonial = testimonials.length - 1;
        }
        showTestimonial(currentTestimonial);
    });

    nextButton.addEventListener('click', function() {
        currentTestimonial++;
        if (currentTestimonial >= testimonials.length) {
            currentTestimonial = 0;
        }
        showTestimonial(currentTestimonial);
    });

    // Initialize the first testimonial
    showTestimonial(currentTestimonial);
});

document.querySelectorAll('.feature').forEach(feature => {
    feature.addEventListener('click', () => {
        const details = feature.querySelector('.details');
        if (details.classList.contains('hidden')) {
            details.classList.remove('hidden');
            details.style.opacity = '1';
        } else {
            details.classList.add('hidden');
            details.style.opacity = '0';
        }
    });

    feature.addEventListener('mouseover', () => {
        feature.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.2)';
        feature.style.transform = 'scale(1.05)';
    });

    feature.addEventListener('mouseout', () => {
        feature.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
        feature.style.transform = 'scale(1)';
    });
});

// Newsletter form submission
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.querySelector('input').value;
    alert(`Subscribed with: ${email}`);
    // Here you would normally send the email to your server
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.querySelector('input').value;
    alert(`Contact request from: ${email}`);
    // Here you would normally send the email to your server
});
