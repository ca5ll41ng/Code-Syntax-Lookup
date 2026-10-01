---
id: "zh-php-guide-ftp-examples"
language: "php"
lang: "zh"
category: "guide"
name: "ftp.examples"
title: "示例"
module: "ftp"
source_url: "https://www.php.net/manual/zh/ftp.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 示例

## 基本用法

**FTP 示例**

```php


<?php
// 建立基础连接
$ftp = ftp_connect($ftp_server); 

// 使用用户名和口令登录
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass); 

// 检查是否成功
if ((!$ftp) || (!$login_result)) { 
    echo "FTP connection has failed!";
    echo "Attempted to connect to $ftp_server for user $ftp_user_name"; 
    exit; 
} else {
    echo "Connected to $ftp_server, for user $ftp_user_name";
}

// 上传文件
$upload = ftp_put($ftp, $destination_file, $source_file, FTP_BINARY); 

// 检查上传结果
if (!$upload) { 
    echo "FTP upload has failed!";
} else {
    echo "Uploaded $source_file to $ftp_server as $destination_file";
}

// 关闭 FTP 连接
ftp_close($ftp); 
?>

    
```
