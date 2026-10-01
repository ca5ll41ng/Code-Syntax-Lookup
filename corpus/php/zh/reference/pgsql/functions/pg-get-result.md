---
id: "zh-php-function-function-pg-get-result"
language: "php"
lang: "zh"
category: "function"
name: "pg_get_result"
title: "取得异步查询结果"
signature: "PgSql\\Result|false pg_get_result(PgSql\\Connection $connection)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-get-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得异步查询结果

## 说明

```php
PgSql\Result|false pg_get_result(PgSql\Connection $connection)
```

`pg_get_result()` 从由 `pg_send_query()`、`pg_send_query_params()` 或 `pg_send_execute()` 执行的异步查询中获取 `PgSql\Result` 实例。

`pg_send_query()` 和其它异步查询函数可以向 PostgreSQL 服务器发送多个查询，而 `pg_get_result()` 则用来逐个获取查询结果。

## 参数

- **`$connection`** — `PgSql\Connection` 实例。

## 返回值

`PgSql\Result` 实例，或者没有更多查询结果，则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在返回 `PgSql\Result` 实例，之前返回 `resource` |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_get_result()` 示例**

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

`pg_send_query()`
