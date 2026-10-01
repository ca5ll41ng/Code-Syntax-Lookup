---
id: "zh-php-function-function-socket-create-pair"
language: "php"
lang: "zh"
category: "function"
name: "socket_create_pair"
title: "创建一对彼此连接的套接字，并用数组存储"
signature: "bool socket_create_pair(int $domain, int $type, int $protocol, array $pair)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-create-pair.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建一对彼此连接的套接字，并用数组存储

## 说明

```php
bool socket_create_pair(int $domain, int $type, int $protocol, array $pair)
```

`socket_create_pair()` 创建两个已连接的，彼此连接的套接字，并存储在 `$pair` 中。此函数通常在 IPC（进程间通信）使用。

## 参数

- **`$domain`** — `$domain` 参数指定套接字使用的协议族。完整列表参见 `socket_create()`。
- **`$type`** — `$type` 参数选择套接字使用的通信类型。完整列表参见 `socket_create()`。
- **`$protocol`** — `$domain` 参数指定套接字在 `$domain` 协议族下通信时使用的具体协议。这个值可以通过 `getprotobyname()` 获取。如果所需的协议是 TCP 或 UDP，可以直接使用相应的常量 `SOL_TCP` 和 `SOL_UDP`。 — 有关支持协议的完整列表，参见 `socket_create()`。
- **`$pair`** — 包含两个 `Socket` 实例的引用数组。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$pair` 现在是 `Socket` 实例的引用数组；在这之前是 `resource` 的引用数组。 |

## 示例

**`socket_create_pair()` 示例**

```php


<?php
$sockets = array();

/* On Windows we need to use AF_INET */
$domain = (strtoupper(substr(PHP_OS, 0, 3)) == 'WIN' ? AF_INET : AF_UNIX);

/* Setup socket pair */
if (socket_create_pair($domain, SOCK_STREAM, 0, $sockets) === false) {
    echo "socket_create_pair failed. Reason: ".socket_strerror(socket_last_error());
}
/* Send and Receive Data */
if (socket_write($sockets[0], "ABCdef123\n", strlen("ABCdef123\n")) === false) {
    echo "socket_write() failed. Reason: ".socket_strerror(socket_last_error($sockets[0]));
}
if (($data = socket_read($sockets[1], strlen("ABCdef123\n"), PHP_BINARY_READ)) === false) {
    echo "socket_read() failed. Reason: ".socket_strerror(socket_last_error($sockets[1]));
}
var_dump($data);

/* Close sockets */
socket_close($sockets[0]);
socket_close($sockets[1]);
?>

    
```

**`socket_create_pair()` IPC 示例**

```php


<?php
$ary = array();
$strone = 'Message From Parent.';
$strtwo = 'Message From Child.';

if (socket_create_pair(AF_UNIX, SOCK_STREAM, 0, $ary) === false) {
    echo "socket_create_pair() failed. Reason: ".socket_strerror(socket_last_error());
}
$pid = pcntl_fork();
if ($pid == -1) {
    echo 'Could not fork Process.';
} elseif ($pid) {
    /*parent*/
    socket_close($ary[0]);
    if (socket_write($ary[1], $strone, strlen($strone)) === false) {
        echo "socket_write() failed. Reason: ".socket_strerror(socket_last_error($ary[1]));
    }
    if (socket_read($ary[1], strlen($strtwo), PHP_BINARY_READ) == $strtwo) {
        echo "Received $strtwo\n";
    }
    socket_close($ary[1]);
} else {
    /*child*/
    socket_close($ary[1]);
    if (socket_write($ary[0], $strtwo, strlen($strtwo)) === false) {
        echo "socket_write() failed. Reason: ".socket_strerror(socket_last_error($ary[0]));
    }
    if (socket_read($ary[0], strlen($strone), PHP_BINARY_READ) == $strone) {
        echo "Received $strone\n";
    }
    socket_close($ary[0]);
}
?>

    
```

## 参见

`socket_create()` `socket_create_listen()` `socket_bind()` `socket_listen()` `socket_last_error()` `socket_strerror()`
