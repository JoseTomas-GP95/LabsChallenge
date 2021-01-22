const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");

router.get("/search", (req, res) => {
  const { query } = req.query;

  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    .then((res) => {
      return res.json();
    })
    .then((datos) => {
      res.json(datos.results);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
