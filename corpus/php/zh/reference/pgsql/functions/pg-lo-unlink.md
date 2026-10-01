---
id: "zh-php-function-function-pg-lo-unlink"
language: "php"
lang: "zh"
category: "function"
name: "pg_lo_unlink"
title: "删除一个大型对象"
signature: "bool pg_lo_unlink(PgSql\\Connection $connection, int $oid)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-lo-unlink.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 删除一个大型对象

## 说明

```php
bool pg_lo_unlink(PgSql\Connection $connection, int $oid)
```

`pg_lo_unlink()` 删除由 `$oid` 指定的大型对象。成功时返回 `true`， 或者在失败时返回 `false`。

要使用大型对象（lo）接口，需要将其放置在事务块中。

> 本函数以前的名字为 `pg_lounlink()`。

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is unspecified, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.
- **`$oid`** — 数据库中大对象的 `OID`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_lo_unlink()` 示例**

```php


<?php
   // 要删除的大对象的 OID
   $doc_oid = 189762345;
   $database = pg_connect("dbname=jacarta");
   pg_query($database, "begin");
   pg_lo_unlink($database, $doc_oid);
   pg_query($database, "commit");
?>

    
```

## 参见

`pg_lo_create()` `pg_lo_import()`
