---
id: "zh-php-function-mysqli-get-client-version"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::$client_version"
aliases: ["mysqli_get_client_version"]
title: "作为整数返回 MySQL 客户端的版本"
signature: "int()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.get-client-version.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 作为整数返回 MySQL 客户端的版本

## 说明

面向对象风格

```php
int $mysqli->client_version;
```

过程化风格

```php
int mysqli_get_client_version()
```

作为整数返回客户端版本号。

## 参数

此函数没有参数。

## 返回值

表示 MySQL 客户端库版本的数字，格式为 `main_version*10000 + minor_version *100 + sub_version`。例如：4.1.0 返回 40100。

这有助于快速确定客户端库的版本来辨别是否有某些特性存在。

## 示例

**mysqli_get_client_version**

```php


<?php

/* We don't need a connection to determine
   the version of mysql client library */

printf("Client library version: %d\n", mysqli_get_client_version());
?>

    
```

## 参见

`mysqli_get_client_info()` `mysqli_get_server_info()` `mysqli_get_server_version()`
