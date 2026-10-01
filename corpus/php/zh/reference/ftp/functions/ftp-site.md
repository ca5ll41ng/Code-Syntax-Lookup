---
id: "zh-php-function-function-ftp-site"
language: "php"
lang: "zh"
category: "function"
name: "ftp_site"
title: "向服务器发送 SITE 命令"
signature: "bool ftp_site(FTP\\Connection $ftp, string $command)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-site.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向服务器发送 SITE 命令

## 说明

```php
bool ftp_site(FTP\Connection $ftp, string $command)
```

`ftp_site()` 函数向 FTP 服务器发送指定的命令。

`SITE` 命令是非标准化的，不同的服务器不尽相同。主要用于处理文件权限以及组成员等事情。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$command`** — SITE 命令。注意本参数没有经过处理，在文件名有存在空格或其它特殊字符的情况下可能会有问题。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**向 FTP 服务器发送 SITE 命令**

```php


<?php
// 连接 FTP 服务器
$ftp = ftp_connect('ftp.example.com');
if (!$ftp) die('无法连接到 ftp.example.com');

// 使用用户 user 和密码 pass 登录服务器
if (!ftp_login($ftp, 'user', 'pass')) die('登录失败到 ftp.example.com');

// Issue: "SITE CHMOD 0600 /home/user/privatefile" command to ftp server
if (ftp_site($ftp, 'CHMOD 0600 /home/user/privatefile')) {
   echo "命令执行成功。\n";
} else {
   die('命令执行失败。');
}
?>

    
```

## 参见

`ftp_raw()`
