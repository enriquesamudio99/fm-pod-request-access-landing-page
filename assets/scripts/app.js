const heroForm = document.getElementById('hero-form');
const heroInput = document.getElementById('hero-input');
const heroErrorMessage = document.getElementById('hero-error-message');

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

const initApp = () => {
  heroForm.addEventListener("submit", submitForm);
}

const submitForm = (e) => {
  e.preventDefault();

  const inputValue = heroInput.value;

  if (!inputValue) {
    heroErrorMessage.style.display = "block";
    heroErrorMessage.textContent = "Email is required";
    heroInput.classList.add("hero__input--error");
    return;
  }

  if (!validEmail(inputValue)) {
    heroErrorMessage.style.display = "block";
    heroErrorMessage.textContent = "Oops! Please check your email";
    heroInput.classList.add("hero__input--error");
    return;
  }

  heroErrorMessage.style.display = "none";
  heroErrorMessage.textContent = "";
  heroInput.classList.remove("hero__input--error");

  heroForm.reset();
}

const validEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
