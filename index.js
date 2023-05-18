function showTerms() {
  let overlay = document.getElementById("termsOverlay");
  let popup = document.getElementById("termsPopup");
  overlay.style.display = "block";
  popup.style.display = "block";
}

function closeTerms() {
  let overlay = document.getElementById("termsOverlay");
  let popup = document.getElementById("termsPopup");
  overlay.style.display = "none";
  popup.style.display = "none";
}

function showSuccessMessage() {
  let successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";
}

function hideSuccessMessage() {
  let successMessage = document.getElementById("successMessage");
  successMessage.style.display = "none";
}

function toggleOtherSpecify() {
  let otherSpecifyDiv = document.getElementById("otherSpecifyDiv");
  let howDidYouHear = document.getElementById("howDidYouHear").value;
  
  if (howDidYouHear === "other") {
    otherSpecifyDiv.style.display = "block";
  } else {
    otherSpecifyDiv.style.display = "none";
  }
}

function validateForm() {
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let email = document.getElementById("email").value.trim();
  let promoCode = document.getElementById("promoCode").value.trim();
  let howDidYouHear = document.getElementById("howDidYouHear").value;
  let otherSpecify = document.getElementById("otherSpecify").value.trim();
  let termsAccepted = document.getElementById("termsAccepted").checked;

  let isValid = true;
  let errorMessage = "";

  if (firstName === "") {
    isValid = false;
    errorMessage += "- Please enter your First Name.\n";
  }

  if (lastName === "") {
    isValid = false;
    errorMessage += "- Please enter your Last Name.\n";
  }

  if (phone === "") {
    isValid = false;
    errorMessage += "- Please enter your Phone number.\n";
  } else if (!/^\d+$/.test(phone)) {
    isValid = false;
    errorMessage += "- Phone number should contain digits only.\n";
  }

  if (email === "") {
    isValid = false;
    errorMessage += "- Please enter your Email.\n";
  }

  if (promoCode === "" && howDidYouHear === "") {
    isValid = false;
    errorMessage += "- Please provide either a promo code or specify how you heard about us.\n";
  }

  if (promoCode !== "" && !/^[a-zA-Z0-9]+$/.test(promoCode)) {
    isValid = false;
    errorMessage += "- Please enter a valid promo code (alphanumeric characters only).\n";
  }

  if (howDidYouHear === "other" && otherSpecify === "") {
    isValid = false;
    errorMessage += "- Please specify how you heard about us.\n";
  }

  if (!termsAccepted) {
    isValid = false;
    errorMessage += "- Please accept the terms and conditions.\n";
  }

  if (isValid) {
    showSuccessMessage();
    return true;
  } else {
    hideSuccessMessage();
    alert("Please correct the following errors:\n" + errorMessage);
    return false;
  }
}

document.getElementById("howDidYouHear").addEventListener("change", toggleOtherSpecify);
