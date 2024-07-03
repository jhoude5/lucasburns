  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          document.getElementById("myBtn").style.display = "block";
      } else {
          document.getElementById("myBtn").style.display = "none";
      }
  }
    
    $('#myBtn').on('click', function (e) {
          e.preventDefault();
          $('html,body').animate({
              scrollTop: 0
          }, 700);
      });
      
    
        var blogDate = document.getElementById("blog-date").innerHTML;
        var oldDate = Date.parse(blogDate);
        var date = new Date(oldDate).toLocaleDateString("en-US");
        document.getElementById("blog-date").innerHTML = date;
    

    function mobileFunction() {
        var x = document.getElementById("myLinks");
        var close = document.getElementById("mobile-close-icon");
        var open = document.getElementById("mobile-open-icon");
        if (x.style.display === "block") {
          x.style.display = "none";
          open.style.display = "block";
          close.style.display = "none";
        } else {
          x.style.display = "block";
          open.style.display = "none";
          close.style.display = "block";
          
        }
        
      }