---
id: "zh-php-function-function-pg-pconnect"
language: "php"
lang: "zh"
category: "function"
name: "pg_pconnect"
title: "打开一个持久的 PostgreSQL 连接"
signature: "PgSql\\Connection|false pg_pconnect(string $connection_string, int $flags = 0)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-pconnect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开一个持久的 PostgreSQL 连接

## 说明

```php
PgSql\Connection|false pg_pconnect(string $connection_string, int $flags = 0)
```

`pg_pconnect()` 打开一个到 PostgreSQL 数据库的持久连接。返回其它 PostgreSQL 函数所需要的 `PgSql\Connection` 实例。

如果使用与已有连接相同的 `$connection_string` 对 `pg_pconnect()` 进行第二次调用，则将返回已有连接，除非将 `PGSQL_CONNECT_FORCE_NEW` 传递给 `$flags`。

要打开持久连接，php.ini 中的 pgsql.allow_persistent 参数必须为 `"On"`（也是默认值）。最大持久连接数由 php.ini 中的 pgsql.max_persistent 参数定义（默认为 `-1` 表示没有限制）。所有连接的数量可由 php.ini 中的 pgsql.max_links 参数设置。

`pg_close()` 不能关闭由 `pg_pconnect()` 打开的持久连接。

## 参数

- **`$connection_string`** — `$connection_string` 可以为空以使用所有默认参数，也可以包含一个或多个由空格分隔的参数设置。每个参数设置的形式为 `keyword = value`。等号旁边的空格是可选的。要写入空值或包含空格的值，请用单引号将其括起来，例如，`keyword = 'a value'`。值中的单引号和反斜线必须用反斜线转义，即 `\'` 和 `\\`。 — 当前可识别的参数关键字是：`$host`、`$hostaddr`、`$port`、`$dbname`、`$user`、`$password`、`$connect_timeout`、`$options`、`$tty`（已忽略）、`$sslmode`、`$requiressl`（已弃用以支持 `$sslmode`）和 `$service`。存在哪些参数取决于 PostgreSQL 版本。
- **`$flags`** — 如果传递了 `PGSQL_CONNECT_FORCE_NEW`，则会创建新连接，即使 `$connection_string` 与现有连接相同。

## 返回值

成功时返回 `PgSql\Connection` 实例， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在返回 `PgSql\Connection` 实例；之前返回 `resource`。 |

## 示例

**使用 `pg_pconnect()`**

```php


<?php
// 连接到名为 "mary" 的数据库
$dbconn = pg_pconnect("dbname=mary");

// 连接到主机为 "localhost"，端口为 "5432"， 名为 "mary" 的水库
$dbconn2 = pg_pconnect("host=localhost port=5432 dbname=mary");

// 使用用户名和密码连接到主机为 "sheep"，名为 "mary" 的数据库
$dbconn3 = pg_pconnect("host=sheep port=5432 dbname=mary user=lamb password=foo");

// 使用用户名和密码连接到主机为 "sheep"，名为 "test" 的数据库
$conn_string = "host=sheep port=5432 dbname=test user=lamb password=bar";
$dbconn4 = pg_pconnect($conn_string);
?>

    
```

## 参见

`pg_connect()` 持久数据库连接
