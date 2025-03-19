const languageSelect = document.getElementById('language-select');

function setLanguage(language) {
    document.documentElement.setAttribute('lang', language);
    localStorage.setItem('language', language);

    // Opcional: Cargar el contenido traducido dinámicamente
    const translations = {
        es: {
            greeting: 'Hola, bienvenido a nuestra barbería.',
        },
        en: {
            greeting: 'Hello, welcome to our barbershop.',
        }
    };

    // Cambiar el texto según el idioma
    document.getElementById('greeting').textContent = translations[language].greeting;
}

languageSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

// Detectar el idioma del navegador o cargar el idioma guardado
window.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language');
    const browserLanguage = navigator.language.startsWith('es') ? 'es' : 'en';

    const initialLanguage = savedLanguage || browserLanguage;
    setLanguage(initialLanguage);

    // Asegurar que el select muestre el idioma correcto
    languageSelect.value = initialLanguage;
});
