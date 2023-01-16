import spa from './spa.js';
import scrollTopButton from './scroll-page.js';
import darkTheme from './tema_oscuro.js';
import formContact from './form-contact.js';



/* page funcionalidades generales */
//scroll
scrollTopButton('.scroll-top-btn');
darkTheme('.main-header__theme-button','dark-theme')
//dark-theme
//carga todo lso componentes de cada pagina en un switch desde el spa.js
spa();


formContact('.contact');
