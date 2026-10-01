---
id: "zh-php-function-function-pg-tty"
language: "php"
lang: "zh"
category: "function"
name: "pg_tty"
title: "返回跟连接相关的 tty 名"
signature: "string pg_tty(PgSql\\Connection|null $connection = null)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-tty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回跟连接相关的 tty 名

## 说明

```php
string pg_tty(PgSql\Connection|null $connection = null)
```

`pg_tty()` 返回指定 PostgreSQL `$connection` 实例在服务器端调试输出发送的 tty 名。

> `pg_tty()` 已经过时，因为服务器不再关注 TTY 设置，但为了向后兼容性，该函数仍然保留。

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is `null`, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.

## 返回值

`string`，包含 `$connection` 的调试 TTY。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |
| 8.0.0 | `$connection` 现在可为 null。 |

## 示例

**`pg_tty()` 示例**

```php


<?php
$pgsql_conn = pg_connect("dbname=mark host=localhost");

if ($pgsql_conn) {
   print "Server debug TTY is: " . pg_tty($pgsql_conn) . "<br/>\n";
} else {
   print pg_last_error($pgsql_conn);
   exit;
}
?>

    
```
