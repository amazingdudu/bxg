require.config({
    baseUrl: "/assets",
    paths: {
        //第三方库
        less: "libs/less/less",
        jquery: "libs/jquery/jquery",
        template: "libs/art-template/template-web",
        cookie: "libs/jquery-cookie/jquery.cookie",
        nprogress: "libs/nprogress/nprogress",
        bootstrap: "libs/bootstrap/js/bootstrap",
        datetimerpicker: "libs/bootstrap-datetimepicker/js/bootstrap-datetimepicker",
        datetimerpickerCN: "libs/bootstrap-datetimepicker/js/bootstrap-datetimepicker.zh-CN",
        echarts: "libs/echarts/echarts",


        common: "js/common",

        index: "js/index/index",
        login: "js/index/login",
        teacherList: "js/teacher/list",
        teacherAdd: "js/teacher/add",

    },
    shim: {
        bootstrap: {
            deps: ["jquery"],
            exports: "bootstrap"
        },
        datetimerpickerCN:{
            deps: ["datetimerpicker"],
            exports: "datetimerpickerCN"
        }
    }
});

require(["less", "common", "nprogress"]);