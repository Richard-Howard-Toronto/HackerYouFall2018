const myObject = {
    propertyOneName: 12,
    propertyTwoName: 23,
    propertyThreeName: 34
}

const apple = {
    color: "red",
    size : "medium",
    sugar : 25
}

console.log(apple);


const clothing = {
    belt: "can't remember",
    socks: 34,
    shoes: 200,
    pants: 3,
    hat: true,
    tShirts: {
        smallSize: 3,
        mediumSize: 4,
        largeSize: {
          color1: "yellow",
          color2: "blackish",
          color3: "black3",
          color4: "blue",
          color5: "yellow",
        }
    }
}

console.log(clothing.shoes);
console.log(clothing.tShirts);
console.log(clothing.tShirts.largeSize["color3"]);


//to update

clothing.shoes = 250;
console.log(clothing.shoes);

clothing.tShirts = 'dog t-shirts';
console.log(clothing.tShirts);

const Broker1 = {
  age: 30,
  state: 'Texas',
  top_5_clients_aum: [100,20,30,40,50],
  outfits: clothing,
}

console.log(Broker1);
console.log(Broker1.state);
