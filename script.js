function generateLink() {
  const countryCode = document.getElementById('country-code').value;
  let phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Remove any spaces or non-numeric characters from phone number
  phone = phone.replace(/\D/g, '');

  const whatsappLink = `https://wa.me/${countryCode}${phone}?text=${encodeURIComponent(message)}`;
  
  window.open(whatsappLink, '_blank');
}
