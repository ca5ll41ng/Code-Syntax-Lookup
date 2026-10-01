---
id: "zh-php-function-function-socket-write"
language: "php"
lang: "zh"
category: "function"
name: "socket_write"
title: "向套接字写数据"
signature: "int|false socket_write(Socket $socket, string $data, int|null $length = null)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-write.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向套接字写数据

## 说明

```php
int|false socket_write(Socket $socket, string $data, int|null $length = null)
```

函数 `socket_write()` 向 `$socket` 写入 `$data`。

## 参数

- **`$socket`**
- **`$data`** — 要写入到缓冲区的数据。
- **`$length`** — 可选参数 `$length` 可以指定写入 socket 的字节长度。如果写入的字节长度大于 `$data` 的长度，默认将被截取为 `$data` 长度。

## 返回值

返回成功写入 socket 的字节数 或者在失败时返回 `false`。可以通过调用 `socket_last_error()` 来检索实际的错误码。将错误码作为参数传递给 `socket_strerror()` 以获得错误的文本解释。

> 对于 `socket_wirte()` 来说返回 0 是完全有效的，这代表没有字节被写入。如果发生错误，务必使用 `===` 运算符来判断是否为 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$socket` 是 `Socket` 实例， 之前是 `resource`。 |
| 8.0.0 | `$length` 现在允许为 null。 |

## 注释

> `socket_write()` 不一定会写入 `$data` 的所有字节。根据网络缓冲区等因素，即使 `$data` 较长，也可能只写入部分数据，甚至是一个字节。必须使用循环来确保已完整传输剩余 `$data`。

## 参见

`socket_accept()` `socket_bind()` `socket_connect()` `socket_listen()` `socket_read()` `socket_strerror()`
