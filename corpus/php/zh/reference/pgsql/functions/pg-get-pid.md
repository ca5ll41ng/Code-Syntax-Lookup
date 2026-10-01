---
id: "zh-php-function-function-pg-get-pid"
language: "php"
lang: "zh"
category: "function"
name: "pg_get_pid"
title: "获取后端的进程 ID"
signature: "int pg_get_pid(PgSql\\Connection $connection)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-get-pid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取后端的进程 ID

## 说明

```php
int pg_get_pid(PgSql\Connection $connection)
```

`pg_get_pid()` 取得后端（数据库服务器进程）的 PID。PID 用来确定通过 `pg_get_notify()` 接收到的 `NOTIFY` 消息，是否是其它进程发送的。

## 参数

- **`$connection`** — `PgSql\Connection` 实例。

## 返回值

后端数据库进程 ID。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**PostgreSQL 后端 PID**

```php


<?php 
$conn = pg_pconnect("dbname=publisher");
if (!$conn) {
  echo "An error occurred.\n";
  exit;
}

// Backend process PID. Use PID with pg_get_notify()
$pid = pg_get_pid($conn);
?>

    
```

## 参见

`pg_get_notify()`
