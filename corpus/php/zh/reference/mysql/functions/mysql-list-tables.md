---
id: "zh-php-function-function-mysql-list-tables"
language: "php"
lang: "zh"
category: "function"
name: "mysql_list_tables"
title: "列出 MySQL 数据库中的表"
signature: "resource|false mysql_list_tables(string $database, [resource $link_identifier = ...])"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-list-tables.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 列出 MySQL 数据库中的表

## 说明

```php
resource|false mysql_list_tables(string $database, [resource $link_identifier = ...])
```

列出 MySQL 数据库中的表。

此函数已废弃。推荐使用 `mysql_query()` 来执行 SQL `SHOW TABLES [FROM db_name] [LIKE 'pattern']` 来实现同样的操作。

## 参数

- **`$database`** — 数据库名称
- **`$link_identifier`** — MySQL 连接。如不指定连接标识，则使用由 `mysql_connect()` 最近打开的连接。如果没有找到该连接，会尝试不带参数调用 `mysql_connect()` 来创建。如没有找到连接或无法建立连接，则会生成 `E_WARNING` 级别的错误。

## 返回值

成功时返回结果指针 `resource` 或者在失败时返回 `false`。

可以使用 `mysql_tablename()` 函数来遍历该结果指针，或者使用任何针对表操作的函数，类似 `mysql_fetch_array()`。

## 示例

**`mysql_list_tables()` 例子**

```php


<?php
$dbname = 'mysql_dbname';

if (!mysql_connect('mysql_host', 'mysql_user', 'mysql_password')) {
    echo 'Could not connect to mysql';
    exit;
}

$sql = "SHOW TABLES FROM $dbname";
$result = mysql_query($sql);

if (!$result) {
    echo "DB Error, could not list tables\n";
    echo 'MySQL Error: ' . mysql_error();
    exit;
}

while ($row = mysql_fetch_row($result)) {
    echo "Table: {$row[0]}\n";
}

mysql_free_result($result);
?>

   
```

## 注释

> 为了向下兼容，可以使用下列已废弃的别名： `mysql_listtables()`

## 参见

 `mysql_list_dbs()` `mysql_tablename()`
