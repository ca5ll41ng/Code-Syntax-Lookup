---
id: "zh-php-function-function-pg-get-notify"
language: "php"
lang: "zh"
category: "function"
name: "pg_get_notify"
title: "获取 SQL NOTIFY 消息"
signature: "array|false pg_get_notify(PgSql\\Connection $connection, int $mode = PGSQL_ASSOC)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-get-notify.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 SQL NOTIFY 消息

## 说明

```php
array|false pg_get_notify(PgSql\Connection $connection, int $mode = PGSQL_ASSOC)
```

`pg_get_notify()` 取得 SQL 命令 `NOTIFY` 生成的消息。要接收通知，必须发送 SQL 命令 `LISTEN`。

## 参数

- **`$connection`** — `PgSql\Connection` 实例。
- **`$mode`** — An optional parameter that controls how the returned `array` is indexed. `$mode` is a constant and can take the following values: `PGSQL_ASSOC`, `PGSQL_NUM` and `PGSQL_BOTH`. Using `PGSQL_NUM`, the function will return an array with numerical indices, using `PGSQL_ASSOC` it will return only associative indices while `PGSQL_BOTH` will return both numerical and associative indices.

## 返回值

包含 `NOTIFY` 消息名称和后端 PID 的 `array`。如果服务器支持，该数组还包含服务器版本和有效负载。否则，如果没有 `NOTIFY` 正在等待，则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**PostgreSQL NOTIFY 消息**

```php


<?php 
$conn = pg_pconnect("dbname=publisher");
if (!$conn) {
  echo "An error occurred.\n";
  exit;
}

// 从其它进程监听 'author_updated' 消息
pg_query($conn, 'LISTEN author_updated;');
$notify = pg_get_notify($conn);
if (!$notify) {
  echo "No messages\n";
} else {
  print_r($notify);
}
?>

    
```

## 参见

`pg_get_pid()`
