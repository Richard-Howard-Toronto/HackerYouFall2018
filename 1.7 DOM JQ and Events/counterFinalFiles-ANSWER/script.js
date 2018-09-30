$(document).ready(() => {
  // need to create a counter variable
  let counter = 0;

  // when user clicks on the add button, add a number to the counter
  // link the counter variable to the counter HTML
  $('#add').on('click', () => {
    counter = counter + 1;
    $('.counter').text(counter);
    checkGoal(counter);
  });

  // when user clicks on the subtract button, subtract a number from the counter
  // link the counter variable to the counter HTML
  $('#subtract').on('click', () => {
    counter = counter - 1;
    $('.counter').text(counter);
    checkGoal(counter);
  });

  // when user clicks on the multiply button, muliply the number from the counter by itself
  // link the counter variable to the counter HTML
  $('#multiply').on('click', () => {
      counter = counter * counter;
      $('.counter').text(counter);
      checkGoal(counter);
  });

  let goal;

  // the event  is attached to FORM

  // the form when you click is trying to send / get info ... we don't want this to have the page refresh.  Instead, you want to prvent the default action of the form from happening.  To do this we use PREVENT DEFAULT

  // forms ony accept string

  $('form').on('submit', (event) => {
    event.preventDefault(); // you just have to know this!!!!
    goal = parseInt($('input#goal').val());
    $('input[type=submit]').addClass('submitted');
    $('input[type=text]').addClass('set');
  
  });

  const checkGoal = (counter) => {
    if (counter === goal) {
      alert(`You met your goal of ${goal}`);
      $('input[type=submit]').removeClass('submitted');
      $('input[type=text]').removeClass('set').val('');
    }
  }
}); //end of doc ready
