---
id: "zh-php-function-function-pg-result-error"
language: "php"
lang: "zh"
category: "function"
name: "pg_result_error"
title: "获得跟 result 相关的错误信息"
signature: "string|false pg_result_error(PgSql\\Result $result)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-result-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获得跟 result 相关的错误信息

## 说明

```php
string|false pg_result_error(PgSql\Result $result)
```

`pg_result_error()` 返回和 `$result` 实例关联的错误信息。因此用户更有机会可以得到比 `pg_last_error()` 更好的错误信息。

函数 `pg_result_error_field()` 可以比 `pg_result_error()` 给出更多关于 result 错误的细节。

因为如果查询失败 `pg_query()` 返回 `false`，必须使用 `pg_send_query()` 和 `pg_get_result()` 来获取 result 句柄。

## 参数

- **`$result`** — `PgSql\Result` 实例，由 `pg_query()`、`pg_query_params()` 或者 `pg_execute()`（等）返回。

## 返回值

返回 `string`。如果没有错误返回空字符串。如果有跟 `$result` 参数相关的错误，则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$result` 参数接受 `PgSql\Result` 实例，之前接受 `resource`。 |

## 示例

**`pg_result_error()` 示例**

```php


<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  if (!pg_connection_busy($dbconn)) {
      pg_send_query($dbconn, "select * from doesnotexist;");
  }

  $res1 = pg_get_result($dbconn);
  echo pg_result_error($res1);
?>

    
```

## 参见

`pg_result_error_field()` `pg_query()` `pg_send_query()` `pg_get_result()` `pg_last_error()` `pg_last_notice()`
