$(document).ready(function() {
  $(".hamburguer-bt, .li-item-header-link").click(function() {
    $(this).toggleClass("on");
    $('.cont-li-header').toggleClass('cont');
  });
});
