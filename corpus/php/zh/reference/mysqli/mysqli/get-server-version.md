---
id: "zh-php-function-mysqli-get-server-version"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::$server_version"
aliases: ["mysqli_get_server_version"]
title: "作为一个整数返回MySQL服务器的版本"
signature: "int()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.get-server-version.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 作为一个整数返回MySQL服务器的版本

## 说明

面向对象风格

```php
int $mysqli->server_version;
```

过程化风格

```php
int mysqli_get_server_version(mysqli $mysql)
```

`mysqli_get_server_version()` 函数以整数的形式返回连接的 `$mysql` 参数所表述的服务器的版本。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。

## 返回值

一个整数表述的服务器版本。

版本号的格式是 `main_version * 10000 + minor_version * 100 + sub_version`（例如版本 4.1.0 是 40100）。

## 示例

**`$mysqli->server_version` 示例**

面向对象风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password");

/* print server version */
printf("Server version: %d\n", $mysqli->server_version);

   
```

过程化风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password");

/* print server version */
printf("Server version: %d\n", mysqli_get_server_version($link));

   
```

以上示例的输出类似于：

```text


Server version: 80021

   
```

## 参见

`mysqli_get_client_info()` `mysqli_get_client_version()` `mysqli_get_server_info()`
