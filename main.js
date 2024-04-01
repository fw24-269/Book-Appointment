let btn = document.querySelector("form button");
let fullName = document.querySelector(".fullName input");
let email = document.querySelector(".email input");
let mobile = document.querySelector(".mobile input");

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  
  let name = fullName.value;

  let mail = email.value;

  let phone = mobile.value;

  let formDataString = JSON.stringify({ name, mail, phone});

  localStorage.setItem("data", formDataString);
});
