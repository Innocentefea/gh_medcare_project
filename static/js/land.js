document.addEventListener('DOMContentLoaded', function () {
  const imageElement = document.getElementById('gh_medcare');

  // Array of image sources
  const imageSources = ['../static/images/telemedicine.jpg', '../static/images/pop.jpg', '../static/images/telemedicinebook.jpg'];

  // Interval between image changes (in milliseconds)
  const interval = 5000; // Change image every 5 seconds

  // Variable to keep track of the current image index
  let currentIndex = 0;

  // Function to change the image
  function changeImage() {
      // Update the image source
      imageElement.src = imageSources[currentIndex];

      // Increment the index or reset to 0 if it reaches the end
      currentIndex = (currentIndex + 1) % imageSources.length;
  }

  // Call the changeImage function at the specified interval
  setInterval(changeImage, interval);
});
// landing_page.js

// Function to handle smooth scrolling when clicking on navigation links
function smoothScroll(event) {
  event.preventDefault();
  const target = event.target.getAttribute("href");
  document.querySelector(target).scrollIntoView({
    behavior: "smooth"
  });
}

// Add event listeners to navigation links for smooth scrolling
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  link.addEventListener("click", smoothScroll);
});

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  // Retrieve form data
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;
  // Perform any necessary actions with the form data
  // For example, you can send the form data to a server using AJAX
  console.log("Form submitted!");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
}

// Add event listener to form submission
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);