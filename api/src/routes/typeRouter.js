const {Router} = require("express");
const getTypes = require("../controllers/typeController/getTypes");

const router = Router();

router.get("/", async (req, res) => {

    try {
        const response = await getTypes();
        console.log(response)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: "Falla en el router de getTypes" });
    }
});

module.exports = router;
