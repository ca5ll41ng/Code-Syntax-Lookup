---
id: "zh-php-function-function-mysql-fetch-array"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "mysql_fetch_array"
title: "从结果集中取得一行作为关联数组"
signature: "array mysql_fetch_array(resource $result, [int $result_type = ...])"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-fetch-array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从结果集中取得一行作为关联数组

## 说明

```php
array mysql_fetch_array(resource $result, [int $result_type = ...])
```

`mysql_fetch_array()` 是 `mysql_fetch_row()` 的扩展版本。除了将数据以数字索引方式储存在数组中之外，还可以将数据作为关联索引储存，用字段名作为键名。

有一点很重要必须指出，用 `mysql_fetch_array()` 并*不明显* 比用 `mysql_fetch_row()` 慢，而且还提供了明显更多的值。

## 参数

- **`$result`** — `resource` 型的结果集。此结果集来自对 `mysql_query()` 的调用。
- **`$result_type`** — 接受以下常量值： `MSQL_ASSOC`，`MSQL_NUM` 和 `MSQL_BOTH`，默认为 `MSQL_BOTH`。如果用了 MYSQL_BOTH，将得到一个同时包含关联和数字索引的数组。用 MYSQL_ASSOC 只得到关联索引（如同 `mysql_fetch_assoc()` 那样），用 MYSQL_NUM 只得到数字索引（如同 `mysql_fetch_row()` 那样）。

## 返回值

返回根据从结果集取得的行生成的数组，如果没有更多行则返回 `false`。

## 示例

**`msql_fetch_array()` 示例**

```php


<?php
$con = msql_connect();
if (!$con) {
    die('Server connection problem: ' . msql_error());
}

if (!msql_select_db('test', $con)) {
    die('Database connection problem: ' . msql_error());
}

$result = msql_query('SELECT id, name FROM people', $con);
if (!$result) {
    die('Query execution problem: ' . msql_error());
}

while ($row = msql_fetch_array($result, MSQL_ASSOC)) {
    echo $row['id'] . ': ' . $row['name'] . "\n";
}

msql_free_result($result);
?>

     
```

## 参见

 `msql_fetch_row()` `msql_fetch_object()` `msql_data_seek()` `msql_result()`
