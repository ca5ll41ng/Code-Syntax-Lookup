---
id: "zh-php-function-function-pg-query"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["sql_injection"],"cwe":["CWE-89"],"params":[2]}
name: "pg_query"
title: "执行查询"
signature: "PgSql\\Result|false pg_query([PgSql\\Connection $connection = ...], string $query)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-query.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行查询

## 说明

```php
PgSql\Result|false pg_query([PgSql\Connection $connection = ...], string $query)
```

`pg_query()` 在特定数据库 `$connection` 上执行 `$query`。`pg_query_params()` 在大多数情况下应该是首选。

如果发生错误并返回 `false`，那么在连接有效时可以使用 `pg_last_error()` 函数检索错误的详细信息。

> 尽管可以省略 `$connection`，但不建议这样做，因为可能会导致脚本中的错误难以发现。

> 本函数以前的名字为 `pg_exec()`。`pg_exec()` 因为兼容性原因仍可使用，但鼓励用户使用新名称。

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is unspecified, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.
- **`$query`** — 要执行的 SQL 语句。当多个语句传递给函数时，将作为一个事务自动执行，除非查询字符串中包含明确的 BEGIN/COMMIT 命令。但是，不建议在一个函数调用中使用多个事务。
  > 用户提供的数据作为字符串插入值非常危险，很可能导致 SQL 注入漏洞。在大多数情况下，应该首选 `pg_query_params()`，将用户提供的值作为参数传递，而不是将它们替换为查询字符串。
  >
  > 任何用户提供的数据，都应该正确转义，然后直接替换为查询字符串。



## 返回值

成功时为 `PgSql\Result` 实例， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在返回 `PgSql\Result` 实例，之前返回 `resource` |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_query()` 示例**

```php


<?php

$conn = pg_pconnect("dbname=publisher");
if (!$conn) {
  echo "An error occurred.\n";
  exit;
}

$result = pg_query($conn, "SELECT author, email FROM authors");
if (!$result) {
  echo "An error occurred.\n";
  exit;
}

while ($row = pg_fetch_row($result)) {
  echo "Author: $row[0]  E-mail: $row[1]";
  echo "<br />\n";
}

?>

    
```

**使用多条语句的 `pg_query()`**

```php


<?php

$conn = pg_pconnect("dbname=publisher");

// 这些语句将作为一个事务执行

$query = "UPDATE authors SET author=UPPER(author) WHERE id=1;";
$query .= "UPDATE authors SET author=LOWER(author) WHERE id=2;";
$query .= "UPDATE authors SET author=NULL WHERE id=3;";

pg_query($conn, $query);

?>

    
```

## 参见

`pg_connect()` `pg_pconnect()` `pg_fetch_array()` `pg_fetch_object()` `pg_num_rows()` `pg_affected_rows()`
