---
id: "zh-php-function-function-pg-connect"
language: "php"
lang: "zh"
category: "function"
name: "pg_connect"
title: "打开 PostgreSQL 连接"
signature: "PgSql\\Connection|false pg_connect(string $connection_string, int $flags = 0)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-connect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开 PostgreSQL 连接

## 说明

```php
PgSql\Connection|false pg_connect(string $connection_string, int $flags = 0)
```

`pg_connect()` 打开通过 `$connection_string` 指定的 PostgreSQL 数据库的连接。

如果使用与现有连接相同的 `$connection_string` 对 `pg_connect()` 进行第二次调用，将返回现有连接，除非将 `PGSQL_CONNECT_FORCE_NEW` 作为 `$flags` 传递。

弃用有多个参数的旧语法 $conn = pg_connect("host", "port", "options", "tty", "dbname")。

## 参数

- **`$connection_string`** — `$connection_string` 可以为空以使用所有默认参数，或者可以包含一个或多个由空格分隔的参数设置。 每个参数设置的形式为 `keyword = value`。等号两旁的空格是可选的。写入空值或包含空格的值，请用单引号将其括起来，例如 `keyword = 'a value'`。值中的单引号和反斜线必须使用反斜线转义，即 \' 和 \\。 — 当前可识别的参数关键字有 `$host`、`$hostaddr`、`$port`、`$dbname`（默认为 `$user` 的值）、`$user`、`$password`、`$connect_timeout`、`$options`、`$tty`（忽略）、`$sslmode`、`$requiressl`（弃用 `$sslmode`）和 `$service`。存在哪些参数取决于 PostgreSQL 版本。 — The `$options` parameter can be used to set command line parameters to be invoked by the server.
- **`$flags`** — 如果传递 `PGSQL_CONNECT_FORCE_NEW`，将会创建新连接，即使 `$connection_string` 与现有连接相同。 — 如果指定 `PGSQL_CONNECT_ASYNC`，然后连接是异步创建。连接状态可以通过 `pg_connect_poll()` 或 `pg_connection_status()` 检测。

## 返回值

成功时返回 `PgSql\Connection` 实例， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在返回 `PgSql\Connection` 实例；之前返回 `resource`。 |

## 示例

**使用 `pg_connect()`**

```php


<?php
$dbconn = pg_connect("dbname=mary");
//connect to a database named "mary"

$dbconn2 = pg_connect("host=localhost port=5432 dbname=mary");
// connect to a database named "mary" on "localhost" at port "5432"

$dbconn3 = pg_connect("host=sheep port=5432 dbname=mary user=lamb password=foo");
//connect to a database named "mary" on the host "sheep" with a username and password

$conn_string = "host=sheep port=5432 dbname=test user=lamb password=bar";
$dbconn4 = pg_connect($conn_string);
//connect to a database named "test" on the host "sheep" with a username and password

$dbconn5 = pg_connect("host=localhost options='--client_encoding=UTF8'");
//connect to a database on "localhost" and set the command line parameter which tells the encoding is in UTF-8
?>

    
```

## 参见

`pg_pconnect()` `pg_close()` `pg_host()` `pg_port()` `pg_tty()` `pg_options()` `pg_dbname()`
