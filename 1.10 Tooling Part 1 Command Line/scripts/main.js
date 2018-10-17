$(function() {
    console.log('hi i am ready');

    // Listen for a click on a thumbnail image

    $('.js-thumbnails li').on('click', function() {
      // you dont need quotes around this
      // console.log(this)
      // img src is the child element of the list item.  There is .children and .find.  Children accepts an argument
      const image = $(this).children('img');
      const imageSrc = image.attr('data-main');

      //update large name image with new source

      $('#main').attr('src', imageSrc);

      $('.selected').removeClass('selected');
      $(this).addClass('selected');

    })

});
