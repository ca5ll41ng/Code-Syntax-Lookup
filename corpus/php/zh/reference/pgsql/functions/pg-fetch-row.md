---
id: "zh-php-function-function-pg-fetch-row"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "pg_fetch_row"
title: "提取一行作为枚举数组"
signature: "array|false pg_fetch_row(PgSql\\Result $result, int|null $row = null, int $mode = PGSQL_NUM)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-fetch-row.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 提取一行作为枚举数组

## 说明

```php
array|false pg_fetch_row(PgSql\Result $result, int|null $row = null, int $mode = PGSQL_NUM)
```

`pg_fetch_row()` 根据指定 `$result` 实例提取一行数据（记录）作为数组返回。每个得到的列依次存放在数组中，偏移量从 0 开始。

> 此函数将 NULL 字段设置为 PHP `null` 值。

## 参数

- **`$result`** — `PgSql\Result` 实例，由 `pg_query()`、`pg_query_params()` 或者 `pg_execute()`（等）返回。
- **`$row`** — 要获取的结果中的行号。行从 0 向上编号。如果省略或为 `null`，则获取下一行。
- **`$mode`** — An optional parameter that controls how the returned `array` is indexed. `$mode` is a constant and can take the following values: `PGSQL_ASSOC`, `PGSQL_NUM` and `PGSQL_BOTH`. Using `PGSQL_NUM`, the function will return an array with numerical indices, using `PGSQL_ASSOC` it will return only associative indices while `PGSQL_BOTH` will return both numerical and associative indices.

## 返回值

`array`，从 0 向上索引，每个值表示为一个 `string`。数据库 `NULL` 值作为 `null` 返回。

返回的数组和提取的行相一致。如果没有更多行 `$row` 可提取，则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$result` 参数接受 `PgSql\Result` 实例，之前接受 `resource`。 |

## 示例

**`pg_fetch_row()` 示例**

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

## 参见

`pg_query()` `pg_fetch_array()` `pg_fetch_object()` `pg_fetch_result()`
