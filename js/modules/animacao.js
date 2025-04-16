function iniTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add("ativo", direcao);
  }
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
iniTabNav();

function initAccordionNav() {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  );
  const activeClass = "ativo";
  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordionNav();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      }
    });
  }
  if (sections.length) {
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();
