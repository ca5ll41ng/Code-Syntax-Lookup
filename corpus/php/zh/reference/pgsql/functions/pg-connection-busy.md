---
id: "zh-php-function-function-pg-connection-busy"
language: "php"
lang: "zh"
category: "function"
name: "pg_connection_busy"
title: "获取连接是否繁忙"
signature: "bool pg_connection_busy(PgSql\\Connection $connection)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-connection-busy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取连接是否繁忙

## 说明

```php
bool pg_connection_busy(PgSql\Connection $connection)
```

`pg_connection_busy()` 确定连接是否繁忙。如果繁忙，则之前的查询仍在执行。如果在连接上使用 `pg_get_result()`，将被阻塞。

## 参数

- **`$connection`** — `PgSql\Connection` 实例。

## 返回值

如果连接繁忙返回 `true`，否则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_connection_busy()` 示例**

```php


<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");
  $bs = pg_connection_busy($dbconn);
  if ($bs) {
      echo 'connection is busy';
  } else {
     echo 'connection is not busy';
  }
?>

    
```

## 参见

`pg_connection_status()` `pg_get_result()`
