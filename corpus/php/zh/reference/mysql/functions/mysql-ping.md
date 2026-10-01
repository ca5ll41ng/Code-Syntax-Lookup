---
id: "zh-php-function-function-mysql-ping"
language: "php"
lang: "zh"
category: "function"
name: "mysql_ping"
title: "Ping 服务器连接的状态，如果没有连接则重新连接"
signature: "bool mysql_ping(resource $link_identifier = NULL)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-ping.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Ping 服务器连接的状态，如果没有连接则重新连接

## 说明

```php
bool mysql_ping(resource $link_identifier = NULL)
```

检查到服务器的连接是否正常。如果断开，则自动尝试连接。本函数可用于空闲很久的脚本来检查服务器是否关闭了连接，如果有必要则重新连接上。。

> 从 MySQL 版本 5.0.3 开始，默认情况下不启用自动重新连接功能。

## 参数

- **`$link_identifier`** — MySQL 连接。如不指定连接标识，则使用由 `mysql_connect()` 最近打开的连接。如果没有找到该连接，会尝试不带参数调用 `mysql_connect()` 来创建。如没有找到连接或无法建立连接，则会生成 `E_WARNING` 级别的错误。

## 返回值

如果到服务器的连接可用则，返回 `true`，否则返回 `false`。

## 示例

**`mysql_ping()` 示例**

```php


<?php
set_time_limit(0);

$conn = mysql_connect('localhost', 'mysqluser', 'mypass');
$db   = mysql_select_db('mydb');

/* Assuming this query will take a long time */
$result = mysql_query($sql);
if (!$result) {
    echo 'Query #1 failed, exiting.';
    exit;
}

/* Make sure the connection is still alive, if not, try to reconnect */
if (!mysql_ping($conn)) {
    echo 'Lost connection, exiting after query #1';
    exit;
}
mysql_free_result($result);

/* So the connection is still alive, let's run another query */
$result2 = mysql_query($sql2);
?>

   
```

## 参见

 `mysql_thread_id()` `mysql_list_processes()`
