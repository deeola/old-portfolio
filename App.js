//CHANGE NAVBAR BACKGROUND COLOR

const myNav = document.getElementById("myNav");
window.onscroll = () => {
  "use strict";
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};

//FORM SUBMIT AND VALIDATION

const form = document.getElementById("my-form");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputSubject = document.getElementById("subject");
const inputMessage = document.getElementById("message");

function inputsCheck() {
  //collect Values inputed
  const NameValue = inputName.value.trim(),
    subjectValue = inputSubject.value.trim(),
    emailValue = inputEmail.value.trim(),
    messageValue = inputMessage.value.trim();

  console.log(NameValue, subjectValue, emailValue, messageValue);

  //firstName
  if (NameValue === "") {
    showError(inputName, "Name cannot be empty");
  } else {
    showSuccess(inputName);
  }

  //lastName
  if (subjectValue === "") {
    showError(inputSubject, "subject cannot be empty");
  } else {
    showSuccess(inputSubject);
  }

  //Email
  if (emailValue === "") {
    showError(inputEmail, "email cannot be empty");
  } else if (!isEmail(emailValue)) {
    showError(inputEmail, "Looks like this is not an email");
  } else {
    showSuccess(inputEmail);
  }

  //password
  if (messageValue === "") {
    showError(inputMessage, "Message cannot be empty");
  } else {
    showSuccess(inputMessage);
  }
}

//SHOW FUNCTION ERROR

function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

//SHOW SUCCESS FUNCTION

function showSuccess(input) {
  const formControl = input.parentElement;

  //add success class

  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

//GET FORM CONTROL

const nameParent = inputName.parentElement;
const subjectParent = inputSubject.parentElement;
const emailParent = inputEmail.parentElement;
const messageParent = inputMessage.parentElement;

form.addEventListener("submit", (e) => {
  inputsCheck();
  e.preventDefault();

  if (
    nameParent.classList.contains("success") &&
    subjectParent.classList.contains("success") &&
    emailParent.classList.contains("success") &&
    messageParent.classList.contains("success")
  ) {
    //XHR CALL
    const status = document.getElementById("success-message");
    const data = new FormData(e.target);

    //FETCH

    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        status.innerHTML =
          "Your message has been sent. I'll get back to you as soon as possible.Thanks!";
  
        status.style.display = "block";
        setTimeout(() => {
          status.style.display = "none";
        }, 2000);
  
        form.reset();

        //SET BORDER TO BLACK

        nameParent.className = "form-control";
        subjectParent.className = "form-control";
        emailParent.className = "form-control";
        messageParent.className = "form-control";
      })
      .catch((error) => {
        status.innerHTML = "Oops! There was a problem submitting your form";
        status.style.display = "block";
        
      });
  }

  

  
});

//HAMBURGER

const hamopen = document.getElementById("open-menu");
const hamclose = document.getElementById("close-menu");
const navUl = document.getElementById("nav-ul");

//Open Navigation bar
hamopen.addEventListener("click", () => {
  navUl.style.display = "flex";
  //SHOW CLOSE ICON AND HIDE HAMBURGER
  hamclose.style.display = "block";
  hamopen.style.display = "none";
});

//Close Navigation bar
hamclose.addEventListener("click", () => {
  navUl.style.display = "none";

  //HIDE CLOSE ICON AND SHOW HAMBURGER
  hamclose.style.display = "none";
  hamopen.style.display = " block";
});

//CLOSE NAVBAR ON ICON CLicks

const navLi = navUl.children;

const navArray = Array.from(navLi);

navArray.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

//Function to close menu icon

const closeMenu = () => {
  navUl.style.display = "none";
  hamclose.style.display = "none";
  hamopen.style.display = "block";
};
