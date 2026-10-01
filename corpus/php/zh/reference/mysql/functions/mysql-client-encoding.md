---
id: "zh-php-function-function-mysql-client-encoding"
language: "php"
lang: "zh"
category: "function"
name: "mysql_client_encoding"
title: "返回字符集的名称"
signature: "string mysql_client_encoding([resource $link_identifier = ...])"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-client-encoding.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回字符集的名称

## 说明

```php
string mysql_client_encoding([resource $link_identifier = ...])
```

从 MySQL 中取得 `character_set` 变量的值。

## 参数

- **`$link_identifier`** — MySQL 连接。如不指定连接标识，则使用由 `mysql_connect()` 最近打开的连接。如果没有找到该连接，会尝试不带参数调用 `mysql_connect()` 来创建。如没有找到连接或无法建立连接，则会生成 `E_WARNING` 级别的错误。

## 返回值

返回当前连接的默认字符集名称。

## 示例

**`mysql_client_encoding()` 示例**

```php


<?php
$link    = mysql_connect('localhost', 'mysql_user', 'mysql_password');
$charset = mysql_client_encoding($link);

echo "The current character set is: $charset\n";
?>

   
```

以上示例的输出类似于：

```text


The current character set is: latin1

   
```

## 参见

 `mysql_real_escape_string()`
