const axios = require('axios');


const getClima = async(lat, lon) => {

    const clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=586de70caef8f77186aaa37d735ab990&units=metric`)

    return clima.data.main.temp;
}

module.exports = {
    getClima
}