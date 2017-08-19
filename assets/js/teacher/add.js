define(["jquery","template","datetimerpicker","datetimerpickerCN"],function ($,template) {
    //bootstrap时间控件
    $("#datetimepicker").datetimepicker({
            format: 'yyyy-mm-dd',  //日期格式   //默认 dd--mm--yyyy
            autoclose: true,    //自动关闭  -- 默认值fasle
            language: 'zh-CN',  //语言      --默认英文
            todayBtn: true,    //显示今天按钮   -- 默认值false
            todayHighlight: true,  //当天日期高亮显示  --默认值false
            keyboardNavigation: true,  //是否允许通过键盘方向键更改日期
            pickerPosition: "bottom-right", //默认值: 'bottom-right' (还支持 : 'bottom-left','top-left','top-right')
            minView: 'month', //所能够提供的最精确的时间选择视图。 --默认值'hour'
            initialDate: new Date()//初始化当前日期  可设置"2010/01/01"格式
        }
    );

    $("#addForm").on("submit",function () {
        var formData = $(this).serialize();
        console.log(formData);
        $.ajax({
            url:"/api/teacher/add",
            type:"post",
            data:formData,
            success:function(data){
                if(data.code==200){
                    alert("添加成功");
                }
            }
        });
        return false;
    });



    if(location.search.length>0) {
        var tc_id = location.search.substring(1).split("=")[1];
        $.ajax({
            url: "/api/teacher/edit",
            type:"get",
            data:{tc_id:tc_id},
            success:function (data) {
                console.log(data);
                var html = template("teacherEditTemplate",data);

                $("#teacher-add-page").html(html);

            }
        });



};

});