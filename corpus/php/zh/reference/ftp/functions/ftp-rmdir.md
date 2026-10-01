---
id: "zh-php-function-function-ftp-rmdir"
language: "php"
lang: "zh"
category: "function"
name: "ftp_rmdir"
title: "删除目录"
signature: "bool ftp_rmdir(FTP\\Connection $ftp, string $directory)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-rmdir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 删除目录

## 说明

```php
bool ftp_rmdir(FTP\Connection $ftp, string $directory)
```

删除 FTP 服务器上 `$directory` 参数指定的目录。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$directory`** — 要删除的目录。必须是一个空目录的绝对路径或相对路径。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_rmdir()` 示例**

```php


<?php
$dir = 'www/';

// 简单基本连接
$ftp = ftp_connect($ftp_server);

// 使用用户名和密码进行登录
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// 尝试删除 $dir 目录
if (ftp_rmdir($ftp, $dir)) {
    echo "Successfully deleted $dir\n";
} else {
    echo "There was a problem while deleting $dir\n";
}

ftp_close($ftp);

?>

    
```

## 参见

`ftp_mkdir()`
