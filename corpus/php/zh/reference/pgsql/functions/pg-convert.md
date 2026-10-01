---
id: "zh-php-function-function-pg-convert"
language: "php"
lang: "zh"
category: "function"
name: "pg_convert"
title: "将关联的数组值转换为适合 SQL 语句的格式"
signature: "array|false pg_convert(PgSql\\Connection $connection, string $table_name, array $values, int $flags = 0)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-convert.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将关联的数组值转换为适合 SQL 语句的格式

## 说明

```php
array|false pg_convert(PgSql\Connection $connection, string $table_name, array $values, int $flags = 0)
```

`pg_convert()` 检查 `values` 中的值并将其转换为为适用于 SQL 语句的值。`pg_convert()` 的前提条件是现有的表 `table_name` 中具有的列至少有 `values` 中的单元那么多。`table_name` 中的字段名以及字段值必须匹配 `values` 中的索引，并且相应的数据类型必须兼容。成功时返回包含转换后的值的数组，否则返回 `false`。

> 接受 bool 值并转换为 PostgreSQL boolean 值。还支持 bool 值的字符串表示。`null` 转换为 PostgreSQL NULL。

## 参数

- **`$connection`** — `PgSql\Connection` 实例。
- **`$table_name`** — 要转换类型的表名。
- **`$values`** — 要转换的数据。
- **`$flags`** — `PGSQL_CONV_IGNORE_DEFAULT`、`PGSQL_CONV_FORCE_NULL` 或 `PGSQL_CONV_IGNORE_NOT_NULL` 的任意数量组合。

## 返回值

转换值后的 `array`， 或者在失败时返回 `false`。

## 错误／异常

当字段的值或类型不能正确匹配 PostgreSQL 的类型时，会抛出 `ValueError` 或 `TypeError`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 当字段的值或类型不能正确匹配 PostgreSQL 的类型时，现在会抛出 `ValueError` 或 `TypeError` 错误；之前触发 `E_WARNING`。 |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_convert()` 示例**

```php


<?php 
  $dbconn = pg_connect('dbname=foo');
  
  $tmp = array(
      'author' => 'Joe Thackery',
      'year' => 2005,
      'title' => 'My Life, by Joe Thackery'
  );
  
  $vals = pg_convert($dbconn, 'authors', $tmp);
?>

    
```

## 参见

`pg_meta_data()` `pg_insert()` `pg_select()` `pg_update()` `pg_delete()`
