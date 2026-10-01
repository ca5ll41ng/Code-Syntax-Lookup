---
id: "zh-php-function-function-pg-connection-status"
language: "php"
lang: "zh"
category: "function"
name: "pg_connection_status"
title: "获取连接状态"
signature: "int pg_connection_status(PgSql\\Connection $connection)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-connection-status.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取连接状态

## 说明

```php
int pg_connection_status(PgSql\Connection $connection)
```

`pg_connection_status()` 返回指定 `$connection` 的状态。

## 参数

- **`$connection`** — `PgSql\Connection` 实例。

## 返回值

`PGSQL_CONNECTION_OK` 或 `PGSQL_CONNECTION_BAD`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_connection_status()` 示例**

```php


<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");
  $stat = pg_connection_status($dbconn);
  if ($stat === PGSQL_CONNECTION_OK) {
      echo 'Connection status ok';
  } else {
      echo 'Connection status bad';
  }    
?>

    
```

## 参见

`pg_connection_busy()`
