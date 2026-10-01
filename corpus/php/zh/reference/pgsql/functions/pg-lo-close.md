---
id: "zh-php-function-function-pg-lo-close"
language: "php"
lang: "zh"
category: "function"
name: "pg_lo_close"
title: "关闭大对象"
signature: "bool pg_lo_close(PgSql\\Lob $lob)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-lo-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭大对象

## 说明

```php
bool pg_lo_close(PgSql\Lob $lob)
```

`pg_lo_close()` 关闭大对象。

要使用大对象接口，必须将其封装在事务块中。

> 本函数以前的名字为 `pg_loclose()`。

## 参数

- **`$lob`** — 通过 `pg_lo_open()` 返回的 `PgSql\Lob` 实例。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$lob` 接受 `PgSql\Lob` 实例，之前接受 `resource`。 |

## 示例

**`pg_lo_close()` 示例**

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

`pg_lo_open()` `pg_lo_create()` `pg_lo_import()`
