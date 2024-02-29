const { Router } = require("express");

const { getProduct } = require("../contollers/getProduit");

const router = Router();

router.get("/produit", getProduct);


module.exports = router;