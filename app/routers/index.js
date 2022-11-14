const express = require("express");
const mainController = require("../controllers/mainController");
const promoController = require("../controllers/promoController");
const adminController = require("../controllers/adminController");

const router = express.Router();

// On range les différentes routes de la plus précise à la moins précise
router.get("/admin/addStudent", adminController.getPromosList);
router.get("/promo/:id/students", promoController.getStudents);
router.get("/promo/:id", promoController.getPromoPage);
router.get("/promos", promoController.getPromosList);
router.get("/", mainController.getHomePage);

// Si le requête ne correspond à aucune route, on affiche une 404
router.use((req, res) => {
  res
    .status(404)
    .render("error", { error: "404 - Cette resource n'existe pas" });
});

module.exports = router;

/*
// coté JS
app.locals.name="John";
res.locals.role = "admin";
res.render('tpl', {day: "thursday"})

// coté ejs

locals : {
  name: "john",
  role: "admin",
  day: "thursday"
}
*/
