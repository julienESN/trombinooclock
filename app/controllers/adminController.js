const dataMapper = require("../dataMapper");
module.exports = {
  async getPromosList(req, res) {
    // le mot clef await met en pause l'execution de la fonction, en attente
    // de la valeur de résolution de la promesse qui est renvoyée quand la
    // réponse de la DB est reçue
    try {
      // on demande la liste des promos
      const promos = await dataMapper.findAllPromos();
      // on renvoie le rendu de la page promos
      res.render("admin/addStudent", { promos });
    } catch (err) {
      // si jamais une exeption est levée, on renvoie la page error
      res.status(500).render("error", { error: err });
    }
  },
};
