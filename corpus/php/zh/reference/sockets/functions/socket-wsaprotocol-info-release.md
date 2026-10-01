---
id: "zh-php-function-function-socket-wsaprotocol-info-release"
language: "php"
lang: "zh"
category: "function"
name: "socket_wsaprotocol_info_release"
title: "释放已导出的 WSAPROTOCOL_INFO 结构体"
signature: "bool socket_wsaprotocol_info_release(string $info_id)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-wsaprotocol-info-release.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 释放已导出的 WSAPROTOCOL_INFO 结构体

## 说明

```php
bool socket_wsaprotocol_info_release(string $info_id)
```

释放 `$info_id` 对应的共享内存。

> 此方法仅在 Windows 上可用。

## 参数

- **`$info_id`** — 调用 `socket_wsaprotocol_info_export()` 返回的 ID。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 参见

 `socket_wsaprotocol_info_export()`
