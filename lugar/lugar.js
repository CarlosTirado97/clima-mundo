const axios = require('axios');



const getLugarLatLng = async(direccion) => {
    const encodeURL = encodeURI(direccion);
    var instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeURL }`,
        timeout: 1000,
        headers: { 'X-RapidAPI-Key': '65c4bca554msh1225af6d668cb6bp1b2c81jsn4f82caa03df2' }
    });

    const respuesta = await instance.get();
    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }
    const data = respuesta.data.Results[0];


    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon

    return {
        direccion: dir,
        lat: lat,
        lng: lng
    }
}

module.exports = {
    getLugarLatLng
}