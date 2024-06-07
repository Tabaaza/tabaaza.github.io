 // Predefined lengths for each country's phone number (excluding the country code)
 const phoneLengths = {
  '962': 9, // Jordan
  '970': 9, // Palestine
  '20': 10, // Egypt
  '966': 9, // Saudi Arabia
  '964': 10 // Iraq
};

function generateLink() {
  const countryCode = document.getElementById('country-code').value;
  let phone = document.getElementById('phone').value;
  const message = document.getElementById('messageMain').value;

  // Alert if message is empty
  if (phone.trim() === "") {
      alert("Please add a message.");
      return;
  }

  // Remove non-digit characters from phone number
  phone = phone.replace(/\D/g, '');

  // Get the required phone number length for the selected country
  const requiredLength = phoneLengths[countryCode];

  // Check if phone number is too long and remove extra digits from the beginning
  if (phone.length > requiredLength) {
      phone = phone.slice(phone.length - requiredLength);
  }

  // Check if phone number is too short
  if (phone.length < requiredLength) {
      alert(`Please enter a valid phone number with ${requiredLength} digits for the selected country.`);
      return;
  }

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