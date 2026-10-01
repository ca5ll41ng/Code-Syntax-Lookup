---
id: "zh-php-function-function-stream-socket-server"
language: "php"
lang: "zh"
category: "function"
name: "stream_socket_server"
title: "创建 Internet 或 Unix 域服务器套接字"
signature: "resource|false stream_socket_server(string $address, int $error_code = null, string $error_message = null, int $flags = STREAM_SERVER_BIND | STREAM_SERVER_LISTEN, resource|null $context = null)"
module: "stream"
source_url: "https://www.php.net/manual/zh/function.stream-socket-server.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建 Internet 或 Unix 域服务器套接字

## 说明

```php
resource|false stream_socket_server(string $address, int $error_code = null, string $error_message = null, int $flags = STREAM_SERVER_BIND | STREAM_SERVER_LISTEN, resource|null $context = null)
```

在指定 `$address` 上创建 stream 或者数据包套接字（datagram socket）。

此函数仅创建套接字，并使用 `stream_socket_accept()` 开始接受连接。

## 参数

- **`$address`** — 传输器决定创建的套接字类型，其传输器由标准 URL 格式（`transport://target`）指定。 — 对于 Internet 域套接字（`AF_INET`），比如 TCP 和 UDP， `$remote_socket` 参数的 `target` 部分应由主机名或者 IP 地址，随后跟着冒号和端口号组成。 对于 Unix 域套接字， `target` 部分指向文件系统中的套接字文件。 — 环境的不同，可能会导致 Unix 域套接字无法使用。可以使用 `stream_get_transports()` 检索可以使用的传输器列表。查看`transports`获取内置传输器列表。
- **`$error_code`** — 如果指定了可选的 `$error_code` 和 `$error_message` 参数，它们将被设置为指出在系统级别进行 `socket()`、`bind()`、 `listen()` 调用时发生的真实系统级别错误。如果 `$error_code` 返回的值为 `0` 且函数返回 `false`，则表明错误发生在 `bind()` 调用之前。请注意 `$error_code` 和 `$error_message` 始终通过引用传递。
- **`$error_message`** — 参阅 `$error_code` 描述。
- **`$flags`** — 位掩码字段，可以设置为套接字创建 flag 的任意组合。
  > 对于 UDP 套接字，你必须使用 `STREAM_SERVER_BIND` 作为 `$flags` 参数。


- **`$context`**

## 返回值

返回已创建的 stream，错误时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$context` 现在可为 null。 |

## 示例

**使用 TCP 服务器套接字**

```php


<?php
$socket = stream_socket_server("tcp://0.0.0.0:8000", $errno, $errstr);
if (!$socket) {
  echo "$errstr ($errno)<br />\n";
} else {
  while ($conn = stream_socket_accept($socket)) {
    fwrite($conn, 'The local time is ' . date('n/j/Y g:i a') . "\n");
    fclose($conn);
  }
  fclose($socket);
}
?>

    
```

下面的示例展示了如何充当时间服务器，可以响应时间查询，正如 `stream_socket_client()` 上的示例。

> 大多数系统在低于 1024 的端口号上创建服务器套接字时需要 root 访问权限。

**使用 UDP 服务器套接字**

```php


<?php
$socket = stream_socket_server("udp://127.0.0.1:1113", $errno, $errstr, STREAM_SERVER_BIND);
if (!$socket) {
    die("$errstr ($errno)");
}

do {
    $pkt = stream_socket_recvfrom($socket, 1, 0, $peer);
    echo "$peer\n";
    stream_socket_sendto($socket, date("D M j H:i:s Y\r\n"), 0, $peer);
} while ($pkt !== false);

?>


    
```

## 注释

> 当指定数值型的 IPv6 地址（例如 `fe80::1`）时必须用方括号将 IP 围起来——例如， `tcp://[fe80::1]:80`。

## 参见

 `stream_socket_client()` `stream_set_blocking()` `stream_set_timeout()` `fgets()` `fgetss()` `fwrite()` `fclose()` `feof()` Curl 扩展
