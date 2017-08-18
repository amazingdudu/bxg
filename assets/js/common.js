$(function () {
    //如果cookie中不存在 PHPSESSID
    if (!$.cookie("PHPSESSID") && location.pathname != "/login") {
        location.href = "/login";
    }

//读取cookie的值 加载用户信息

    var userInfo = JSON.parse($.cookie("userInfo") || "{}");

    var userInfoTemplate = '<div class="user-pic center-block">\n' +
        '            <img src="{{ tc_avatar || \'/assets/resources/default.png \'}}">\n' +
        '        </div>\n' +
        '        <div class="uesr-name">\n' +
        '            <span>{{ tc_name }}</span>\n' +
        '        </div>';

    var render = template.compile(userInfoTemplate); // 返回的是一个函数
    var html = render(userInfo);

    $(".user-info").html(html);
});


//课程管理下拉菜单
$(function () {
    $("#toggle-btn").click(function (e) {
        e.preventDefault();

        $(".user-dropdown-menu").stop().slideToggle();
    });
});


$(function () {
    //进度条
    NProgress.start();
    NProgress.done(true);

    //loading 图片

    $("#loading").fadeOut();

    //退出登录
    $(".logout").click(function () {
        $.ajax({
            url: "/api/logout",
            type: "post",
            date: null,
            success: function (logoutInfo) {
                console.log(logoutInfo);
                if (logoutInfo.code == 200) {

                    alert(logoutInfo.msg);
                    $.removeCookie("userInfo",{ path: '/' });
                    location.href = "/login";
                }
            }
        });

    });

});








