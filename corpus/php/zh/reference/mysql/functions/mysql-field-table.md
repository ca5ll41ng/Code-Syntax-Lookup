---
id: "zh-php-function-function-mysql-field-table"
language: "php"
lang: "zh"
category: "function"
name: "mysql_field_table"
title: "取得指定字段所在的表名"
signature: "string mysql_field_table(resource $result, int $field_offset)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-field-table.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得指定字段所在的表名

## 说明

```php
string mysql_field_table(resource $result, int $field_offset)
```

返回指定字段所在的表名。

## 参数

- **`$result`** — `resource` 型的结果集。此结果集来自对 `mysql_query()` 的调用。
- **`$field_offset`** — 数值型字段偏移量。 `$field_offset` 从 `0` 开始。如果 `$field_offset` 不存在，则会发出一个 `E_WARNING` 级别的错误

## 返回值

The name of the table on success.

## 示例

**`mysql_field_table()` 示例**

```php


<?php

$query = "SELECT account.*, country.* FROM account, country WHERE country.name = 'Portugal' AND account.country_id = country.id";

// get the result from the DB
$result = mysql_query($query);

// Lists the table name and then the field name
for ($i = 0; $i < mysql_num_fields($result); ++$i) {
    $table = mysql_field_table($result, $i);
    $field = mysql_field_name($result, $i);

    echo  "$table: $field\n";
}

?>

   
```

## 注释

> 为了向下兼容，可以使用下列已废弃的别名： `mysql_fieldtable()`

## 参见

 `mysql_list_tables()`
