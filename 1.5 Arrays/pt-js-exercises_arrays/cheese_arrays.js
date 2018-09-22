
      var cheese = ["Blue Cheese","Manchego","Provolone","Cheddar","Colby","Feta","Goat Cheese","Gorgonzola","Romano","Limburger","Brie","Ricota","Roquefort","Smoked Gouda"];

      // First log the entire array

      console.log(cheese);

      // Log "There are __ Cheeses"

      console.log(`there are ${cheese.length} cheeses`)

      // figure out what the index of "Limburger" is

      let indexCount = 0;
      for (var i = 0; i < cheese.length; i++) {

        console.log(`${cheese[i]} is at index ${indexCount}`)
        indexCount = indexCount + 1;}

        if (cheese[i] === 'Limburger') {
          let LimburgerIndex = indexCount;

      }

      let removedItem = cheese.pop();

      console.log(`removed item is ${removedItem}`);

      let otherRemovedItem = cheese.shift();

      console.log(`other removed item is ${otherRemovedItem}`);

      let sortedArray = cheese.sort();

      console.log(`array is alphabeticallly sorted as: ${sortedArray}`);

      let reversedSortedArray = sortedArray.reverse();

      reversedSortedArray.push("Camembert");
      reversedSortedArray.push("Muenster");

      console.log(`reversed excluding index ${(reversedSortedArray.length)-1} and excluding index ${(reversedSortedArray.length)-2} pushed array is now: ${reversedSortedArray}`);

      reversedSortedArray.unshift("Port de Salut");

      console.log(reversedSortedArray);


      // Use the previous variable to log the word "Limburger"

      // Remove "Smoked Gouda" from the array and log cheese again

      // Remove "Blue Cheese" from the array and log cheese again

      // rearrange the array to be alphabetical and then log cheese again

      // rearrage the array to be reverse alphabetical order and then log cheese again

      // Add the following cheeses to the end of the array and then log cheese: "Camembert" and "Muenster"

      // add "Port de Salut" to the front of the array and the log the array

      // Create a brand new array with the following types of bread and then log it
      // Rye, "Whole Wheat", "White"

      // Create a brand new array for selected cheeses from cheeses 3 through 6 and then log it

      // Create a final new array for grilled cheese that combines the 3 breads and 3 selected cheeses. Then log it.

      // Convert your grilled cheese into a stringCheese variable. Seperate each item with a dash. Log it

      // // You received this string, convert it to an array and log the 2nd and 4th items _without_ removing them from the array
      // var items = "pickles,olives,spicy beans,clamato,japalenos,bacon";
