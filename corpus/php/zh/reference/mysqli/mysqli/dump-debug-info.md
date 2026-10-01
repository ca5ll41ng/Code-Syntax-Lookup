---
id: "zh-php-function-mysqli-dump-debug-info"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::dump_debug_info"
aliases: ["mysqli_dump_debug_info"]
title: "将调试信息输出到日志"
signature: "public bool mysqli::dump_debug_info()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.dump-debug-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将调试信息输出到日志

## 说明

面向对象风格

```php
public bool mysqli::dump_debug_info()
```

过程化风格

```php
bool mysqli_dump_debug_info(mysqli $mysql)
```

这个函数设计用于超级权限用户执行将调试信息输出到连接相关的 MySQL Server 的日志中。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 参见

`mysqli_debug()`
