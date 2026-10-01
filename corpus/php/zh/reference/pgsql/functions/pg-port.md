---
id: "zh-php-function-function-pg-port"
language: "php"
lang: "zh"
category: "function"
name: "pg_port"
title: "返回 connection 相关的端口号"
signature: "string pg_port(PgSql\\Connection|null $connection = null)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-port.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 connection 相关的端口号

## 说明

```php
string pg_port(PgSql\Connection|null $connection = null)
```

`pg_port()` 返回连接指定 PostgreSQL `$connection` 实例的端口号。

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is `null`, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.

## 返回值

`string`，包含 `$connection` 连接到的数据库服务器的端口号，错误时为空字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |
| 8.0.0 | `$connection` 现在可为 null。 |

## 示例

**`pg_port()` 示例**

```php


<?php
$pgsql_conn = pg_connect("dbname=mark host=localhost");

if ($pgsql_conn) {
   print "Successfully connected to port: " . pg_port($pgsql_conn) . "<br/>\n";
} else {
   print pg_last_error($pgsql_conn);
   exit;
}
?>

    
```
