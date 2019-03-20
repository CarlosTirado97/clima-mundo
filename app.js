const { argv } = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const recibirDireccion = async(direccion) => {
    try {
        const lugarRecibido = await lugar.getLugarLatLng(direccion);
        const climaRecibido = await clima.getClima(lugarRecibido.lat, lugarRecibido.lng);

        return `El clima de ${lugarRecibido.direccion} es ${climaRecibido}`;

    } catch (error) {
        return `No se encontro clima para ${direccion}`;
    }
}

recibirDireccion(argv.direccion)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })