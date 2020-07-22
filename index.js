$(function () {
    toggleTool();
    var flag = true;
    // 1.显示隐藏电梯
    var pageBody = $(".jinrituijian").offset().top;

    function toggleTool() {
        if ($(document).scrollTop() >= pageBody) {
            $(".main_right").fadeIn();
        } else {
            $(".main_right").fadeOut();
        }
    }
    $(window).scroll(function () {
        toggleTool();
        if (flag) {
            $(".page_body").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".main_right li").eq(i).addClass("current").siblings()
                        .removeClass();
                }
            })
        }
    })
    // 2.点击电梯到达相应位置（vue版）
    // const app = new Vue({
    //     el: ".main_right li",
    //     methods: {
    //         a1: function () {
    //             console.log($(this));
    //             flag = false;
    //             var current = $(".page_body").eq($(this).index()).offset().top;
    //             $("body,html").stop().animate({
    //                 scrollTop: current
    //             }, function () {
    //                 flag = true;
    //             });
    //             $(this).addClass("current").siblings().removeClass();
    //         },
    //     }

    // })
    // 2. 点击电梯到达相应位置(jq版)
    $(".main_right li").click(function () {
        flag = false;
        var current = $(".page_body").eq($(this).index()).offset().top;
        $("body,html").stop().animate({
            scrollTop: current
        }, function () {
            flag = true;
        });
        $(this).addClass("current").siblings().removeClass();
    })

})