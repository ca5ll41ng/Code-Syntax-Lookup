---
id: "zh-php-function-function-pg-field-is-null"
language: "php"
lang: "zh"
category: "function"
name: "pg_field_is_null"
title: "测试字段是否为 SQL `NULL`"
signature: "int pg_field_is_null(PgSql\\Result $result, string|false|null $row, mixed $field)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-field-is-null.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 测试字段是否为 SQL `NULL`

## 说明

```php
int pg_field_is_null(PgSql\Result $result, string|false|null $row, mixed $field)
```

```php
int pg_field_is_null(PgSql\Result $result, mixed $field)
```

`pg_field_is_null()` 测试 `PgSql\Result` 实例中的字段是否为 SQL `NULL`。

> 此函数过去称为 `pg_fieldisnull()`。

## 参数

- **`$result`** — `PgSql\Result` 实例，由 `pg_query()`、`pg_query_params()` 或者 `pg_execute()`（等）返回。
- **`$row`** — 要获取的结果中的行号。行从 0 向上编号。如果省略或，则获取当前行。
- **`$field`** — 作为 `int` 的字段编号（从 0 开始）或作为 `string` 的字段名。

## 返回值

如果指定行中的字段为 SQL `NULL`，则返回 `1`，否则返回 `0`。如果该行超出范围或发生任何其他错误，则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | `$row` 现在可为 null。 |
| 8.1.0 | 现在 `$result` 参数接受 `PgSql\Result` 实例，之前接受 `resource`。 |

## 示例

**`pg_field_is_null()` 示例**

```php


<?php
  $dbconn = pg_connect("dbname=publisher") or die ("Could not connect");
  $res = pg_query($dbconn, "select * from authors where author = 'Orwell'");
  if ($res) {
      if (pg_field_is_null($res, 0, "year") == 1) {
          echo "The value of the field year is null.\n";
      }
      if (pg_field_is_null($res, 0, "year") == 0) {
          echo "The value of the field year is not null.\n";
    }
 }
?>

    
```
