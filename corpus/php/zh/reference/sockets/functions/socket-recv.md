---
id: "zh-php-function-function-socket-recv"
language: "php"
lang: "zh"
category: "function"
name: "socket_recv"
title: "从已连接的 socket 接收数据"
signature: "int|false socket_recv(Socket $socket, string|null $data, int $length, int $flags)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-recv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从已连接的 socket 接收数据

## 说明

```php
int|false socket_recv(Socket $socket, string|null $data, int $length, int $flags)
```

函数 `socket_recv()` 从 `$socket` 中接收长度为 `$length` 字节的数据，并保存在 `$data` 中。 `socket_recv()` 用于从已连接的 socket 中接收数据。除此之外，可以设定一个或多个 flags 来控制函数的具体行为。

`$data` 是传引用的，因此必须以变量的形式，指定到参数列表。从 `$socket` 中接收到的数据将会保存在 `$data` 中。

## 参数

- **`$socket`** — 参数 `$socket` 必须是一个由 `socket_create()` 创建的 `Socket` 实例。
- **`$data`** — 从 socket 中获取的数据将被保存在由 `$data` 指定的变量中。 如果有错误发生，如链接被重置，数据不可用等等，`$data` 将被设为 `null`。
- **`$length`** — 从远程主机接收长度最多为 `$length` 字节的数据。
- **`$flags`** — `$flags` 的值可以为下列任意 flag 的组合。使用按位或运算符(`|`)来 组合不同的 flag。
  | Flag | 描述 |
  | --- | --- |
  | `MSG_OOB` | 处理超出边界的数据 |
  | `MSG_PEEK` | 从接收队列的起始位置接收数据，但不将他们从接收队列中移除。 |
  | `MSG_WAITALL` | 在接收到至少 `$length` 字节的数据之前，造成一个阻塞，并暂停脚本运行（block）。但是， 如果接收到中断信号，或远程服务器断开连接，该函数将返回少于 `$length` 字节的数据。 |
  | `MSG_DONTWAIT` | 如果指定了该 flag，函数将不会造成阻塞，即使在全局设置中指定了阻塞设置。 |



## 返回值

`socket_recv()` 返回一个数字，表示接收到的字节数。如果发生了错误，则返回 `false` 错误码可使用 `socket_last_error()` 接收。也可使用函数 `socket_strerror()` 来取得关于错误的文字描述。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$socket` 是 `Socket` 实例， 之前是 `resource`。 |

## 示例

**`socket_recv()` 示例**

该示例简单地使用 `socket_recv()` 重写了 `sockets.examples` 中的 第一个示例。

```php


<?php
error_reporting(E_ALL);

echo "<h2>TCP/IP Connection</h2>\n";

/* 获取 WWW 服务的端口。 */
$service_port = getservbyname('www', 'tcp');

/* 获取目标主机的 IP 地址。 */
$address = gethostbyname('www.example.com');

/* 创建 TCP/IP 套接字。 */
$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
if ($socket === false) {
    echo "socket_create() failed: reason: " . socket_strerror(socket_last_error()) . "\n";
} else {
    echo "OK.\n";
}

echo "Attempting to connect to '$address' on port '$service_port'...";
$result = socket_connect($socket, $address, $service_port);
if ($result === false) {
    echo "socket_connect() failed.\nReason: ($result) " . socket_strerror(socket_last_error($socket)) . "\n";
} else {
    echo "OK.\n";
}

$in = "HEAD / HTTP/1.1\r\n";
$in .= "Host: www.example.com\r\n";
$in .= "Connection: Close\r\n\r\n";
$out = '';

echo "Sending HTTP HEAD request...";
socket_write($socket, $in, strlen($in));
echo "OK.\n";

echo "Reading response:\n\n";
$buf = 'This is my buffer.';
if (false !== ($bytes = socket_recv($socket, $buf, 2048, MSG_WAITALL))) {
    echo "Read $bytes bytes from socket_recv(). Closing socket...";
} else {
    echo "socket_recv() failed; reason: " . socket_strerror(socket_last_error($socket)) . "\n";
}
socket_close($socket);

echo $buf . "\n";
echo "OK.\n\n";
?>

    
```

以上示例的输出类似于：

```text


<h2>TCP/IP Connection</h2>
OK.
Attempting to connect to '208.77.188.166' on port '80'...OK.
Sending HTTP HEAD request...OK.
Reading response:

Read 123 bytes from socket_recv(). Closing socket...HTTP/1.1 200 OK
Date: Mon, 14 Sep 2009 08:56:36 GMT
Server: Apache/2.2.3 (Red Hat)
Last-Modified: Tue, 15 Nov 2005 13:24:10 GMT
ETag: "b80f4-1b6-80bfd280"
Accept-Ranges: bytes
Content-Length: 438
Connection: close
Content-Type: text/html; charset=UTF-8

OK.

    
```
