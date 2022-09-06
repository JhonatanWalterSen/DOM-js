const d = document,
    n = navigator;
export default function getGeolocation(id) {
    const $id = document.getElementById(id),
    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximunAge:0
    }

    const success = (position) => {

        const {latitude, longitude, accuracy} = position.coords;
        $id.innerHTML=`
        <p>Tu posición actual es:
            <br>Latitud:  ${latitude}
            <br>Longitud:  ${longitude}
            <br>Precisioón:  ${accuracy} metros
        </p>
        <a href="https://www.google.com/maps/@${latitude},${longitude},20z" rel="noopener" target="_blank">Ver en Google Maps</a>
        `
    }

    const error = (err) => {
        $id.innerHTML=`
        <marquee>Error: ${err.code} <br>
            Mensaje:  ${err.message}
        </marquee>
        `
        console.log(err);
    }

    n.geolocation.getCurrentPosition(success,error,options)
}