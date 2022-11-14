 function toss(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const face = Math.round(Math.random()*10)%2;
      if(face){
        resolve("Bravo c'est pile")
      } else {
        reject("Pas de chance c'est face")
      }
    },1000)
  })
}

toss()
  .then(msg=>console.log(msg), msg=>console.error(msg))

async function getToss(){
  try {
    const message = await toss();
    console.log(message)
  } catch(e){
    console.log('Error:', e)
  }
}

getToss();