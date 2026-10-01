---
id: "zh-php-function-function-pg-copy-to"
language: "php"
lang: "zh"
category: "function"
name: "pg_copy_to"
title: "将表复制到数组"
signature: "array|false pg_copy_to(PgSql\\Connection $connection, string $table_name, string $separator = \"\\t\", string $null_as = \"\\\\\\\\N\")"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-copy-to.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将表复制到数组

## 说明

```php
array|false pg_copy_to(PgSql\Connection $connection, string $table_name, string $separator = "\t", string $null_as = "\\\\N")
```

`pg_copy_to()` 将表复制到数组。在内部发出 `COPY TO` 命令来检索记录。

## 参数

- **`$connection`** — `PgSql\Connection` 实例。
- **`$table_name`** — 从表中将数据复制到 `$rows` 中的表名。
- **`$separator`** — `$rows` 的每个元素分割为每个字段的值的标记。默认为 `\t`。
- **`$null_as`** — SQL `NULL` 值在 `$rows` 中的表示方式。默认为 `\\N`（`"\\\\N"`）。

## 返回值

`COPY` 数据的每一行都作为一个元素组成的 `array`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_copy_to()` 示例**

```php


<?php
   $db = pg_connect("dbname=publisher") or die("Could not connect");
   
   $rows = pg_copy_to($db, $table_name);
   
   pg_query($db, "DELETE FROM $table_name");
   
   pg_copy_from($db, $table_name, $rows);
?>

    
```

## 参见

`pg_copy_from()`
