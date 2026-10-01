---
id: "zh-php-function-mysqli-real-escape-string"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "mysqli::real_escape_string"
aliases: ["mysqli_real_escape_string"]
title: "根据当前连接的字符集，对于 SQL 语句中的特殊字符进行转义"
signature: "public string mysqli::real_escape_string(string $string)"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.real-escape-string.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 根据当前连接的字符集，对于 SQL 语句中的特殊字符进行转义

## 说明

面向对象风格

```php
public string mysqli::real_escape_string(string $string)
```

过程化风格

```php
string mysqli_real_escape_string(mysqli $mysql, string $string)
```

此函数用于创建可在 SQL 语句中使用的合法 SQL 字符串。考虑到连接的当前字符集，对指定的字符串进行编码以生成转义的 SQL 字符串。

> 安全：默认字符集
>
> 字符集必须在服务器级别设置，或者使用 API 函数 `mysqli_set_charset()` 影响 `mysqli_real_escape_string()`。参阅字符集的概念（concepts）部分。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。
- **`$string`** — 需要进行转义的字符串。 — 会被进行转义的字符包括：`NUL (ASCII 0)`、 `\n`、`\r`、`\`、 `'`、`"` 和 CTRLZ。

## 返回值

返回转义后的字符串。

## 示例

**`mysqli::real_escape_string()` 示例**

面向对象风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$city = "'s-Hertogenbosch";

/* 对 $city 转义，此查询运行正常 */
$query = sprintf("SELECT CountryCode FROM City WHERE name='%s'",
	$mysqli->real_escape_string($city));
$result = $mysqli->query($query);
printf("Select returned %d rows.\n", $result->num_rows);

/* 未转义 $city，此查询运行失败 */
$query = sprintf("SELECT CountryCode FROM City WHERE name='%s'", $city);
$result = $mysqli->query($query);

   
```

过程化风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = mysqli_connect("localhost", "my_user", "my_password", "world");

$city = "'s-Hertogenbosch";

/* 对 $city 转义，此查询运行正常 */
$query = sprintf("SELECT CountryCode FROM City WHERE name='%s'",
	mysqli_real_escape_string($mysqli, $city));
$result = mysqli_query($mysqli, $query);
printf("Select returned %d rows.\n", mysqli_num_rows($result));

/* 未转义 $city，此查询运行失败 */
$query = sprintf("SELECT CountryCode FROM City WHERE name='%s'", $city);
$result = mysqli_query($mysqli, $query);

   
```

以上示例的输出类似于：

```text


Select returned 1 rows.

Fatal error: Uncaught mysqli_sql_exception: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 's-Hertogenbosch'' at line 1 in...

   
```

## 参见

`mysqli_set_charset()`
