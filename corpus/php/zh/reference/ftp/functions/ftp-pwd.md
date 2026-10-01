---
id: "zh-php-function-function-ftp-pwd"
language: "php"
lang: "zh"
category: "function"
name: "ftp_pwd"
title: "返回当前目录名"
signature: "string|false ftp_pwd(FTP\\Connection $ftp)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-pwd.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回当前目录名

## 说明

```php
string|false ftp_pwd(FTP\Connection $ftp)
```

## 参数

- **`$ftp`** — `FTP\Connection` 实例。

## 返回值

返回当前目录名称，发生错误则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_pwd()` 示例**

```php


<?php

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// change directory to public_html
ftp_chdir($ftp, 'public_html');

// print current directory
echo ftp_pwd($ftp); // /public_html

// close the connection
ftp_close($ftp);
?>

    
```

## 参见

`ftp_chdir()` `ftp_cdup()`
