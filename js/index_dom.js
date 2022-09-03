import scrollTopButtom from "./dom/boton_scroll.js";
import countdown from "./dom/cuentaRegresiva.js";
import hamburguerMenu from "./dom/menu-hamburguesa.js";
import { digitalClock, alarma } from "./dom/reloj.js";
import { moveBall, shortCut } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";


const d= document;
d.addEventListener('DOMContentLoaded', e=>{
    hamburguerMenu('.panel-btn','.panel','.menu a')
    digitalClock('#reloj','#activar-reloj','#desactivar-reloj')
    alarma('assets/Alarma-kikiriki.mp3','#activar-alarma','#desactivar-alarma')
    countdown('countdown','Jun 7, 2023','Feliz Cumpleaños')
    scrollTopButtom('.scroll-top-btn')
})


d.addEventListener('keydown', e =>{
    shortCut(e.type)
    moveBall(e,'.ball','.stage')
})
darkTheme('.dark-theme-btn','dark-mode')