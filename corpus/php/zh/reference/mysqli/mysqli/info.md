---
id: "zh-php-function-mysqli-info"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::$info"
aliases: ["mysqli_info"]
title: "返回最近执行的 SQL 语句的信息"
signature: "string|null()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回最近执行的 SQL 语句的信息

## 说明

面向对象风格

```php
string|null $mysqli->info;
```

过程化风格

```php
string|null mysqli_info(mysqli $mysql)
```

`mysqli_info()` 函数返回一个包含 最近执行的 SQL 语句信息的字符串。 下面有一些参考样例：

| SQL 语句类型 | 返回结果字符串示例 |
| --- | --- |
| INSERT INTO...SELECT... | Records: 100 Duplicates: 0 Warnings: 0 |
| INSERT INTO...VALUES (...),(...),(...) | Records: 3 Duplicates: 0 Warnings: 0 |
| LOAD DATA INFILE ... | Records: 1 Deleted: 0 Skipped: 0 Warnings: 0 |
| ALTER TABLE ... | Records: 3 Duplicates: 0 Warnings: 0 |
| UPDATE ... | Rows matched: 40 Changed: 40 Warnings: 0 |

> 如果所执行的 SQL 语句不是上面列出来的这几种类型的， `mysqli_info()` 函数会返回一个空字符串。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。

## 返回值

最近执行的 SQL 语句的相关信息。

## 示例

**`$mysqli->info` 示例**

面向对象风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$mysqli->query("CREATE TEMPORARY TABLE t1 LIKE City");

/* INSERT INTO ... SELECT */
$mysqli->query("INSERT INTO t1 SELECT * FROM City ORDER BY ID LIMIT 150");
printf("%s\n", $mysqli->info);

   
```

过程化风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

mysqli_query($link, "CREATE TEMPORARY TABLE t1 LIKE City");

/* INSERT INTO ... SELECT */
mysqli_query($link, "INSERT INTO t1 SELECT * FROM City ORDER BY ID LIMIT 150");
printf("%s\n", mysqli_info($link));

   
```

以上示例会输出：

```text


Records: 150  Duplicates: 0  Warnings: 0

   
```

## 参见

`mysqli_affected_rows()` `mysqli_warning_count()` `mysqli_num_rows()`
