document.writeln("<!--侧边栏-->");
document.writeln("<div class=\'sidebar\'>");
document.writeln("    <!--用户信息-->");
document.writeln("    <div class=\'user-info\'>");
document.writeln("        <!--头像-->");
document.writeln("        <div class=\'user-pic center-block\'>");
document.writeln("            <img src=\'../../uploads/xj.png\' alt=\'\'>");
document.writeln("        </div>");
document.writeln("        <!--用户名-->");
document.writeln("        <div class=\'uesr-name\'>");
document.writeln("            <span>滑稽</span>");
document.writeln("        </div>");
document.writeln("    </div>");
document.writeln("    <!--菜单列表-->");
document.writeln("    <div class=\'menu\'>");
document.writeln("        <ul>");
document.writeln("            <li>");
document.writeln("                <a href=\'../index/index.html\'><i class=\'fa fa-dashboard\'></i>仪表盘</a>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("                <a href=\'./teacher.html\' class=\'current\'>");
document.writeln("                    <i class=\'fa fa-mortar-board\'></i>讲师管理");
document.writeln("                </a>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("                <a href=\'../course/category.html\'><i class=\'fa fa-indent\'></i>分类管理</a>");
document.writeln("            </li>");
document.writeln("            <!--有下拉菜单项-->");
document.writeln("            <li class=\'user-dropdown\'>");
document.writeln("                <a href=\'javascript:;\' id=\'toggle-btn\'><i class=\'fa fa-th\'></i>课程管理<i class=\'fa fa-angle-right arrow-icon\'></i></a>");
document.writeln("                <!--下拉菜单-->");
document.writeln("                <ul class=\'user-dropdown-menu\'>");
document.writeln("                    <li><a href=\'../course/create.html\'>课程添加</a></li>");
document.writeln("                    <li><a href=\'./list.html\'>课程列表</a></li>");
document.writeln("                </ul>");
document.writeln("            </li>");
document.writeln("        </ul>");
document.writeln("    </div>");
document.writeln("</div>");
document.writeln("<!--顶部固定导航-->");
document.writeln("<nav class=\'navbar navbar-default navbar-fixed-top\'>");
document.writeln("    <div class=\'container-fluid\'>");
document.writeln("        <div class=\'navbar-header\'>");
document.writeln("            <a class=\'navbar-brand\' href=\'#\'><i class=\'fa fa-navicon\'></i></a>");
document.writeln("        </div>");
document.writeln("        <div class=\'collapse navbar-collapse\' id=\'bs-example-navbar-collapse-1\'>");
document.writeln("            <ul class=\'nav navbar-nav navbar-right\'>");
document.writeln("                <li><a href=\'#\'><i class=\'fa fa-user\'></i> 个人中心</a></li>");
document.writeln("                <li><a href=\'../index/login.html\'><i class=\'fa fa-sign-out\'> 退出</i></a></li>");
document.writeln("                <li><a href=\'#\'><i class=\'fa fa-tasks\'></i></a></li>");
document.writeln("            </ul>");
document.writeln("        </div>");
document.writeln("    </div>");
document.writeln("</nav>");