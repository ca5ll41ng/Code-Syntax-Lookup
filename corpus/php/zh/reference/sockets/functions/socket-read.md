---
id: "zh-php-function-function-socket-read"
language: "php"
lang: "zh"
category: "function"
name: "socket_read"
title: "从套接字中读取最大长度的数据"
signature: "string|false socket_read(Socket $socket, int $length, int $mode = PHP_BINARY_READ)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从套接字中读取最大长度的数据

## 说明

```php
string|false socket_read(Socket $socket, int $length, int $mode = PHP_BINARY_READ)
```

`socket_read()` 函数是从 `socket_create()` 或 `socket_accept()` 函数所创建的 `Socket` 实例 `$socket` 中读取数据。

## 参数

- **`$socket`** — 使用 `socket_create()` 或 `socket_accept()` 函数创建的 `Socket` 实例。
- **`$length`** — `$length` 参数指定了最大能够读取的字节数。否则您可以使用 `\r`、`\n`、`\0` 结束读取（根据 `$mode` 参数设置，请参见下文）。
- **`$mode`** — 可选参数 `$mode` 是一个命名常量： - `PHP_BINARY_READ` （默认）- 使用系统的 `recv()` 函数。二进制安全地读取数据。 - `PHP_NORMAL_READ` - 读取到 `\n`、`\r` 时停止。

## 返回值

`socket_read()` 返回一个字符串，表示接收到的数据。如果发生了错误（包括远程主机关闭了连接），则返回 `false`。错误码可使用 `socket_last_error()` 获取。也可使用 `socket_strerror()` 来获取错误码的文字描述。

> 当套接字中没有更多数据可读取时，`socket_read()` 返回一个长度为 0 的空字符串（""）。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$socket` 是 `Socket` 实例， 之前是 `resource`。 |

## 参见

`socket_accept()` `socket_bind()` `socket_connect()` `socket_listen()` `socket_last_error()` `socket_strerror()` `socket_write()`
