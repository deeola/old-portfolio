//CHANGE NAVBAR BACKGROUND COLOR

const myNav = document.getElementById('myNav');
window.onscroll = () => { 
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};

//FORM SUBMIT

const form = document.getElementById("my-form");



    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("success-message");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Your message has been sent. I'll get back to you as soon as possible.Thanks!";

    status.style.display = 'block';
    setTimeout(() => {
        status.style.display = 'none';
    }, 2000)
    
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
    status.style.display = 'block';
    console.log(error)
  });
}
form.addEventListener("submit", handleSubmit)