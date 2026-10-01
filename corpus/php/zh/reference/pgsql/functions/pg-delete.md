---
id: "zh-php-function-function-pg-delete"
language: "php"
lang: "zh"
category: "function"
name: "pg_delete"
title: "删除记录"
signature: "string|bool pg_delete(PgSql\\Connection $connection, string $table_name, array $conditions, int $flags = PGSQL_DML_EXEC)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 删除记录

## 说明

```php
string|bool pg_delete(PgSql\Connection $connection, string $table_name, array $conditions, int $flags = PGSQL_DML_EXEC)
```

`pg_delete()` 从 `$conditions` 中的键和值指定的表中删除记录。

如果指定 `$flags`，则 `pg_convert()` 应用于具有指定 flag 的 `$conditions`。

默认 `pg_delete()` 传递原始值。值必须转义或者 `$flags` 必须指定 `PGSQL_DML_ESCAPE` flag。`PGSQL_DML_ESCAPE` 引用并转义参数/标识符。因此，table/column 名称变为区分大小写。

注意转义和预处理查询都不能保护 LIKE 查询、JSON、Array、Regex 等，这些参数要根据上下文来处理。即转义/验证值。

## 参数

- **`$connection`** — `PgSql\Connection` 实例。
- **`$table_name`** — 要从中删除行的表名。
- **`$conditions`** — `array`，其键为表 `$table_name` 中的字段名，其值为要删除的那些字段的值。
- **`$flags`** — 任意数量 `PGSQL_CONV_FORCE_NULL`、`PGSQL_DML_NO_CONV`、`PGSQL_DML_ESCAPE`、`PGSQL_DML_EXEC`、`PGSQL_DML_ASYNC` 或 `PGSQL_DML_STRING` 的组合。如果 `PGSQL_DML_STRING` 是 `$flags` 的一部分，则返回查询字符串。当设置 `PGSQL_DML_NO_CONV` 或 `PGSQL_DML_ESCAPE` 时，不会在内部调用 `pg_convert()`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。如果通过 `$flags` 传递 `PGSQL_DML_STRING`，则返回 `string`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_delete()` 示例**

```php


<?php 
  $db = pg_connect('dbname=foo');
  // 因为转义了所有的值，所以在某种程度上是安全的。
  // 然而 PostgreSQL 支持
  // JSON/Array。无论是转义还是预处理都不安全。
  $res = pg_delete($db, 'post_log', $_POST, PG_DML_ESCAPE);
  if ($res) {
      echo "POST data is deleted: $res\n";
  } else {
      echo "User must have sent wrong inputs\n";
  }
?>

    
```

## 参见

`pg_convert()`
