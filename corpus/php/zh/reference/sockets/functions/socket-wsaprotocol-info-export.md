---
id: "zh-php-function-function-socket-wsaprotocol-info-export"
language: "php"
lang: "zh"
category: "function"
name: "socket_wsaprotocol_info_export"
title: "导出 WSAPROTOCOL_INFO 结构体"
signature: "string|false socket_wsaprotocol_info_export(Socket $socket, int $process_id)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-wsaprotocol-info-export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 导出 WSAPROTOCOL_INFO 结构体

## 说明

```php
string|false socket_wsaprotocol_info_export(Socket $socket, int $process_id)
```

导出 `WSAPROTOCOL_INFO` 结构体到共享内存中，并返回 `socket_wsaprotocol_info_import()` 使用的标识符。导出的 ID 仅对给定参数 `$process_id` 指定的进程有效。

> 此方法仅在 Windows 上可用。

## 参数

- **`$socket`** — `Socket` 实例。
- **`$process_id`** — 将要导入套接字的进程 ID。

## 返回值

返回用于导入的标识符， 或者在失败时返回 `false`

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$socket` 是 `Socket` 实例， 之前是 `resource`。 |

## 参见

 `socket_wsaprotocol_info_import()` `socket_wsaprotocol_info_release()`
