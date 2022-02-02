$("#menu-button").click(function(){
  $(this).toggleClass("active");
  $("#line-1").toggleClass("active");
  $("#line-2").toggleClass("active");
  $("#line-3").toggleClass("active");
  $("#menu").slideToggle("slow");
});
    
 // Top Naivgation Start  

$(document).ready(function(){
    if($(window).width() > 480) {
        $("#topnav").hide();
        $("#menuicon").hide();
        $("#topnav").delay(1000).fadeIn(1000);
        $("#topnav").delay(1000).fadeOut(1000 , function(){
            $("#menuicon").fadeIn(2500);
        });

        $("#menuicon").mouseenter(function(){
            $("#menuicon").fadeOut(100);
            $("#topnav").fadeIn(1000);
        });

        $("#topnav").mouseleave(function(){
            $("#menuicon").fadeIn(2500);
            $("#topnav").fadeOut(500);
        });
    };  
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50) {
        document.getElementById("menuicon").style.left = "10px";
    } else {
        document.getElementById("menuicon").style.left = "46.5%";
    }
}

// Top Navigation End 
        
    //$(document).scroll(function() {
    //if ($(document).scrollTop() > 85) {
      //$("#topnav").slideDown();
   // } //else {
      //$(".topbar").hide();
    //}
  //});

// Index Page Pictures Start

$(document).ready(function(){
    
        $("#text1").hide();
    $("#pic1").hover(function(){
        $("#bobm").toggle();
        $("#text1").toggle();   
    });
    
        $("#text2").hide();
    $("#pic2").hover(function(){    
        $("#leep").toggle();
        $("#text2").toggle();     
    });
    
        $("#text3").hide();
    $("#pic3").hover(function(){    
        $("#sisnanc").toggle();
        $("#text3").toggle();     
    });
    
         $("#text4").hide();
    $("#pic4").hover(function(){    
        $("#spice").toggle();
        $("#text4").toggle();     
    });
    
         $("#text5").hide();
    $("#pic5").hover(function(){    
        $("#vybzcar").toggle();
        $("#text5").toggle();     
    });
    
         $("#text6").hide();
    $("#pic6").hover(function(){    
        $("#movad").toggle();
        $("#text6").toggle();     
    });
    
         $("#text7").hide();
    $("#pic7").hover(function(){    
        $("#scient").toggle();
        $("#text7").toggle();     
    });
    
         $("#text8").hide();
    $("#pic8").hover(function(){    
        $("#beaniem").toggle();
        $("#text8").toggle();     
    });
    
         $("#text9").hide();
    $("#pic9").hover(function(){    
        $("#ritam").toggle();
        $("#text9").toggle();     
    });
    
         $("#text10").hide();
    $("#pic10").hover(function(){    
        $("#countl").toggle();
        $("#text10").toggle();     
    });
    
         $("#text11").hide();
    $("#pic11").hover(function(){    
        $("#belafonte").toggle();
        $("#text11").toggle();     
    });
    
         $("#text12").hide();
    $("#pic12").hover(function(){    
        $("#lordt").toggle();
        $("#text12").toggle();     
    });   
});

// Index Page Pictures End

// Education Page Hovers Start

$(document).ready(function(){    
    $("#influenceinfo").hide();
     $("#influence").hover(function(){
      $("#influenceinfo").toggle();
    });    
});

$(document).ready(function(){   
    $("#influenceinfo2").hide();
     $("#influence2").hover(function(){  
      $("#influenceinfo2").toggle();
    });   
});

$(document).ready(function(){
    $("#influenceinfo3").hide();
     $("#influence3").hover(function(){
        $("#influenceinfo3").toggle();   
    });   
});

$(document).ready(function(){
    $("#influenceinfo4").hide();
     $("#influence4").hover(function(){
        $("#influenceinfo4").toggle();   
    });   
});

// Education Page Hovers End 

// About Page Stacks Hovers Start

$(document).ready(function(){
    
    $("#topinfo").hide();
    $("#waveform1").hide();
    $("#top1 , #top2").hover(function(){ 
        $("#topinfo").toggle();
        $("#waveform1").toggle(); 
        
    });
    
    $("#top1 , #top2").mouseenter(function(){ 
        var audio = $("#topinfo").find('audio')[0];
        audio.currentTime = 0;
        audio.play();
    });
    
    $("#top1 , #top2").mouseleave(function(){ 
        var audio = $("#topinfo").find('audio')[0];
        audio.pause();
    });
});

$(document).ready(function(){
    
    $("#middleinfo").hide();
    $("#waveform2").hide(); 
    $("#middle1 , #middle2").hover(function(){ 
        $("#middleinfo").toggle();
        $("#waveform2").toggle(); 
    });
    
        $("#middle1 , #middle2").mouseenter(function(){ 
        var audio = $("#middleinfo").find('audio')[0];
        audio.currentTime = 0;
        audio.play();
    });
    
    $("#middle1 , #middle2").mouseleave(function(){ 
        var audio = $("#middleinfo").find('audio')[0];
        audio.pause();
    });
});

$(document).ready(function(){
    
    $("#bottominfo").hide();
    $("#waveform3").hide();
    $("#bottom1 , #bottom2").hover(function(){ 
        $("#bottominfo").toggle();
        $("#waveform3").toggle(); 
    });
        $("#bottom1, #bottom2").mouseenter(function(){ 
        var audio = $("#bottominfo").find('audio')[0];
        audio.currentTime = 0;
        audio.play();
    });
    
    $("#bottom1, #bottom2").mouseleave(function(){ 
        var audio = $("#bottominfo").find('audio')[0];
        audio.pause();
    });
});

// About Page Stacks Hovers End

// About Page Decks Hovers Start

$(document).ready(function(){
    $("#mixerinfo").hide();
        $("#mixer , #mixer2").hover(function(){
            $("#mixerinfo").toggle();              
    });
});

$(document).ready(function(){    
    $("#record").hide();
    $("#left_deck").hover(function(){ 
        $("#record").toggle();
    });
    
    var raudio;
    
    $("#left_deck, #left_deck2, #right_deck").mouseenter(function(){
        var randomaudioindex = Math.round(Math.random() * 5);
        raudio = $("#decks").find("audio")[randomaudioindex];
        console.log(raudio);
        raudio.currentTime = 0;
        raudio.play();
    });
    
    $("#left_deck, #right_deck").mouseleave(function(){ 
        raudio.pause();
    }); 
});

$(document).ready(function(){
    $("#record2").hide();
    $("#right_deck").hover(function(){ 
        $("#record2").toggle();
    });   
});

$(document).ready(function(){   
    $("#record").hide(); 
    $("#left_deck2").hover(function(){ 
        $("#record").toggle();
    });   
});

// About Page Decks Hovers End

$(document).ready(function(){
   
    $("#contactreasons ul").hide();
    $("#contactreasons p").click(function(){
        $("#contactreasons ul").slideDown(1000);
    });
});