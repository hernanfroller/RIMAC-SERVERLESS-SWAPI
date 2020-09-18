module.exports = io => ({
    createFan: async data => {
        await io.db.put(data);
        return { message: "Fan creado exitosamente!" };
    },
    listFans: async () => {
        const fans = await io.db.getAll();
        await Promise.all(fans.map(async fan => {
           await Promise.all(fan.personajesFavoritos.map(async favoriteCharacter => favoriteCharacter.detalle = await io.swapi.getPeople(favoriteCharacter.id))); 
        }))
        return { fans };
    }
})