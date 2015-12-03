$(document).ready(function() {
  $(".hamburguer-bt").click(function() {
    $(this).toggleClass("on");
    $('.cont-li-header').toggleClass('cont');
  });
});
