---
id: "zh-php-function-function-pg-lo-tell"
language: "php"
lang: "zh"
category: "function"
name: "pg_lo_tell"
title: "返回当前大型对象的指针位置"
signature: "int pg_lo_tell(PgSql\\Lob $lob)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-lo-tell.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回当前大型对象的指针位置

## 说明

```php
int pg_lo_tell(PgSql\Lob $lob)
```

`pg_lo_tell()` 返回当前大对象的指针位置（从头开始的偏移量）。

要使用大对象接口，必须将其封装在一个事务块中。

## 参数

- **`$lob`** — 通过 `pg_lo_open()` 返回的 `PgSql\Lob` 实例。

## 返回值

当前查找距离大对象开头的偏移量（字节数）。如果有错误，返回值为负。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$lob` 接受 `PgSql\Lob` 实例，之前接受 `resource`。 |

## 示例

**`pg_lo_tell()` 示例**

```php


<?php
   $doc_oid = 189762345;
   $database = pg_connect("dbname=jacarta");
   pg_query($database, "begin");
   $handle = pg_lo_open($database, $doc_oid, "r");
   // 忽略开始的 50000 字节
   pg_lo_seek($handle, 50000, PGSQL_SEEK_SET);
   // 查看忽略了多少
   $offset = pg_lo_tell($handle);
   echo "Seek position is: $offset";
   pg_query($database, "commit");
?>

    
```

以上示例会输出：

```text


Seek position is: 50000

    
```

## 参见

`pg_lo_seek()`
