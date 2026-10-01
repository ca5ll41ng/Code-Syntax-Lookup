---
id: "zh-php-function-mysqli-get-proto-info"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::$protocol_version"
aliases: ["mysqli_get_proto_info"]
title: "返回 MySQL 协议使用的版本号"
signature: "int()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.get-proto-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 MySQL 协议使用的版本号

## 说明

面向对象风格

```php
int $mysqli->protocol_version;
```

过程化风格

```php
int mysqli_get_proto_info(mysqli $mysql)
```

返回整数，表示由 `$mysql` 参数表示的连接所使用的 MySQL 协议的版本号。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。

## 返回值

返回表示协议版本号的整数。

## 示例

**`$mysqli->protocol_version` 示例**

面向对象风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password");

/* print protocol version */
printf("Protocol version: %d\n", $mysqli->protocol_version);

   
```

过程化风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password");

/* print protocol version */
printf("Protocol version: %d\n", mysqli_get_proto_info($link));

   
```

以上示例会输出：

```text


Protocol version: 10

   
```

## 参见

`mysqli_get_host_info()`
