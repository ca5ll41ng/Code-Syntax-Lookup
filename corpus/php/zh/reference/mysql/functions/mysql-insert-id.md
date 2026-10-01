---
id: "zh-php-function-function-mysql-insert-id"
language: "php"
lang: "zh"
category: "function"
name: "mysql_insert_id"
title: "取得上一条查询生成的 ID"
signature: "int mysql_insert_id(resource $link_identifier = NULL)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-insert-id.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得上一条查询生成的 ID

## 说明

```php
int mysql_insert_id(resource $link_identifier = NULL)
```

检索通过之前查询（通常是 INSERT）中 AUTO_INCREMENT 列生成的 ID。

## 参数

- **`$link_identifier`** — MySQL 连接。如不指定连接标识，则使用由 `mysql_connect()` 最近打开的连接。如果没有找到该连接，会尝试不带参数调用 `mysql_connect()` 来创建。如没有找到连接或无法建立连接，则会生成 `E_WARNING` 级别的错误。

## 返回值

成功时返回通过之前查询中 AUTO_INCREMENT 列生成的 ID，如果之前查询没有生成 AUTO_INCREMENT 值，则为 `0`。如果没有建立 MySQL 连接，则为 `false`。

## 示例

**`mysql_insert_id()` 示例**

```php


<?php
$link = mysql_connect('localhost', 'mysql_user', 'mysql_password');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
mysql_select_db('mydb');

mysql_query("INSERT INTO mytable (product) values ('kossu')");
printf("Last inserted record has id %d\n", mysql_insert_id());
?>

   
```

## 注释

> `mysql_insert_id()` will convert the return type of the native MySQL C API function `mysql_insert_id()` to a type of `long` (named `int` in PHP). If your AUTO_INCREMENT column has a column type of BIGINT (64 bits) the conversion may result in an incorrect value. Instead, use the internal MySQL SQL function LAST_INSERT_ID() in an SQL query. For more information about PHP's maximum integer values, please see the integer documentation.

> Because `mysql_insert_id()` acts on the last performed query, be sure to call `mysql_insert_id()` immediately after the query that generates the value.

> The value of the MySQL SQL function `LAST_INSERT_ID()` always contains the most recently generated AUTO_INCREMENT value, and is not reset between queries.

## 参见

 `mysql_query()` `mysql_info()`
