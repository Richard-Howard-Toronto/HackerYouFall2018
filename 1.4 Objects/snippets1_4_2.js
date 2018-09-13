
const firm1 = {
  name: "GreatWest Brokerage",
  clients: 2020,
  employees: 200,
  owner: "Mr Smith",
  advisors: {
      broker1: {
        name: 'Steve',
        age: 80,
        state: 'Texas',
        top_5_clients_aum: [1020,20,30,40,50],
        portfolio: "balanced",
      },

      broker2: {
        name: 'Dave',
        age: 60,
        state: 'Penn',
        top_5_clients_aum: [100,2203,30,340,50],
        portfolio: "balanced"
      },

      broker3: {
        name: 'Mike',
        age: 50,
        state: 'Texas',
        top_5_clients_aum: [1200,203,30,430,50],
        portfolio: "balanced"
      },

      broker4: {
        name: 'unknown',
        age: 20,
        state: 'NY',
        top_5_clients_aum: [1300,320,330,340,530],
        portfolio: "aggressive"
      },

      broker5: {
        name: 'Richard',
        age: 40,
        state: 'CA',
        top_5_clients_aum: [130,1320,330,340,530],
        portfolio: "income"
      },
    },

    bankers: {
        banker1: {
          age: 54,
          state: 'Texas',
          top_5_clients_aum: [10,20,30,40,50],
          portfolio: "income",
        },

        banker2: {
          age: 54,
          state: 'Oklahoma',
          top_5_clients_aum: [100,103,30,340,50],
          portfolio: "balanced"
        },

        banker3: {
          age: 54,
          state: 'Maine',
          top_5_clients_aum: [100,203,30,430,50],
          portfolio: "balanced"
        },

        banker4: {
          age: 54,
          state: 'Vermont',
          top_5_clients_aum: [130,320,330,340,530],
          portfolio: "income"
        },

        banker5: {
          age: 40,
          state: 'Mass',
          top_5_clients_aum: [130,1320,330,340,530],
          portfolio: "income"
        }
      }

}

// console.log(`${firm1.name} has ${firm1.clients} clients and is owned by ${firm1.owner}.  The oldest broker is ${firm1.advisors.broker1.name} and he is ${firm1.advisors.broker1.age}.`)


for (let attr in firm1) {

  if  (typeof firm1[attr] === 'object') {
    console.log(firm1[attr]);
    let nestedObj = firm1[attr];

    for (let nestedAttr in nestedObj) {
    console.log(nestedObj[nestedAttr]);

    let nestedObj2 = firm1[nestedAttr];
    console.log(`nestedAttr ${nestedAttr}`);
  }

  } else {
    console.log('ug');
  }
}
