
var navbarHeight = $('.navbar').height(); 

$(window).scroll(function() {
  //var navbarColor = "62,195,246";//color attr for rgba
  var smallLogoHeight = $('.small-logo').height();
  var bigLogoHeight = $('.big-logo').height();
  if($(window).scrollTop()>0){
    $('.jumbotron').css('background-attachment', 'fixed')
                   .css('background-position', '0px -0px')
                   .css('transition', '.15s all ease-out');
  }else{
     $('.jumbotron').css('background-attachment', 'scroll')
              .css('background-position', '0px -0px')
              .css('transition', '.15s all ease-in');;
  }
  
  