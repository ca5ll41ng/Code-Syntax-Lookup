---
id: "zh-php-function-function-pg-untrace"
language: "php"
lang: "zh"
category: "function"
name: "pg_untrace"
title: "禁用 PostgreSQL 连接的追踪"
signature: "true pg_untrace(PgSql\\Connection|null $connection = null)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-untrace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 禁用 PostgreSQL 连接的追踪

## 说明

```php
true pg_untrace(PgSql\Connection|null $connection = null)
```

停止由 `pg_trace()` 启用的追踪。

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is `null`, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 现在返回类型为 `true`；之前是 `bool`。 |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |
| 8.0.0 | `$connection` 现在可为 null。 |

## 示例

**`pg_untrace()` 示例**

```php


<?php
$pgsql_conn = pg_connect("dbname=mark host=localhost");

if ($pgsql_conn) {
   pg_trace('/tmp/trace.log', 'w', $pgsql_conn);
   pg_query("SELECT 1");
   pg_untrace($pgsql_conn);
   // Now tracing of backend communication is disabled
} else {
   print pg_last_error($pgsql_conn);
   exit;
}
?>

    
```

## 参见

`pg_trace()`
