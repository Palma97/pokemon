const axios = require("axios");
const {Type} = require("../../db")

const getAllTypes = async () => {

    try {
        const {data} = await axios.get("https://pokeapi.co/api/v2/type")
        return await Type.bulkCreate(data.results.map(elem => ({name: elem.name})));
    } catch (error) {
    throw new Error({error: "No se encontraron tipos, api"});
    }
}

module.exports = getAllTypes;