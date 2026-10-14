
/* Check the contact form when someone submits it */

document.getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        let result = document.getElementById("formMessage");

        if (name === "" || email === "" || message === "") {
            result.textContent = "Please fill in all fields.";
        } else {
            result.textContent =
                "Your information looks good! This is a demo form and no message was sent.";
        }

    });
