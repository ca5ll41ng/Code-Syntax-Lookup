---
id: "zh-php-function-function-ftp-login"
language: "php"
lang: "zh"
category: "function"
name: "ftp_login"
title: "登录 FTP 服务器"
signature: "bool ftp_login(FTP\\Connection $ftp, string $username, string $password)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-login.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 登录 FTP 服务器

## 说明

```php
bool ftp_login(FTP\Connection $ftp, string $username, string $password)
```

登录入指定 FTP 连接。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$username`** — 用户名（`USER`）。
- **`$password`** — 密码（`PASS`）。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 如果登录失败，PHP 会抛出一个警告。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_login()` 示例**

```php


<?php
                     
$ftp_server = "ftp.example.com";
$ftp_user = "foo";
$ftp_pass = "bar";

// 设置一个连接或失败时退出
$ftp = ftp_connect($ftp_server) or die("Couldn't connect to $ftp_server"); 

// 尝试登录
if (@ftp_login($ftp, $ftp_user, $ftp_pass)) {
    echo "Connected as $ftp_user@$ftp_server\n";
} else {
    echo "Couldn't connect as $ftp_user\n";
}

// 关闭连接
ftp_close($ftp);  
?>
  
    
```
