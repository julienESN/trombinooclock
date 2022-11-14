require('dotenv').config({ override: true });
const { client } = require('../app/database');

/*
console.log("retour de client.query: ", client.query(`SELECT * from "promo" LIMIT 5`,(err, result)=>{
  if(err){
    console.log(err)
  } else {
    console.log(result.rows)
  }
}))

console.log("retour de client.query: ",
  client.query(`SELECT * from "promo" LIMIT 5`)
    .then(result=>console.log(result.rows))
    .catch((e)=>console.log(e)));
console.log("Je suis juste après la requête en DB");
*/

async function getPromosList(){
  const promos = await client.query(`SELECT * from "promotion" LIMIT 5`);
  //console.log(promos.rows);
  console.log("Je suis juste après la requête en DB");
  return promos.rows
}

// getPromosList().then(result => console.log(result))

async function showPromoList(){
  try{
    const promos = await getPromosList()
    console.log(promos)
  } catch(e){
    console.log("erreur")
  }
}

showPromoList()