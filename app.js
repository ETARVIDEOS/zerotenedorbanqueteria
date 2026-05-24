// --- DATA STORES FOR STEP 2 (DYNAMIC MENU CONFIGURATION) ---
const menuOptionsData = {
  "Coffee Break": [
    {
      category: "Bocados Dulces (Recomendado elegir 2 o más)",
      items: [
        "Galletas finas artesanales",
        "Mini brownies de chocolate belga",
        "Mini queque de zanahoria y nuez",
        "Mini tartaleta de frutas",
        "Cachitos con manjar",
        "Mini panqueques con manjar",
        "Pastelitos chilenitos",
        "Profiteroles rellenos",
        "Mini donuts glaseadas",
        "Mini muffins surtidos"
      ]
    },
    {
      category: "Bocados Salados (Recomendado elegir 3 o más)",
      items: [
        "Tapaditos ave pimentón en pan de leche",
        "Tapaditos jamón queso en pan croissant",
        "Tapadito ave palta en pan croissant",
        "Tapadito palmito tomate mayo vegana",
        "Tapadito jamón queso en pan de leche",
        "Tapadito queso philadelphia y salame en pan croissant",
        "Tapadito huevo pepinillo en pan croissant"
      ]
    },
    {
      category: "Bebidas e Infusiones",
      items: [
        "Café de grano recién tostado",
        "Té negro inglés y té verde",
        "Aguas de hierbas naturales",
        "Leche entera y sin lactosa",
        "Jugo natural (Frambuesa, Piña, Naranja Plátano, Mango)"
      ]
    }
  ],
  "Desayunos": [
    {
      category: "Opciones Dulces",
      items: [
        "Plato de frutas frescas de estación",
        "Trozo de torta hojarasca manjar",
        "Trozo de torta tiramisú",
        "Crepes con manjar y fruta",
        "Pancakes con frutas y syrup",
        "Wafles con fruta y salsa de frambuesas",
        "Vasito de yogurt con granola",
        "Macarrones surtidos",
        "Brazo de reina casero"
      ]
    },
    {
      category: "Opciones Saladas (Tapaditos)",
      items: [
        "Salmón, queso philadelphia y rúcula en croissant",
        "Ave, palta y mayo en croissant",
        "Jamón serrano, queso philadelphia y lechuga en pan betarraga",
        "Jamón y queso en pan croissant",
        "Roast beef con mostaza antigua en croissant",
        "Caprese (tomate, mozzarella y pesto) en pan de zapallo",
        "Palta, tomate y aceite de oliva en pan de espinaca",
        "Churrasco italiano en pan croissant"
      ]
    },
    {
      category: "Líquidos",
      items: [
        "Jugo natural de naranja, mango o frutilla",
        "Café de grano",
        "Leche entera o sin lactosa",
        "Aguas de hierbas",
        "Té negro"
      ]
    }
  ],
  "Brunch": [
    {
      category: "Sándwiches Premium",
      items: [
        "Sándwich pan de hoja mechada y queso mantecoso",
        "Sándwich pan de hoja ave y cebolla caramelizada",
        "Sándwich ciabatta tomate, queso y pesto",
        "Sándwich croissant salmón y queso philadelphia",
        "Sándwich pita humus de garbanzo y pepino",
        "Sándwich media frica churrasco res palta mayo",
        "Sándwich media frica ave grille y apple rotkohl"
      ]
    },
    {
      category: "Postres e Individuales",
      items: [
        "Brochetas de fruta de temporada",
        "Mini vasito de panna cotta de frambuesa",
        "Crème brûlée tradicional",
        "Trozo de torta pompadour",
        "Mousse de chocolate belga",
        "Crepe de manjar con nueces",
        "Trozo de pie de limón"
      ]
    },
    {
      category: "Bebidas",
      items: [
        "Jugos naturales de frutas a elección",
        "Coca-Cola original o Zero",
        "Sprite Zero",
        "Agua mineral con o sin gas"
      ]
    }
  ],
  "Almuerzos": [
    {
      category: "Opciones de Entrada y Fondo",
      items: [
        "Ceviche de pescado blanco y camarón",
        "Entrada fresca de estación",
        "Filete de res braseado con puré trufado",
        "Salmón a la plancha con vegetales grillados",
        "Risotto de setas y champiñones silvestres"
      ]
    },
    {
      category: "Postres",
      items: [
        "Trozo de torta de la casa",
        "Crème brûlée",
        "Mousse de chocolate con coulis de frambuesa",
        "Pie de limón premium"
      ]
    },
    {
      category: "Servicio y Montaje",
      items: [
        "Servicio de garzones de elite",
        "Montaje completo de mantelería, vajilla y cristalería",
        "Decoración floral de mesas"
      ]
    }
  ],
  "Coctel": [
    {
      category: "Bocados Fríos y Calientes (Recomendado elegir 4 o más)",
      items: [
        "Brochetas de filete con salsa demiglase",
        "Canapés de camarón y queso crema",
        "Empanaditas de pino horneadas",
        "Mini pastelera de choclo en pocillos de greda",
        "Tapaditos de salmón phila rúcula en croissant",
        "Tapaditos jamón serrano queso phila en croissant",
        "Tapadito caprese en pan de zapallo",
        "Tapadito ave pimentón en pan de leche",
        "Tapadito carne mechada tomate en pan de leche"
      ]
    },
    {
      category: "Bocados Dulces",
      items: [
        "Mini churros con dulce de leche",
        "Macarons surtidos franceses",
        "Mini cheesecakes de frambuesa",
        "Brochetas de crepes frutilla y dulce de leche"
      ]
    },
    {
      category: "Servicio Incluido",
      items: [
        "Servicio de garzones profesionales",
        "Vajilla y cristalería completa",
        "Estación de bebidas y jugos naturales"
      ]
    }
  ]
};

