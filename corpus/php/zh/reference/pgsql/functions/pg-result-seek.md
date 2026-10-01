---
id: "zh-php-function-function-pg-result-seek"
language: "php"
lang: "zh"
category: "function"
name: "pg_result_seek"
title: "在 result 实例中设定内部行偏移量"
signature: "bool pg_result_seek(PgSql\\Result $result, int $row)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-result-seek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在 result 实例中设定内部行偏移量

## 说明

```php
bool pg_result_seek(PgSql\Result $result, int $row)
```

`pg_result_seek()` 在 `$result` 实例中设定内部行偏移量。

## 参数

- **`$result`** — `PgSql\Result` 实例，由 `pg_query()`、`pg_query_params()` 或者 `pg_execute()`（等）返回。
- **`$row`** — 在 `PgSql\Result` 实例中将内部偏移量移动到的行。行号从零开始。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$result` 参数接受 `PgSql\Result` 实例，之前接受 `resource`。 |

## 示例

**`pg_result_seek()` 示例**

```php


<?php

// 连接到数据库
$conn = pg_pconnect("dbname=publisher");

// 执行查询
$result = pg_query($conn, "SELECT author, email FROM authors");

// 寻找第三行（假设有 3 行）
pg_result_seek($result, 2);

// 获取第三行记录
$row = pg_fetch_row($result);

?>

    
```

## 参见

`pg_fetch_row()` `pg_fetch_assoc()` `pg_fetch_array()` `pg_fetch_object()` `pg_fetch_result()`
