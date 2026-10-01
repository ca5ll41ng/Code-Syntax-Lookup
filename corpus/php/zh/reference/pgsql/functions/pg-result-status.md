---
id: "zh-php-function-function-pg-result-status"
language: "php"
lang: "zh"
category: "function"
name: "pg_result_status"
title: "获得查询结果的状态"
signature: "string|int pg_result_status(PgSql\\Result $result, int $mode = PGSQL_STATUS_LONG)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-result-status.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获得查询结果的状态

## 说明

```php
string|int pg_result_status(PgSql\Result $result, int $mode = PGSQL_STATUS_LONG)
```

`pg_result_status()` 返回 `PgSql\Result` 实例的状态，或者与 result 相关的 PostgreSQL 命令完成标记。

## 参数

- **`$result`** — `PgSql\Result` 实例，由 `pg_query()`、`pg_query_params()` 或者 `pg_execute()`（等）返回。
- **`$mode`** — 要么指定 `PGSQL_STATUS_LONG` 返回 `$result` 的数字状态，要么指定 `PGSQL_STATUS_STRING` 返回 `$result` 的命令标记。如果未指定，默认是 `PGSQL_STATUS_LONG`。

## 返回值

如果指定 `PGSQL_STATUS_LONG`，可能返回的值是 `PGSQL_EMPTY_QUERY`、`PGSQL_COMMAND_OK`、`PGSQL_TUPLES_OK`、`PGSQL_TUPLES_CHUNK`、`PGSQL_COPY_OUT`、`PGSQL_COPY_IN`、`PGSQL_BAD_RESPONSE`、`PGSQL_NONFATAL_ERROR` 和 `PGSQL_FATAL_ERROR`。否则，返回包含 PostgreSQL 命令标记的 `string`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$result` 参数接受 `PgSql\Result` 实例，之前接受 `resource`。 |

## 示例

**`pg_result_status()` 示例**

```php


<?php

// Connect to the database
$conn = pg_pconnect("dbname=publisher");

// Execute a COPY
$result = pg_query($conn, "COPY authors FROM STDIN;");

// Get the result status
$status = pg_result_status($result);

// Determine status
if ($status == PGSQL_COPY_IN)
   echo "Copy began.";
else
   echo "Copy failed.";
 
?>

    
```

以上示例会输出：

```text


Copy began.

    
```

## 参见

`pg_connection_status()`
