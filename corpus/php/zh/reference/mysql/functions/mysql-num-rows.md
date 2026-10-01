---
id: "zh-php-function-function-mysql-num-rows"
language: "php"
lang: "zh"
category: "function"
name: "mysql_num_rows"
title: "获取结果中行数"
signature: "int|false mysql_num_rows(resource $result)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-num-rows.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取结果中行数

## 说明

```php
int|false mysql_num_rows(resource $result)
```

检索结果集中的行数。此命令仅适用于返回实际结果集的 SELECT 或 SHOW 语句。要检索受 INSERT、UPDATE、REPLACE 或 DELETE 查询影响的行数，请使用 `mysql_affected_rows()` 函数。

## 参数

- **`$result`** — `resource` 型的结果集。此结果集来自对 `mysql_query()` 的调用。

## 返回值

The number of rows in a result set on success 或者在失败时返回 `false`.

## 示例

**`mysql_num_rows()` 示例**

```php


<?php

$link = mysql_connect("localhost", "mysql_user", "mysql_password");
mysql_select_db("database", $link);

$result = mysql_query("SELECT * FROM table1", $link);
$num_rows = mysql_num_rows($result);

echo "$num_rows Rows\n";

?>

   
```

## 注释

> 如果使用 `mysql_unbuffered_query()`，则直到检索到结果集中的所有行后 `mysql_num_rows()` 才能返回正确的值。

> 为了向下兼容，可以使用下列已废弃的别名： `mysql_numrows()`

## 参见

 `mysql_affected_rows()` `mysql_connect()` `mysql_data_seek()` `mysql_select_db()` `mysql_query()`
