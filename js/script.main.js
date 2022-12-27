
$('.navigatsiya div').on('click', () => {
  $('.navigatsiya div').toggleClass('active');
  $('.navigatsiya nav').toggleClass('open');
  $('.navigatsiya nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".navigatsiya ul li").length; a++) {
  $(".navigatsiya ul li:nth-child(" + a + ")").css("animation-delay", "." + (a + 1) + "s");
}

$(document).ready(function(){
  $('body').on('click', '.header-banner__hidder', function(){
    $('.header-banner').hide();
  });
});
