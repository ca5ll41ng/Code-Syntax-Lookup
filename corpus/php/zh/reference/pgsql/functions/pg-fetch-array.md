---
id: "zh-php-function-function-pg-fetch-array"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "pg_fetch_array"
title: "获取一行作为数组"
signature: "array|false pg_fetch_array(PgSql\\Result $result, int|null $row = null, int $mode = PGSQL_BOTH)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-fetch-array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取一行作为数组

## 说明

```php
array|false pg_fetch_array(PgSql\Result $result, int|null $row = null, int $mode = PGSQL_BOTH)
```

`pg_fetch_array()` 返回与所提取的行（元组/记录）相一致的数组。

`pg_fetch_array()` 是 `pg_fetch_row()` 的扩展版本。在结果数组中不仅以数字索引（字段编号）方式存放数据，还用关联索引（字段名）存储数据。它默认存储两个索引。

> 此函数将 NULL 字段设置为 PHP `null` 值。

使用 `pg_fetch_array()` 并不比 `pg_fetch_row()` 慢的明显，而且在使用中提供了更大的方便。

## 参数

- **`$result`** — `PgSql\Result` 实例，由 `pg_query()`、`pg_query_params()` 或者 `pg_execute()`（等）返回。
- **`$row`** — 要获取的结果中的行号。行从 0 向上编号。如果省略或为 `null`，则获取下一行。
- **`$mode`** — An optional parameter that controls how the returned `array` is indexed. `$mode` is a constant and can take the following values: `PGSQL_ASSOC`, `PGSQL_NUM` and `PGSQL_BOTH`. Using `PGSQL_NUM`, the function will return an array with numerical indices, using `PGSQL_ASSOC` it will return only associative indices while `PGSQL_BOTH` will return both numerical and associative indices.

## 返回值

数字方式（从 0 开始）或关联方式（按字段名索引）或两者共同索引的 `array`。`array` 中的每个值都表示为 `string`。数据库 `NULL` 值作为 `null` 返回。

如果 `$row` 超过集合中的行数、没有更多行或任何其他错误，则返回 `false`。从 SELECT 以外的查询结果中获取也将返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$result` 参数接受 `PgSql\Result` 实例，之前接受 `resource`。 |

## 示例

**`pg_fetch_array()` 示例**

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

$arr = pg_fetch_array($result, 0, PGSQL_NUM);
echo $arr[0] . " <- Row 1 Author\n";
echo $arr[1] . " <- Row 1 E-mail\n";

// The row parameter is optional; NULL can be passed instead,
// to pass a result_type.  Successive calls to pg_fetch_array
// will return the next row.
$arr = pg_fetch_array($result, NULL, PGSQL_ASSOC);
echo $arr["author"] . " <- Row 2 Author\n";
echo $arr["email"] . " <- Row 2 E-mail\n";

$arr = pg_fetch_array($result);
echo $arr["author"] . " <- Row 3 Author\n";
echo $arr[1] . " <- Row 3 E-mail\n";

?>

    
```

## 参见

`pg_fetch_row()` `pg_fetch_object()` `pg_fetch_result()`
