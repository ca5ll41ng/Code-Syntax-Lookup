---
id: "zh-php-function-function-pg-update"
language: "php"
lang: "zh"
category: "function"
name: "pg_update"
title: "更新表"
signature: "string|bool pg_update(PgSql\\Connection $connection, string $table_name, array $values, array $conditions, int $flags = PGSQL_DML_EXEC)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-update.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 更新表

## 说明

```php
string|bool pg_update(PgSql\Connection $connection, string $table_name, array $values, array $conditions, int $flags = PGSQL_DML_EXEC)
```

`pg_update()` 更新匹配 `$conditions` 和 `$values` 的记录。

如果指定 `$flags`，则 `pg_convert()` 使用指定 flag 应用于 `$values`。

默认情况下 `pg_update()` 传递原始值。值必须转义或必须在 `$flags` 中指定 `PGSQL_DML_ESCAPE` flag。`PGSQL_DML_ESCAPE` 引用并转义参数/标识符。因此，表/列名称变得区分大小写。

注意转义和预处理查询都不能保护 LIKE 查询、JSON、Array、Regex 等，这些参数要根据上下文来处理。即转义/验证值。

## 参数

- **`$connection`** — `PgSql\Connection` 实例。
- **`$table_name`** — 要更新记录的表名。
- **`$values`** — `array`，其键是表 `$table_name` 中的字段名称，其值是要更新的匹配行。
- **`$conditions`** — `array`，其键是表 `$table_name` 中的字段名称，其值是更新行必须满足的条件。
- **`$flags`** — 任意数量的 `PGSQL_CONV_FORCE_NULL`、`PGSQL_DML_NO_CONV`、`PGSQL_DML_ESCAPE`、`PGSQL_DML_EXEC`、`PGSQL_DML_ASYNC` 或 `PGSQL_DML_STRING` 的组合。当 `PGSQL_DML_STRING` 是 `$flags` 的一部分，然后将返回查询字符串。当设置了 `PGSQL_DML_NO_CONV` 或 `PGSQL_DML_ESCAPE` 时，不会在内部调用 `pg_convert()`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。如果通过 `$flags` 传递 `PGSQL_DML_STRING`，成功时返回 `string`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_update()` 示例**

```php


<?php 
  $db = pg_connect('dbname=foo');
  $data = array('field1'=>'AA', 'field2'=>'BB');
  // 在某种程度上安全，因为所有值都转义了。
  // 然而 PostgreSQL 支持 JSON/Array。无论是
  // 转义还是预处理都不安全。
  $res = pg_update($db, 'post_log', $_POST, $data);
  if ($res) {
      echo "Data is updated: $res\n";
  } else {
      echo "User must have sent wrong inputs\n";
  }
?>

    
```

## 参见

`pg_convert()`
