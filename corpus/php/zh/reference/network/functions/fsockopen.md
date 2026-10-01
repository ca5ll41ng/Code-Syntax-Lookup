---
id: "zh-php-function-function-fsockopen"
language: "php"
lang: "zh"
category: "function"
name: "fsockopen"
title: "打开 Internet 或者 Unix 套接字连接"
signature: "resource|false fsockopen(string $hostname, int $port = -1, int $error_code = null, string $error_message = null, float|null $timeout = null)"
module: "network"
source_url: "https://www.php.net/manual/zh/function.fsockopen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开 Internet 或者 Unix 套接字连接

## 说明

```php
resource|false fsockopen(string $hostname, int $port = -1, int $error_code = null, string $error_message = null, float|null $timeout = null)
```

初始化套接字连接到指定 `$hostname` 资源。

如`transports`所述，PHP 支持 Internet 和 Unix 域中的目标。也可以通过 `stream_get_transports()` 获取支持的传输器列表。

默认情况下将以阻塞模式开启套接字连接。可以通过 `stream_set_blocking()` 将它转换到非阻塞模式。

`stream_socket_client()` 与之非常相似，而且提供了更加丰富的参数设置，包括非阻塞连接和提供流上下文的能力。

## 参数

- **`$hostname`** — 如果安装了 OpenSSL，那么可以在主机名地址前面添加 `ssl://` 或者是 `tls://`，从而可以使用基于 TCP/IP 协议的 SSL 或者 TLS 的客户端连接到远程主机。
- **`$port`** — 端口号。可以省略该参数或传 -1，则表示传输器不使用端口，例如 `unix://`。
- **`$error_code`** — 如果提供该参数，则会保存调用系统级别 `connect()` 发生的系统级错误号。 — 如果 `$error_code` 的返回值为 `0`，且函数的返回值为 `false`，则表明错误发生在 `connect()` 调用之前。这很可能是由于初始化套接字的问题。
- **`$error_message`** — 错误信息将以字符串的信息返回。
- **`$timeout`** — 设置连接的时限，单位为秒。当为 `null` 时，使用 default_socket_timeout php.ini 设置。
  > 如果需要对为套接字读/写数据数据操作设置超时，请使用 `stream_set_timeout()`，`fsockopen()` 的 `$timeout` 参数仅仅在连接套接字时适用。



## 返回值

`fsockopen()` 返回文件指针，可以跟其他文件函数（比如 `fgets()`、`fgetss()`、`fwrite()`、`fclose()` 和 `feof()`）一起使用。如果调用失败，将返回 `false`。

## 错误／异常

如果 `$hostname` 不是有效域，则抛出 `E_WARNING`。

## 更新日志

 {{{ 

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$timeout` 现在可以为 null。 |

## 示例

**`fsockopen()` 示例**

```php


<?php
$fp = fsockopen("www.example.com", 80, $errno, $errstr, 30);
if (!$fp) {
    echo "$errstr ($errno)<br />\n";
} else {
    $out = "GET / HTTP/1.1\r\n";
    $out .= "Host: www.example.com\r\n";
    $out .= "Connection: Close\r\n\r\n";
    fwrite($fp, $out);
    while (!feof($fp)) {
        echo fgets($fp, 128);
    }
    fclose($fp);
}
?>

    
```

**使用 UDP 连接**

下面这个例子展示了怎么样在自己的机器上通过 UDP 服务“daytime”（端口号 13）中来检索日期和时间。

```php


<?php
$fp = fsockopen("udp://127.0.0.1", 13, $errno, $errstr);
if (!$fp) {
    echo "ERROR: $errno - $errstr<br />\n";
} else {
    fwrite($fp, "\n");
    echo fread($fp, 26);
    fclose($fp);
}
?>

    
```

## 注释

> 根据环境的不同，Unix 域或可选的连接超时可能无效。

> 即使远程主机无法访问，UDP 套接字有时候也能打开且无错误。只有当从套接字读/写数据的时候才会出现错误。这样的原因是 UDP 是“无连接”协议，这意味着在真正发送/接收数据之前，操作系统不会尝试为套接字创建连接。

> 当指定数值型的 IPv6 地址（例如 `fe80::1`）时必须用方括号将 IP 围起来——例如， `tcp://[fe80::1]:80`。

## 参见

`pfsockopen()` `stream_socket_client()` `stream_set_blocking()` `stream_set_timeout()` `fgets()` `fgetss()` `fwrite()` `fclose()` `feof()` `socket_connect()` Curl 扩展
