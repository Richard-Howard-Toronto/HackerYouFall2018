
const multiple = (a,b) => {
  return a * b;
}




const logPet2 = (petname, pettype, attitude = "MONSTER!", age = "unknown age") => {
  return `${petname} is a nice ${pettype} with attitude of ${attitude} and with a human equivalent age of ${multiple(age,7)}`;
}
console.log(logPet2('katie','cat','cat attitude',5))


//outside of function scope

let spaceTravel = false;
console.log(spaceTravel);

// inside of functio scope

const goToSpace = () => {
  spaceTravel = true; //GLOBAL VARIABLE -- NOT RECOMMENDED!!!!!
  console.log(spaceTravel);
}

goToSpace();
