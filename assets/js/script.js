$( function() {
    $( "#inputCheckIn" ).datepicker();
    $( "#inputCheckOut" ).datepicker();

    $('.agency-slider').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      })
  } );