---
id: "zh-php-function-function-mysql-get-proto-info"
language: "php"
lang: "zh"
category: "function"
name: "mysql_get_proto_info"
title: "取得 MySQL 协议信息"
signature: "int|false mysql_get_proto_info(resource $link_identifier = NULL)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-get-proto-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得 MySQL 协议信息

## 说明

```php
int|false mysql_get_proto_info(resource $link_identifier = NULL)
```

检索 MySQL 协议。

## 参数

- **`$link_identifier`** — MySQL 连接。如不指定连接标识，则使用由 `mysql_connect()` 最近打开的连接。如果没有找到该连接，会尝试不带参数调用 `mysql_connect()` 来创建。如没有找到连接或无法建立连接，则会生成 `E_WARNING` 级别的错误。

## 返回值

Returns the MySQL protocol on success 或者在失败时返回 `false`.

## 示例

**`mysql_get_proto_info()` 示例**

```php


<?php
$link = mysql_connect('localhost', 'mysql_user', 'mysql_password');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
printf("MySQL protocol version: %s\n", mysql_get_proto_info());
?>

   
```

以上示例的输出类似于：

```text


MySQL protocol version: 10

   
```

## 参见

 `mysql_get_client_info()` `mysql_get_host_info()` `mysql_get_server_info()`
