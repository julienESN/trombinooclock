const dataMapper = require('../dataMapper');

module.exports = {
  // Affichage de la liste des promos
  //
  // Le mot clef async permet de définir une fonction comme étant asynchrone
  // La fonction renverra forcément une promesse. Si nécessaire la valeur de résolution
  // de cette promesse sera la valeur de retour de la fonction
  async getPromosList(req, res) {
   // le mot clef await met en pause l'execution de la fonction, en attente
   // de la valeur de résolution de la promesse qui est renvoyée quand la
   // réponse de la DB est reçue
   try{
    // on demande la liste des promos
     const promos = await dataMapper.findAllPromos();
     // on renvoie le rendu de la page promos
     res.render("promos", { promos })
   } catch(err) {
    // si jamais une exeption est levée, on renvoie la page error
    res.status(500).render('error',{ error:err})
   }
  },

  // Affichage du détail d'une promo
  async getPromoPage(req, res, next) {
    // on récupére l'id de la promo dans l'url
    const promoId = parseInt(req.params.id, 10);
    try{
      // on demande les détails de la promo
      const promo = await dataMapper.findOnePromo(promoId)
      // si on a bien une promo correspondant à cet id
      if (promo) {
        // on renvoie le rendu de la page promo
        res.render('promo', { promo })
      } else {
        // sinon on passe au MW suivant
        next(); //404
      }   
    } catch(error){
      // si jamais une exeption est levée, on renvoie la page error
      res.status(500).render('error', { error })
    }
  },

  // Affichage de la liste des étudiants
  async getStudents(req, res, next) {
    // récupérer l'id dans l'url
    const promoId = parseInt(req.params.id, 10);
    try{
      // on demande les détails de la promo
      const promo = await dataMapper.findOnePromo(promoId);
      // si on a bien une promo correspondant à cet id
      if (promo){
        // on demande la liste des étudiants de cette promo
        const students = await dataMapper.findAllStudentsByPromo(promoId);
        // on renvoie le rendu de la page students
        res.render('students', { students, promo })
      } else {
        // sinon on passe au MW suivant
        next(); // 404
      }
    } catch(error){
      // si jamais une exeption est levée, on renvoie la page error
      res.status(500).render('error', { error })
    }

    /*
    // verifier que l'id correspond bien à une promo existante
    const promo = promos.find((promo)=> promo.id === promoId);
    if(promo){
      //récupérer tous les étudiant dont la propriété promo vaut promoId
      const promoStudents = students.filter((student)=> student.promo === promoId);
      res.render('students', { students: promoStudents, promo })
    }
    */
  }
}
