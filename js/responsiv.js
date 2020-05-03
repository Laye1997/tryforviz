$(function (){
   $('.side_bar_item > div').click(function (){
       $('.sub_side_bar:visible').hide();
       $(this).find('+ .sub_side_bar').show(); 
   });
   
   
   isSideBarHidden = true;
   sideWidth = $('.side_bar').width();
   $('.side_menu').click(function (){
       if(isSideBarHidden){
           $('.side_bar').css('width','0px');
           $('.side_bar').show();
           $('.side_bar').animate({
                width: sideWidth
            }, 500);
            isSideBarHidden = false;
       }
        else{
            $('.side_bar').animate({
                width: '0px'
            }, 500,function (){
                $('.side_bar').hide();
            });
            isSideBarHidden = true;
            
        }
   });
   
   isNavBarHidden = true;
   navHeigth = $('.nav_bar').height();
   $('.navs_menu').click(function (){
       if(isNavBarHidden){
           $('.nav_bar').css('height','0px');
           $('.nav_bar').show();
           $('.nav_bar').animate({
                height: navHeigth
            }, 500);
            isNavBarHidden = false;
       }
        else{
            $('.nav_bar').animate({
                height: '0px'
            }, 500,function (){
                $('.nav_bar').hide();
            });
            isNavBarHidden = true;
            
        }
   });
   isSearchBoxHidden = true;
   $('.search_menu').click(function (){
       if(isSearchBoxHidden){
            $('.search_box').fadeIn(500);
            isSearchBoxHidden = false;
       }
        else{
            $('.search_box').fadeOut(500);
            isSearchBoxHidden = true;
        }
       
   });
});