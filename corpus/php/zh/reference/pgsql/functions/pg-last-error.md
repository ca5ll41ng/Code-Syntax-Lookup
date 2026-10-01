---
id: "zh-php-function-function-pg-last-error"
language: "php"
lang: "zh"
category: "function"
name: "pg_last_error"
title: "得到某连接的最后一条错误信息"
signature: "string pg_last_error(PgSql\\Connection|null $connection = null)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-last-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 得到某连接的最后一条错误信息

## 说明

```php
string pg_last_error(PgSql\Connection|null $connection = null)
```

`pg_last_error()` 返回指定 `$connection` 的最后一条错误信息。

错误信息可能会被调用的 PostgreSQL(libpq) 内部函数覆盖。如果 PostgreSQL 的内部模块函数产生了多个错误，则可能不能返回适当的错误信息。

使用 `pg_result_error()`、`pg_result_error_field()`、`pg_result_status()` 和 `pg_connection_status()` 用于更好的错误处理。

> 本函数以前的名字为 `pg_errormessage()`。

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is `null`, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.

## 返回值

`string`，包含指定 `$connection` 的最后一条错误消息。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |
| 8.0.0 | `$connection` 现在可为 null。 |

## 示例

**`pg_last_error()` 示例**

```php


<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  // 查询失败
  $res = pg_query($dbconn, "select * from doesnotexist");
  
  echo pg_last_error($dbconn);
?>

    
```

## 参见

`pg_result_error()` `pg_result_error_field()`
