---
id: "zh-php-function-function-pg-field-num"
language: "php"
lang: "zh"
category: "function"
name: "pg_field_num"
title: "返回名为 field 的字段编号"
signature: "int pg_field_num(PgSql\\Result $result, string $field)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-field-num.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回名为 field 的字段编号

## 说明

```php
int pg_field_num(PgSql\Result $result, string $field)
```

`pg_field_num()` 将返回与指定 `$result` 实例中的 `$field` 对应的字段编号。

> 本函数以前的名字为 `pg_fieldnum()`。

## 参数

- **`$result`** — `PgSql\Result` 实例，由 `pg_query()`、`pg_query_params()` 或者 `pg_execute()`（等）返回。
- **`$field`** — 字段名。 指定的名称被视为 SQL 命令中的标识符，也就是说，除非用双引号引起来，否则它将是大写（downcased）。

## 返回值

字段编号（从 0 开始），错误时为 -1。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$result` 参数接受 `PgSql\Result` 实例，之前接受 `resource`。 |

## 示例

**获取字段信息**

```php


<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  $res = pg_query($dbconn, "select author, year, title from authors where author = 'Orwell'");
  
  echo "Column 'title' is field number: ", pg_field_num($res, 'title');
?>

    
```

以上示例会输出：

```text


Column 'title' is field number: 2

    
```

## 参见

`pg_field_name()`
