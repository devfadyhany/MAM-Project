let contactForm = document.querySelector("#contact-form");

let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");

let nameError = document.querySelector("#name-error");
let emailError = document.querySelector("#email-error");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nameInput.value == "") {
    nameInput.classList.add("error");
    nameError.style.display = "inline";
  }

  if (emailInput.value == "") {
    emailInput.classList.add("error");
    emailError.style.display = "inline";
  }

  if (emailInput.value != "" && nameInput.value != "") {
    alert(
      `Name: ${nameInput.value}\nEmail: ${emailInput.value}\nyou have subscribed successfully!`
    );
  }
});

nameInput.addEventListener("keydown", (e) => {
  nameInput.classList.remove("error");
  nameError.style.display = "none";
});

emailInput.addEventListener("keydown", (e) => {
  emailInput.classList.remove("error");
  emailError.style.display = "none";
});
