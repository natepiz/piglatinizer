//this helps your jQuery to work. Write all of your JS code in this function.

$( "document" ).ready(function() {



  $("button").click(
      function() {
       let word =   $("input").val();
       $(".output").text(word + "ay");
       let vowls = ["a","e","i","o","u","and sometimes y"]
      });



});