// --- WHATSAPP NUMBER ---
const WHATSAPP_NUMBER = "56995332361";

// --- WIZARD STATE MANAGER ---
let currentStep = 1;
let selectedService = "Coffee Break";
const totalSteps = 3;

document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initMobileMenu();
  initMenuTabs();
  initImageGalleries();
  initScrollAnimations();
  initCotizadorWizard();
  initDirectContactForm();
  initWhatsAppFloatingBtn();
  initFAQAccordion();
  initInstagramGallerySlider();
  initTypingEffect();
  initNumberAnimation();
});

// 1. Header scroll effect
function initNavbarScroll() {
  const header = document.getElementById("main-header");
  if (!header) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// 2. Mobile navbar toggle
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const navbarMenu = document.getElementById("navbar-menu");
  if (!toggleBtn || !navbarMenu) return;
  
  toggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
    toggleBtn.classList.toggle("active");
  });

  // Close menu when clicking links
  const links = navbarMenu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navbarMenu.classList.remove("active");
      toggleBtn.classList.remove("active");
    });
  });
}

// 3. Menu tab switcher (if tab switcher is on page)
function initMenuTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  if (tabButtons.length === 0) return;

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      tabContents.forEach(content => {
        if (content.id === targetTab) {
          content.classList.add("active");
        } else {
          content.classList.remove("active");
        }
      });
    });
  });
}

// 4. Image gallery slider
function initImageGalleries() {
  const thumbs = document.querySelectorAll(".thumb-image-container");
  if (thumbs.length === 0) return;
  
  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
      const parentRow = thumb.parentElement;
      const serviceName = parentRow.getAttribute("data-service");
      const mainImg = document.getElementById(`${serviceName}-main-img`);
      const targetSrc = thumb.getAttribute("data-img");
      
      // Update active thumbnail
      parentRow.querySelectorAll(".thumb-image-container").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
      
      // Apply fade transition to main image
      mainImg.style.opacity = 0.4;
      setTimeout(() => {
        mainImg.setAttribute("src", targetSrc);
        mainImg.style.opacity = 1;
      }, 150);
    });
  });
}

