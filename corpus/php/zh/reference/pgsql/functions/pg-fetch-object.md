---
id: "zh-php-function-function-pg-fetch-object"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "pg_fetch_object"
title: "获取一行作为对象"
signature: "object|false pg_fetch_object(PgSql\\Result $result, int|null $row = null, string $class = \"stdClass\", array $constructor_args = [])"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-fetch-object.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取一行作为对象

## 说明

```php
object|false pg_fetch_object(PgSql\Result $result, int|null $row = null, string $class = "stdClass", array $constructor_args = [])
```

`pg_fetch_object()` 返回对象，该对象的属性对应于获取的行的字段名称。它可以选择实例化特定类的对象，并将参数传递给该类的构造方法。

> 此函数将 NULL 字段设置为 PHP `null` 值。

在速度方面，该函数与 `pg_fetch_array()` 相同，并且几乎与 `pg_fetch_row()` 一样快（差别不大）。

## 参数

- **`$result`** — `PgSql\Result` 实例，由 `pg_query()`、`pg_query_params()` 或者 `pg_execute()`（等）返回。
- **`$row`** — 要获取的结果中的行号。行从 0 向上编号。如果省略或为 `null`，则获取下一行。
- **`$class`** — 要实例化、设置属性并返回的类的名称。如果未指定，则返回 `stdClass` 对象。
- **`$constructor_args`** — 要传递给 `$class` 对象的构造方法的可选参数 `array`。

## 返回值

结果中的每个字段名称都有在 `object` 中对应的属性。数据库 `NULL` 值作为 `null` 返回。

如果 `$row` 超过集合中的行数、没有更多行或任何其他错误，则返回 `false`。

## 错误／异常

当 `$constructor_args` 非空而类没有构造方法时，会抛出 `ValueError`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 当 `$constructor_args` 非空而类没有构造方法时，现在会抛出 `ValueError` 异常；之前抛出 `Exception`。 |
| 8.1.0 | 现在 `$result` 参数接受 `PgSql\Result` 实例，之前接受 `resource`。 |

## 示例

**`pg_fetch_object()` 示例**

```php


<?php 

$database = "store";

$db_conn = pg_connect("host=localhost port=5432 dbname=$database");
if (!$db_conn) {
  echo "Failed connecting to postgres database $database\n";
  exit;
}

$qu = pg_query($db_conn, "SELECT * FROM books ORDER BY author");


while ($data = pg_fetch_object($qu)) {
  echo $data->author . " (";
  echo $data->year . "): ";
  echo $data->title . "<br />";
}

pg_free_result($qu);
pg_close($db_conn);

?>

    
```

## 参见

`pg_query()` `pg_fetch_array()` `pg_fetch_assoc()` `pg_fetch_row()` `pg_fetch_result()`
