---
id: "zh-php-function-function-mysql-result"
language: "php"
lang: "zh"
category: "function"
name: "mysql_result"
title: "取得结果数据"
signature: "string mysql_result(resource $result, int $row, mixed $field = 0)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得结果数据

## 说明

```php
string mysql_result(resource $result, int $row, mixed $field = 0)
```

Retrieves the contents of one cell from a MySQL result set.

When working on large result sets, you should consider using one of the functions that fetch an entire row (specified below). As these functions return the contents of multiple cells in one function call, they're MUCH quicker than `mysql_result()`. Also, note that specifying a numeric offset for the field argument is much quicker than specifying a fieldname or tablename.fieldname argument.

## 参数

- **`$result`** — `resource` 型的结果集。此结果集来自对 `mysql_query()` 的调用。
- **`$row`** — The row number from the result that's being retrieved. Row numbers start at `0`.
- **`$field`** — The name or offset of the field being retrieved. — It can be the field's offset, the field's name, or the field's table dot field name (tablename.fieldname). If the column name has been aliased ('select foo as bar from...'), use the alias instead of the column name. If undefined, the first field is retrieved.

## 返回值

The contents of one cell from a MySQL result set on success, or `false` on failure.

## 示例

**`mysql_result()` 示例**

```php


<?php
$link = mysql_connect('localhost', 'mysql_user', 'mysql_password');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
if (!mysql_select_db('database_name')) {
    die('Could not select database: ' . mysql_error());
}
$result = mysql_query('SELECT name FROM work.employee');
if (!$result) {
    die('Could not query:' . mysql_error());
}
echo mysql_result($result, 2); // outputs third employee's name

mysql_close($link);
?>

   
```

## 注释

> Calls to `mysql_result()` should not be mixed with calls to other functions that deal with the result set.

## 参见

 `mysql_fetch_row()` `mysql_fetch_array()` `mysql_fetch_assoc()` `mysql_fetch_object()`
