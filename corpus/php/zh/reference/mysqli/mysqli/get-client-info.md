---
id: "zh-php-function-mysqli-get-client-info"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::$client_info"
aliases: ["mysqli::get_client_info","mysqli_get_client_info"]
title: "获取 MySQL 客户端信息"
signature: "string()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.get-client-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 MySQL 客户端信息

## 说明

面向对象风格

```php
string $mysqli->client_info;
```

```php
#[\Deprecated] public string mysqli::get_client_info()
```

过程化风格

```php
string mysqli_get_client_info(mysqli|null $mysql = null)
```

返回表示 MySQL 客户端库的版本信息的字符串。

## 参数

此函数没有参数。

## 返回值

表示 MySQL 客户端库的版本信息的字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 弃用使用 `$mysql` 参数调用 `mysqli_get_client_info()`。此函数从不需要参数，但错误的允许其作为可选参数。 |
| 8.1.0 | 弃用面向对象风格的 `mysqli::get_client_info()`。 |

## 示例

**mysqli_get_client_info**

```php


<?php

/* 获取客户端版本新的时候，
   无需建立到数据库的连接 */

printf("Client library version: %s\n", mysqli_get_client_info());
?>

    
```

## 参见

`mysqli_get_client_version()` `mysqli_get_server_info()` `mysqli_get_server_version()`
