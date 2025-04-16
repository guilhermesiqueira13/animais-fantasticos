import ScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initAccordionNav from "./modules/accordion.js";
import iniTabNav from "./modules/tab-nav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropDownMenu.js";
import initMenuMobile from "./modules/menuMobile.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initFuncionamento from "./modules/funcionamento.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimacaoScroll();
initAccordionNav();
iniTabNav();
initModal();
initTooltip();
initFuncionamento();
initDropDownMenu();
initMenuMobile();
initFetchAnimais();
initFetchBitcoin();
