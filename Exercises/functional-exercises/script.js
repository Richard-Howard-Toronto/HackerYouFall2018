$(function() {
  $.getJSON('petfinder_date.json')
    .then((result) => {


      const petArray = result.petfinder.pets.pet;

      console.log(petArray);

        const outputArray = petArray.map((eachAnimal) => {

          return {
            name: eachAnimal.name.$t,
            age: eachAnimal.age.$t,
            size: eachAnimal.size.$t,
            type: eachAnimal.animal.$t
          }

        });
        // console.log(outputArray);

        //Exercise #2
        //Pick the cats and map an array of just their names

        const catNames = petArray
          .filter( animal => animal.animal.$t === 'Cat' )
          .map( animal => animal.name.$t );

        // console.log(catNames);

        const dogNames = petArray
          .filter( animal => animal.animal.$t === 'Dog' )
          .map( animal => animal.name.$t );
        //
        // console.log(dogNames);

        //Exercise #3
        //Filter out only animals that are a dog and are a mix
        //And output an object that looks like
        /*
        {
          name: 'Dog Name'
          breed: 'Dog Breed'
        }
        */



        const dogNames_mixed = petArray
          .filter( animal => animal.animal.$t === 'Dog').filter(animal => animal.mix.$t === 'yes');

          console.log(dogNames_mixed.length);
          console.log(typeof dogNames_mixed);

          const outputDogsMixed = dogNames_mixed.map((eachAnimal) => {

            return {
              name: eachAnimal.name.$t,
              breed: eachAnimal.breeds.breed.$t,
              id: eachAnimal.id.$t,
            }

          });

          let catchArray = [];
          for (var i = 0; i < outputDogsMixed.length; i++) {
            let x = outputDogsMixed[i];
            catchArray.push(x);

          }

          console.log(`output is: ${outputDogsMixed[7].breed}`)
          var el = document.getElementById('petlist');
          el.textContent = outputDogsMixed[7].breed;



              //Exercise #4
              //Using the Reduce method to group animal type in an array of objects
              /*
              {
                'Dog': [],
                ...
              }
              */

          const types = petArray.reduce((prev,curr) => {
              const key = curr.animal.$t;
              if(prev[key] === undefined) {
                prev[key] = [];
              }
              prev[key].push(curr)
              return prev;
            }, {});

          console.log(types)
          // var el = document.getElementById('types');
          // el.textContent = curr.animal.$t;


          const names = ['Sam', 'Jamie', 'Alex', 'Andy', 'August', 'Chris', 'Dakota', 'Drew', 'Max'];

          const shortNames = names.filter((name) => {
              if(name.length <= 3) {
                  return true;
              }
          });

          console.log(shortNames);
          var el_s = document.getElementById('shortnames');
          el_s.textContent = shortNames;


  // count the number of names

          const nameCount = petArray
            .reduce((prev,curr) => {
              const key = curr.name.$t;
              if(prev[key] === undefined) {
                prev[key] = 0;
              }
              prev[key]++;
              return prev
            },{});

          console.log(nameCount);

          var myObj = petArray;
          var myJSON = JSON.stringify(myObj);
          var el_J = document.getElementById('shortnames');
          el_J.textContent = myJSON;


    });


});
