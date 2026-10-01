---
id: "zh-php-function-mysqli-multi-query"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::multi_query"
aliases: ["mysqli_multi_query"]
title: "在数据库上执行一个或多个查询"
signature: "public bool mysqli::multi_query(string $query)"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.multi-query.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在数据库上执行一个或多个查询

## 说明

面向对象风格

```php
public bool mysqli::multi_query(string $query)
```

过程化风格

```php
bool mysqli_multi_query(mysqli $mysql, string $query)
```

执行一个或多个由分号分隔的查询。

> Security warning: SQL injection
>
> If the query contains any variable input then parameterized prepared statements should be used instead. Alternatively, the data must be properly formatted and all strings must be escaped using the `mysqli_real_escape_string()` function.

对数据库的单个调用中，查询是异步发送，但数据库会按顺序处理。 `mysqli_multi_query()` 在将控制返回给 PHP 之前等待第一个查询完成。MySQL 服务器将会按照顺序处理下一个查询。一旦下一个结果就绪，MySQL 将等待 PHP 的下一次 `mysqli_next_result()` 执行。

推荐使用 do-while 处理多个查询。在所有查询完成并将结果返回给 PHP 之前，连接一直处于繁忙状态。在处理完成所有查询之前，不能在同一连接上发出其它语句。要继续处理顺序中的下一个查询，请使用 `mysqli_next_result()`。如果下一个结果还没准备好，mysqli 就会等待 MySQL 服务器的响应。要检查是否有更多结果，使用 `mysqli_more_results()`。

对于产生查询结果集的查询，比如 `SELECT, SHOW, DESCRIBE` 或 `EXPLAIN`，`mysqli_use_result()` 或 `mysqli_store_result()` 可用于检索结果集。对于不产生结果集的查询（比如受影响的行数），可以使用相同函数查询。

> 为存储过程执行 `CALL` 语句可以产生多个结果集。如果存储过程包含 `SELECT` 语句，结果集将按照执行过程中的顺序返回。通常，调用者不会知道过程将返回多少个结果集，必须准备好检索多个结果。该过程的最终结果是不包含结果集的 status 结果。status 表示过程是成功还是发生错误。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。
- **`$query`** — 包含要执行查询的字符串。多个查询必须用分号分隔。

## 返回值

如果第一个 SQL 语句就失败了，返回 `false`。要从其它语句中检索后续错误，必须先调用 `mysqli_next_result()`。

## 错误／异常

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## 示例

**`mysqli::multi_query()` 示例**

面向对象风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$query = "SELECT CURRENT_USER();";
$query .= "SELECT Name FROM City ORDER BY ID LIMIT 20, 5";

/* 批量执行查询 */
$mysqli->multi_query($query);
do {
    /* store the result set in PHP */
    if ($result = $mysqli->store_result()) {
        while ($row = $result->fetch_row()) {
            printf("%s\n", $row[0]);
        }
    }
    /* print divider */
    if ($mysqli->more_results()) {
        printf("-----------------\n");
    }
} while ($mysqli->next_result());

   
```

过程化风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

$query = "SELECT CURRENT_USER();";
$query .= "SELECT Name FROM City ORDER BY ID LIMIT 20, 5";

/* 批量执行查询 */
mysqli_multi_query($link, $query);
do {
    /* store the result set in PHP */
    if ($result = mysqli_store_result($link)) {
        while ($row = mysqli_fetch_row($result)) {
            printf("%s\n", $row[0]);
        }
    }
    /* print divider */
    if (mysqli_more_results($link)) {
        printf("-----------------\n");
    }
} while (mysqli_next_result($link));

   
```

以上示例的输出类似于：

```text


my_user@localhost
-----------------
Amersfoort
Maastricht
Dordrecht
Leiden
Haarlemmermeer

   
```

## 参见

`mysqli_query()` `mysqli_use_result()` `mysqli_store_result()` `mysqli_next_result()` `mysqli_more_results()`
