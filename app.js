const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugar(argv.direccion)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err));

// clima.getClima(18.4708282, -69.97959949999999)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err));

let getInfo = async(direccion) => {
    let coors = await lugar.getLugar(direccion);
    let temp = await clima.getClima(coors.lat, coors.lng);

    return `El clima en  ${ coors.direccion } es de ${ temp }`;
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log('ALGO MALO PASÓ>> ', e));