        // Map:
        // Let's take this array of dog's ages in human years, and create a new array of ages in dog years that shows each value multipled by 7

        const ages = [2, 1.5, 5, 9, 4, 5];

        let dogAgesArray = [];
        for (var i = 0; i < ages.length; i++) {
          let dogAges = ages[i] * 7;
          dogAgesArray.push(dogAges);
        }
          console.log(`the dog ages are ${dogAgesArray}`);

        // Let's take an array of strings and create a new array of the same strings, but all uppercase
        const names = ['Sam', 'Jo', 'Chris'];

        let uppercaseArray = [];
        for (var i = 0; i < names.length; i++) {
          let name = names[i].toUpperCase();
          uppercaseArray.push(name);
        }
        console.log(`the uppercase is ${uppercaseArray}`)


        // Filter:
        // Create a new array with users who are older than 20 years old
        const users = [
            { name: 'Sam', age: 16 },
            { name: 'Jo', age: 25 },
            { name: 'Chris', age: 90 },
            { name: 'Jules', age: 9 }
        ];

          let olderThan20Array = [];
          const olderThan20 = users.filter((user) => {
              if(user.age > 20) {
                  olderThan20Array.push(user.name, user.age);
                  return true;
              }
          });
          console.log(olderThan20);
          console.log(olderThan20Array);


        // Create a new array with only titles longer than 8 characters
        const posts = ['War and Peace', 'Guerra y Paz','Moby Dick', 'Hamlet', 'The Odyssey','El Calvario (para ti no para mi)', 'The Great Gatsby','Don Gatszy, el hombre y su dinero','Cats','Cats, the Incredible Musical'];

        let longTitlesArray = [];

        for (var i = 0; i < posts.length; i++) {
          let book = posts[i];
          if (book.length > 8 ) {
            console.log(`A book, a long title book as it has a title of ${book.length} characters, is ${book}.`);
            longTitlesArray.push(book);
          } else {
            console.log(`a short title book: ${book}`)
          }

        }

        console.log(`The array of longer books contains: ${longTitlesArray}.`)


        
