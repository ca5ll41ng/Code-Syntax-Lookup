---
id: "zh-php-function-function-mysql-list-dbs"
language: "php"
lang: "zh"
category: "function"
name: "mysql_list_dbs"
title: "列出 MySQL 服务器中可用的数据库"
signature: "resource mysql_list_dbs(resource $link_identifier = NULL)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-list-dbs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 列出 MySQL 服务器中可用的数据库

## 说明

```php
resource mysql_list_dbs(resource $link_identifier = NULL)
```

返回结果指针，包含当前 MySQL 守护进程中可用的数据库。

## 参数

- **`$link_identifier`** — MySQL 连接。如不指定连接标识，则使用由 `mysql_connect()` 最近打开的连接。如果没有找到该连接，会尝试不带参数调用 `mysql_connect()` 来创建。如没有找到连接或无法建立连接，则会生成 `E_WARNING` 级别的错误。

## 返回值

Returns a result pointer `resource` on success, or `false` on failure. 使用 `mysql_tablename()` 函数或任何使用结果表的函数（比如 `mysql_fetch_array()`）来遍历此结果指针。

## 示例

**`mysql_list_dbs()` 示例**

```php


<?php
// Usage without mysql_list_dbs()
$link = mysql_connect('localhost', 'mysql_user', 'mysql_password');
$res = mysql_query("SHOW DATABASES");

while ($row = mysql_fetch_assoc($res)) {
    echo $row['Database'] . "\n";
}

// Deprecated as of PHP 5.4.0
$link = mysql_connect('localhost', 'mysql_user', 'mysql_password');
$db_list = mysql_list_dbs($link);

while ($row = mysql_fetch_object($db_list)) {
     echo $row->Database . "\n";
}
?>

   
```

以上示例的输出类似于：

```text


database1
database2
database3

   
```

## 注释

> 为了向下兼容，可以使用下列已废弃的别名： `mysql_listdbs()`

## 参见

 `mysql_db_name()` `mysql_select_db()`
