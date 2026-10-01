---
id: "zh-php-function-function-pg-select"
language: "php"
lang: "zh"
category: "function"
name: "pg_select"
title: "选择记录"
signature: "array|string|false pg_select(PgSql\\Connection $connection, string $table_name, array $conditions = [], int $flags = PGSQL_DML_EXEC, int $mode = PGSQL_ASSOC)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-select.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 选择记录

## 说明

```php
array|string|false pg_select(PgSql\Connection $connection, string $table_name, array $conditions = [], int $flags = PGSQL_DML_EXEC, int $mode = PGSQL_ASSOC)
```

`pg_select()` 根据 `conditions` 数组中的 `field=>value` 值来选择记录。成功的查询返回和 `conditions` 指定的条件相匹配的包括记录和字段的数组。

如果设置了 `flags`，`pg_convert()` 会按照指定 flag 作用于 `conditions` 上。

如果设置了 `$mode`，返回值将以数组形式返回，其中使用 `PGSQL_NUM` 表示索引数组，使用 `PGSQL_ASSOC` 表示关联数组（默认），或者同时使用 `PGSQL_BOTH` 表示两者。

默认情况下 `pg_select()` 传递原始值。值必须转义或指定 PGSQL_DML_ESCAPE。PGSQL_DML_ESCAPE 引用并转义参数/标识符。因此，表/列名称变得区分大小写。

注意转义和预处理查询都不能保护 LIKE 查询、JSON、Array、Regex 等，这些参数要根据上下文来处理。即转义/验证值。

## 参数

- **`$connection`** — `PgSql\Connection` 实例。
- **`$table_name`** — 要选择记录的表名。
- **`$conditions`** — `array`，其键是表 `$table_name` 中的字段名称，其值是检索记录必须满足的条件。 自 PHP 8.4.0 起，当提供空数组时，不会应用任何条件。 以前，当 `$conditions` 参数为空时，函数失败。
- **`$flags`** — 任意数量的 `PGSQL_CONV_FORCE_NULL`、`PGSQL_DML_NO_CONV`、`PGSQL_DML_ESCAPE`、`PGSQL_DML_EXEC`、`PGSQL_DML_ASYNC` 或 `PGSQL_DML_STRING` 的组合。当 `PGSQL_DML_STRING` 是 `$flags` 的一部分，然后将返回查询字符串。当设置了 `PGSQL_DML_NO_CONV` 或 `PGSQL_DML_ESCAPE` 时，不会在内部调用 `pg_convert()`。
- **`$mode`** — `PGSQL_ASSOC`、`PGSQL_NUM` 或 `PGSQL_BOTH` 中的一个。 如果设置了 `PGSQL_ASSOC`，返回值将是关联 `array`；如果设置了 `PGSQL_NUM`，返回值将是索引 `array`；如果设置了 `PGSQL_BOTH`，返回值将是同时包含关联和索引的 `array`。

## 返回值

成功时，如果通过 `$flags` 传递 `PGSQL_DML_STRING`，返回 `string`，否则返回 `array`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | `$conditions` 现在是可选的。 |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |
| 7.1.0 | 新增 `$mode` 参数。 |

## 示例

**`pg_select()` 示例**

```php


<?php 
  $db = pg_connect('dbname=foo');
  // 在某种程度上安全，因为所有值都转义了。
  // 然而 PostgreSQL 支持 JSON/Array。无论是
  // 转义还是预处理都不安全。
  $rec = pg_select($db, 'post_log', $_POST, PG_DML_ESCAPE);
  if ($rec) {
      echo "Records selected\n";
      var_dump($rec);
  } else {
      echo "User must have sent wrong inputs\n";
  }
?>

    
```

## 参见

`pg_convert()`
