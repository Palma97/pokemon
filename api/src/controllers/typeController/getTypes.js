const {Type} = require("../../db");

const getTypes = async () => {

    try {
        return await Type.findAll()
    } catch (error) {
        throw new Error({error: "No se encontraron tipos, bd"})
    }
};

module.exports = getTypes;