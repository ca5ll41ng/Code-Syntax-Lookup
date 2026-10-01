---
id: "zh-php-function-mysqli-get-host-info"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::$host_info"
aliases: ["mysqli_get_host_info"]
title: "返回表述使用的连接类型的字符串"
signature: "string()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.get-host-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回表述使用的连接类型的字符串

## 说明

面向对象风格

```php
string $mysqli->host_info;
```

过程化风格

```php
string mysqli_get_host_info(mysqli $mysql)
```

返回由 `$mysql` 参数表示连接的字符串描述（包括服务器主机名）。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。

## 返回值

表示服务器主机名和连接类型的字符串。

## 示例

**`$mysqli->host_info` 示例**

面向对象风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* print host information */
printf("Host info: %s\n", $mysqli->host_info);

   
```

过程化风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* print host information */
printf("Host info: %s\n", mysqli_get_host_info($link));

   
```

以上示例会输出：

```text


Host info: Localhost via UNIX socket

   
```

## 参见

`mysqli_get_proto_info()`
