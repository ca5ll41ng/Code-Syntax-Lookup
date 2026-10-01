---
id: "zh-php-function-mysqli-refresh"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::refresh"
aliases: ["mysqli_refresh"]
title: "刷新"
signature: "#[\\Deprecated] public bool mysqli::refresh(int $flags)"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.refresh.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 刷新

## 说明

面向对象风格

```php
#[\Deprecated] public bool mysqli::refresh(int $flags)
```

过程化风格

```php
#[\Deprecated] bool mysqli_refresh(mysqli $mysql, int $flags)
```

刷新表或者缓存，或者重置复制服务器信息。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。
- **`$flags`** — 使用 MySQLi 常量文档记录的 MYSQLI_REFRESH_* 常量作为刷新选项。 — 参见 MySQL 官方文档：[MySQL Refresh]()

## 返回值

刷新成功返回 `true`，否则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | `mysqli::refresh()` 和 `mysqli_refresh()` 都已弃用。使用 `FLUSH` SQL 命令代替。 |

## 参见

`mysqli_poll()`
