---
id: "zh-php-function-function-mysql-get-client-info"
language: "php"
lang: "zh"
category: "function"
name: "mysql_get_client_info"
title: "取得 MySQL 客户端信息"
signature: "string mysql_get_client_info()"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-get-client-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得 MySQL 客户端信息

## 说明

```php
string mysql_get_client_info()
```

`mysql_get_client_info()` 返回表示客户端库版本的字符串。

## 参数

此函数没有参数。

## 返回值

MySQL 客户端版本。

## 示例

**`mysql_get_client_info()` 示例**

```php


<?php
printf("MySQL client info: %s\n", mysql_get_client_info());
?>

   
```

以上示例的输出类似于：

```text


MySQL client info: 3.23.39

   
```

## 参见

 `mysql_get_host_info()` `mysql_get_proto_info()` `mysql_get_server_info()`
