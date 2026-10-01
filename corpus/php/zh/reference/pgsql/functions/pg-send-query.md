---
id: "zh-php-function-function-pg-send-query"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["sql_injection"],"cwe":["CWE-89"],"params":[2]}
name: "pg_send_query"
title: "发送异步查询"
signature: "int|bool pg_send_query(PgSql\\Connection $connection, string $query)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-send-query.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 发送异步查询

## 说明

```php
int|bool pg_send_query(PgSql\Connection $connection, string $query)
```

`pg_send_query()` 向 `$connection` 发送异步查询。跟 `pg_query()` 不同，它可以一次性向 PostgreSQL 发送多个查询并用 `pg_get_result()` 依次得到结果。

当执行查询时不会阻塞脚本执行。用 `pg_connection_busy()` 来检查连接是否繁忙（即查询正在执行中）。可以使用 `pg_cancel_query()` 取消查询。

尽管用户可以同时发送多个查询，但连接繁忙的情况下无法发送多个查询。如果连接繁忙时发送了查询，则会等待上一个查询结束，并且丢弃上个查询的所有结果。

## 参数

- **`$connection`** — `PgSql\Connection` 实例。
- **`$query`** — 要执行的 SQL 语句或者语句集合。 — 应该正确转义查询中的数据。

## 返回值

成功时返回 `true`，失败时返回 `false` 或 `0`。使用 `pg_get_result()` 来确定查询结果。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_send_query()` 示例**

```php


<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  if (!pg_connection_busy($dbconn)) {
      pg_send_query($dbconn, "select * from authors; select count(*) from authors;");
  }
  
  $res1 = pg_get_result($dbconn);
  echo "First call to pg_get_result(): $res1\n";
  $rows1 = pg_num_rows($res1);
  echo "$res1 has $rows1 records\n\n";
  
  $res2 = pg_get_result($dbconn);
  echo "Second call to pg_get_result(): $res2\n";
  $rows2 = pg_num_rows($res2);
  echo "$res2 has $rows2 records\n";
?>

    
```

以上示例会输出：

```text


First call to pg_get_result(): Resource id #3
Resource id #3 has 3 records

Second call to pg_get_result(): Resource id #4
Resource id #4 has 1 records

    
```

## 参见

`pg_query()` `pg_cancel_query()` `pg_get_result()` `pg_connection_busy()`
