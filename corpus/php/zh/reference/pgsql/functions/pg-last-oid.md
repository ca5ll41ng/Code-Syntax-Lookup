---
id: "zh-php-function-function-pg-last-oid"
language: "php"
lang: "zh"
category: "function"
name: "pg_last_oid"
title: "返回上一条记录的 oid"
signature: "string|int|false pg_last_oid(PgSql\\Result $result)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-last-oid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回上一条记录的 oid

## 说明

```php
string|int|false pg_last_oid(PgSql\Result $result)
```

`pg_last_oid()` 用于检索分配给插入行的 `OID`。

从 PostgreSQL 7.2 开始 OID 字段成为可选项，在 PostgreSQL 8.1 中默认不存在。如果表中没有定义 OID 字段，程序员必须用 `pg_result_status()` 检查记录是否成功插入。

要在插入的行中获取 `SERIAL` 字段的值，必须使用 PostgreSQL `CURRVAL` 函数，命名需要最后一个值的序列。如果序列名称未知，则需要 `pg_get_serial_sequence` PostgreSQL 8.0 函数。

PostgreSQL 8.1 有一个函数 `LASTVAL`，它返回会话中最近使用的序列的值。这避免了对序列、表或列的命名需求。

> 本函数以前的名字为 `pg_getlastoid()`。

## 参数

- **`$result`** — `PgSql\Result` 实例，由 `pg_query()`、`pg_query_params()` 或者 `pg_execute()`（等）返回。

## 返回值

`int` 或 `string`，包含分配给指定 `$connection` 中最近插入的行的 OID，如果出错或没有可用的 OID，则为 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$result` 参数接受 `PgSql\Result` 实例，之前接受 `resource`。 |

## 示例

**`pg_last_oid()` 示例**

```php


<?php
  // 连接到数据库
  pg_connect("dbname=mark host=localhost");

  // 创建示例表
  pg_query("CREATE TABLE test (a INTEGER) WITH OIDS");

  // 插入一些数据
  $res = pg_query("INSERT INTO test VALUES (1)");

  $oid = pg_last_oid($res);
?>

    
```

## 参见

`pg_query()` `pg_result_status()`
