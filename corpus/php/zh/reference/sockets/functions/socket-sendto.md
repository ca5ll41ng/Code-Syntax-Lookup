---
id: "zh-php-function-function-socket-sendto"
language: "php"
lang: "zh"
category: "function"
name: "socket_sendto"
title: "向套接字发送消息，无论它是否已建立连接"
signature: "int|false socket_sendto(Socket $socket, string $data, int $length, int $flags, string $address, int|null $port = null)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-sendto.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向套接字发送消息，无论它是否已建立连接

## 说明

```php
int|false socket_sendto(Socket $socket, string $data, int $length, int $flags, string $address, int|null $port = null)
```

函数 `socket_sendto()` 通过套接字 `$socket` 从参数 `$data` 中发送 `$length` 指定的字节数到 `$address` 地址的 `$port` 端口。

## 参数

- **`$socket`** — 由 `socket_create()` 创建的 `Socket` 实例。
- **`$data`** — 要从 `$data` 缓冲区发送的数据。
- **`$length`** — `$data` 中要发送的 `$length` 长度的字节数。
- **`$flags`** — `$flags` 的值可以是下列任意 flag 的组合。使用按位或运算符（`|`）来组合不同的 flag。 | `MSG_OOB` | 发送 OOB（带外）数据。 | | --- | --- | | `MSG_EOR` | 逻辑记录标记。发送的数据结束一个逻辑记录。 | | `MSG_EOF` | 从发送方关闭套接字，并在指定数据末尾设置结束标识。发送数据后结束事务。 | | `MSG_DONTROUTE` | 绕过路由，直接使用接口。 |
- **`$address`** — 远端 IP 地址。
- **`$port`** — `$port` 是数据要被发送到的远端端口号。

## 返回值

`socket_sendto()` 返回发送到远端地址的字节数。发生错误时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$socket` 是 `Socket` 实例， 之前是 `resource`。 |
| 8.0.0 | `$port` 现在允许为 null。 |

## 示例

**`socket_sendto()` 示例**

```php


<?php
    $sock = socket_create(AF_INET, SOCK_DGRAM, SOL_UDP);

    $msg = "Ping !";
    $len = strlen($msg);

    socket_sendto($sock, $msg, $len, 0, '127.0.0.1', 1223);
    socket_close($sock);
?>

    
```

## 参见

`socket_send()`
