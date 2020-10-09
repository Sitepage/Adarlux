// Menu
$(function(){

  $('.header__btn-menu').on('click', function(){
    $('.nav_menu').slideToggle();
  });
  $(document).mouseup(function (e) {
    let container = $(".nav_menu");
    if (container.has(e.target).length === 0){
      container.hide();
    }
  });
});
  



