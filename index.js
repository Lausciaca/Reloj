
function recopilarDatos(){
    let horaActual = new Date();
    let data = {
        hora : horaActual.getHours().toString(),
        minutos : horaActual.getMinutes().toString(),
        segundos : horaActual.getSeconds().toString(),
        dia : horaActual.getDay().toString(),
        mes : horaActual.getMonth().toString(),
        anio : horaActual.getFullYear().toString(),
        fecha : horaActual.getDate().toString()  
    };
    return data;
}

function actualizarDatos(){
    document.getElementById('hora').innerHTML = 
    recopilarDatos().hora + ':' +
    recopilarDatos().minutos + ':' +
    recopilarDatos().segundos;

    document.getElementById('fecha').innerHTML = 
    recopilarDatos().dia + '/' +
    recopilarDatos().mes + '/' +
    recopilarDatos().anio;
}

setInterval(actualizarDatos, 1000)
actualizarDatos()