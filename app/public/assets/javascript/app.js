///carousel
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 2 seconds
}
	/// scrolll

  $(document).ready(function(){
  $('nav li a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});

///email

  $('#emailSent').on( 'click', '#buttonContact', function() {

    


    var contact = 
      {
        subject: $("#nameContact").val(),
        mess: $("#emailContact").val(),
        email: $("#messageContact").val()   
      };

      var currentURL = window.location.origin;

      $.post( currentURL + "/", contact)
        .done(function(data){
          //console.log(data);
        
        })
      $('#myModal').modal("show");
      $('#nameContact').val("");
      $('#emailContact').val("");
      $('#messageContact').val("");
    
    return false;

    });
