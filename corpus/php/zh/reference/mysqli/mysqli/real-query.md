---
id: "zh-php-function-mysqli-real-query"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["sql_injection"],"cwe":["CWE-89"],"params":[1]}
name: "mysqli::real_query"
aliases: ["mysqli_real_query"]
title: "执行一个mysql查询"
signature: "public bool mysqli::real_query(string $query)"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.real-query.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行一个mysql查询

## 说明

面向对象风格

```php
public bool mysqli::real_query(string $query)
```

过程化风格

```php
bool mysqli_real_query(mysqli $mysql, string $query)
```

对数据库执行单条查询，其结果可以使用 `mysqli_store_result()` 或 `mysqli_use_result()` 检索或存储。

> Security warning: SQL injection
>
> If the query contains any variable input then parameterized prepared statements should be used instead. Alternatively, the data must be properly formatted and all strings must be escaped using the `mysqli_real_escape_string()` function.

为了确定给定的查询是否应返回结果集，参阅 `mysqli_field_count()`。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。
- **`$query`** — 查询字符串。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## 参见

`mysqli_query()` `mysqli_store_result()` `mysqli_use_result()`
