const power = process.argv[2] || 2;//first argument, power/indicies
const n = process.argv[3] || 8;//second argument, number of powers to log
console.log("\nPowers of "+power+":\n");
console.log("=====================");

function* yieldPower(input){
  let i = 0;
  while(true){
    i++;
    yield input**i;
  }
}

const powers = yieldPower(power);

for(let i = 0; i < n ; i++){
  console.log(powers.next().value);
}
console.log("=====================");
