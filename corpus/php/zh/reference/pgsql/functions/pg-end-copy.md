---
id: "zh-php-function-function-pg-end-copy"
language: "php"
lang: "zh"
category: "function"
name: "pg_end_copy"
title: "与 PostgreSQL 后端同步"
signature: "bool pg_end_copy(PgSql\\Connection|null $connection = null)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-end-copy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 与 PostgreSQL 后端同步

## 说明

```php
bool pg_end_copy(PgSql\Connection|null $connection = null)
```

`pg_end_copy()` 在处理完 `pg_put_line()` 所执行的拷贝操作之后将 PostgreSQL 前端（通常为 web server 进程）与 PostgreSQL 服务器进行同步。`pg_end_copy()` 必须被调用，否则 PostgreSQL 服务器可能会和前端失去同步并报错。

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is `null`, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |
| 8.0.0 | `$connection` 现在可以为 null。 |

## 示例

**`pg_end_copy()` 示例**

```php


<?php 
  $conn = pg_pconnect("dbname=foo");
  pg_query($conn, "create table bar (a int4, b char(16), d float8)");
  pg_query($conn, "copy bar from stdin");
  pg_put_line($conn, "3\thello world\t4.5\n");
  pg_put_line($conn, "4\tgoodbye world\t7.11\n");
  pg_put_line($conn, "\.\n");
  pg_end_copy($conn);
?>

    
```

## 参见

`pg_put_line()`
