const { Client } = require ('pg');
const students = require('./test.json');

const client = new Client({
  user: "trombi",
  password: "trombi",
  database: "trombi",
  host:"localhost"
})

client.connect().then(()=>{
  populateDb()
})

function populateDb(){
  let sql = `INSERT INTO student ("first_name","last_name","github_username","profile_picture_url", "promo_id")
  VALUES ` 
  for(let student of students){
    sql += `('${student.first_name}','${student.last_name}','${student.github_username}','${student.profile_picture_url}',${student.promo}),`;
  }
  sql = sql.substring(0, sql.length-1);
  sql += ";"
  console.log(sql);
  client.query(sql);
}