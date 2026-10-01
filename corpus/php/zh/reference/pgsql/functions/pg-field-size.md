---
id: "zh-php-function-function-pg-field-size"
language: "php"
lang: "zh"
category: "function"
name: "pg_field_size"
title: "返回指定字段的内部存储大小"
signature: "int pg_field_size(PgSql\\Result $result, int $field)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-field-size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回指定字段的内部存储大小

## 说明

```php
int pg_field_size(PgSql\Result $result, int $field)
```

`pg_field_size()` 返回指定 PostgreSQL `$result` 中字段编号的内部存储大小（以字节为单位）。

> 本函数以前的名字为 `pg_fieldsize()`。

## 参数

- **`$result`** — `PgSql\Result` 实例，由 `pg_query()`、`pg_query_params()` 或者 `pg_execute()`（等）返回。
- **`$field`** — 字段编号，从 0 开始。

## 返回值

内部字段存储大小（以字节为单位）。-1 表示可变长度字段。

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

`pg_field_prtlen()` `pg_field_type()`
