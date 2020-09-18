const uuid = require('uuid');
module.exports = (name, lastName, age, favoriteCharacters) => {
    const timestamp = new Date().getTime();
    return {
        id: uuid.v1(),
        nombre: name,
        apellidos: lastName,
        edad: age,
        personajesFavoritos: favoriteCharacters,
        creado: timestamp,
        modificado: timestamp,
    };
};