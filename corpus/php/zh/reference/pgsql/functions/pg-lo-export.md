---
id: "zh-php-function-function-pg-lo-export"
language: "php"
lang: "zh"
category: "function"
name: "pg_lo_export"
title: "将大型对象导出到文件"
signature: "bool pg_lo_export([PgSql\\Connection $connection = ...], int $oid, string $filename)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-lo-export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将大型对象导出到文件

## 说明

```php
bool pg_lo_export([PgSql\Connection $connection = ...], int $oid, string $filename)
```

`pg_lo_export()` 在 PostgreSQL 数据库中获取一个大对象并将其内容保存到本地文件系统上的文件中。

要使用大型对象（lo）接口，需要将其放置在事务块中。

> 本函数以前的名字为 `pg_loexport()`。

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is unspecified, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.
- **`$oid`** — 要导出的数据库里的大型对象的 `OID`。
- **`$filename`** — 要导出的数据库里的大型对象的文件在客户端上完整路径和文件名。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_lo_export()` 示例**

```php


<?php
   $database = pg_connect("dbname=jacarta");
   pg_query($database, "begin");
   $oid = pg_lo_create($database);
   $handle = pg_lo_open($database, $oid, "w");
   pg_lo_write($handle, "large object data");
   pg_lo_close($handle);
   pg_lo_export($database, $oid, '/tmp/lob.dat');
   pg_query($database, "commit");
?>

    
```

## 参见

`pg_lo_import()`
