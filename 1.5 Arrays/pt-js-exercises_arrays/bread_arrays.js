


      // Create a brand new array with the following types of bread and then log it
      // Rye, "Whole Wheat", "White"

      const breadArray = ["Rye", "Whole Wheat", "White"];

      // Create a brand new array for selected cheeses from cheeses 3 through 6 and then log it

      const cheese = ["Blue Cheese","Manchego","Provolone","Cheddar","Colby","Feta","Goat Cheese","Gorgonzola","Romano","Limburger","Brie","Ricota","Roquefort","Smoked Gouda"];

      let count = 0;
      let cheeseArray = [];

      for (var i = 0; i < cheese.length; i++) {

        let index = count;
        count = count + 1;

        if (count >= 4 && count <= 6) {
          let cheeseX = cheese[i];
          cheeseArray.push(cheeseX);
        }
      }
      console.log(`the bread Array is ${breadArray}`);
      console.log(`the cheese Array is ${cheeseArray}`);

      let newArray = breadArray.concat(cheeseArray);

      console.log(`the bread and cheese Array is ${newArray}`);

      let newString = newArray.toString









      // Create a final new array for grilled cheese that combines the 3 breads and 3 selected cheeses. Then log it.

      // Convert your grilled cheese into a stringCheese variable. Seperate each item with a dash. Log it

      // // You received this string, convert it to an array and log the 2nd and 4th items _without_ removing them from the array
      // var items = "pickles,olives,spicy beans,clamato,japalenos,bacon";
