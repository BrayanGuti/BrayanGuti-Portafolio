const translations = {
  es: {
    header_proyectos: "Proyectos",
    header_skills: "Skills",
    header_sobre_mi: "Sobre mí",
    title: "BrayanGuti | Desarrollador de Software",
    header_contactame: "Contáctame",
  },
  en: {
    header_proyectos: "Projects",
    header_skills: "Skills",
    header_sobre_mi: "About me",
    title: "BrayanGuti | Software Developer",
    header_contactame: "Contact me",
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const desktopToggleButton = document.getElementById("desktop-toggle-lang");
  const mobileToggleButton = document.getElementById("mobile-toggle-lang");
  const textElements = document.querySelectorAll("[data-i18n]");
  let currentLang = localStorage.getItem("lang") || "es";

  const applyTranslations = () => {
    textElements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translations[currentLang][key];
    });
    document.title = translations[currentLang]["title"];
    updateToggleButtonImages();
  };

  const updateToggleButtonImages = () => {
    const flagHTML = currentLang === "es" 
      ? `<img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" width="24" height="15" alt="US Flag">`
      : `<img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" width="24" height="15" alt="Colombia Flag">`;
    
    if (desktopToggleButton) desktopToggleButton.innerHTML = flagHTML;
    if (mobileToggleButton) mobileToggleButton.innerHTML = flagHTML;
  };

  const toggleLanguage = () => {
    currentLang = currentLang === "es" ? "en" : "es";
    localStorage.setItem("lang", currentLang);
    applyTranslations();
  };

  if (desktopToggleButton) {
    desktopToggleButton.addEventListener("click", toggleLanguage);
  }
  
  if (mobileToggleButton) {
    mobileToggleButton.addEventListener("click", toggleLanguage);
  }

  applyTranslations(); // Inicial
});