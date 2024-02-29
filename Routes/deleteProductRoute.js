const { Router } = require("express");

const { deleteProductById } = require("../contollers/deleteProd");

const router = Router();

router.delete("/deleteProduit/:id", deleteProductById);


module.exports = router;