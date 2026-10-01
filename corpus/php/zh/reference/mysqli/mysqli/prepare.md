---
id: "zh-php-function-mysqli-prepare"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["sql_injection"],"cwe":["CWE-89"],"params":[2]}
name: "mysqli::prepare"
aliases: ["mysqli_prepare"]
title: "预处理执行 SQL"
signature: "public mysqli_stmt|false mysqli::prepare(string $query)"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.prepare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预处理执行 SQL

## 说明

面向对象风格

```php
public mysqli_stmt|false mysqli::prepare(string $query)
```

过程化风格

```php
mysqli_stmt|false mysqli_prepare(mysqli $mysql, string $query)
```

预处理 SQL 查询并返回 statement 句柄，用于对语句进行后续操作。查询仅仅支持单条 SQL 语句。

语句模板可以包含零或多个问号（`?`）参数标记，也称作占位符。在执行语句之前，必须使用 `mysqli_stmt_bind_param()` 将参数标记绑定到应用程序变量。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。
- **`$query`** — string 格式的语句。必须由单个 SQL 语句组成。 — SQL 语句可能在适当的位置包含零个或多个由问号（`?`）字符表示的参数标记。
  > SQL 语句中，仅允许在特定的位置出现问号参数占位符。例如，允许在 `INSERT` 语句中的 `VALUES()` 列表中使用，表示对应列的值，也可以在 `WHERE` 子句中使用参数来表示要进行比较的值。但不允许用于标识符（例如表名或列名）。



## 返回值

`mysqli_prepare()` 返回一个 statement 对象，如果发生错误则返回 `false`。

## 错误／异常

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## 示例

**`mysqli::prepare()` 示例**

面向对象风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$city = "Amersfoort";

/* 创建预处理语句 */
$stmt = $mysqli->prepare("SELECT District FROM City WHERE Name=?");

/* 为标记绑定参数 */
$stmt->bind_param("s", $city);

/* 执行查询 */
$stmt->execute();

/* 绑定结果变量 */
$stmt->bind_result($district);

/* 获取值 */
$stmt->fetch();

printf("%s is in district %s\n", $city, $district);

   
```

过程化风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

$city = "Amersfoort";

/* 创建预处理语句 */
$stmt = mysqli_prepare($link, "SELECT District FROM City WHERE Name=?");

/* 为标记绑定参数 */
mysqli_stmt_bind_param($stmt, "s", $city);

/* 执行查询 */
mysqli_stmt_execute($stmt);

/* 绑定结果变量 */
mysqli_stmt_bind_result($stmt, $district);

/* 获取值 */
mysqli_stmt_fetch($stmt);

printf("%s is in district %s\n", $city, $district);

   
```

以上示例会输出：

```text


Amersfoort is in district Utrecht

   
```

## 参见

`mysqli_stmt_execute()` `mysqli_stmt_fetch()` `mysqli_stmt_bind_param()` `mysqli_stmt_bind_result()` `mysqli_stmt_get_result()` `mysqli_stmt_close()`
