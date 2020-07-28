/*global $, jQuery, alert, load*/
$(document).ready(function(){

  /*Nice Scroll*/
  $("html").niceScroll();
  /*START Section Loading Screen*/
  $(".loading-overlay").fadeOut(5000, function(){
      // $("body").css("overflow","auto");
      $(this).remove();
  });
  /*END Section Loading Screen*/


});
