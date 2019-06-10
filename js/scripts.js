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
    $(this).toggle(css('.'))
    $(".tExt").toggle();
    $('.line').showToggle();

   
});
$('.line').hover(function() {
  $(this).animate({
    opacity: '1'
  });
},
function() {
  $(this).animate({
    opacity: '0'
  });
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
    const Mailchimp = require('d88565b7ea190dd855cccebdc8baa');

const mailchimp = new Mailchimp(myMailchimpAPI);

     mailchimp.post(`/lists/${myListId}/members`, {
     email_address: 'jack@example.com',
      status: 'subscribed',
    merge_fields: {
    FNAME: 'Joflix',
    EMAIL: 'joflixooko@outlook.com',
    COMPANY: 'Greenhomed Health $ Wellness'
  }
})
.then(res => console.log(res))
.catch(err => console.log(err))
  });



});



