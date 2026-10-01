---
id: "zh-php-function-mysqli-character-set-name"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::character_set_name"
aliases: ["mysqli_character_set_name"]
title: "返回当前数据库连接的字符编码"
signature: "public string mysqli::character_set_name()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.character-set-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回当前数据库连接的字符编码

## 说明

面向对象风格

```php
public string mysqli::character_set_name()
```

过程化风格

```php
string mysqli_character_set_name(mysqli $mysql)
```

返回当前数据库连接的字符编码。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。

## 返回值

当前连接的字符编码

## 示例

**`mysqli::character_set_name()` 示例**

面向对象风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* Set the default character set */
$mysqli->set_charset('utf8mb4');

/* Print current character set */
$charset = $mysqli->character_set_name();
printf("Current character set is %s\n", $charset);

   
```

过程化风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = mysqli_connect("localhost", "my_user", "my_password", "world");

/* Set the default character set */
mysqli_set_charset($mysqli, 'utf8mb4');

/* Print current character set */
$charset = mysqli_character_set_name($mysqli);
printf("Current character set is %s\n", $charset);

   
```

以上示例会输出：

```text


Current character set is utf8mb4

   
```

## 参见

`mysqli_set_charset()` `mysqli_real_escape_string()`
