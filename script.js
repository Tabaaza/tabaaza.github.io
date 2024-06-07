function generateLink() {
  const countryCode = document.getElementById('country-code').value;
  let phone = document.getElementById('phone').value;
  const message = document.getElementById('messageMain').value;
  phone = phone.replace(/\D/g, '');
  const whatsappLink = `https://wa.me/${countryCode}${phone}?text=${encodeURIComponent(message)}`;
  window.open(whatsappLink, '_blank');
}

document.addEventListener("DOMContentLoaded", function() {
  // Get the button element
  var submitButton = document.getElementById("submitButton");

  // Disable the button
  submitButton.disabled = true;

  // Enable the button after 5 seconds (5000 milliseconds)
  setTimeout(function() {
    submitButton.disabled = false;
  }, 5000);
});