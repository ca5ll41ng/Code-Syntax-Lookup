---
id: "zh-php-function-function-pg-fetch-assoc"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "pg_fetch_assoc"
title: "获取一行作为关联数组"
signature: "array|false pg_fetch_assoc(PgSql\\Result $result, int|null $row = null)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-fetch-assoc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取一行作为关联数组

## 说明

```php
array|false pg_fetch_assoc(PgSql\Result $result, int|null $row = null)
```

`pg_fetch_assoc()` 返回与所提取的行（元组/记录）相一致的关联数组。

`pg_fetch_assoc()` 等同于调用 `PGSQL_ASSOC` 作为第三个参数的 `pg_fetch_array()`。其仅返回关联数组。如果需要数字索引，使用 `pg_fetch_row()`。

> 此函数将 NULL 字段设置为 PHP `null` 值。

使用 `pg_fetch_assoc()` 并不比 `pg_fetch_row()` 慢的明显，而且在使用中提供了更大的方便。

## 参数

- **`$result`** — `PgSql\Result` 实例，由 `pg_query()`、`pg_query_params()` 或者 `pg_execute()`（等）返回。
- **`$row`** — 要获取的结果中的行号。行从 0 向上编号。如果省略或为 `null`，则获取下一行。

## 返回值

关联方式（按字段名）的 `array`。`array` 中的每个值都表示为 `string`。数据库 `NULL` 值作为 `null` 返回。

如果 `$row` 超过集合中的行数、没有更多行或任何其他错误，则返回 `false`。从 SELECT 以外的查询结果中获取也将返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$result` 参数接受 `PgSql\Result` 实例，之前接受 `resource`。 |

## 示例

**`pg_fetch_assoc()` 示例**

```php


<?php 
$conn = pg_connect("dbname=publisher");
if (!$conn) {
  echo "An error occurred.\n";
  exit;
}

$result = pg_query($conn, "SELECT id, author, email FROM authors");
if (!$result) {
  echo "An error occurred.\n";
  exit;
}

while ($row = pg_fetch_assoc($result)) {
  echo $row['id'];
  echo $row['author'];
  echo $row['email'];
}
?>

    
```

## 参见

`pg_fetch_row()` `pg_fetch_array()` `pg_fetch_object()` `pg_fetch_result()`
