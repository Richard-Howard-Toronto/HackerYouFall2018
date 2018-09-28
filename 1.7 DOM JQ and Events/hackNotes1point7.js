var sum = [1, 2, 3].reduce(
  function(total, num){ return total + num }
  , 0);
  console.log(sum);

  var pet = {
      species: "cat",
      color: "black",
      name: "Mittens"
  }

  console.log(pet.name)

  // Method Functions in JavaScript are cray and can be stored inside properties! When a function lives inside an object, we call it a method.

  var pet = {
      species: "cat",
      color: "black",
      name: "Mittens",
      sayHi : function(){
          console.log("meow!");
      },
      sayBye : function(){
          console.log("bye for meow!");
      },

      calcRando : function(num1) {
      let rando = Math.random()*num1**3;
      console.log(rando);
    },

      mathSqrt : function(num2) {
      let result = 0;
      return result = Math.sqrt(num2);
      }
  }

  pet.sayHi();

  pet.sayBye();

  pet.calcRando(10);

  console.log(`the sqrt is ${pet.mathSqrt(3**10)}`);