// 5. IWIS Scroll Entrance Animations (using IntersectionObserver)
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    ".anim-fade-in, .anim-zoom-in, .anim-slide-in-left, .anim-slide-in-right"
  );
  if (animatedElements.length === 0) return;

  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Keep observing or unobserve? Standard is unobserve to animate once
        animObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px" // Triggers slightly before entry
  });

  animatedElements.forEach(el => animObserver.observe(el));
}

// 6. FAQ Accordion panel toggle
function initFAQAccordion() {
  const faqQuestions = document.querySelectorAll(".faq-question");
  if (faqQuestions.length === 0) return;

  faqQuestions.forEach(q => {
    q.addEventListener("click", () => {
      const item = q.parentElement;
      const answer = item.querySelector(".faq-answer");
      const isActive = item.classList.contains("active");

      // Close all other FAQs
      document.querySelectorAll(".faq-item").forEach(otherItem => {
        otherItem.classList.remove("active");
        otherItem.querySelector(".faq-answer").style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add("active");
        // Dynamically compute scrollHeight for smooth transition
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        item.classList.remove("active");
        answer.style.maxHeight = null;
      }
    });
  });
}

// 7. Rotating Instagram Gallery Slider
function initInstagramGallerySlider() {
  const track = document.getElementById("gallery-track");
  const slides = document.querySelectorAll(".gallery-slide");
  const dotsContainer = document.getElementById("gallery-dots");
  const prevBtn = document.getElementById("gallery-prev");
  const nextBtn = document.getElementById("gallery-next");
  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  let autoPlayTimer;

  // Create dot indicators
  slides.forEach((_, idx) => {
    const dot = document.createElement("div");
    dot.className = `gallery-dot ${idx === 0 ? 'active' : ''}`;
    dot.addEventListener("click", () => {
      goToSlide(idx);
      resetAutoPlay();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".gallery-dot");

  function goToSlide(index) {
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }
    
    currentIndex = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    
    // Update dots
    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  if (prevBtn) prevBtn.addEventListener("click", () => { prevSlide(); resetAutoPlay(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { nextSlide(); resetAutoPlay(); });

  // Autoplay
  function startAutoPlay() {
    autoPlayTimer = setInterval(nextSlide, 4500);
  }

  function resetAutoPlay() {
    clearInterval(autoPlayTimer);
    startAutoPlay();
  }

  startAutoPlay();
}

// 8. Interactive Cotizador Wizard
function initCotizadorWizard() {
  const modal = document.getElementById("cotizador-modal");
  if (!modal) return;

  const closeBtn = document.getElementById("close-cotizador");
  const openBtns = document.querySelectorAll(".open-cotizador-btn");
  const serviceCotizarBtns = document.querySelectorAll(".request-cotizacion-btn");
  
  const prevBtn = document.getElementById("wizard-prev-btn");
  const nextBtn = document.getElementById("wizard-next-btn");
  const slider = document.getElementById("w-guests");
  const sliderVal = document.getElementById("slider-value");
  
  if (slider) {
    slider.addEventListener("input", () => {
      sliderVal.textContent = slider.value;
    });
  }

  // Open modal
  const openModal = () => {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    goToStep(1);
  };

  // Close modal
  const closeModal = () => {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  };

  openBtns.forEach(btn => btn.addEventListener("click", openModal));
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // "Solicitar Cotización" on a specific service
  serviceCotizarBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const serviceName = btn.getAttribute("data-service-name");
      openModal();
      
      // Select the specific service automatically
      const selectorCards = document.querySelectorAll(".selector-card");
      selectorCards.forEach(card => {
        const val = card.getAttribute("data-value");
        if (val.toLowerCase().includes(serviceName.toLowerCase()) || 
            serviceName.toLowerCase().includes(val.toLowerCase())) {
          selectorCards.forEach(c => c.classList.remove("selected"));
          card.classList.add("selected");
          selectedService = val;
        }
      });
      
      // Go directly to Step 2 for a seamless user flow
      goToStep(2);
    });
  });

  // Step 1 selector cards
  const selectorCards = document.querySelectorAll(".selector-card");
  selectorCards.forEach(card => {
    card.addEventListener("click", () => {
      selectorCards.forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      selectedService = card.getAttribute("data-value");
    });
  });

  // Wizard navigation
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentStep > 1) {
        goToStep(currentStep - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentStep < totalSteps) {
        // Validate options selection in Step 2 before moving to Step 3
        if (currentStep === 2) {
          const checkedOptions = document.querySelectorAll("#dynamic-menu-options input[type='checkbox']:checked");
          if (checkedOptions.length === 0) {
            alert("Por favor, seleccione al menos una opción para su menú.");
            return;
          }
        }
        goToStep(currentStep + 1);
      } else {
        // Submit wizard on Step 3
        submitCotizacion();
      }
    });
  }
}

