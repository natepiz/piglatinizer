//this helps your jQuery to work. Write all of your JS code in this function.

$( "document" ).ready(function() {



  $("button").click(

      function() {
       let word =   $("input").val();
       let FirstLetter = word.charAt(0);
       let n = word.length;
       let rest = word.slice(1, n);
       $(".output").text(rest+FirstLetter+"ay");
      });
});
