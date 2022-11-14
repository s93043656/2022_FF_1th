$(".Popupbtn").click(function() {
    $("div[id=" + $(this).attr("data-activity") +"]").fadeIn(200);
    });
$(".popup_close").click(function() {
    $(".mask").fadeOut(200);
});

$(".p20617").click(function(){
    $(".p20617").fadeOut(1000);
});
$(".p20618").click(function(){
    $(".p20618").fadeOut(1000);
});
$(".p20619").click(function(){
    $(".p20619").fadeOut(1000);
});
$(window).ready(function(){
    $(".footer").hide();
});

$("#footer00").click(function(){
    $(".footer").hide().fadeIn(200);
});

$("#footer01").click(function(){
    $(".footer").show().fadeOut(200);
});

// loading
$(window).load(function(){
    $('#loading').delay(500).fadeOut(1000);
});

// video
$(document).ready(function(){
    $('.video-box').delay(4000).fadeOut(1000);
});

// *****tabbox******
$(function(){
    var _showTab = 0;
    $('.actmainbox').each(function(){
        var $tab = $(this);
        var $defaultLi = $('ul.tab-title li', $tab).eq(_showTab).addClass('active');
        $($defaultLi.find('a').attr('href')).siblings().hide();

        $('ul.tab-title li', $tab).click(function() {
            var $this = $(this),
                _clickTab = $this.find('a').attr('href');
            $this.addClass('active').siblings('.active').removeClass('active');
            $(_clickTab).stop(false, true).fadeIn().siblings().hide();
            return false;
        })
    });
});

　　$(document).ready(function(){
    if($(window).width()<1200){
        $('#alert').fadeIn(200);
        var A=setTimeout(function(){BYE();},3000);
        function BYE()
        {
            $('#alert').fadeOut(200);
        };
    }
    else{
        $('#alert').fadeOut(200);
    }
    　　})
