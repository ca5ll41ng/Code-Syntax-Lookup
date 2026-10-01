---
id: "zh-php-function-function-mysql-db-name"
language: "php"
lang: "zh"
category: "function"
name: "mysql_db_name"
title: "取得 `mysql_list_dbs()` 返回的结果数据"
signature: "string mysql_db_name(resource $result, int $row, mixed $field = NULL)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-db-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得 `mysql_list_dbs()` 返回的结果数据

## 说明

```php
string mysql_db_name(resource $result, int $row, mixed $field = NULL)
```

取得 `mysql_list_dbs()` 调用所返回的数据库名。

## 参数

- **`$result`** — `mysql_list_dbs()` 调用所返回的结果指针。
- **`$row`** — 结果集中的行号。
- **`$field`** — 字段名。

## 返回值

如果成功则返回数据库名，失败返回 `false`。如果返回了 `false`，用 `mysql_error()` 来判断错误的种类。

## 示例

**`mysql_db_name()` 示例**

```php


<?php
error_reporting(E_ALL);

$link = mysql_connect('dbhost', 'username', 'password');
$db_list = mysql_list_dbs($link);

$i = 0;
$cnt = mysql_num_rows($db_list);
while ($i < $cnt) {
    echo mysql_db_name($db_list, $i) . "\n";
    $i++;
}
?>

   
```

## 注释

> 为了向下兼容，可以使用下列已废弃的别名： `mysql_dbname()`

## 参见

 `mysql_list_dbs()` `mysql_tablename()`
