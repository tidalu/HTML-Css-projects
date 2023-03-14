const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear


// Get the form element
const form = document.querySelector('.contact-form');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Validate the form data
  if (formData.get('name') === '' || formData.get('email') === '') {
    // Display an error message
    alert('Please enter your name and email.');

    // Stop the form submission
    return;
  }

  // Send the form data to the server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // Display a success message to the user
      alert('Thank you for your message! We will get back to you soon.');

      // Reset the form
      form.reset();
    }
  };
  xhr.send(new URLSearchParams(formData).toString());
});
