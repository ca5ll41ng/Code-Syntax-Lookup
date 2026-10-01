---
id: "zh-php-function-function-mysql-list-fields"
language: "php"
lang: "zh"
category: "function"
name: "mysql_list_fields"
title: "列出 MySQL 表字段"
signature: "resource mysql_list_fields(string $database_name, string $table_name, resource $link_identifier = NULL)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-list-fields.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 列出 MySQL 表字段

## 说明

```php
resource mysql_list_fields(string $database_name, string $table_name, resource $link_identifier = NULL)
```

检索指定表名的信息。

此函数已弃用。最好使用 `mysql_query()` 发出 SQL `SHOW COLUMNS FROM table [LIKE 'name']` 语句代替。

## 参数

- **`$database_name`** — The name of the database that's being queried.
- **`$table_name`** — The name of the table that's being queried.
- **`$link_identifier`** — MySQL 连接。如不指定连接标识，则使用由 `mysql_connect()` 最近打开的连接。如果没有找到该连接，会尝试不带参数调用 `mysql_connect()` 来创建。如没有找到连接或无法建立连接，则会生成 `E_WARNING` 级别的错误。

## 返回值

A result pointer `resource` on success, or `false` on failure.

结果指针，可以用于 `mysql_field_flags()`、`mysql_field_len()`、`mysql_field_name()` 和 `mysql_field_type()`。

## 示例

**替代弃用 `mysql_list_fields()`**

```php


<?php
$result = mysql_query("SHOW COLUMNS FROM sometable");
if (!$result) {
    echo 'Could not run query: ' . mysql_error();
    exit;
}
if (mysql_num_rows($result) > 0) {
    while ($row = mysql_fetch_assoc($result)) {
        print_r($row);
    }
}
?>

   
```

以上示例的输出类似于：

```text


Array
(
    [Field] => id
    [Type] => int(7)
    [Null] =>
    [Key] => PRI
    [Default] =>
    [Extra] => auto_increment
)
Array
(
    [Field] => email
    [Type] => varchar(100)
    [Null] =>
    [Key] =>
    [Default] =>
    [Extra] =>
)

   
```

## 注释

> 为了向下兼容，可以使用下列已废弃的别名： `mysql_listfields()`

## 参见

 `mysql_field_flags()` `mysql_info()`
