
      /* Open this file in your browser and pop open the console to see what your
      * JavaScript code is doing.  Edit or add to the JavaScript below as you complete
      * each exercise. */

      // 1. The following function isn't printing anything to the console. Can you spot the syntax error? Be sure to check your console for errors.

      const iLoveCoffee = () => {
        console.log('Coffee is delicious.');
      }
      iLoveCoffee();


      // 2. The following function isn't printing anything to the console.  What did we forget?

      const iLovePizza = () => {
        console.log("Pizza is my favourite food!");
      }

      iLovePizza();


      // 3. Write a function `singMeASong()` that logs the text "Hey, I just met you, And this is crazy,But here's my number, So call me, maybe!" to the console.

      function singMeASong() {
        console.log("Hey, I just met you, And this is crazy,But here's my number, So call me, maybe!")
      }

      singMeASong();

      const singMeASong2 = () => {
          console.log("22222.... Hey, I just met you, And this is crazy,But here's my number, So call me, maybe!")
      }

      singMeASong2();

      // 4. Change this `iReallyLovePizza` function to accept a single `topping` argument, then log the argument to the console.

      const iReallyLovePizza= (topping) => {
        console.log("I love pizza!");
        console.log(`And my favourite topping is ${topping}`);
        //log your favourite topping to the console here
      }

      iReallyLovePizza('fish')


      // 5. Write a function called whatsForDinner that takes one parameter, `(meal)`, which alerts the name of the meal passed to it. Call your function three times with a different meal argument each time.

      const vatsfurdinner = (meal) => {
        console.log(`the meal is ${meal}`)
      }

      vatsfurdinner('fish')


      // 6. Write a function `multiply(n1, n2)` that returns the value of n1 and n2 multiplied together. *Hint:* We use the `*` character to denote multiplication in JavaScript. Make sure you test to see that your function does what you expect.

      const multiply_by = (n1,n2) => {
        return n1 * n2 * 200;
      }

      console.log(multiply_by(2,4))




      // 7. Write a function `greaterThanThree(n)` which logs "Yes" to the console if a n is greater than three. *Hint:* You will need to use the `>` comparison operator and a conditional statement inside your function.

      const greaterThanThree = (n) => {
        if (n > 3) {
          return true;
        } else {
          return false;
        }
      }

      console.log(greaterThanThree(2))
