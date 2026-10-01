---
id: "zh-php-function-function-mysql-num-fields"
language: "php"
lang: "zh"
category: "function"
name: "mysql_num_fields"
title: "取得结果中字段的数量"
signature: "int|false mysql_num_fields(resource $result)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-num-fields.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得结果中字段的数量

## 说明

```php
int|false mysql_num_fields(resource $result)
```

从查询中检索字段的数量。

## 参数

- **`$result`** — `resource` 型的结果集。此结果集来自对 `mysql_query()` 的调用。

## 返回值

Returns the number of fields in the result set `resource` on success 或者在失败时返回 `false`.

## 示例

**`mysql_num_fields()` 示例**

```php


<?php
$result = mysql_query("SELECT id,email FROM people WHERE id = '42'");
if (!$result) {
    echo 'Could not run query: ' . mysql_error();
    exit;
}

/* returns 2 because id,email === two fields */
echo mysql_num_fields($result);
?>

   
```

## 注释

> 为了向下兼容，可以使用下列已废弃的别名： `mysql_numfields()`

## 参见

 `mysql_select_db()` `mysql_query()` `mysql_fetch_field()` `mysql_num_rows()`
