document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("fstl-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    // Replace with your Google Form or Airtable URL
    const googleFormURL = "YOUR_GOOGLE_FORM_URL_HERE";

    fetch(googleFormURL, { method: "POST", body: formData })
      .then(() => {
        alert("Registration submitted successfully. FSTL will contact you shortly.");
        form.reset();
      })
      .catch(() => {
        alert("Error submitting form. Please try again.");
      });
  });
});