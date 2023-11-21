
document.getElementById("form").addEventListener("submit", submitForm);

function submitForm() {
    e.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const kietMail = document.getElementById("kietemail");
    const library = document.getElementById("libraryID");
    const phone = document.getElementById("phone");
    const domain = document.getElementById("domain");
    const gender = document.getElementById("gender");
    const desk = document.getElementById("desk");
    const modePayment = document.getElementById("payment");
    console.log(name, email, domain)
}