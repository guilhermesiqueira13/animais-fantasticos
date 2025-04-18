import ScrollSuave from "./modules/navigation/scroll-suave.js";
import ScrollAnima from "./modules/animations/scroll-anima.js";
import Accordion from "./modules/components/accordion.js";
import TabNav from "./modules/components/tab-nav.js";
import Modal from "./modules/components/modal.js";
import Tooltip from "./modules/components/tooltip.js";
import DropdownMenu from "./modules/components/dropDownMenu.js";
import MenuMobile from "./modules/components/menuMobile.js";
import fetchAnimais from "./modules/data/fetch-animais.js";
import fetchBitcoin from "./modules/data/fetch-bitcoin.js";
import Funcionamento from "./modules/core/funcionamento.js";

// Scroll suave
const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

// Accordion
const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

// Tabnav
const tabnav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabnav.init();

// Modal
const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

// Tooltip
const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

// Animacao do scroll
const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

// Dropdown Menu
const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

// Menu Mobile
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

// Funcionamento
const funcionamento = new Funcionamento("[data-semana]", "aberto");
funcionamento.init();

fetchAnimais("../../animaisapi.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
