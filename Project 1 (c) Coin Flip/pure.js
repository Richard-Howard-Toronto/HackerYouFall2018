let total = 0;

const add = (a,b,c) => {
    return a + b * c;
}

total = add(1,2,3); // add refers back to the variables and returns the numerical operations on those variables


let avg = 0;

const average = (a,b,c) => {
  return (a + b + c)/3
}

avg = average(1,2,9)


let array = [1,2,3,41,5]

    const dogs = (array);
    let sumdogs = 0;
    let avgdogs = 0;
    dogs.forEach((dog) => {
        sumdogs += dog;
        avgdogs = sumdogs/dogs.length;
    });

    console.log(sumdogs);
    console.log(avgdogs);
