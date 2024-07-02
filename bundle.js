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
      
    
        // var blogDate = document.getElementById("blog-date").innerHTML;
        // var elms = document.querySelectorAll("[id='blog-date']").innerHTML;
        // for(var i = 0; i < elms.length; i++) {
        //     console.log(elms[i]);
        //     var oldDate = Date.parse(elms[i]);
        //     var date = new Date(oldDate).toLocaleDateString("en-US");
        //     // console.log(elms[i]);
        //     elms[i].innerHTML = date;
        // }
            

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