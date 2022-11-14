const { client } = require('./database');

// Afin de se protéger contre les injections SQL, on va systèmatiquement utiliser des requetes préparées
// 1. on stocke la requete ds un variable en remplaçant chaque partie dynamique par $1, $2, etc...
// 2. on appelle client.query en passant la requête en premier argument et un tableau des valeurs dynamique en second argument
// le module pg va prendre en charge la construction de la requête finale en remplaçant les $1, $2, etc...
// par les valeurs contenu dans le tableau.
// ex : client.query(`SELECT * FROM "promo" WHERE "id"=$1`, [12]) enverra la requête SELECT * FROM "promo" WHERE "id"=12

const dataMapper = {
  // Le mot clef async permet de définir une fonction comme étant asynchrone
  // La fonction renverra forcément une promesse. Si nécessaire la valeur de résolution
  // de cette promesse sera la valeur de retour de la fonction
  async findAllPromos(){
    const sql = `SELECT * FROM "promo"`;
    const result = await client.query(sql);
    // ce return détermine donc la valeur de résolution de la promesse renvoyée par la fonction
    return result.rows;
  },
  async findOnePromo(id){
    const sql = `SELECT * FROM "promo" WHERE "id"=$1`;
    const result = await client.query(sql, [id]);
    return result.rows[0];
  },
  async findAllStudentsByPromo(id){
    const sql = `SELECT * FROM "student" WHERE "promo_id"=$1`;
    const result = await client.query(sql, [id]);
    return result.rows;
  }
}

module.exports = dataMapper;
