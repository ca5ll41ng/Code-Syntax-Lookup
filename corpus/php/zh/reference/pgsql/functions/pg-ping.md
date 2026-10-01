---
id: "zh-php-function-function-pg-ping"
language: "php"
lang: "zh"
category: "function"
name: "pg_ping"
title: "Ping 数据库连接"
signature: "bool pg_ping(PgSql\\Connection|null $connection = null)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-ping.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Ping 数据库连接

## 说明

```php
bool pg_ping(PgSql\Connection|null $connection = null)
```

`pg_ping()` ping 数据库连接，如果中断则尝试重新连接。

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is `null`, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |
| 8.0.0 | `$connection` 现在可为 null。 |

## 示例

**`pg_ping()` 示例**

```php


<?php 
$conn = pg_pconnect("dbname=publisher");
if (!$conn) {
  echo "An error occurred.\n";
  exit;
}

if (!pg_ping($conn))
  die("Connection is broken\n");
?>

    
```

## 参见

`pg_connection_status()` `pg_connection_reset()`
