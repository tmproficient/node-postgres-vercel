//Require's
const express = require("express");
const router = express.Router();

const productos = require("../controllers/productos");
router.get("/productos",productos.listAll);

module.exports = router;