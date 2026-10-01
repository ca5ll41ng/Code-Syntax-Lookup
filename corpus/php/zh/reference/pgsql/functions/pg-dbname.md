---
id: "zh-php-function-function-pg-dbname"
language: "php"
lang: "zh"
category: "function"
name: "pg_dbname"
title: "获取数据库名称"
signature: "string pg_dbname(PgSql\\Connection|null $connection = null)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-dbname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取数据库名称

## 说明

```php
string pg_dbname(PgSql\Connection|null $connection = null)
```

`pg_dbname()` 返回指定 PostgreSQL `$connection` 实例的数据库名称。

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is `null`, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.

## 返回值

包含 `$connection` 到的数据库名称的 `string`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |
| 8.0.0 | `$connection` 可以为 null。 |

## 示例

**`pg_dbname()` 示例**

```php


<?php
  error_reporting(E_ALL);

  pg_connect("host=localhost port=5432 dbname=mary");
  echo pg_dbname(); // mary
?>

    
```
