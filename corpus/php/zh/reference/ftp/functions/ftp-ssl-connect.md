---
id: "zh-php-function-function-ftp-ssl-connect"
language: "php"
lang: "zh"
category: "function"
name: "ftp_ssl_connect"
title: "打开安全 SSL-FTP 连接"
signature: "FTP\\Connection|false ftp_ssl_connect(string $hostname, int $port = 21, int $timeout = 90)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-ssl-connect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开安全 SSL-FTP 连接

## 说明

```php
FTP\Connection|false ftp_ssl_connect(string $hostname, int $port = 21, int $timeout = 90)
```

`ftp_ssl_connect()` 打开到指定 `$hostname` 的*明确* SSL-FTP 连接。即使服务器没有为 SSL-FTP 配置，`ftp_ssl_connect()` 也会成功。只有调用 `ftp_login()` 时，客户端才会发送对应的 `AUTH FTP` 命令，因此 `ftp_login()` 会失败。`ftp_ssl_connect()` 建立的连接*不会*进行对等证书验证。

> 为何本函数有可能不存在？
>
> 在 PHP 7.0 之前，只有 ftp 模块和 OpenSSL 模块都静态编译到 PHP 时，`ftp_ssl_connect()` 才可用；也就是说，在 Windows 平台上，此函数在官方 PHP 编译中未定义。如果需要在 Windows 平台使用本函数，需要自行编译 PHP 二进制文件。

> `ftp_ssl_connect()` 不是用来连接 sFTP 服务的。 要在 PHP 中使用 sFTP，请参见 `ssh2_sftp()`。

## 参数

- **`$hostname`** — FTP 服务器地址。 此参数末尾不可以有斜线，开头也不可以有 `ftp://`。
- **`$port`** — 要连接的端口。如果省略此参数或设置为 0，将使用 FTP 默认端口 21。
- **`$timeout`** — 此参数设置所有后续网络操作的超时时长。 如果省略，默认值为 90 秒。 可以使用 `ftp_set_option()` 和 `ftp_get_option()` 函数随时读取或设置超时时长。

## 返回值

成功时返回 `FTP\Connection` 实例， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在返回 `FTP\Connection` 实例；之前返回 `resource`。 |

## 示例

**`ftp_ssl_connect()` 函数示例**

```php


<?php

// 建立基础 SSL 连接
$ftp = ftp_ssl_connect($ftp_server);

// 使用用户名和密码登录
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

if (!$login_result) {
    // 在这种情况下，PHP 会发生 E_WARNING 级别的告警消息
    die("can't login");
}

echo ftp_pwd($ftp); // /

// 关闭 ssl 连接
ftp_close($ftp);
?>

    
```

## 参见

`ftp_connect()`
