const { Router } = require("express");

const { addProduct } = require("../contollers/addProduct");

const router = Router();

router.post("/addProduit", addProduct);


module.exports = router;