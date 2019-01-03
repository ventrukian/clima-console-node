const axios = require('axios');



const getLugar = async(direccion) => {
    let encodedUrl = encodeURI(direccion);
    let gApiKEY = 'AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8';

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=${ gApiKEY }`);
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error('No hay resultados para los datos introducidos');
    }

    let location = resp.data.results[0];

    return {
        direccion: location.formatted_address,
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng
    }
    //.then(resp => {
    //console.log(JSON.stringify(resp.data, undefined, 2));
    //
    //console.log('Dirección:', location.formatted_address);
    //console.log('Latt:', location.geometry.location.lat);
    //console.log('Long:', location.geometry.location.lng);
    //return
    //})
    //.catch(e => console.log('ERROR: ', e));
}



module.exports = {
    getLugar
}