function goToStep(step) {
  currentStep = step;
  
  // Hide all panels
  document.querySelectorAll(".wizard-panel").forEach(p => p.classList.remove("active"));
  const currentPanel = document.getElementById(`wizard-step-${step}`);
  if (currentPanel) currentPanel.classList.add("active");
  
  // Update indicator dots
  document.querySelectorAll(".step-indicator").forEach((dot, idx) => {
    const dotStep = idx + 1;
    dot.classList.remove("active", "completed");
    
    if (dotStep === step) {
      dot.classList.add("active");
    } else if (dotStep < step) {
      dot.classList.add("completed");
    }
  });

  // Update progress bar
  const progressBar = document.getElementById("wizard-progress");
  if (progressBar) {
    const progressPercent = ((step - 1) / (totalSteps - 1)) * 100;
    progressBar.style.width = `${progressPercent}%`;
  }

  // Update navigation buttons
  const prevBtn = document.getElementById("wizard-prev-btn");
  const nextBtn = document.getElementById("wizard-next-btn");
  
  if (prevBtn && nextBtn) {
    if (step === 1) {
      prevBtn.style.visibility = "hidden";
      nextBtn.textContent = "Siguiente";
    } else {
      prevBtn.style.visibility = "visible";
      if (step === totalSteps) {
        nextBtn.textContent = "Solicitar Cotización por WhatsApp";
      } else {
        nextBtn.textContent = "Siguiente";
      }
    }
  }

  // Populate dynamic menus on Step 2
  if (step === 2) {
    populateStep2Menu();
  }
}

// Generate the options checkboxes dynamically in Step 2
function populateStep2Menu() {
  const container = document.getElementById("dynamic-menu-options");
  if (!container) return;
  container.innerHTML = ""; // Clear
  
  const title = document.getElementById("wizard-step-2-title");
  if (title) title.textContent = `Menú Personalizado: ${selectedService}`;
  
  const groups = menuOptionsData[selectedService];
  if (!groups) return;

  groups.forEach(group => {
    const groupSec = document.createElement("div");
    groupSec.className = "menu-options-section";
    
    const secTitle = document.createElement("h4");
    secTitle.className = "menu-options-section-title";
    secTitle.textContent = group.category;
    groupSec.appendChild(secTitle);
    
    const grid = document.createElement("div");
    grid.className = "option-checkbox-grid";
    
    group.items.forEach(item => {
      const label = document.createElement("label");
      label.className = "option-checkbox-label";
      
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = item;
      
      // Update background check color dynamically
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          label.classList.add("checked");
        } else {
          label.classList.remove("checked");
        }
      });
      
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(" " + item));
      grid.appendChild(label);
    });
    
    groupSec.appendChild(grid);
    container.appendChild(groupSec);
  });
}

