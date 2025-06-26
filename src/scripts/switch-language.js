import translations from "../data/translations.ts";

document.addEventListener("DOMContentLoaded", () => {
  const desktopToggleButton = document.getElementById("desktop-toggle-lang");
  const mobileToggleButton = document.getElementById("mobile-toggle-lang");
  const textElements = document.querySelectorAll("[data-i18n]");
  
  // Verificar si es la primera vez que se carga la página
  let isFirstLoad = !localStorage.getItem("lang");
  
  // Siempre empezar en inglés en la primera carga, después usar localStorage
  let currentLang = isFirstLoad ? "en" : localStorage.getItem("lang") || "en";
  
  // Si es primera carga, guardar inglés en localStorage
  if (isFirstLoad) {
    localStorage.setItem("lang", "en");
  }

  const applyTranslations = () => {
    textElements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const translation = translations[currentLang][key];
  
      if (el.children.length > 0) {
        el.childNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = translation.trim() + " ";
          }
        });
      } else {
        el.textContent = translation;
      }
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

  // Aplicar traducciones iniciales
  applyTranslations();
});