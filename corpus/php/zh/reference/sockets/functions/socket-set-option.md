---
id: "zh-php-function-function-socket-set-option"
language: "php"
lang: "zh"
category: "function"
name: "socket_set_option"
title: "为套接字设置套接字选项"
signature: "bool socket_set_option(Socket $socket, int $level, int $option, array|string|int $value)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-set-option.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为套接字设置套接字选项

## 说明

```php
bool socket_set_option(Socket $socket, int $level, int $option, array|string|int $value)
```

`socket_set_option()` 函数在 `$socket` 的指定协议 `$level` 上设置由 `$option` 参数指定的选项，`$value` 为指定值。

## 参数

- **`$socket`** — 由 `socket_create()` 或 `socket_accept()` 创建的 `Socket` 实例。
- **`$level`** — `$level` 参数定义选项所在的协议级别。例如，在 socket 级别设置选项，将使用 `SOL_SOCKET` 作为 `$level` 参数。在其它级别，例如 TCP，可以使用该级别定义的协议号来指定级别。协议号可以通过 `getprotobyname()` 找到。
- **`$option`** — 套接字可用选项与 `socket_get_option()` 函数的选项相同。
- **`$value`** — 选项值。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$socket` 是 `Socket` 实例， 之前是 `resource`。 |

## 示例

**`socket_set_option()` 示例**

```php


<?php
$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

if (!is_resource($socket)) {
    echo 'Unable to create socket: '. socket_strerror(socket_last_error()) . PHP_EOL;
}

if (!socket_set_option($socket, SOL_SOCKET, SO_REUSEADDR, 1)) {
    echo 'Unable to set option on socket: '. socket_strerror(socket_last_error()) . PHP_EOL;
}

if (!socket_bind($socket, '127.0.0.1', 1223)) {
    echo 'Unable to bind socket: '. socket_strerror(socket_last_error()) . PHP_EOL;
}

$rval = socket_get_option($socket, SOL_SOCKET, SO_REUSEADDR);

if ($rval === false) {
    echo 'Unable to get socket option: '. socket_strerror(socket_last_error()) . PHP_EOL;
} else if ($rval !== 0) {
    echo 'SO_REUSEADDR is set on socket !' . PHP_EOL;
}
?>

    
```

## 参见

`socket_create()` `socket_bind()` `socket_strerror()` `socket_last_error()` `socket_get_option()`
