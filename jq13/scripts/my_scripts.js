$(document).ready(function(){

  var isVegan = false;
  var $f, $m;

  $("button#vegOn").click(function(){
    if (!isVegan){

      $f = $(".fish").parent().parent().detach();


      $(".hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");
      $(".portobello").parent().parent().addClass("veg_leaf");

      $(".meat").after("<li class='tofu'><em>Tofu</em></li>");
      $m = $(".meat").detach();
      $(".tofu").parent().parent().addClass("veg_leaf");

      isVegan = true;
    }// end if
  });//end veg button

  $("button#restoreMe").click(function(){

    if (isVegan){
      $(".portobello").parent().parent().removeClass("veg_leaf");
      $(".portobello").replaceWith("<li class='hamburger'>Hamburger</li>");

      $(".menu_entrees li").first().before($f);

      $(".tofu").parent().parent().removeClass("veg_leaf");
      $(".tofu").each( function(i){
        $(this).after($m[i]);
      });//end each
      $(".tofu").remove();
      isVegan = false;
    }//end if
  });//end restoreMe button
});//end doc ready
