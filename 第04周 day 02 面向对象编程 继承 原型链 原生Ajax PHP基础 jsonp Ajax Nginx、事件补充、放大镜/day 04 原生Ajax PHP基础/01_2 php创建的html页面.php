<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <style>
            *{ padding: 0; }
            .menulist{ list-style:none; width:80px; border: 1px solid #ddd; border-bottom: none; }
            .menulist li { font-family: "微软雅黑"; border-bottom: dashed 1px gray; padding: 5px; }
        </style>
    </head>
    <body>
    <?php
        //假设我们从数据库取得了数据，存入了一个数组当中
        $arr = array("数码产品","生活家居","母婴用品","厨房用具");
    ?>
    <ul class="menulist">
    <?php for($i=0; $i<count($arr); $i++){ ?>
        <li><?php print $arr[$i]; ?></li>
    <?php } ?>


    </ul>
    </body>


</html>

<?php
    #注释;
    #php => 有数据库操作权限;  可以生成 html 但是无法操作;   实现的页面非常垃圾;
    #javascript => 数据来源都来自后台;  可以对浏览器和页面进行任意操作;  用户体验一级棒;
    
?>
