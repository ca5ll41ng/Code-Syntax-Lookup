---
id: "zh-php-function-function-pg-lo-open"
language: "php"
lang: "zh"
category: "function"
name: "pg_lo_open"
title: "打开大对象"
signature: "PgSql\\Lob|false pg_lo_open(PgSql\\Connection $connection, int $oid, string $mode)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-lo-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开大对象

## 说明

```php
PgSql\Lob|false pg_lo_open(PgSql\Connection $connection, int $oid, string $mode)
```

`pg_lo_open()` 打开数据库中的大对象并返回 `PgSql\Lob` 实例，以便对其进行操作。

> 在关闭 `PgSql\Lob` 实例之前不要关闭数据库连接。

要使用大对象接口，必须将其封装在一个事务块中。

> 本函数以前的名字为 `pg_loopen()`。

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is unspecified, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.
- **`$oid`** — 数据库中大对象的 `OID`。
- **`$mode`** — 可以是只读的“r”、只写的“w”或读写的“rw”。

## 返回值

`PgSql\Lob` 实例， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在返回 `PgSql\Lob` 实例；之前返回 `resource`。 |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_lo_open()` 示例**

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

## 参见

`pg_lo_close()` `pg_lo_create()`
