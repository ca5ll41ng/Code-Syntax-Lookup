---
id: "zh-php-function-mysqli-set-charset"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::set_charset"
aliases: ["mysqli_set_charset"]
title: "设置客户端字符集"
signature: "public bool mysqli::set_charset(string $charset)"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.set-charset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置客户端字符集

## 说明

面向对象风格

```php
public bool mysqli::set_charset(string $charset)
```

过程化风格

```php
bool mysqli_set_charset(mysqli $mysql, string $charset)
```

设置客户端与数据库间传输数据时所用的字符集。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。
- **`$charset`** — 所需的字符集。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## 示例

**`mysqli::set_charset()` 示例**

面向对象风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "test");

printf("Initial character set: %s\n", $mysqli->character_set_name());

/* change character set to utf8mb4 */
$mysqli->set_charset("utf8mb4");

printf("Current character set: %s\n", $mysqli->character_set_name());

   
```

过程化风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect('localhost', 'my_user', 'my_password', 'test');

printf("Initial character set: %s\n", mysqli_character_set_name($link));

/* change character set to utf8mb4 */
mysqli_set_charset($link, "utf8mb4");

printf("Current character set: %s\n", mysqli_character_set_name($link));

   
```

以上示例的输出类似于：

```text


Initial character set: latin1
Current character set: utf8mb4

   
```

## 注释

> 这是改变字符集的首选方法，不推荐使用 `mysqli_query()` 来设置（如 `SET NAMES utf8`）。有关详细信息，请参阅 MySQL 字符集概念部分。

## 参见

`mysqli_character_set_name()` `mysqli_real_escape_string()` MySQL 字符集概念 [MySQL 支持的字符集列表]()
