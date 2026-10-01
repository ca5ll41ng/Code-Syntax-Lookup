---
id: "zh-php-function-function-pg-field-name"
language: "php"
lang: "zh"
category: "function"
name: "pg_field_name"
title: "返回字段名"
signature: "string pg_field_name(PgSql\\Result $result, int $field)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-field-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回字段名

## 说明

```php
string pg_field_name(PgSql\Result $result, int $field)
```

`pg_field_name()` 返回在指定 `$result` 实例中占据 `$field` 字段的字段名。字段编号从 0 开始。

> 此函数过去称为 `pg_fieldname()`。

## 参数

- **`$result`** — `PgSql\Result` 实例，由 `pg_query()`、`pg_query_params()` 或者 `pg_execute()`（等）返回。
- **`$field`** — 字段编号，从 0 开始。

## 返回值

字段名。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$result` 参数接受 `PgSql\Result` 实例，之前接受 `resource`。 |

## 示例

**获取字段信息**

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

`pg_field_num()`
