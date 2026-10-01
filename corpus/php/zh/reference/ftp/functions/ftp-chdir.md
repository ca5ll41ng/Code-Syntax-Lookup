---
id: "zh-php-function-function-ftp-chdir"
language: "php"
lang: "zh"
category: "function"
name: "ftp_chdir"
title: "在 FTP 服务器上改变当前目录"
signature: "bool ftp_chdir(FTP\\Connection $ftp, string $directory)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-chdir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在 FTP 服务器上改变当前目录

## 说明

```php
bool ftp_chdir(FTP\Connection $ftp, string $directory)
```

将当前目录切换为指定的目录。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$directory`** — 目标目录。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。如果切换目录失败，PHP 还会发出一条警告。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_chdir()` 例子**

```php


<?php

// set up basic connection
$ftp = ftp_connect($ftp_server); 

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass); 

// check connection
if ((!$ftp) || (!$login_result)) {
    die("FTP connection has failed !");
}

echo "Current directory: " . ftp_pwd($ftp) . "\n";

// try to change the directory to somedir
if (ftp_chdir($ftp, "somedir")) {
    echo "Current directory is now: " . ftp_pwd($ftp) . "\n";
} else { 
    echo "Couldn't change directory\n";
}

// close the connection
ftp_close($ftp);
?>

    
```

## 参见

`ftp_cdup()` `ftp_pwd()`
