// alert();
       document.getElementById("Discover-form").style.display="none";
       document.getElementById("back-btn").style.display="none";
       document.getElementById("back-button").style.display="none";
       
       document.getElementById("Discover-something")
           .addEventListener("click",function(){
                document.getElementById("Discover-form").style.display="block";
                document.getElementById("back-button").style.display="block";
               document.getElementById("back-btn").style.display="block";
               document.getElementById("main-discover").style.display="none";
               document.getElementById("nav-right-icon").style.display="none";
       })
       document.getElementById("back-btn")
       .addEventListener("click",function(){
           document.getElementById("nav-right-icon").style.display="block";
           document.getElementById("main-discover").style.display="block";
           document.getElementById("Discover-form").style.display="none";
           document.getElementById("back-button").style.display="none";
           document.getElementById("back-btn").style.display="none";
       })

