const hamMenu = document.getElementById('hamburger-menu');
const offScreenMenu = document.querySelector('.off-screen');
hamMenu.addEventListener('click', () => {
	hamMenu.classList.toggle('active');
	offScreenMenu.classList.toggle('active');
});

/* Adding class to navigation bar on scroll */
$(window).scroll(function() {
    var nav = $('#main-nav');
    var top = 50;
    if ($(window).scrollTop() >= top) {

        nav.addClass('illuminated-nav');

    } else {
        nav.removeClass('illuminated-nav');
    }
});

// awards section slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// contact form 
$(document).ready(function() {
    $('.alert').hide();
    
     $('#contact-form').submit(function(event) {
 
       event.preventDefault(); // prevent default form submission
       
         grecaptcha.ready(function() {
             
             grecaptcha.execute('6Lc8-qglAAAAACvrsmOCgbpCncek9B_yO4UJKMuC', {action:'validate_captcha'})
                   .then(function(token) {
                     // add token value to form
                     document.getElementById('g-recaptcha-response').value = token;
                     var formData = $("#contact-form").serialize(); // get form data
                     $.ajax({
                     type: 'POST',
                     url: $("#contact-form").attr('action'),
                     data: formData,
                     success: function(response) {
                       if( response.code == 200) {
                         $('#contact-form').get(0).reset();
                         $(".alert").show().delay(50000).fadeOut();
                          $('html, body').animate({
                             scrollTop: $("#email_div").offset().top  - 200
                         }, 500);
                       } else {
                         alert("Something went wrong");
                       }
                     }
                 });
             });
         });
     });
   });