---
id: "zh-php-function-function-pg-field-prtlen"
language: "php"
lang: "zh"
category: "function"
name: "pg_field_prtlen"
title: "返回打印的长度"
signature: "int pg_field_prtlen(PgSql\\Result $result, string|false|null $row, mixed $field_name_or_number)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-field-prtlen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回打印的长度

## 说明

```php
int pg_field_prtlen(PgSql\Result $result, string|false|null $row, mixed $field_name_or_number)
```

```php
int pg_field_prtlen(PgSql\Result $result, mixed $field_name_or_number)
```

`pg_field_prtlen()` 返回 PostgreSQL `$result` 中特定值的实际打印长度（字符数）。行编号从 0 开始。此函数将在出错时返回 `false`。

`$field_name_or_number` 可以传递 `int` 或 `string`。如果它作为 `int` 传递，PHP 将其视为字段号，否则视为字段名。

请参阅 `pg_field_name()` 页面中给出的示例。

> 本函数以前的名字为 `pg_fieldprtlen()`。

## 参数

- **`$result`** — `PgSql\Result` 实例，由 `pg_query()`、`pg_query_params()` 或者 `pg_execute()`（等）返回。
- **`$row`** — 结果中的行号。行从 0 向上编号。如果省略，则获取当前行。

## 返回值

字段打印的长度。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | `$row` 现在可为 null。 |
| 8.1.0 | 现在 `$result` 参数接受 `PgSql\Result` 实例，之前接受 `resource`。 |

## 示例

**获取字段的信息**

```php


<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  $res = pg_query($dbconn, "select * from authors where author = 'Orwell'");
  $i = pg_num_fields($res);
  for ($j = 0; $j < $i; $j++) {
      echo "column $j\n";
      $fieldname = pg_field_name($res, $j);
      echo "fieldname: $fieldname\n";
      echo "printed length: " . pg_field_prtlen($res, $fieldname) . " characters\n";
      echo "storage length: " . pg_field_size($res, $j) . " bytes\n";
      echo "field type: " . pg_field_type($res, $j) . " \n\n";
  }
?>

    
```

以上示例会输出：

```text


column 0
fieldname: author
printed length: 6 characters
storage length: -1 bytes
field type: varchar 

column 1
fieldname: year
printed length: 4 characters
storage length: 2 bytes
field type: int2 

column 2
fieldname: title
printed length: 24 characters
storage length: -1 bytes
field type: varchar 

    
```

## 参见

`pg_field_size()`
