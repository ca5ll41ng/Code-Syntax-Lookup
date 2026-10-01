---
id: "zh-php-function-function-pg-put-line"
language: "php"
lang: "zh"
category: "function"
name: "pg_put_line"
title: "向 PostgreSQL 后端发送以 NULL 字符结尾的字符串"
signature: "bool pg_put_line([PgSql\\Connection $connection = ...], string $query)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-put-line.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向 PostgreSQL 后端发送以 NULL 字符结尾的字符串

## 说明

```php
bool pg_put_line([PgSql\Connection $connection = ...], string $query)
```

`pg_put_line()` 向 PostgreSQL 后端服务器发送以 NULL 字符结尾的字符串。这需要与 PostgreSQL 的 `COPY FROM` 命令结合使用。

`COPY` 是 PostgreSQL 支持的高速数据加载接口。数据在传入时不会解析且在单个事务中。

使用原生 `pg_put_line()` 命令的替代方法是使用 `pg_copy_from()`。这是一个简单得多的接口。

> 应用程序必须明确地在 `pg_end_copy()` 之前最后一行发送两个字符“\.”来向后端表明发送数据结束。

> Use of the `pg_put_line()` causes most large object operations, including `pg_lo_read()` and `pg_lo_tell()`, to subsequently fail. You can use `pg_copy_from()` and `pg_copy_to()` instead.

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is unspecified, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.
- **`$query`** — 要直接发送到 PostgreSQL 后端的一行文本。自动添加 `NULL` 终止符。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_put_line()` 示例**

```php


<?php 
  $conn = pg_pconnect("dbname=foo");
  pg_query($conn, "create table bar (a int4, b char(16), d float8)");
  pg_query($conn, "copy bar from stdin");
  pg_put_line($conn, "3\thello world\t4.5\n");
  pg_put_line($conn, "4\tgoodbye world\t7.11\n");
  pg_put_line($conn, "\\.\n");
  pg_end_copy($conn);
?>

    
```

## 参见

`pg_end_copy()`
