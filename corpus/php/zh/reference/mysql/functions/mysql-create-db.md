---
id: "zh-php-function-function-mysql-create-db"
language: "php"
lang: "zh"
category: "function"
name: "mysql_create_db"
title: "新建一个 MySQL 数据库"
signature: "bool mysql_create_db(string $database name, [resource $link_identifier = ...])"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-create-db.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 新建一个 MySQL 数据库

## 说明

```php
bool mysql_create_db(string $database name, [resource $link_identifier = ...])
```

`mysql_create_db()` 尝试在指定的连接标识所关联的服务器上建立一个新数据库。

## 参数

- **`$database_name`** — 要创建的数据库名。
- **`$link_identifier`** — MySQL 连接。如不指定连接标识，则使用由 `mysql_connect()` 最近打开的连接。如果没有找到该连接，会尝试不带参数调用 `mysql_connect()` 来创建。如没有找到连接或无法建立连接，则会生成 `E_WARNING` 级别的错误。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**替代 `mysql_create_db()` 示例**

`mysql_create_db()` 函数已废弃。最好用 `mysql_query()` 来提交一条 SQL 的 `CREATE DATABASE` 语句来代替。

```php


<?php
$link = mysql_connect('localhost', 'mysql_user', 'mysql_password');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}

$sql = 'CREATE DATABASE my_db';
if (mysql_query($sql, $link)) {
    echo "Database my_db created successfully\n";
} else {
    echo 'Error creating database: ' . mysql_error() . "\n";
}
?>

   
```

以上示例的输出类似于：

```text


Database my_db created successfully

   
```

## 注释

> 为了向下兼容，可以使用下列已废弃的别名： `mysql_createdb()`

> 如果 MySQL 扩展是基于 MySQL 4.x 客户端库编译的话则本函数不可用。

## 参见

 `mysql_query()` `mysql_select_db()`
