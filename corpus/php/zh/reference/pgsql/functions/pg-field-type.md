---
id: "zh-php-function-function-pg-field-type"
language: "php"
lang: "zh"
category: "function"
name: "pg_field_type"
title: "返回相应字段编号的类型名称"
signature: "string pg_field_type(PgSql\\Result $result, int $field)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-field-type.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回相应字段编号的类型名称

## 说明

```php
string pg_field_type(PgSql\Result $result, int $field)
```

`pg_field_type()` 返回字符串，其中包含指定 `$result` 实例中指定 `$field` 的基本类型名称。

> 如果字段使用 PostgreSQL domain（而不是基本类型），则返回的是 domain 的底层类型名称，而不是 domain 本身的名称。

> 本函数以前的名字为 `pg_fieldtype()`。

## 参数

- **`$result`** — `PgSql\Result` 实例，由 `pg_query()`、`pg_query_params()` 或者 `pg_execute()`（等）返回。
- **`$field`** — 字段编号，从 0 开始。

## 返回值

包含字段类型的基本名称的 `string`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$result` 参数接受 `PgSql\Result` 实例，之前接受 `resource`。 |

## 示例

**获取字段信息**

```php


<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  // 假设 'title' 是 varchar 类型
  $res = pg_query($dbconn, "select title from authors where author = 'Orwell'");

  echo "Title field type: ", pg_field_type($res, 0);
?>

    
```

以上示例会输出：

```text


Title field type: varchar

    
```

## 参见

`pg_field_prtlen()` `pg_field_name()` `pg_field_type_oid()`
