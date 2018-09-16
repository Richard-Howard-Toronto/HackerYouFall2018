
    const cat = {
      name: "Nicks",
      age: 11,
      color: 'tortoise shell',
      bestFriend: 'Whitey',
      status: 'in cat heaven',
      alive: false,
      toys: {
        frisbee: true,
        ball: true,
        mouse: false
      }
    }

    cat.name="flukey";

    console.log(`her name is ${cat.name} and her status is ${cat.status} and her best frenemy was ${cat["bestFriend"]}`)
    console.log(`here is ${cat.toys}`)
