---
id: "zh-php-function-function-pg-lo-create"
language: "php"
lang: "zh"
category: "function"
name: "pg_lo_create"
title: "新建大对象"
signature: "int pg_lo_create([PgSql\\Connection $connection = ...], [mixed $object_id = ...])"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-lo-create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 新建大对象

## 说明

```php
int pg_lo_create([PgSql\Connection $connection = ...], [mixed $object_id = ...])
```

```php
int pg_lo_create(mixed $object_id)
```

`pg_lo_create()` 新建大对象并返回大对象的 `oid`。不支持 PostgreSQL 访问模式 `INV_READ` 和 `INV_WRITE`。 创建的对象始终以读写方式访问。

要使用大对象接口，必须将其封装在一个事务块中。

不使用大对象接口（没有访问控制，使用起来很麻烦），试试 PostgreSQL 的 `bytea` 列类型和 `pg_escape_bytea()`。

> 本函数以前的名字为 `pg_locreate()`。

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is unspecified, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.
- **`$object_id`** — 如果指定 `$object_id`，该函数将尝试使用此 id 创建大对象，否则服务器将分配一个空闲对象 id。

## 返回值

大对象 `OID`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_lo_create()` 示例**

```php


<?php
   $database = pg_connect("dbname=jacarta");
   pg_query($database, "begin");
   $oid = pg_lo_create($database);
   echo "$oid\n";
   $handle = pg_lo_open($database, $oid, "w");
   echo "$handle\n";
   pg_lo_write($handle, "large object data");
   pg_lo_close($handle);
   pg_query($database, "commit");
?>

    
```
