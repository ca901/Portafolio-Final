$(document).ready(function() {
  $(".hamburguer-bt, .li-item-header-link").click(function() {
    $(this).toggleClass("on");
    $('.cont-li-header').toggleClass('cont');
  });
});

$(function() {
	  $(".li-item-header-link").click(function() {
        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - 0
         }, 1500);
        return false;
    });
});