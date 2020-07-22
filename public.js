    //登录和注册
    $(function () {
        // 1.注册
        $(".sign").click(function () {
            $("#hidden").fadeIn();
            $(".sign_up").fadeIn();
        })
        // 2.登录
        $(".land").click(function () {
            $("#hidden").fadeIn();
            $(".login").fadeIn();
        })

        //3页面关闭close_btn,点击.hidden达到关闭效果
        $(".close_btn,#hidden").click(function () {
            $("#hidden").fadeOut();
            $(".sign_up").fadeOut();
            $(".login").fadeOut();
            $(".details").fadeOut();
            $(".nub").prop("value", 1)
        })
        //4.搜索框回车搜索
        $(".page_seach").keyup(
            function (e) {
                if (e.keyCode == 13) {
                    alert("正在搜索......");
                }
            }
        )
        //5.横向导航栏切换
        // $(".nav li").mouseenter(function () {
        //     $(this).addClass("current").siblings().removeClass();
        // })
        // $(".nav li").mouseleave(function () {
        //     $(this).removeClass();

        // })


        //6.点击li获取食物详情
        $(".detail").click(function () {
            //淡入
            $("#hidden").fadeIn();
            $(".details").fadeIn();
            //使表单到达用户点击处
            $(".details").css("top", $(document).scrollTop() + 100 + "px")
        })

        //6.1通过btn加减数据
        $(".details_msg button").click(function () {
            let nub = $(this).siblings(".nub").prop("value");
            console.log(nub);
            let zhi = $(this).attr("data-change");
            if ((nub - 0) >= 1) {
                $(this).siblings(".nub").prop("value", (nub - 0) + (zhi - 0));
            } else {
                alert("至少选择1");
                $(this).siblings(".nub").prop("value", 1);
            }
        })


    })