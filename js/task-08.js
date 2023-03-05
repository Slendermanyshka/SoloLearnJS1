<<<<<<< HEAD
=======
const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {elements:{email, password }} = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};
>>>>>>> 079c391659ad081e8e5607a95995bb03436f54fc
