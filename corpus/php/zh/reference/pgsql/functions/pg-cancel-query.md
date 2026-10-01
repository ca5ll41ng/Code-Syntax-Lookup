---
id: "zh-php-function-function-pg-cancel-query"
language: "php"
lang: "zh"
category: "function"
name: "pg_cancel_query"
title: "取消异步查询"
signature: "bool pg_cancel_query(PgSql\\Connection $connection)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-cancel-query.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取消异步查询

## 说明

```php
bool pg_cancel_query(PgSql\Connection $connection)
```

`pg_cancel_query()` 取消由 `pg_send_query()`、`pg_send_query_params()` 或 `pg_send_execute()` 发送的异步查询。不能取消使用 `pg_query()` 执行的查询。

## 参数

- **`$connection`** — `PgSql\Connection` 实例。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_cancel_query()` 示例**

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
  
  // Cancel the currently running query.  Will be the second query if it is
  // still running.
  pg_cancel_query($dbconn);
?>

    
```

以上示例会输出：

```text


First call to pg_get_result(): Resource id #3
Resource id #3 has 3 records

    
```

## 参见

`pg_send_query()` `pg_connection_busy()`
