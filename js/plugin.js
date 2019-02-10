/*global console*/

$(document).ready(function(){


    // It’s a Phone or a tablet.
    
    if($(window).width() < 767)
{  
    
    
    $(".right-button-show").click(function()    
                                  
    {
        $(".sidenav").css("margin-right", "0");
        $(".page").css("padding-right", "0px");
        
    });
    
    
    $("#top-li").click(function()
    {
      
        $(".sidenav").css("margin-right", "-100%");
        $(".page").css("padding-right", "0");

    });
    
}
    

else 
{ 
    
    // It’s a desktop/laptop.
    
    $(".right-button-show").click(function(){
      
        $(".sidenav").css("margin-right", "0px");
        $(".page").css("padding-right", "270px");
        $(".page-1").css("padding-right", "270px");
        $(".new-product").css("padding-right", "270px");
        $(".gallery-page").css("padding-right", "270px");

    });
    
    
    $("#top-li").click(function(){
      
        $(".sidenav").css("margin-right", "-250px");
        $(".page").css("padding-right", "20px");
        $(".page-1").css("padding-right", "20px");
        $(".new-product").css("padding-right", "20px");
        $(".gallery-page").css("padding-right", "20px");

    });    
}
 
   
    
    // start delete button 
    
    $(".gallery-item .left .value button").click(function(){
        
        $(this).parents(".gallery-page .gallery-item").remove();
        
    })
    
    // trigger mixitup 
    
    $("#container").mixItUp();
    
});
