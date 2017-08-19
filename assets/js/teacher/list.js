define(["jquery", "template"], function ($, template) {
    //获取讲师列表
    $.ajax({
        url: "/api/teacher",
        type: "get",
        data: null,
        success: function (data) {
            console.log(data);
            template.defaults.imports.showStatus = function (status) {
                return status == '0' ? '启用' : '注销';
            };
            var html = template("teacherListTemplate", {
                list: data.result
            });
            $("#teacherList").html(html);
        }
    });
    //查看讲师


    $("#teacherList").on("click", ".view-profile", function () {
        var tc_id = parseInt($(this).parent().attr("data-id"));
        $.ajax({
            url: "/api/teacher/view",
            type: "get",
            data: {tc_id: tc_id},
            success: function (data) {
                console.log(data);
                data.result.tc_hometown = data.result.tc_hometown.replace(/\|/g," ");
                var html = template("teacherInfoTemplate", data.result);

                $("#teacherInfo").html(html);
            }
        });
    });

    $("#teacherList").on("click", ".logout-profile", function () {
        var _this = $(this);
        var tc_id = parseInt(_this.parent().attr("data-id"));
        var tc_status = parseInt(_this.attr("data-status"));

        //console.log(tc_status);
        $.ajax({
            url: "/api/teacher/handle",
            type: "post",
            data: {
                tc_id: tc_id,
                tc_status: tc_status
            },
            success: function (data) {
                if (data.code == 200) {
                    _this.attr("data-status", data.result.tc_status)
                        .html(_this.attr("data-status") == 1 ? "注销" : "启用");
                }

            }
        });
    });


});

