---
id: "zh-php-function-function-pg-lo-seek"
language: "php"
lang: "zh"
category: "function"
name: "pg_lo_seek"
title: "在大对象中寻找位置"
signature: "bool pg_lo_seek(PgSql\\Lob $lob, int $offset, int $whence = SEEK_CUR)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-lo-seek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在大对象中寻找位置

## 说明

```php
bool pg_lo_seek(PgSql\Lob $lob, int $offset, int $whence = SEEK_CUR)
```

`pg_lo_seek()` 在 `PgSql\Lob` 实例中寻找位置。

要使用大对象接口，必须将其封装在一个事务块中。

## 参数

- **`$lob`** — 通过 `pg_lo_open()` 返回的 `PgSql\Lob` 实例。
- **`$offset`** — 要寻找的字节数。
- **`$whence`** — 常量 `PGSQL_SEEK_SET`（从对象开始处寻找）、 `PGSQL_SEEK_CUR`（从当前位置寻找） 或 `PGSQL_SEEK_END`（从对象结尾处寻找）之一。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$lob` 接受 `PgSql\Lob` 实例，之前接受 `resource`。 |

## 示例

**`pg_lo_seek()` 示例**

```php


<?php
   $doc_oid = 189762345;
   $database = pg_connect("dbname=jacarta");
   pg_query($database, "begin");
   $handle = pg_lo_open($database, $doc_oid, "r");
   // 忽略开始的 50000 字节
   pg_lo_seek($handle, 50000, PGSQL_SEEK_SET);
   // 读取接下来的 10000 字节
   $data = pg_lo_read($handle, 10000);
   pg_query($database, "commit");
   echo $data;
?>

    
```

## 参见

`pg_lo_tell()`
