---
id: "zh-php-function-function-pg-lo-import"
language: "php"
lang: "zh"
category: "function"
name: "pg_lo_import"
title: "将文件导入为大型对象"
signature: "int|string|false pg_lo_import([PgSql\\Connection $connection = ...], string $filename, [int|string $oid = ...])"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-lo-import.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将文件导入为大型对象

## 说明

```php
int|string|false pg_lo_import([PgSql\Connection $connection = ...], string $filename, [int|string $oid = ...])
```

`pg_lo_import()` 使用文件系统上的文件作为其数据源从而在数据库中创建新的大对象。

要使用大型对象接口，需要将其放置在事务块中。

> 本函数以前的名字为 `pg_loimport()`。

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is unspecified, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.
- **`$filename`** — 在客户端文件系统上读取大对象数据的文件的完整路径和文件名。
- **`$oid`** — 如果指定了 `$oid`，该函数将使用此 id 尝试创建大对象，否则服务器将分配空闲对象 id。该参数依赖于 PostgreSQL 8.1 中首次出现的功能。

## 返回值

新创建大对象的 `OID`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_lo_import()` 示例**

```php


<?php
   $database = pg_connect("dbname=jacarta");
   pg_query($database, "begin");
   $oid = pg_lo_import($database, '/tmp/lob.dat');
   pg_query($database, "commit");
?>

    
```

## 参见

`pg_lo_export()` `pg_lo_open()`