// Wizard submission: triggers WhatsApp redirect
function submitCotizacion() {
  const name = document.getElementById("w-name").value.trim();
  const company = document.getElementById("w-company").value.trim();
  const email = document.getElementById("w-email").value.trim();
  const date = document.getElementById("w-date").value;
  const guests = document.getElementById("w-guests").value;
  
  // Basic validation
  if (!name || !company || !email || !date) {
    alert("Por favor complete todos los datos de contacto.");
    return;
  }

  // Get selected options
  const selectedOptions = [];
  document.querySelectorAll("#dynamic-menu-options input[type='checkbox']:checked").forEach(cb => {
    selectedOptions.push(cb.value);
  });

  // Construct message
  let message = `Hola Zero Tenedor Banquetería, me gustaría solicitar una cotización para un evento corporativo:\n\n`;
  message += `*Servicio:* ${selectedService}\n`;
  message += `*Invitados:* ${guests} personas\n`;
  message += `*Fecha estimada:* ${date}\n\n`;
  message += `*Menú seleccionado:*\n`;
  selectedOptions.forEach(opt => {
    message += `• ${opt}\n`;
  });
  message += `\n*Datos de Contacto:*\n`;
  message += `• Nombre: ${name}\n`;
  message += `• Empresa: ${company}\n`;
  message += `• Correo: ${email}`;

  // URL Encode
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  
  // Open WhatsApp in a new tab
  window.open(whatsappUrl, "_blank");
  
  // Close modal
  const modal = document.getElementById("cotizador-modal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "auto";
  
  // Reset form
  const form = document.getElementById("wizard-form");
  if (form) form.reset();
}

// 9. Direct Contact Form (triggers WhatsApp redirect as requested)
function initDirectContactForm() {
  const form = document.getElementById("direct-contact-form");
  if (!form) return;
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("c-name").value.trim();
    const company = document.getElementById("c-company").value.trim();
    const email = document.getElementById("c-email").value.trim();
    const service = document.getElementById("c-service").value;
    const reqDetails = document.getElementById("c-message").value.trim();
    
    let message = `Hola Zero Tenedor Banquetería, he enviado una solicitud desde el sitio web:\n\n`;
    message += `*Nombre:* ${name}\n`;
    message += `*Empresa:* ${company}\n`;
    message += `*Correo:* ${email}\n`;
    message += `*Servicio solicitado:* ${service}\n\n`;
    message += `*Detalles del Requerimiento:*\n${reqDetails}`;
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    form.reset();
  });
}

// 10. WhatsApp Floating Button (directly redirects)
function initWhatsAppFloatingBtn() {
  const btn = document.getElementById("whatsapp-floating-btn");
  if (!btn) return;
  
  btn.addEventListener("click", () => {
    const welcomeMsg = "Hola Zero Tenedor Banquetería, me gustaría solicitar una cotización.";
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(welcomeMsg)}`;
    window.open(whatsappUrl, "_blank");
  });
}

// 11. Typing Effect for Hero
function initTypingEffect() {
  const textElement = document.getElementById("hero-typing-text");
  if (!textElement) return;
  const textToType = textElement.getAttribute("data-text");
  textElement.textContent = "";
  let i = 0;
  function typeWriter() {
    if (i < textToType.length) {
      textElement.textContent += textToType.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    } else {
      textElement.style.borderRight = "none"; // Remove cursor when done
    }
  }
  setTimeout(typeWriter, 500);
}

// 12. Dynamic Number Counter
function initNumberAnimation() {
  const statNumbers = document.querySelectorAll(".stat-number");
  if (statNumbers.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalString = target.getAttribute("data-target") || target.innerText;
        const finalNumber = parseInt(finalString.replace(/\D/g, ''));
        const suffix = finalString.replace(/[0-9,]/g, '');
        
        let currentNumber = 0;
        const duration = 2000;
        const increment = finalNumber / (duration / 16);
        
        const updateCounter = () => {
          currentNumber += increment;
          if (currentNumber < finalNumber) {
            target.innerText = Math.ceil(currentNumber).toLocaleString() + suffix;
            requestAnimationFrame(updateCounter);
          } else {
            target.innerText = finalString;
          }
        };
        
        updateCounter();
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(num => {
    num.setAttribute("data-target", num.innerText);
    num.innerText = "0" + num.innerText.replace(/[0-9,]/g, '');
    observer.observe(num);
  });
}
