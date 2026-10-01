---
id: "zh-php-function-function-pg-options"
language: "php"
lang: "zh"
category: "function"
name: "pg_options"
title: "获得和 connection 相关的选项"
signature: "string pg_options(PgSql\\Connection|null $connection = null)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-options.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获得和 connection 相关的选项

## 说明

```php
string pg_options(PgSql\Connection|null $connection = null)
```

`pg_options()` 将返回字符串，包含指定 PostgreSQL `$connection` 实例的特定选项。

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is `null`, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.

## 返回值

包含 `$connection` 选项的 `string`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |
| 8.0.0 | `$connection` 现在可为 null。 |

## 示例

**`pg_options()` 示例**

```php


<?php
   $pgsql_conn = pg_connect("dbname=mark host=localhost");
   echo pg_options($pgsql_conn);
?>

    
```

## 参见

`pg_connect()`
