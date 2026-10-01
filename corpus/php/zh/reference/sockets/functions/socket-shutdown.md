---
id: "zh-php-function-function-socket-shutdown"
language: "php"
lang: "zh"
category: "function"
name: "socket_shutdown"
title: "关闭套接字接收或发送，或两者都关闭"
signature: "bool socket_shutdown(Socket $socket, int $mode = 2)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-shutdown.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭套接字接收或发送，或两者都关闭

## 说明

```php
bool socket_shutdown(Socket $socket, int $mode = 2)
```

`socket_shutdown()` 函数允许通过 `$socket` 停止接收、发送或所有数据（默认）。

> 关联的一个或多个缓冲区可能会清空，也可能不会。

## 参数

- **`$socket`** — 从 `socket_create()` 创建的 `Socket` 实例。
- **`$mode`** — `$mode` 的值可以是以下之一： | `0` | 关闭套接字读 | | --- | --- | | `1` | 关闭套接字写 | | `2` | 关闭套接字读和写 |

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$socket` 是 `Socket` 实例， 之前是 `resource`。 |
