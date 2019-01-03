const axios = require('axios');

const getClima = async(lat, lng) => {
    let wApiKEY = '6fc4eb418758378ce5c2f213973aa1fa';

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${ wApiKEY }`);
    return resp.data.main.temp;
}



module.exports = {
    getClima
}