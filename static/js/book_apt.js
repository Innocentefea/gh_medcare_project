// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Get a reference to the form
  var form = document.querySelector('form');

  // Add event listener for form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Validate the form fields
    if (validateForm()) {
      // If the form is valid, proceed with form submission
      submitForm();
    }
  });

  // Function to validate the form fields
  function validateForm() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var addressInput = document.getElementById('address');
    var sexInput = document.getElementById('sex');
    var phoneInput = document.getElementById('phone');
    var hospitalInput = document.getElementById('hospital');
    var appointmentTypeInput = document.getElementById('appointment-type');
    var preferredTimeInput = document.getElementById('preferred-time');
    var preferredDateInput = document.getElementById('preferred-date');

    // Reset any previous validation errors
    resetValidationErrors();

    // Validate name
    if (nameInput.value.trim() === '') {
      displayValidationError(nameInput, 'Please enter your name');
      return false;
    }

    // Validate email
    if (emailInput.value.trim() === '') {
      displayValidationError(emailInput, 'Please enter your email');
      return false;
    }

    // Validate address
    if (addressInput.value.trim() === '') {
      displayValidationError(addressInput, 'Please enter your home address');
      return false;
    }

    // Validate sex
    if (sexInput.value === '') {
      displayValidationError(sexInput, 'Please select your sex');
      return false;
    }

    // Validate phone number
    if (phoneInput.value.trim() === '') {
      displayValidationError(phoneInput, 'Please enter your phone number');
      return false;
    }

    // Validate hospital selection
    if (hospitalInput.value === '') {
      displayValidationError(hospitalInput, 'Please select a hospital');
      return false;
    }

    // Validate appointment type selection
    if (appointmentTypeInput.value === '') {
      displayValidationError(appointmentTypeInput, 'Please select an appointment type');
      return false;
    }

    // Validate preferred time selection
    if (preferredTimeInput.value === '') {
      displayValidationError(preferredTimeInput, 'Please select a preferred time');
      return false;
    }

    // Validate preferred date selection
    if (preferredDateInput.value === '') {
      displayValidationError(preferredDateInput, 'Please select a preferred date');
      return false;
    }

    return true; // Form is valid
  }

  // Function to display a validation error message
  function displayValidationError(inputElement, errorMessage) {
    var errorContainer = document.createElement('div');
    errorContainer.classList.add('error-message');
    errorContainer.textContent = errorMessage;

    inputElement.classList.add('invalid');
    inputElement.parentNode.appendChild(errorContainer);
  }

  // Function to reset any validation errors
  function resetValidationErrors() {
    var errorMessages = document.getElementsByClassName('error-message');
    var invalidInputs = document.getElementsByClassName('invalid');

    while (errorMessages.length > 0) {
      errorMessages[0].parentNode.removeChild(errorMessages[0]);
    }

    while (invalidInputs.length > 0) {
      invalidInputs[0].classList.remove('invalid');
    }
  }

  // Function to handle form submission
  function submitForm() {
    // You can customize this function to perform the desired action upon form submission
    // For example, you can send the form data to a server using an AJAX request,
    // display a confirmation message, redirect the user to another page, etc.

    // Assuming a successful form submission, display a confirmation message
    var confirmationMessage = document.createElement('p');
    confirmationMessage.textContent = 'Appointment booked successfully!';
    confirmationMessage.classList.add('submission-message');
    form.appendChild(confirmationMessage);

    // Reset the form after submission
    form.reset();
  }
});