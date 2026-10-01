---
id: "zh-php-function-mysqli-select-db"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::select_db"
aliases: ["mysqli_select_db"]
title: "选择用于数据库查询的默认数据库"
signature: "public bool mysqli::select_db(string $database)"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.select-db.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 选择用于数据库查询的默认数据库

## 说明

面向对象风格

```php
public bool mysqli::select_db(string $database)
```

过程化风格

```php
bool mysqli_select_db(mysqli $mysql, string $database)
```

选择默认数据库，用于在已连接的数据库中执行查询。

> 此函数只能用于更改连接的默认数据库。可以在 `mysqli_connect()` 中使用第 4 个参数选择默认数据库。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。
- **`$database`** — 数据库名称

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## 示例

**`mysqli::select_db()` 示例**

面向对象风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "test");

/* get the name of the current default database */
$result = $mysqli->query("SELECT DATABASE()");
$row = $result->fetch_row();
printf("Default database is %s.\n", $row[0]);

/* change default database to "world" */
$mysqli->select_db("world");

/* get the name of the current default database */
$result = $mysqli->query("SELECT DATABASE()");
$row = $result->fetch_row();
printf("Default database is %s.\n", $row[0]);

   
```

过程化风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "test");

/* get the name of the current default database */
$result = mysqli_query($link, "SELECT DATABASE()");
$row = mysqli_fetch_row($result);
printf("Default database is %s.\n", $row[0]);

/* change default database to "world" */
mysqli_select_db($link, "world");

/* get the name of the current default database */
$result = mysqli_query($link, "SELECT DATABASE()");
$row = mysqli_fetch_row($result);
printf("Default database is %s.\n", $row[0]);

   
```

以上示例会输出：

```text


Default database is test.
Default database is world.

   
```

## 参见

`mysqli_connect()` `mysqli_real_connect()`
