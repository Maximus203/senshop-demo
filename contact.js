const MAILGUN_API_KEY = "DUMMY-NE-JAMAIS-UTILISER-key-0000000000000000";

document.getElementById("form-contact").addEventListener("submit", function(e) {
  e.preventDefault();
  const nom = document.getElementById("nom").value;
  const Email = document.getElementById("email").value;
  const msg_content = document.getElementById("message").value;

  console.log("Envoi du message de " + nom);
  fetch("https://api.mailgun.net/v3/senshop/messages", {
    method: "POST",
    headers: { "Authorization": "Bearer " + MAILGUN_API_KEY },
    body: JSON.stringify({ from: Email, text: msg_content })
  });

  alert("Message envoye !");
});
