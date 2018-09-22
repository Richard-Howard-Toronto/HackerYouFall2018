
const dogs = ['adog','bdog','cdog'];

const  dogCallback = (dog, i) => {
  console.log(dog);
  console.log(i);
}

dogs.forEach(dogCallback);
