---
id: "zh-php-function-function-ftp-connect"
language: "php"
lang: "zh"
category: "function"
name: "ftp_connect"
title: "建立新 FTP 连接"
signature: "FTP\\Connection|false ftp_connect(string $hostname, int $port = 21, int $timeout = 90)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-connect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 建立新 FTP 连接

## 说明

```php
FTP\Connection|false ftp_connect(string $hostname, int $port = 21, int $timeout = 90)
```

`ftp_connect()` 将会建立 FTP 连接到指定的服务器 `$hostname`。

## 参数

- **`$hostname`** — 要连接的服务器地址。此参数后面不应以斜线结尾，前面也不需要用 `ftp://` 开头。
- **`$port`** — 为要连接到的 FTP 器的端口号，如果没有设置或者为 0，则会使用默认的端口 21 来连接。
- **`$timeout`** — 用来设置网络传输的超时时间限制。如果此选项留空，则默认的值为 90 秒。超时时间可以在任何时候通过函数 `ftp_set_option()` 及 `ftp_get_option()` 来改变和获取。

## 返回值

成功时返回 `FTP\Connection` 实例， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在返回 `FTP\Connection` 实例；之前返回 `resource`。 |

## 示例

**`ftp_connect()` 示例**

```php


<?php

$ftp_server = "ftp.example.com";

// set up a connection or die
$ftp = ftp_connect($ftp_server) or die("Couldn't connect to $ftp_server"); 

?>
  
    
```

## 参见

`ftp_close()` `ftp_ssl_connect()`
