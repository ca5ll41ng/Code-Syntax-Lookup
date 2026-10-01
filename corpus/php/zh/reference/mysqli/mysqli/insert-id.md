---
id: "zh-php-function-mysqli-insert-id"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::$insert_id"
aliases: ["mysqli_insert_id"]
title: "返回上次查询为 AUTO_INCREMENT 列生成的值"
signature: "int|string()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.insert-id.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回上次查询为 AUTO_INCREMENT 列生成的值

## 说明

面向对象风格

```php
int|string $mysqli->insert_id;
```

过程化风格

```php
int|string mysqli_insert_id(mysqli $mysql)
```

返回有 `AUTO_INCREMENT` 属性的表执行 `INSERT` 或 `UPDATE` 查询生成的 ID。对于多行 `INSERT` 语句，返回成功插入的第一个自动生成的值。

使用 `LAST_INSERT_ID()` MySQL 函数执行 `INSERT` 或 `UPDATE` 语句也会修改 `mysqli_insert_id()` 返回的值。如果使用 `LAST_INSERT_ID(expr)` 生成 `AUTO_INCREMENT` 的值，将返回最后 `expr` 的值而不是生成的 `AUTO_INCREMENT` 值。

如果之前的语句没有修改 `AUTO_INCREMENT` 的值，则返回 `0`。`mysqli_insert_id()` 必须在生成值的语句之后立即调用。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。

## 返回值

上一个查询更新的 `AUTO_INCREMENT` 字段的值。如果连接上没有之前的查询或者查询没有更新 `AUTO_INCREMENT` 值。则返回 0。

只有使用当前连接发出的语句才会影响返回值。该值不受使用其它连接或客户端发出的语句的影响。

> 如果数字大于最大 int 值，将以字符串返回该值。

## 示例

**`$mysqli->insert_id` 示例**

面向对象风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$mysqli->query("CREATE TABLE myCity LIKE City");

$query = "INSERT INTO myCity VALUES (NULL, 'Stuttgart', 'DEU', 'Stuttgart', 617000)";
$mysqli->query($query);

printf("New record has ID %d.\n", $mysqli->insert_id);

/* 删除表 */
$mysqli->query("DROP TABLE myCity");

   
```

过程化风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

mysqli_query($link, "CREATE TABLE myCity LIKE City");

$query = "INSERT INTO myCity VALUES (NULL, 'Stuttgart', 'DEU', 'Stuttgart', 617000)";
mysqli_query($link, $query);

printf("New record has ID %d.\n", mysqli_insert_id($link));

/* 删除表 */
mysqli_query($link, "DROP TABLE myCity");

   
```

以上示例会输出：

```text


New record has ID 1.

   
```
