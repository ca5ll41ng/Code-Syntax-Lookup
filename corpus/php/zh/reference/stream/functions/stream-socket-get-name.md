---
id: "zh-php-function-function-stream-socket-get-name"
language: "php"
lang: "zh"
category: "function"
name: "stream_socket_get_name"
title: "获取本地或者远程的套接字名称"
signature: "string|false stream_socket_get_name(resource $socket, bool $remote)"
module: "stream"
source_url: "https://www.php.net/manual/zh/function.stream-socket-get-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取本地或者远程的套接字名称

## 说明

```php
string|false stream_socket_get_name(resource $socket, bool $remote)
```

返回给定的本地或者远程套接字连接的名称。

## 参数

- **`$socket`** — 需要获取其名称的套接字连接。
- **`$remote`** — 如果设置为 `true` ，那么将返回 `remote` 套接字连接名称；如果设置为 `false` 则返回 `local` 套接字连接名称。

## 返回值

套接字连接的名称， 或者在失败时返回 `false`。

## 参见

`stream_socket_accept()`
