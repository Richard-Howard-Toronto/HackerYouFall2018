const pizza = {
  pie: [
    {
      title: 'Maker Pizza',
      price: '$$'
    },
    {
      title: 'Pizza Libretto',
      price: '$$'
    },
    {
      title: 'Dominoes',
      price: '$'
    }
  ],
  slice: [
    {
      title: 'Pizzaiolo',
      price: '$$'
    },
    {
      title: 'North of Brooklyn',
      price: '$$'
    },
    {
      title: 'Pizza Pizza',
      price: '$'
    },
    {
      title: 'King Slice',
      price: '$'
    }
  ]
};


const getRandomNumber = (number) => {
  return Math.floor(Math.random() * Math.floor(number));
}

// this is the start of document ready, it should consist of event listeners but any functions can live outside of doc ready because the key thing of doc ready is that it is waiting for html elements.

$(function () {

  const pizzaSubmit = function (event) {
    event.preventDefault();
    console.log(this);

    const userPizzaSize = $('input[name=size]:checked').val();
    console.log(userPizzaSize);

    const userPizzaPrice = $('input[name=price]:checked').val();
    console.log(userPizzaPrice);

    const restaurantArray = pizza[userPizzaSize];

    const filteredRestaurants = restaurantArray.filter((restaurant) => {
      if (userPizzaPrice === restaurant.price) {
        return true;
      }
    })

    const random = getRandomNumber(filteredRestaurants.length);

    console.log(filteredRestaurants[random].title);

    $('.results').text(`go to the restaurant ${filteredRestaurants[random].title} !!!`)

  }

  //get the price and the size from the user
  $('#pizzaForm').on('submit', pizzaSubmit);

});
