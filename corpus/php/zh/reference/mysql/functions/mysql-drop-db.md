---
id: "zh-php-function-function-mysql-drop-db"
language: "php"
lang: "zh"
category: "function"
name: "mysql_drop_db"
title: "丢弃（删除）一个 MySQL 数据库"
signature: "bool mysql_drop_db(string $database_name, [resource $link_identifier = ...])"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-drop-db.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 丢弃（删除）一个 MySQL 数据库

## 说明

```php
bool mysql_drop_db(string $database_name, [resource $link_identifier = ...])
```

`mysql_drop_db()` 尝试丢弃（删除）指定连接标识所关联的服务器上的一整个数据库。

成功时返回 `true`， 或者在失败时返回 `false`。

为向下兼容也可以用 `mysql_dropdb()`，但反对这样做。

> 不提倡使用 `mysql_drop_db()` 函数。最好用 `mysql_query()` 提交一条 `SQL DROP DATABASE` 语句来替代。

> 如果 MySQL 扩展库是基于 MySQL 4.x 客户端库建立的，则本函数不可用。

参见 `mysql_create_db()` 和 `mysql_query()`。

## 参数

- **`$database_name`** — The name of the database that will be deleted.
- **`$link_identifier`** — MySQL 连接。如不指定连接标识，则使用由 `mysql_connect()` 最近打开的连接。如果没有找到该连接，会尝试不带参数调用 `mysql_connect()` 来创建。如没有找到连接或无法建立连接，则会生成 `E_WARNING` 级别的错误。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`mysql_drop_db()` alternative example**

```php


<?php
$link = mysql_connect('localhost', 'mysql_user', 'mysql_password');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}

$sql = 'DROP DATABASE my_db';
if (mysql_query($sql, $link)) {
    echo "Database my_db was successfully dropped\n";
} else {
    echo 'Error dropping database: ' . mysql_error() . "\n";
}
?>

   
```

## 注释

> This function will not be available if the MySQL extension was built against a MySQL 4.x client library.

> 为了向下兼容，可以使用下列已废弃的别名： `mysql_dropdb()`

## 参见

 `mysql_query()`
