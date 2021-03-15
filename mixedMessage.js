const m1 =['banana','strawberry','chocolate'];
const m2 =['juice','cookie','cake'];
const m3 =['love','hate','like'];


const mixedMessage = ()=>{
  let num =  Math.floor(Math.random()*3);
  console.log(`The flavor of this ${m2[num]} is ${m1[num]} and I ${m3[num]} it!`);
}

mixedMessage();