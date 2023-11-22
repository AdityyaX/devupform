
document.getElementById("form").addEventListener("submit", submitForm);

console.log("from script")

function submitForm(e) {
    console.log("from function")
    e.preventDefault();
    const name = document.getElementById("name").value;
    const personal_email = document.getElementById("personal_email").value;
    const kiet_email = document.getElementById("kiet_email").value;
    const library_id = document.getElementById("library_id").value;
    const phone = document.getElementById("phone").value;
    const domain = document.getElementById("domain").value;
    const gender = document.getElementById("gender").value;
    const desk = document.getElementById("desk").value;
    const mode_of_payment = document.getElementById("mode_of_payment").value;

    fetch("http://34.131.78.227:8000/recruitment/submit", {
    method: "POST",
    body: JSON.stringify({
    name, personal_email, kiet_email, library_id, phone, domain, gender, desk, mode_of_payment
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => {
    console.log(response);
    window.location = "/success.html"
  })
  .catch((error) => {
    console.log(error);
    window.location = "/error.html"
  });

}