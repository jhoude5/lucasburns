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
      
    if(document.getElementById("blog-date") != null){
        var blogDate = document.getElementById("blog-date").innerHTML;
        var oldDate = Date.parse(blogDate);
        var date = new Date(oldDate).toLocaleDateString("en-US");
        document.getElementById("blog-date").innerHTML = date;
    }