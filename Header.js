$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 1) {
        $(".header").css("box-shadow" , "0 4px 12px rgb(0 0 0 / 5%)");
      }
      else{
        $(".header").css("box-shadow" , "none");   
      }
    })
  })