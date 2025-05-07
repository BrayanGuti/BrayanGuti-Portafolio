const translations = {
  es: {
    header_proyectos: "Proyectos",
    header_skills: "Skills",
    header_sobre_mi: "Sobre mí",
    title: "BrayanGuti | Desarrollador de Software",
    header_contactame: "Contáctame",
    presentation_h1: "Hola, soy",
    presentation_h1_span: "BrayanGuti",
    presentation_p_intro_part1: "Soy ingeniero de software con un enfoque en",
    presentation_p_intro_part2_highlight: "desarrollar interfaces visualmente atractivas y altamente funcionales",
    presentation_p_intro_part3: "Mi experiencia en frontend se complementa con habilidades en backend y bases de datos, permitiéndome ofrecer soluciones completas y efectivas.",
    presentation_boton_contacame: "Contáctame",
    about_me_h2: "Sobre mí",
    about_me_p_dev_intro_part1: "Soy un",
    about_me_p_dev_intro_highlight: "desarrollador web apasionado por crear experiencias digitales únicas",
    about_me_p_dev_intro_part2: "Disfruto explorando nuevas tecnologías y perfeccionando mis habilidades día a día. Actualmente, me encuentro inmerso en el mundo del desarrollo de aplicaciones web y backend, con un interés creciente en la inteligencia artificial y su impacto en el desarrollo de software.",
    about_me_p_dev_middle_pargraph: "En mi tiempo libre, me gusta sumergirme en un buen libro, disfrutar del cine y dejarme llevar por la música. También dedico tiempo a aprender por cuenta propia y a dar vida a ideas a través de pequeños proyectos personales.",
    about_me_p_contact_final_paragraph: "Si quieres conocer más sobre mí o mis proyectos, estaré encantado de conversar.",
    about_me_p_contact_final_paragraph_highlight: "Siempre estoy abierto a nuevas oportunidades, ideas y colaboraciones"
  },
  en: {
    header_proyectos: "Projects",
    header_skills: "Skills",
    header_sobre_mi: "About me",
    title: "BrayanGuti | Software Developer",
    header_contactame: "Contact me",
    presentation_h1: "Hello, I'm",
    presentation_h1_span: "BrayanGuti",
    presentation_p_intro_part1: "I am a software engineer focused on",
    presentation_p_intro_part2_highlight: "building visually appealing and highly functional interfaces",
    presentation_p_intro_part3: "My frontend experience is complemented by backend and database skills, allowing me to deliver complete and effective solutions.",
    presentation_boton_contacame: "Contact me",
    about_me_h2: "About me",
    about_me_p_dev_intro_part1: "I am a",
    about_me_p_dev_intro_highlight: "web developer passionate about creating unique digital experiences",
    about_me_p_dev_intro_part2: "I enjoy exploring new technologies and refining my skills every day. Currently, I am immersed in the world of web and backend development, with a growing interest in artificial intelligence and its impact on software development.",
    about_me_p_dev_middle_pargraph: "In my free time, I like to dive into a good book, enjoy movies, and let myself be carried away by music. I also dedicate time to self-learning and bringing ideas to life through small personal projects.",
    about_me_p_contact_final_paragraph: "If you want to know more about me or my projects, I would be happy to chat.",
    about_me_p_contact_final_paragraph_highlight: "I am always open to new opportunities, ideas, and collaborations"
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

  applyTranslations(); // Inicial
});