---
id: "zh-php-function-function-pg-trace"
language: "php"
lang: "zh"
category: "function"
name: "pg_trace"
title: "启用 PostgreSQL 连接的追踪"
signature: "bool pg_trace(string $filename, string $mode = \"w\", PgSql\\Connection|null $connection = null, int $trace_mode = 0)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-trace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 启用 PostgreSQL 连接的追踪

## 说明

```php
bool pg_trace(string $filename, string $mode = "w", PgSql\Connection|null $connection = null, int $trace_mode = 0)
```

`pg_trace()` 启用 PostgreSQL 前后端通讯的追踪并记录到文件。要完全理解结果，需要熟悉 PostgreSQL 通讯协议的内部工作原理。

对不熟悉的人来说，追踪发送到服务器的查询错误依然有用，例如可以用 grep '^To backend' trace.log 来查看实际发送到 PostgreSQL 服务器的查询。更多信息参考 [PostgreSQL 手册]()。

## 参数

- **`$filename`** — 写入追踪日志的文件完整路径和文件名，与 `fopen()` 一致。
- **`$mode`** — 可选的文件访问模式，同 `fopen()`。
- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is `null`, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.
- **`$trace_mode`** — 可选的 trace 模式，使用下列常量 `PGSQL_TRACE_SUPPRESS_TIMESTAMPS` 和 `PGSQL_TRACE_REGRESS_MODE`

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 新增 `$trace_mode`。 |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |
| 8.0.0 | `$connection` 现在可为 null。 |

## 示例

**`pg_trace()` 示例**

```php


<?php
$pgsql_conn = pg_connect("dbname=mark host=localhost");

if ($pgsql_conn) {
   pg_trace('/tmp/trace.log', 'w', $pgsql_conn);
   pg_query("SELECT 1");
   pg_untrace($pgsql_conn);
   // Now /tmp/trace.log will contain backend communication
} else {
   print pg_last_error($pgsql_conn);
   exit;
}
?>

    
```

## 参见

`fopen()` `pg_untrace()`
