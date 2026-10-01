---
id: "zh-php-function-function-pg-lo-read-all"
language: "php"
lang: "zh"
category: "function"
name: "pg_lo_read_all"
title: "读取整个大对象并直接发送到浏览器"
signature: "int pg_lo_read_all(PgSql\\Lob $lob)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-lo-read-all.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 读取整个大对象并直接发送到浏览器

## 说明

```php
int pg_lo_read_all(PgSql\Lob $lob)
```

`pg_lo_read_all()` 读取大对象并在发送完所有待发的 header 之后将其直接发送给浏览器。主要用于发送图片或声音等二进制数据。

要使用大对象接口，必须将其封装在一个事务块中。

> 本函数以前的名字为 `pg_loreadall()`。

## 参数

- **`$lob`** — 通过 `pg_lo_open()` 返回的 `PgSql\Lob` 实例。

## 返回值

读取的字节数。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$lob` 接受 `PgSql\Lob` 实例，之前接受 `resource`。 |

## 示例

**`pg_lo_read_all()` 示例**

```php


<?php
   header('Content-type: image/jpeg');
   $image_oid = 189762345;
   $database = pg_connect("dbname=jacarta");
   pg_query($database, "begin");
   $handle = pg_lo_open($database, $image_oid, "r");
   pg_lo_read_all($handle);
   pg_query($database, "commit");
?>

    
```

## 参见

`pg_lo_read()`
