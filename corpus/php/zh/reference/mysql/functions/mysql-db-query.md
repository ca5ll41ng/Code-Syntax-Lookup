---
id: "zh-php-function-function-mysql-db-query"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["sql_injection"],"cwe":["CWE-89"],"params":[2]}
name: "mysql_db_query"
title: "选择数据库并执行查询"
signature: "resource|bool mysql_db_query(string $database, string $query, resource $link_identifier = NULL)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-db-query.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 选择数据库并执行查询

## 说明

```php
resource|bool mysql_db_query(string $database, string $query, resource $link_identifier = NULL)
```

`mysql_db_query()` 选择数据库并执行查询。

## 参数

- **`$database`** — 要选择的数据库名。
- **`$query`** — MySQL 查询。 — 查询中的数据应正确转义。
- **`$link_identifier`** — MySQL 连接。如不指定连接标识，则使用由 `mysql_connect()` 最近打开的连接。如果没有找到该连接，会尝试不带参数调用 `mysql_connect()` 来创建。如没有找到连接或无法建立连接，则会生成 `E_WARNING` 级别的错误。

## 返回值

返回正的 MySQL 结果资源到查询结果，出错时返回 `false`。本函数会对 `INSERT`/`UPDATE`/`DELETE` 查询返回 `true`/`false` 来指示成功或失败。

## 示例

**替代 `mysql_db_query()` 示例**

```php


<?php

if (!$link = mysql_connect('mysql_host', 'mysql_user', 'mysql_password')) {
    echo 'Could not connect to mysql';
    exit;
}

if (!mysql_select_db('mysql_dbname', $link)) {
    echo 'Could not select database';
    exit;
}

$sql    = 'SELECT foo FROM bar WHERE id = 42';
$result = mysql_query($sql, $link);

if (!$result) {
    echo "DB Error, could not query the database\n";
    echo 'MySQL Error: ' . mysql_error();
    exit;
}

while ($row = mysql_fetch_assoc($result)) {
    echo $row['foo'];
}

mysql_free_result($result);

?>

   
```

## 注释

> 注意此函数*不会*切换回先前连接到的数据库。换句话说，不能用此函数*临时*在另一个数据库上执行 sql 查询，只能手工切换回来。强烈建议用户在 sql 查询中使用 `database.table` 语法或 `mysql_select_db()` 替代此函数。

## 参见

 `mysql_query()` `mysql_select_db()`
