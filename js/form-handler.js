document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("fstl-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Registration submitted successfully. Our team will contact you shortly.");
        form.reset();
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error submitting form. Check your connection.");
    }
  });
});