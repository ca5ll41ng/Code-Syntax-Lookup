---
id: "zh-php-function-mysqli-next-result"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::next_result"
aliases: ["mysqli_next_result"]
title: "为读取 multi_query 执行之后的下一个结果集做准备"
signature: "public bool mysqli::next_result()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.next-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为读取 multi_query 执行之后的下一个结果集做准备

## 说明

面向对象风格

```php
public bool mysqli::next_result()
```

过程化风格

```php
bool mysqli_next_result(mysqli $mysql)
```

`mysqli_multi_query()` 函数执行之后，为读取下一个结果集做准备，然后可以使用 `mysqli_store_result()` 或 `mysqli_use_result()` 检索。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。如果下一条语句导致错误，也返回 `false`，这跟 `mysqli_more_results()` 不同。

## 错误／异常

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## 示例

参阅 `mysqli_multi_query()`。

## 参见

`mysqli_multi_query()` `mysqli_more_results()` `mysqli_store_result()` `mysqli_use_result()`
