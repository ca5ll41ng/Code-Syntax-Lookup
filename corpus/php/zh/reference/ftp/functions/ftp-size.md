---
id: "zh-php-function-function-ftp-size"
language: "php"
lang: "zh"
category: "function"
name: "ftp_size"
title: "返回指定文件的大小"
signature: "int ftp_size(FTP\\Connection $ftp, string $filename)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回指定文件的大小

## 说明

```php
int ftp_size(FTP\Connection $ftp, string $filename)
```

`ftp_size()` 函数返回指定文件的大小（以字节为单位）。

> 不是所有服务器都支持该功能。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$filename`** — 远程文件。

## 返回值

成功时返回文件大小，错误返回 -1。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_size()` 示例**

```php


<?php

$file = 'somefile.txt';

// 简单基本连接
$ftp = ftp_connect($ftp_server);

// 使用用户名和密码进行登录
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// 获取 $file 文件大小
$res = ftp_size($ftp, $file);

if ($res != -1) {
    echo "size of $file is $res bytes";
} else {
    echo "couldn't get the size";
}

// 关闭连接
ftp_close($ftp);

?>

    
```

## 参见

`ftp_rawlist()`
