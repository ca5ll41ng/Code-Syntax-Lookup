---
id: "zh-php-function-function-pg-lo-read"
language: "php"
lang: "zh"
category: "function"
name: "pg_lo_read"
title: "读取大对象"
signature: "string|false pg_lo_read(PgSql\\Lob $lob, int $length = 8192)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-lo-read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 读取大对象

## 说明

```php
string|false pg_lo_read(PgSql\Lob $lob, int $length = 8192)
```

`pg_lo_read()` 从大对象中读取最多 `$length` 字节的数据并以 `string` 返回。

要使用大对象接口，必须将其封装在一个事务块中。

> 本函数以前的名字为 `pg_loread()`。

## 参数

- **`$lob`** — 通过 `pg_lo_open()` 返回的 `PgSql\Lob` 实例。
- **`$length`** — 可选的要返回的最大字节数。

## 返回值

包含来自大对象的 `$length` 字节的 `string`，或错误时为 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$lob` 接受 `PgSql\Lob` 实例，之前接受 `resource`。 |

## 示例

**`pg_lo_read()` 示例**

```php


<?php
   $doc_oid = 189762345;
   $database = pg_connect("dbname=jacarta");
   pg_query($database, "begin");
   $handle = pg_lo_open($database, $doc_oid, "r");
   $data = pg_lo_read($handle, 50000);
   pg_query($database, "commit");
   echo $data;
?>

    
```

## 参见

`pg_lo_read_all()`
