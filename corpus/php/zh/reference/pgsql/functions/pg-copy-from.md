---
id: "zh-php-function-function-pg-copy-from"
language: "php"
lang: "zh"
category: "function"
name: "pg_copy_from"
title: "将数组中的记录插入到表"
signature: "bool pg_copy_from(PgSql\\Connection $connection, string $table_name, array|Traversable $rows, string $separator = \"\\t\", string $null_as = \"\\\\\\\\N\")"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-copy-from.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将数组中的记录插入到表

## 说明

```php
bool pg_copy_from(PgSql\Connection $connection, string $table_name, array|Traversable $rows, string $separator = "\t", string $null_as = "\\\\N")
```

`pg_copy_from()` 将 `$rows` 插入记录到表中。在内部发出 `COPY FROM` 命令以插入记录。

## 参数

- **`$connection`** — `PgSql\Connection` 实例。
- **`$table_name`** — 复制 `$rows` 到其中的表名。
- **`$rows`** — 要复制 `iterable` 中的数据到 `$table_name`。`$rows` 中的每个值都成为 `$table_name` 中的一行。`$rows` 中的每个值都应该用字符串分割以插入到每个字段。值应该换行终止。
- **`$separator`** — `$rows` 的每个元素分割为每个字段的值的标记。默认为 `\t`。
- **`$null_as`** — SQL `NULL` 值在 `$rows` 中的表示方式。默认为 `\\N`（`"\\\\N"`）。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.5.0 | `$rows` 现在是 `iterable` 类型。 之前是 `array` 类型。 |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_copy_from()` 示例**

```php


<?php
   $db = pg_connect("dbname=publisher") or die("Could not connect");
   
   $rows = pg_copy_to($db, $table_name);
   
   pg_query($db, "DELETE FROM $table_name");
   
   pg_copy_from($db, $table_name, $rows);
?>

    
```

## 参见

`pg_copy_to()`
