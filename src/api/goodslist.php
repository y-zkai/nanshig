<?php
    
    include 'connect.php';

    $pageNo = $_GET['pageNo'] ? $_GET['pageNo'] : null;
    $qty = $_GET['qty'] ? $_GET['qty'] : null;

    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');

    //编写sql语句
    $sql = 'select * from data';

    //获取查询结果集
    $result = $conn->query($sql);

    //使用查询结果集
    //得到数组
    $row = $result->fetch_all(MYSQLI_ASSOC);



    // 截取需要的数据
    $res = array(
        "total" => count($row), //长度
        "data" => array_slice($row,($pageNo-1)*$qty,$qty),
        "pageNo" => $pageNo,
        "qty" => $qty
    );
    //释放查询结果集，避免资源浪费
    $result->close();

    // 把结果输出到前台，数组装字符串
    echo json_encode($res,JSON_UNESCAPED_UNICODE);

    // 关闭数据库，避免资源浪费
    $conn->close();
?>