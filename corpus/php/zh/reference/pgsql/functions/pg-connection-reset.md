---
id: "zh-php-function-function-pg-connection-reset"
language: "php"
lang: "zh"
category: "function"
name: "pg_connection_reset"
title: "重置连接（再次连接）"
signature: "bool pg_connection_reset(PgSql\\Connection $connection)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-connection-reset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 重置连接（再次连接）

## 说明

```php
bool pg_connection_reset(PgSql\Connection $connection)
```

`pg_connection_reset()` 重置连接。用于错误恢复。

## 参数

- **`$connection`** — `PgSql\Connection` 实例。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_connection_reset()` 示例**

```php


<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");
  $dbconn2 = pg_connection_reset($dbconn);
  if ($dbconn2) {
      echo "reset successful\n";
  } else {
      echo "reset failed\n";
  }
?>

    
```

## 参见

`pg_connect()` `pg_pconnect()` `pg_connection_status()`
