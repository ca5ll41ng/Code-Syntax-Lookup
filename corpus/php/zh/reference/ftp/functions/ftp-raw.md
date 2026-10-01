---
id: "zh-php-function-function-ftp-raw"
language: "php"
lang: "zh"
category: "function"
name: "ftp_raw"
title: "向 FTP 服务器发送命令"
signature: "array|null ftp_raw(FTP\\Connection $ftp, string $command)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-raw.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向 FTP 服务器发送命令

## 说明

```php
array|null ftp_raw(FTP\Connection $ftp, string $command)
```

向 FTP 服务器发送任意 `$command`。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$command`** — 要执行的命令。

## 返回值

将服务器的响应以字符串数组的形式返回，失败时为 `null`。对于响应内容既不做解析处理，`ftp_raw()` 也不检测命令是否执行成功。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**使用 `ftp_raw()` 登录远程 FTP 服务器**

```php


<?php
$ftp = ftp_connect("ftp.example.com");

/* 等同于
   ftp_login($ftp, "joeblow", "secret"); */
ftp_raw($ftp, "USER joeblow");
ftp_raw($ftp, "PASS secret");
?>

    
```

## 参见

`ftp_exec()`
