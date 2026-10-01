---
id: "zh-php-function-mysqli-more-results"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::more_results"
aliases: ["mysqli_more_results"]
title: "检查批量查询中是否还有查询结果"
signature: "public bool mysqli::more_results()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.more-results.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查批量查询中是否还有查询结果

## 说明

面向对象风格

```php
public bool mysqli::more_results()
```

过程化风格

```php
bool mysqli_more_results(mysqli $mysql)
```

检查上一次调用 `mysqli_multi_query()` 函数之后，是否还有更多的查询结果集。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。

## 返回值

如果上一次调用 `mysqli_multi_query()` 函数之后， 还有更多的结果集（包含错误）可以读取，返回 `true`，否则返回 `false`。

## 示例

参见 `mysqli_multi_query()`。

## 参见

`mysqli_multi_query()` `mysqli_next_result()` `mysqli_store_result()` `mysqli_use_result()`
