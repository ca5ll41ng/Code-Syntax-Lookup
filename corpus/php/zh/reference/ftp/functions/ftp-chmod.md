---
id: "zh-php-function-function-ftp-chmod"
language: "php"
lang: "zh"
category: "function"
name: "ftp_chmod"
title: "设置 FTP 服务器上的文件权限"
signature: "int|false ftp_chmod(FTP\\Connection $ftp, int $permissions, string $filename)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-chmod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 FTP 服务器上的文件权限

## 说明

```php
int|false ftp_chmod(FTP\Connection $ftp, int $permissions, string $filename)
```

将服务器上的文件权限设置为 `$permissions` 指定的值。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$permissions`** — 要设置的权限值， *八进制* 值。
- **`$filename`** — 远程文件名称。

## 返回值

操作成功返回文件新的权限，操作失败返回 `false` 。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_chmod()` 示例**

```php


<?php
$file = 'public_html/index.php';

// 建立基础连接
$ftp = ftp_connect($ftp_server);

// 使用用户名和密码登录
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// 尝试设置 $file 的权限为 644
if (ftp_chmod($ftp, 0644, $file) !== false) {
 echo "$file chmoded successfully to 644\n";
} else {
 echo "could not chmod $file\n";
}

// 关闭连接
ftp_close($ftp);
?>

    
```

## 参见

`chmod()`
