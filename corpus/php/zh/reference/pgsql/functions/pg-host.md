---
id: "zh-php-function-function-pg-host"
language: "php"
lang: "zh"
category: "function"
name: "pg_host"
title: "返回和某连接关联的主机名"
signature: "string pg_host(PgSql\\Connection|null $connection = null)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-host.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回和某连接关联的主机名

## 说明

```php
string pg_host(PgSql\Connection|null $connection = null)
```

`pg_host()` 返回指定的 PostgreSQL `$connection` 实例所连接到的主机名称。

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is `null`, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.

## 返回值

`string`, 包含 `$connection` 的主机名，或错误时为空字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |
| 8.0.0 | `$connection` 现在可为 null。 |

## 示例

**`pg_host()` 示例**

```php


<?php
$pgsql_conn = pg_connect("dbname=mark host=localhost");

if ($pgsql_conn) {
   print "Successfully connected to: " . pg_host($pgsql_conn) . "<br/>\n";
} else {
   print pg_last_error($pgsql_conn);
   exit;
}
?>

    
```

## 参见

`pg_connect()` `pg_pconnect()`
