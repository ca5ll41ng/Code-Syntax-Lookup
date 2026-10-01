---
id: "zh-php-function-function-socket-close"
language: "php"
lang: "zh"
category: "function"
name: "socket_close"
title: "关闭 `Socket` 实例"
signature: "void socket_close(Socket $socket)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭 `Socket` 实例

## 说明

```php
void socket_close(Socket $socket)
```

`socket_close()` 会关闭由 `$socket` 参数指定的 `Socket` 实例。

## 参数

- **`$socket`** — 由 `socket_create()` 或者是 `socket_accept()` 创建的 `Socket` 实例。

## 返回值

没有返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$socket` 是 `Socket` 实例， 之前是 `resource`。 |

## 参见

`socket_bind()` `socket_listen()` `socket_create()` `socket_strerror()`
