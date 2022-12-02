

 function toggleMe() {
    var element = document.getElementById('main-sidebar');
    element.classList.toggle('min');

    var element = document.getElementById('content-wrapper');
    element.classList.toggle('max');

    var element = document.getElementById('nav');
    element.classList.toggle('max');
 }

 $('div.wrap-tg-content').each(function() {
      var $dropdown = $(this);
      $(".toggler", $dropdown).click(function(e) {
         e.preventDefault();
         $(".product-list", $dropdown).slideToggle();
         $('.main-toggle').toggleClass('');
         $(this).toggleClass('display');
         return false;
      });
   });

 


$(document).ready(function() {
   let hidden=true
   $('#date1').hide();
   $('.js-example-basic-single').select2();
   $('#clickme').click(function(){
      if(!hidden){
         $('#date1').hide();

         $('#date2').show();

      }else{
         $('#date1').show();
         $('#date2').hide();
      }
      hidden=!hidden;
   })
});

        $(function() {
            $('#datepicker1').datepicker();
            $('#datepicker2').datepicker();
        });



$(document).ready(function() {
   $(".main-sidebar").hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);

   if($(window).width() < 992 ){
   $("#main-sideabr").address("min");
}
else{
   $("#main-sidebar").removeClass("min");
}

});





