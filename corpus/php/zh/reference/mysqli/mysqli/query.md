---
id: "zh-php-function-mysqli-query"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["sql_injection"],"cwe":["CWE-89"],"params":[2]}
name: "mysqli::query"
aliases: ["mysqli_query"]
title: "对数据库执行查询"
signature: "public mysqli_result|bool mysqli::query(string $query, int $result_mode = MYSQLI_STORE_RESULT)"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.query.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对数据库执行查询

## 说明

面向对象风格

```php
public mysqli_result|bool mysqli::query(string $query, int $result_mode = MYSQLI_STORE_RESULT)
```

过程化风格

```php
mysqli_result|bool mysqli_query(mysqli $mysql, string $query, int $result_mode = MYSQLI_STORE_RESULT)
```

对数据库执行 `$query`。

> Security warning: SQL injection
>
> If the query contains any variable input then parameterized prepared statements should be used instead. Alternatively, the data must be properly formatted and all strings must be escaped using the `mysqli_real_escape_string()` function.

对非 DML 查询（不是 INSERT、UPDATE 或 DELETE），此函数类似于调用 `mysqli_real_query()` 然后调用 `mysqli_use_result()` 或 `mysqli_store_result()`。

> 传递给 `mysqli_query()` 的语句长度比服务器的 `max_allowed_packet` 长的情况下，返回的错误码不同，具体取决于使用的是 MySQL Native Driver（`mysqlnd`）还是 MySQL Client Library（`libmysqlclient`）。行为如下：
>
> - Linux 上 `mysqlnd` 返回错误码 1153。错误消息表示为 got a packet bigger than `max_allowed_packet` bytes。
> - Windows 上 `mysqlnd` 返回错误码 2006。错误消息表示为 server has gone away。
> - `libmysqlclient` 在所有平台返回错误码 2006。错误消息表示为 server has gone away。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。
- **`$query`** — 查询字符串。
- **`$result_mode`** — The result mode can be one of 3 constants indicating how the result will be returned from the MySQL server. — `MYSQLI_STORE_RESULT`（默认）——返回带有缓冲结果集的 `mysqli_result` 对象。 — `MYSQLI_USE_RESULT` - returns a `mysqli_result` object with unbuffered result set. As long as there are pending records waiting to be fetched, the connection line will be busy and all subsequent calls will return error `Commands out of sync`. To avoid the error all records must be fetched from the server or the result set must be discarded by calling `mysqli_free_result()`. — `MYSQLI_ASYNC`（适用于 mysqlnd）——执行异步查询且并不立即返回结果。然后使用 `mysqli_poll()` 从此类查询中获取结果。与 `MYSQLI_STORE_RESULT` 或 `MYSQLI_USE_RESULT` 常量结合使用。

## 返回值

失败时返回 `false`。对于生成结果集的成功查询，比如 `SELECT, SHOW, DESCRIBE` 或 `EXPLAIN`，`mysqli_query()` 将返回 `mysqli_result` 对象。对其它成功查询，`mysqli_query()` 将返回 `true`。

## 错误／异常

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## 示例

**`mysqli::query()` 示例**

面向对象风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* Create table doesn't return a resultset */
$mysqli->query("CREATE TEMPORARY TABLE myCity LIKE City");
printf("Table myCity successfully created.\n");

/* Select queries return a resultset */
$result = $mysqli->query("SELECT Name FROM City LIMIT 10");
printf("Select returned %d rows.\n", $result->num_rows);

/* If we have to retrieve large amount of data we use MYSQLI_USE_RESULT */
$result = $mysqli->query("SELECT * FROM City", MYSQLI_USE_RESULT);

/* Note, that we can't execute any functions which interact with the
	server until all records have been fully retrieved or the result
	set was closed. All calls will return an 'out of sync' error */
$mysqli->query("SET @a:='this will not work'");

   
```

过程化风格

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* Create table doesn't return a resultset */
mysqli_query($link, "CREATE TEMPORARY TABLE myCity LIKE City");
printf("Table myCity successfully created.\n");

/* Select queries return a resultset */
$result = mysqli_query($link, "SELECT Name FROM City LIMIT 10");
printf("Select returned %d rows.\n", mysqli_num_rows($result));

/* If we have to retrieve large amount of data we use MYSQLI_USE_RESULT */
$result = mysqli_query($link, "SELECT * FROM City", MYSQLI_USE_RESULT);

/* Note, that we can't execute any functions which interact with the
	server until all records have been fully retrieved or the result
	set was closed. All calls will return an 'out of sync' error */
mysqli_query($link, "SET @a:='this will not work'");

   
```

以上示例的输出类似于：

```text


Table myCity successfully created.
Select returned 10 rows.

Fatal error: Uncaught mysqli_sql_exception: Commands out of sync; you can't run this command now in...

   
```

## 参见

`mysqli_execute_query()` `mysqli_real_query()` `mysqli_multi_query()` `mysqli_prepare()` `mysqli_free_result()`
