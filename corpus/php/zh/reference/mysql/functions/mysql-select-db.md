---
id: "zh-php-function-function-mysql-select-db"
language: "php"
lang: "zh"
category: "function"
name: "mysql_select_db"
title: "选择 MySQL 数据库"
signature: "bool mysql_select_db(string $database_name, [resource $link_identifier = ...])"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-select-db.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 选择 MySQL 数据库

## 说明

```php
bool mysql_select_db(string $database_name, [resource $link_identifier = ...])
```

成功时返回 `true`， 或者在失败时返回 `false`。

`mysql_select_db()` 设定与指定的连接标识符所关联的服务器上的当前激活数据库。如果没有指定连接标识符，则使用上一个打开的连接。如果没有打开的连接，本函数将无参数调用 `mysql_connect()` 来尝试打开一个并使用之。

每个其后的 `mysql_query()` 调用都会作用于活动数据库。

**`mysql_select_db()` 例子**

```php


<?php

$lnk = mysql_connect('localhost', 'mysql_user', 'mysql_password')
       or die ('Not connected : ' . mysql_error());

// make foo the current db
mysql_select_db('foo', $lnk) or die ('Can\'t use foo : ' . mysql_error());

?>

     
```

参见 `mysql_connect()`，`mysql_pconnect()` 和 `mysql_query()`。

为向下兼容仍然可以使用 `mysql_selectdb()`，但反对这样做。

## 参数

- **`$database_name`** — The name of the database that is to be selected.
- **`$link_identifier`** — MySQL 连接。如不指定连接标识，则使用由 `mysql_connect()` 最近打开的连接。如果没有找到该连接，会尝试不带参数调用 `mysql_connect()` 来创建。如没有找到连接或无法建立连接，则会生成 `E_WARNING` 级别的错误。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`mysql_select_db()` example**

```php


<?php

$link = mysql_connect('localhost', 'mysql_user', 'mysql_password');
if (!$link) {
    die('Not connected : ' . mysql_error());
}

// make foo the current db
$db_selected = mysql_select_db('foo', $link);
if (!$db_selected) {
    die ('Can\'t use foo : ' . mysql_error());
}
?>

   
```

## 注释

> 为了向下兼容，可以使用下列已废弃的别名： `mysql_selectdb()`

## 参见

 `mysql_connect()` `mysql_pconnect()` `mysql_query()`
