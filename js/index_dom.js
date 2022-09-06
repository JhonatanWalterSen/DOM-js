import scrollTopButtom from "./dom/boton_scroll.js";
import slider from "./dom/carrusel.js";
import countdown from "./dom/cuentaRegresiva.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import searchFilter from "./dom/filtro_busquedas.js";
import getGeolocation from "./dom/geolocalizacion.js";
import hamburguerMenu from "./dom/menu-hamburguesa.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import { digitalClock, alarma } from "./dom/reloj.js";
import draw from "./dom/sorteo.js";
import { moveBall, shortCut } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";


const d= document;
d.addEventListener('DOMContentLoaded', e=>{
    hamburguerMenu('.panel-btn','.panel','.menu a')
    digitalClock('#reloj','#activar-reloj','#desactivar-reloj')
    alarma('assets/Alarma-kikiriki.mp3','#activar-alarma','#desactivar-alarma')
    countdown('countdown','Jun 7, 2023','Feliz Cumpleaños')
    scrollTopButtom('.scroll-top-btn')
    responsiveMedia('youtube','(min-width: 1024px)','<a href="https://youtu.be/y3kaWI1cycg">Ver Video</a>','<iframe width="560" height="315" src="https://www.youtube.com/embed/y3kaWI1cycg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    responsiveMedia('gmaps','(min-width: 1024px)','Contenido Movil','Contenido Escritorio')
    responsiveTester('responsive-tester')
    userDeviceInfo('user-device')
    webCam('webcam')
    getGeolocation('geolocation')
    searchFilter('.card-filter','.card')
    draw('#winner-btn','.player')
    slider()
})


d.addEventListener('keydown', e =>{
    shortCut(e.type)
    moveBall(e,'.ball','.stage')
})
darkTheme('.dark-theme-btn','dark-mode')
networkStatus()