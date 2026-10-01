---
id: "zh-php-function-function-pg-insert"
language: "php"
lang: "zh"
category: "function"
name: "pg_insert"
title: "将数组插入到表中"
signature: "PgSql\\Result|string|bool pg_insert(PgSql\\Connection $connection, string $table_name, array $values, int $flags = PGSQL_DML_EXEC)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-insert.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将数组插入到表中

## 说明

```php
PgSql\Result|string|bool pg_insert(PgSql\Connection $connection, string $table_name, array $values, int $flags = PGSQL_DML_EXEC)
```

`pg_insert()` 将 `$values` 中的值插入到由 `$table_name` 指定的表中。

如果指定 `$flags`，则 `pg_convert()` 使用指定 flag 应用于 `$values`。

默认情况下 `pg_insert()` 传递原始值。值必须转义或必须在 `$flags` 中指定 `PGSQL_DML_ESCAPE` flag。`PGSQL_DML_ESCAPE` 引用并转义参数/标识符。因此，表/列名称变得区分大小写。

注意转义和预处理查询都不能保护 LIKE 查询、JSON、Array、Regex 等，这些参数要根据上下文来处理。即转义/验证值。

## 参数

- **`$connection`** — `PgSql\Connection` 实例。
- **`$table_name`** — 要插入记录的表名。表 `$table_name` 中的列必须至少要有 `values` 中的单元那么多。
- **`$values`** — `array`，其键是表 `$table_name` 中的字段名称，其值是要插入的匹配行。
- **`$flags`** — 任意数量的 `PGSQL_CONV_OPTS`、`PGSQL_DML_NO_CONV`、`PGSQL_DML_ESCAPE`、`PGSQL_DML_EXEC`、`PGSQL_DML_ASYNC` 或 `PGSQL_DML_STRING` 的组合。当 `PGSQL_DML_STRING` 是 `$flags` 的一部分，然后将返回查询字符串。当设置了 `PGSQL_DML_NO_CONV` 或 `PGSQL_DML_ESCAPE` 时，不会在内部调用 `pg_convert()`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。如果通过 `$flags` 传递 `PGSQL_DML_STRING`，成功时返回 `string`。

## 错误／异常

当指定的表无效时，会抛出 `ValueError`。

当字段的值或类型不能正确匹配 PostgreSQL的类型时，会抛出 `ValueError` 或 `TypeError`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 当指定的表无效时，现在会抛出 `ValueError` 错误；之前触发 `E_WARNING`。 |
| 8.3.0 | 当字段的值或类型不能正确匹配 PostgreSQL 的类型时，现在会抛出 `ValueError` 或 `TypeError` 错误；之前触发 `E_WARNING`。 |
| 8.1.0 | 现在返回 `PgSql\Result` 实例，之前返回 `resource` |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_insert()` 示例**

```php


<?php 
  $dbconn = pg_connect('dbname=foo');
  // 在某种程度上安全，因为所有值都转义了。
  // 然而 PostgreSQL 支持 JSON/Array。无论是
  // 转义还是预处理都不安全。
  $res = pg_insert($dbconn, 'post_log', $_POST, PGSQL_DML_ESCAPE);
  if ($res) {
      echo "POST data is successfully logged\n";
  } else {
      echo "User must have sent wrong inputs\n";
  }
?>

    
```

## 参见

`pg_convert()`
