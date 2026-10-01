---
id: "zh-php-function-function-socket-wsaprotocol-info-import"
language: "php"
lang: "zh"
category: "function"
name: "socket_wsaprotocol_info_import"
title: "从另一个进程导入套接字"
signature: "Socket|false socket_wsaprotocol_info_import(string $info_id)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-wsaprotocol-info-import.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从另一个进程导入套接字

## 说明

```php
Socket|false socket_wsaprotocol_info_import(string $info_id)
```

导入之前从另一个进程导出的套接字。

> 此方法仅在 Windows 上可用。

## 参数

- **`$info_id`** — 调用 `socket_wsaprotocol_info_export()` 返回的 ID。

## 返回值

成功时返回 `Socket` 实例， 或者在失败时返回 `false`

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 成功时，该函数现在返回一个 `Socket` 实例；在此之前，返回的是 `resource`。 |

## 参见

 `socket_wsaprotocol_info_export()`
