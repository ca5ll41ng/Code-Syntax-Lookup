---
id: "zh-php-function-function-pg-last-notice"
language: "php"
lang: "zh"
category: "function"
name: "pg_last_notice"
title: "返回 PostgreSQL 服务器最新一条公告信息"
signature: "array|string|bool pg_last_notice(PgSql\\Connection $connection, int $mode = PGSQL_NOTICE_LAST)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-last-notice.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 PostgreSQL 服务器最新一条公告信息

## 说明

```php
array|string|bool pg_last_notice(PgSql\Connection $connection, int $mode = PGSQL_NOTICE_LAST)
```

`pg_last_notice()` 返回由 `$connection` 指定的 PostgreSQL 服务器最新的一条 notice 信息。PostgreSQL 服务器在某些情况下会发送 notice 信息，例如在表里创建 `SERIAL` 列。

使用 `pg_last_notice()`，只要检查 notice 是否和该事务有关，就可以避免提交无用的查询。

可以通过在 php.ini 中把 `pgsql.ignore_notice` 置为 1 来使 notice 信息追踪成为可选项。

可以通过在 php.ini 中把 `pgsql.log_notice` 置为 0 来使 notice 信息日志成为可选项。 除非 `pgsql.ignore_notice` 为 0，否则 notice 信息不能被日志记录。

## 参数

- **`$connection`** — `PgSql\Connection` 实例。
- **`$mode`** — `PGSQL_NOTICE_LAST`（返回最后的 notice）、`PGSQL_NOTICE_ALL`（返回所有 notice）或 `PGSQL_NOTICE_CLEAR`（清除 notice）之一。

## 返回值

在指定 `$connection` 使用 `PGSQL_NOTICE_LAST`，返回包含最后一条 notice 的 `string`，使用 `PGSQL_NOTICE_ALL` 时为 `array`，使用 `PGSQL_NOTICE_CLEAR` 时为 `bool`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |
| 7.1.0 | 新增 `$mode` 参数。 |

## 示例

**`pg_last_notice()` 示例**

```php


<?php
  $pgsql_conn = pg_connect("dbname=mark host=localhost");
  
  $res = pg_query("CREATE TABLE test (id SERIAL)");
  
  $notice = pg_last_notice($pgsql_conn);
  
  echo $notice;
?>

    
```

以上示例会输出：

```text


CREATE TABLE will create implicit sequence "test_id_seq" for "serial" column "test.id"

    
```

## 参见

`pg_query()` `pg_last_error()`
