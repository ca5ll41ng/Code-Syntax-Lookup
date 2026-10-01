---
id: "zh-php-function-mysqli-reap-async-query"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::reap_async_query"
aliases: ["mysqli_reap_async_query"]
title: "获取异步查询的结果"
signature: "public mysqli_result|bool mysqli::reap_async_query()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.reap-async-query.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取异步查询的结果

## 说明

面向对象风格

```php
public mysqli_result|bool mysqli::reap_async_query()
```

过程化风格

```php
mysqli_result|bool mysqli_reap_async_query(mysqli $mysql)
```

获取异步查询的结果，

> 仅可用于 mysqlnd。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。

## 返回值

失败时返回 `false`。对于生成结果集的成功查询，比如 `SELECT, SHOW, DESCRIBE` 或 `EXPLAIN`，`mysqli_reap_async_query()` 将返回 `mysqli_result` 对象。对其它成功查询，`mysqli_reap_async_query()` 将返回 `true`。

## 错误／异常

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## 参见

`mysqli_poll()`
