define(["jquery", "template", "nprogress", "cookie"], function ($, template, NProgress) {
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

    //进度条，loading图片

    $(document).ajaxStart(function () {
        $("#loading").show();
        NProgress.start();
    }).ajaxStop(function () {
        $("#loading").fadeOut();
        NProgress.done(true);
    });

    //课程管理下拉菜单

    $("#toggle-btn").click(function (e) {
        // e.preventDefault();
        $(".user-dropdown-menu").stop().slideToggle();
    });

    //退出
    $(".logout").click(function () {
        $.ajax({
            url: "/api/logout",
            type: "post",
            date: null,
            success: function (logoutInfo) {
                console.log(logoutInfo);
                if (logoutInfo.code == 200) {

                    alert(logoutInfo.msg);
                    $.removeCookie("userInfo", {path: '/'});
                    location.href = "/login";
                }
            }
        });

    });

});











