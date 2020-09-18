const swapi = require('swapi-node');
const models = require('./models');

module.exports = {
    getPeople: async id => {
        const res = await swapi.getPerson(id);
        return models.people(res.birth_year, res.eye_color, res.films, res.gender, res.hair_color, res.height, res.homeworld, res.mass, res.name, res.skin_color, res.created, res.edited, res.species, res.starships, res.url, res.vehicles);
    }
}