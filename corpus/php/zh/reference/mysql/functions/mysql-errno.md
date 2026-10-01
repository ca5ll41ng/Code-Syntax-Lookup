---
id: "zh-php-function-function-mysql-errno"
language: "php"
lang: "zh"
category: "function"
name: "mysql_errno"
title: "返回上一个 MySQL 操作中的错误信息的数值"
signature: "int mysql_errno(resource $link_identifier = NULL)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-errno.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回上一个 MySQL 操作中的错误信息的数值

## 说明

```php
int mysql_errno(resource $link_identifier = NULL)
```

返回上一个 MySQL 函数的错误号码。

从 MySQL 数据库后端来的错误不再发出警告。要用 `mysql_errno()` 来检索错误代码。注意本函数仅返回最近执行的 MySQL 函数（不包括 `mysql_error()` 和 `mysql_errno()`）的错误代码，因此如果要使用此函数，确保在调用另一个 MySQL 函数之前检查它的值。

## 参数

- **`$link_identifier`** — MySQL 连接。如不指定连接标识，则使用由 `mysql_connect()` 最近打开的连接。如果没有找到该连接，会尝试不带参数调用 `mysql_connect()` 来创建。如没有找到连接或无法建立连接，则会生成 `E_WARNING` 级别的错误。

## 返回值

Returns the error number from the last MySQL function, or `0` (zero) if no error occurred.

## 示例

**`mysql_errno()` 示例**

```php


<?php
$link = mysql_connect("localhost", "mysql_user", "mysql_password");

if (!mysql_select_db("nonexistentdb", $link)) {
    echo mysql_errno($link) . ": " . mysql_error($link). "\n";
}

mysql_select_db("kossu", $link);
if (!mysql_query("SELECT * FROM nonexistenttable", $link)) {
    echo mysql_errno($link) . ": " . mysql_error($link) . "\n";
}
?>

   
```

以上示例的输出类似于：

```text


1049: Unknown database 'nonexistentdb'
1146: Table 'kossu.nonexistenttable' doesn't exist

   
```

## 参见

 `mysql_error()` [MySQL 错误代码]()
