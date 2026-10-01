---
id: "zh-php-function-function-pg-lo-write"
language: "php"
lang: "zh"
category: "function"
name: "pg_lo_write"
title: "向大对象写入数据"
signature: "int|false pg_lo_write(PgSql\\Lob $lob, string $data, int|null $length = null)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-lo-write.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向大对象写入数据

## 说明

```php
int|false pg_lo_write(PgSql\Lob $lob, string $data, int|null $length = null)
```

`pg_lo_write()` 在大对象的当前位置写入数据。

要使用大对象接口，必须将其封装在一个事务块中。

> 本函数以前的名字为 `pg_lowrite()`。

## 参数

- **`$lob`** — 通过 `pg_lo_open()` 返回的 `PgSql\Lob` 实例。
- **`$data`** — 写入到大对象中的数据。如果 `$length` 是 `int` 并且少于 `$data` 的长度，仅会写入 `$length` 个字节。
- **`$length`** — 可选的最大写入字节数。必须大于零且不大于 `$data` 的长度。默认为 `$data` 的长度。

## 返回值

写入到大对象的字节数，或出错时为 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$lob` 接受 `PgSql\Lob` 实例，之前接受 `resource`。 |
| 8.0.0 | `$length` 现在可为 null。 |

## 示例

**`pg_lo_write()` 示例**

```php


<?php
   $doc_oid = 189762345;
   $data = "This will overwrite the start of the large object.";
   $database = pg_connect("dbname=jacarta");
   pg_query($database, "begin");
   $handle = pg_lo_open($database, $doc_oid, "w");
   $data = pg_lo_write($handle, $data);
   pg_query($database, "commit");
?>

    
```

## 参见

`pg_lo_create()` `pg_lo_open()`
