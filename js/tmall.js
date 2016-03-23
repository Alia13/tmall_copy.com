$(document).ready(function(){

    //列表切换
   (function(){
        var oSide = $(".nbSide li");
        var osMain = $(".nbMain");

        oSide.each(function(index) {
            $(this).hover(function() {
                $(this).css('backgroundColor', 'white');
                $(this).children('a').css('backgroundColor', 'white');

                osMain.css('display', 'none');
                osMain.eq(index).fadeIn("fast");

            }, function() {
                $(this).css('backgroundColor', '#eeebe2');
                $(this).children('a').css('backgroundColor', '#eeebe2');

                osMain.css('display', 'none');
            });
        });

        osMain.each(function(index) {
            $(this).hover(function() {
                $(this).css('display', 'block');
            }, function() {
                $(this).css('display', 'none');
            });
        });

   })();

   //轮播
   (function(){
        var oDiv = $(".nImgs");
        var oImgs = $(".nImgs").children('img');
        var oContr = $(".controls").children('span');
        var iNow = 0;
        var timer = null;

        fadeImg();
        oContr.click(function(){
            iNow = $(this).index();
            fadeImg();
            // console.log(iNow);
        });
        // oDiv.hover(function(){ clearInterval(timer);},autoPlay);

        function autoPlay(){
            timer = setInterval(function(){
                iNow++;
                iNow%=oContr.length;
                fadeImg();
            }, 5000);
        }
        autoPlay();

        function fadeImg(){
            oImgs.each(function (i){
                if ( i != iNow ) {
                    oImgs.eq(i).fadeOut().css('zIndex', 1);
                    oContr.eq(i).removeClass('cur');

                } else {
                    oImgs.eq(i).fadeIn().css('zIndex', 2);
                    oContr.eq(i).addClass('cur');
                }
            });
        }

   })();

   //猫图标滑动
   (function(){
        $(".ntc-tag").find('li').hover(function() {
            $(this).children(".mao").css('zIndex', '1');;
            $(this).children(".mao").animate({"top":"-10px"});
        }, function() {
            $(this).children(".mao").animate({"top":"0px"});
            $(this).children(".mao").css('zIndex', '-1');
        });
   })();

   //输入框
   (function(){
        $(".srhText-input").focus(function(event) {
            var arrText = $(this).val();
            // console.log(arrText);
            if ( arrText=="特步321跑步节" ) {
                $(this).attr('value', '');
                $(this).attr('placeholder', '特步321跑步节');
            };
        });

        $(".srhText-input").blur(function(){
             $(this).attr('value', '特步321跑步节');
        });
   })();

});