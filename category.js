$(function () {
    var flag = true;
    var pageBody = $("h3").offset().top;
    $(window).scroll(function () {
        if (flag) {
            $("h3").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".main_left li").eq(i).addClass("current").siblings()
                        .removeClass();
                }
            })
        }
    })
    // 2.点击电梯到达相应位置
    $(".main_left li").click(function () {
        flag = false;
        var current = $("h3").eq($(this).index()).offset().top;
        $("body,html").stop().animate({
            scrollTop: current
        }, function () {
            flag = true;
        });
        $(this).addClass("current").siblings().removeClass();
    })

})