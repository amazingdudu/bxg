define(["jquery"], function ($) {
    $("#loginForm").on("submit", function () {
        var formData = $(this).serialize();
        //console.log(formData);
        $.ajax({
            url: "/api/login",
            type: "post",
            data: formData,
            success: function (info) {
                if (info.code == 404) {
                    alert("用户名或密码错误!")
                }
                if (info.code == 200) {
                    alert(info.msg);
                    $.cookie("userInfo", JSON.stringify(info.result), {
                        expires: 1,
                        path: "/"
                    });
                    location.href = "/";
                }
            }
        });
        return false;
    });
});