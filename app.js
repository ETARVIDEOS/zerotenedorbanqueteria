// --- DATA STORES FOR STEP 2 (DYNAMIC MENU CONFIGURATION) ---
const menuOptionsData = {
  "Coffee Break": {
    isSpecialMenu: true,
    options: [
      {
        title: "Coffe Simple",
        details: [
          "Jugo",
          "Café de grano",
          "Té",
          "3 Galletas finas por persona",
          "1 Mini trozo brownie",
          "1 Tapadito de ave pimentón",
          "1 Tapadito jamón queso",
          "Incluye: Loza, coperia, mantelería, arreglo floral"
        ]
      },
      {
        title: "Coffe opción 1",
        details: [
          "Jugo",
          "Café de grano",
          "Té",
          "Leche",
          "3 Galletas finas por persona",
          "1 Tapadito ave, pimentón, mayo.",
          "1 Tapadito jamón queso",
          "1 Tapadito vegetariano",
          "1 Mini trozo de brownie",
          "2 pastelitos árabes",
          "Incluye: Loza, coperia, mantelería, arreglo floral"
        ]
      },
      {
        title: "Coffe opción 2",
        details: [
          "Jugo natural",
          "Café de grano",
          "Té",
          "Leche",
          "1 vadito  de frutas de la estación",
          "2 mini churros con manjar",
          "1 Tapaditos de lechuga, palmitos, tomate, mayonesa (vegana)",
          "1 Tapadito queso filadelfia, ciboullete.",
          "1 Tapadito Jamón-queso",
          "1 Tapadito ave palta",
          "Incluye: Loza, coperia, mantelería, arreglo floral."
        ]
      },
      {
        title: "Coffe opción 3",
        details: [
          "Jugo natural",
          "Café de grano",
          "Té",
          "Leche",
          "1 tapadito churrasco palta",
          "1 tapadito jamón queso",
          "1 tapadito quesillo, lechuga, tomate",
          "1 Tapadito ave queso",
          "1 mini vasito de fruta",
          "1 mini mini pastelito fino",
          "Incluye: Loza, coperia, mantelería, arreglo floral."
        ]
      }
    ]
  },
  "Desayunos": {
    isSpecialMenu: true,
    options: [
      {
        title: "Desayuno opción 1",
        details: [
          "Jugo natural",
          "Café de grano",
          "Té",
          "Leche sin lactosa",
          "Trozo de torta o plato de fruta de la estación",
          "1 tapadito ave pimentón en pan croissant",
          "2 tapaditos jamón queso en pan croissant",
          "1 tapadito vegetariano pan croissant",
          "Cotización incluye :  vajilla, cristalería, servilletas, individuales de cuero o mantel , arreglo floral."
        ]
      },
      {
        title: "Desayuno opción 2",
        details: [
          "Jugo natural",
          "Café de grano",
          "Té",
          "Leche sin lactosa",
          "Plato de frutas de la estación",
          "Quesillo y palta en pocillo individual",
          "2 tostadas de pan de molde",
          "1 tapadito huevo tocino",
          "1 tapadito jamón queso pan croissant",
          "1 tapadito ave tomate pan croissant",
          "Cotización incluye : valija, cristalería, individuales de cuero o mantel, servilletas y arreglo floral."
        ]
      },
      {
        title: "Desayuno opción 3",
        details: [
          "Jugo natural",
          "Café de grano",
          "Té",
          "Leche sin lactosa",
          "Plato de frutas de la estación",
          "2 galletas finas",
          "1 Mini brounnie",
          "Pocillo huevo con jamón",
          "2 tostadas de pan de molde",
          "1 tapadito ave tomate mayo en pan croissant",
          "1 tapadito jamón queso en pan croissant",
          "Incluye: vajilla , cristalería ,mantelería o individuales de cuero y arreglo floral."
        ]
      },
      {
        title: "Desayuno opción 4",
        details: [
          "Jugo natural",
          "Café de grano",
          "Té",
          "Leche sin lactosa",
          "Pancakes con fruta y jarabe syrup",
          "Pocillo con jamón, queso, y mermelada",
          "Vasito de yogurt con granola",
          "2 tostadas pan de molde",
          "2 galletas de soda",
          "1 tapadito huevo Tocino en pan de espinaca",
          "1 tapadito ave pimentón en pan de zapallo",
          "1 Tapadito de palmito tomate en pan de beterraga",
          "Incluye: vajilla cristalería, mantelería o individuales de cuero y arreglo floral."
        ]
      }
    ]
  },
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
  "Almuerzos": {
    isSpecialMenu: true,
    options: [
      {
        title: "ALMUERZO EJECUTIVO OPCION 1",
        details: [
          "PLATO DE ENSALADA: Lechuga, apio, palta, tomate, papas mayo, choclo palmito y medallón de carne al jugo.",
          "POSTRE:  Plato de fruta de la estación.",
          "INCLUYE:  Pan, mantequilla, bebida, agua mineral , café de grano y chocolates finos",
          "COTIZACIÓN INCLUYE: Vajilla, cristaleria, individuales de cuero o mantel , servilletas  arreglo floral."
        ]
      },
      {
        title: "ALMUERZO EJECUTIVO OPCION 2",
        subCategories: [
          {
            name: "ENTRADA ELEGIR UNA OPCION",
            items: [
              "Crema de camarones y crutones",
              "Fondo de Alcachofa rellena con quesillo ciboullete y mix verdes",
              "Timbal de Palta camarón palmito lechuga",
              "Palmitos envueltos en jamón acompañado de mix verdes y tomate cherry",
              "Crema de zapallo crutones y crema acida",
              "Crema de tomate natural queso parmesano y crutones"
            ]
          },
          {
            name: "FONDO ELEGIR UNA OPCION",
            items: [
              "Pechuga grille, salsa de champiñones acompañado de papas rusticas y espinaca a la crema",
              "Medallón de carne al jugo acompañado de arroz, tomate y champiñones asados",
              "Lasaña con salsa bolognesa individual",
              "Trozo de costillar a la barbacur acompañado de puré rustico",
              "Biffe de lomo liso acompañado de arroz al curry y vegetales salteados"
            ]
          },
          {
            name: "POSTRE ELEGIR UNA OPCION",
            items: [
              "Trozo de torta",
              "Mouse de chirimoya alegre",
              "Creme burlee",
              "Mousse de caramelo",
              "Flan de chocolate con frutos rojos",
              "Panacota con salsa frambuesa"
            ]
          }
        ],
        details: [
          "INCLUYE:  Pan, mantequilla, bebida, agua mineral , café de grano y chocolates finos",
          "COTIZACIÓN INCLUYE: Vajilla, cristalería, mantelería o individuales de cuero, servilletas y arreglo floral"
        ]
      },
      {
        title: "ALMUERZO EJECUTIVO OPCION 3",
        subCategories: [
          {
            name: "ENTRADA ELEGIR UNA OPCION",
            items: [
              "Ensalada capresse",
              "Timbal palta camarón, decorado de mix verde",
              "Timbal de Palta jaiba y mix verde"
            ]
          },
          {
            name: "FONDO ELEGIR UNA OPCION",
            items: [
              "Medallón de filete con salsa de champiñón, acompañado de gratín de papa a la crema",
              "Salmon a la mantequilla y alcaparra, acompañado de pure al merken"
            ]
          },
          {
            name: "POSTRE ELEGIR UNA OPCION",
            items: [
              "Ensalada de fruta de la estación",
              "Papaya rellena con crema y salsa de frambuesa",
              "Tiramisu",
              "Chesseckase de piña colada"
            ]
          }
        ],
        details: [
          "INCLUYE: Pan, salsa, bebida, agua mineral, café de grano y chocolates finos.",
          "COTIZACIÓN INCLUYE: Vajilla, cristaleria individuales de cuero, servilletas de género."
        ]
      }
    ]
  },
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
const WHATSAPP_NUMBER = "56984927453";

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
  
  const data = menuOptionsData[selectedService];
  if (!data) return;

  if (data.isSpecialMenu) {
    const groupSec = document.createElement("div");
    groupSec.className = "menu-options-section special-menu-section";
    
    const grid = document.createElement("div");
    grid.className = "option-checkbox-grid special-menu-grid";
    
    data.options.forEach(option => {
      const optionContainer = document.createElement("div");
      optionContainer.className = "special-option-container";
      
      const label = document.createElement("label");
      label.className = "option-checkbox-label special-option-label";
      
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "special-menu-option";
      checkbox.value = option.title;
      
      // Mutual exclusion (tick only 1 option):
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          // Uncheck all other checkboxes in this grid
          grid.querySelectorAll("input[type='checkbox']").forEach(other => {
            if (other !== checkbox) {
              other.checked = false;
              other.closest(".option-checkbox-label").classList.remove("checked");
              // Trigger change event to hide/clear sub-categories of other options
              other.dispatchEvent(new Event("change"));
            }
          });
          label.classList.add("checked");
        } else {
          label.classList.remove("checked");
        }
      });
      
      label.appendChild(checkbox);
      
      const titleSpan = document.createElement("span");
      titleSpan.className = "special-option-title";
      titleSpan.textContent = " " + option.title;
      label.appendChild(titleSpan);
      
      optionContainer.appendChild(label);
      
      // Render sub-categories if they exist
      if (option.subCategories) {
        const subSec = document.createElement("div");
        subSec.className = "special-option-subcategories";
        
        option.subCategories.forEach((subCat, subIndex) => {
          const subTitle = document.createElement("div");
          subTitle.className = "sub-category-title-bullet";
          subTitle.textContent = "• " + subCat.name + ":";
          subSec.appendChild(subTitle);
          
          const subGrid = document.createElement("div");
          subGrid.className = "option-checkbox-grid sub-option-grid";
          
          subCat.items.forEach(subItem => {
            const subLabel = document.createElement("label");
            subLabel.className = "option-checkbox-label option-radio-label";
            
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `${option.title.replace(/\s+/g, '_')}_${subIndex}`;
            radio.value = `${subCat.name}: ${subItem}`;
            
            // Check parent option automatically when checked
            radio.addEventListener("change", () => {
              if (radio.checked) {
                if (!checkbox.checked) {
                  checkbox.checked = true;
                  checkbox.dispatchEvent(new Event("change"));
                }
                
                // Clear active class from all other radio labels in this subGrid
                subGrid.querySelectorAll(".option-radio-label").forEach(l => {
                  l.classList.remove("checked");
                });
                subLabel.classList.add("checked");
              }
            });
            
            subLabel.appendChild(radio);
            subLabel.appendChild(document.createTextNode(" " + subItem));
            subGrid.appendChild(subLabel);
          });
          
          subSec.appendChild(subGrid);
        });
        
        optionContainer.appendChild(subSec);
        
        // Listener to clear selections when parent checkbox is unchecked
        checkbox.addEventListener("change", () => {
          if (!checkbox.checked) {
            subSec.querySelectorAll("input[type='radio']").forEach(radio => {
              radio.checked = false;
              radio.closest(".option-radio-label").classList.remove("checked");
            });
          }
        });
      }
      
      // Render details
      const detailsList = document.createElement("ul");
      detailsList.className = "special-option-details";
      option.details.forEach(detail => {
        const li = document.createElement("li");
        li.textContent = detail;
        detailsList.appendChild(li);
      });
      optionContainer.appendChild(detailsList);
      
      grid.appendChild(optionContainer);
    });
    
    groupSec.appendChild(grid);
    container.appendChild(groupSec);
  } else {
    // Standard rendering for Brunch and Coctel
    data.forEach(group => {
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

  // Get selected options and sub-options
  const selectedOptions = [];
  document.querySelectorAll("#dynamic-menu-options input[type='checkbox']:checked").forEach(cb => {
    selectedOptions.push(cb.value);
    
    // Add subcategories details if selected
    const parentContainer = cb.closest(".special-option-container");
    if (parentContainer) {
      parentContainer.querySelectorAll("input[type='radio']:checked").forEach(rb => {
        selectedOptions.push(`   * ${rb.value}`);
      });
    }
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
