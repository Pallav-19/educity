$(".icon").click(function(e){
    $("#custom-slidemenu").toggleClass("slider");
    $(this).toggleClass('icon-color');
    

})
var slideLinks = document.querySelectorAll(".slide-links");
const swipe = document.querySelector("#swipe").classList;
console.log(swipe);
console.log(slideLinks);

// for (var i = 0; i < slideLinks.length; i++) {
//     slideLinks[i].click(function(){
          

          
//     })    
// }
$(document).click(function(e){
    
     if(e.target.id !== 'barsa'){
         $('.icon').removeClass('icon-color');
     }
    if(e.target.id !== 'custom-slidemenu' && e.target.id !== 'bars'&& e.target.id !== 'barsa'){
         $("#custom-slidemenu").removeClass("slider");

               

    }
})
$(window).scroll(function(){
  if($(document).scrollTop() > 10){
    $('.swipe').css({'display': 'none'});
  }
  else{
      $('.swipe').css({'display': 'block'})
  }
});
$('[data-aos]').parent().addClass('hideOverflowOnMobile');






const btnScrollTop = $('#btnScrollTop');
btnScrollTop.click(function(){
    window.scrollTo({
        top : 0,
        left: 0,
        behavior: "smooth"
    });
});
const btnview = $('#btnScrollTop');
$(window).scroll(function () {
  if($(this).scrollTop() > 350){
        btnview.addClass('btntop');
        btnview.fadeIn();

  }
  else{
      btnview.removeClass('btntop');

  }
});
const prebox  = $(".preloader-box")

function preloader(){
    setTimeout(function(){
    prebox.fadeToggle();
  },1750);

}
$(document).ready(preloader());

const button1 = $('.btn1');
const button2 = $('.btn2');



// $(document).ready(function(e){
  $('.btn1').on('mouseenter',function(e){
  x = e.pageX - $(this).offset().left;
  y = e.pageY - $(this).offset().top;
  $(this).find('span').css({top:y,left:x});
});
$('.btn1').on('mouseout',function(e){
  x = e.pageX - $(this).offset().left;
  y = e.pageY - $(this).offset().top;
  $(this).find('span').css({top:y,left:x});
});

// })
// $(document).ready(function(e){
  $('.btn2').on('mouseenter',function(e){
  x = e.pageX - $(this).offset().left;
  y = e.pageY - $(this).offset().top;
  $(this).find('span').css({top:y,left:x});
});
$('.btn2').on('mouseout',function(e){
  x = e.pageX - $(this).offset().left;
  y = e.pageY - $(this).offset().top;
  $(this).find('span').css({top:y,left:x});
});

// })





