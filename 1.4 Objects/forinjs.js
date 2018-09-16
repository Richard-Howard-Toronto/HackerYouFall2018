
        const farm = {
            type: 'crop',
            name: 'Sweet Gardens',
            hectares: 300,
            employees: 3,
            owner: 2,
            barnCats: 14,
            location: {
                province: 'Ontario',
                city: 'Cambridge',
                postalCode: 'N1R5S2'
            },
            cropRotation: {
                field1: {
                    crop: 'Winter Wheat',
                    harvest: 'June',
                    lastRotation: '2017'
                },
                field2: {
                    crop: 'Corn',
                    harvest: 'September',
                    lastRotation: '2016',
                },
                field3: {
                    crop: null,
                    harvest: null,
                    lastRotation: '2018'
                }
            }
        }

        console.log(`Q1: ${farm.name} is proud to have ${farm.employees} staff and in terms of crops has ${farm.cropRotation.field1.crop}, ${farm.cropRotation.field2.crop},${farm.cropRotation.field3.crop}.  Stop by ${farm.location.city}, in ${farm.location.province}`)


        // the object is farm

        for (let attributes in farm) {
          if (typeof farm[attributes] === 'number') {
            console.log(`Q2: There are ${farm[attributes]} ${attributes}`);
          }
        }


//EXERCISE 3

        for (let attr in farm) {

            if (typeof farm[attr]==='object') {

              for (let nestedAttr in farm[attr])

               {

                if (typeof farm[attr][nestedAttr]==='object') {
                  for (let thirdNested in farm[attr][nestedAttr]) {
                    console.log(farm[attr][nestedAttr][thirdNested ]);
                  } // end of inner inner for loop

                } // end of this inner if

                 else {
                   console.log(farm[attr][nestedAttr]);
                 } // end of else
              } // end of inner for loop
            } // end of outer if check
          } //end of for loop
