
        const broker = {
            firstname:'Joe',
            lastname: 'Gardens',
            clients: 300,
            assistants: 3,
            registered: true,
            at_bank_or_broker: 'bank',
            location: {
                province: 'Ontario',
                city: 'Cambridge',
                postalCode: 'N1R5S2'
            },
            advisory: {
                client1: {
                    name: 'Steve Smith',
                    address: 'June',
                    Year_Opened: '2017'
                },
                client2: {
                    name: 'Dave Jones',
                    address: 'September',
                    Year_Opened: '2016',
                },
                client3: {
                    name: 'Mr and Ms Brown',
                    address: null,
                    Year_Opened: '2018'
                }
            },
            banking: {
                client1: {
                    name: 'Alfonso D',
                    address: 'June',
                    Year_Opened: '2017'
                },
                client2: {
                    name: 'Paulo A',
                    address: 'September',
                    Year_Opened: '2016',
                },
                client3: {
                    name: 'Nunzio A',
                    address: null,
                    Year_Opened: '2018'
                }
            }
        }



//EXERCISE 3

        console.log(`brokers name is ${broker.firstname} ${broker.lastname} `);

        console.log(`details on accounts -----------------`)

        for (let attr in broker) {

            if (typeof broker[attr]==='object') {

              for (let nestedAttr in broker[attr])

               {

                if (typeof broker[attr][nestedAttr]==='object') {
                  for (let thirdNested in broker[attr][nestedAttr]) {
                    console.log(broker[attr][nestedAttr][thirdNested ]);
                  } // end of inner inner for loop

                } // end of this inner if

                 else {
                   console.log(broker[attr][nestedAttr]);
                 } // end of else
              } // end of inner for loop
            } // end of outer if check
          } //end of for loop
