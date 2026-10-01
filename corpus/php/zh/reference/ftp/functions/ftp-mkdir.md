---
id: "zh-php-function-function-ftp-mkdir"
language: "php"
lang: "zh"
category: "function"
name: "ftp_mkdir"
title: "建立新目录"
signature: "string|false ftp_mkdir(FTP\\Connection $ftp, string $directory)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-mkdir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 建立新目录

## 说明

```php
string|false ftp_mkdir(FTP\Connection $ftp, string $directory)
```

在 FTP 服务器上，创建指定的目录 `$directory`。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$directory`** — 要创建的目录名。

## 返回值

如果成功返回新建的目录名，发生错误时返回 `false`。

## 错误／异常

如果目录已经存在或相关权限阻止创建目录，则发出 `E_WARNING` 级别错误。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_mkdir()` 示例**

```php


<?php

$dir = 'www';

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// try to create the directory $dir
if (ftp_mkdir($ftp, $dir)) {
 echo "successfully created $dir\n";
} else {
 echo "There was a problem while creating $dir\n";
}

// close the connection
ftp_close($ftp);
?>

    
```

## 参见

`ftp_rmdir()`
