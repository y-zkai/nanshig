<?php
    // 引入connect.php
    include 'connect.php';
    
    $username = isset($_GET['username']) ? $_GET['username'] : null; 

    // 查找数据库中是否存在同名用户
    $sql = "select * from username where name='$username'";

    // 执行sql语句
    $result = $conn->query($sql);


    if($result->num_rows>0){
        echo "no";
    }else{
        echo "yes";
    }

?>