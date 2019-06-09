$(document).ready(function() {
  $("#design").click(function() {
   $('.img1').slideToggle(3000);
    $(".p1").toggle();
  });
  $("#development").click(function() {
    $(".p2, .img2").slideToggle(3000);
  });
  $("#productManagement").click(function() {
    $(".p3, .img3").slideToggle(3000);
  });

  $('#hoVer').hover(function() {
    $(this).children(".overlay").fadeToggle(1000, "linear");
    $(this).toggle(html("WORK"))
    $(".tExt").toggle();
    $('.line').showToggle();

   
 });

  $('.line').hover(function(){
  	$(this).animate({
  		opacity: '0'
  	})
  })



  $("button").click(function(event) {
    event.preventDefault();
    var user = document.getElementById('input1').value;
    alert(user + "Hi! we've received your message, thank you for getting in touch with us");
  });



});



