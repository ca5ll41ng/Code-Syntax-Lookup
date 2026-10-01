---
id: "zh-php-function-mysqli-sqlstate"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::$sqlstate"
aliases: ["mysqli_sqlstate"]
title: "返回上一次 MySQL 操作的 SQLSTATE 错误"
signature: "string()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.sqlstate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回上一次 MySQL 操作的 SQLSTATE 错误

## 说明

面向对象风格

```php
string $mysqli->sqlstate;
```

过程化风格

```php
string mysqli_sqlstate(mysqli $mysql)
```

返回包含 SQLSTATE 错误码的字符串，表示上次的错误。错误码由 5 个字符构成。`'00000'` 表示没有发生错误。错误码由 ANSI SQL 和 ODBC 定义。对可能的值列表，参见 []()。

> 需要注意的是，并不是所有的 MySQL 错误都映射到了 SQLSTATE，未映射的错误消息使用 `HY000`（常规错误）表示。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。

## 返回值

返回包含 SQLSTATE 错误码的字符串，表示上次的错误。 错误码由 5 个字符构成。`'00000'` 表示没有错误。

## 示例

**`$mysqli->sqlstate` 示例**

面向对象风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* City 表已经存在，所以会遇到一个错误 */
try {
    $mysqli->query("CREATE TABLE City (ID INT, Name VARCHAR(30))");
} catch (mysqli_sql_exception) {
    printf("Error - SQLSTATE %s.\n", $mysqli->sqlstate);
}

   
```

过程化风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* City 表已经存在，所以会遇到一个错误 */
try {
    mysqli_query($link, "CREATE TABLE City (ID INT, Name VARCHAR(30))");
} catch (mysqli_sql_exception) {
    printf("Error - SQLSTATE %s.\n", mysqli_sqlstate($link));
}

   
```

以上示例会输出：

```text


Error - SQLSTATE 42S01.

   
```

## 参见

`mysqli_errno()` `mysqli_error()`
