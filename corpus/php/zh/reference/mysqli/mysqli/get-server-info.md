---
id: "zh-php-function-mysqli-get-server-info"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::$server_info"
aliases: ["mysqli::get_server_info","mysqli_get_server_info"]
title: "返回 MySQL 服务器的版本号"
signature: "string()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.get-server-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 MySQL 服务器的版本号

## 说明

面向对象风格

```php
string $mysqli->server_info;
```

```php
public string mysqli::get_server_info()
```

过程化风格

```php
string mysqli_get_server_info(mysqli $mysql)
```

返回字符串，表示 MySQLi 扩展连接的 MySQL 服务器的版本号。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。

## 返回值

表示服务器版本的字符串。

## 示例

**`$mysqli->server_info` 示例**

面向对象风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password");

/* print server version */
printf("Server version: %s\n", $mysqli->server_info);

   
```

过程化风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password");

/* print server version */
printf("Server version: %s\n", mysqli_get_server_info($link));

   
```

以上示例的输出类似于：

```text


Server version: 8.0.21

   
```

## 参见

`mysqli_get_client_info()` `mysqli_get_client_version()` `mysqli_get_server_version()`
