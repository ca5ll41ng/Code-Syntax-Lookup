---
id: "zh-php-function-function-mysql-fetch-row"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "mysql_fetch_row"
title: "从结果集中取得一行作为枚举数组"
signature: "array mysql_fetch_row(resource $result)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-fetch-row.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从结果集中取得一行作为枚举数组

## 说明

```php
array mysql_fetch_row(resource $result)
```

返回根据所取得的行生成的数组，如果没有更多行则返回 `false`。

`mysql_fetch_row()` 从和指定的结果标识关联的结果集中取得一行数据并作为数组返回。每个结果的列储存在一个数组的单元中，偏移量从 0 开始。

依次调用 `mysql_fetch_row()` 将返回结果集中的下一行，如果没有更多行则返回 `false`。

参见 `mysql_fetch_array()`，`mysql_fetch_assoc()`，`mysql_fetch_object()`，`mysql_data_seek()`，`mysql_fetch_lengths()` 和 `mysql_result()`。

## 参数

- **`$result`** — `resource` 型的结果集。此结果集来自对 `mysql_query()` 的调用。

## 返回值

Returns an numerical array of strings that corresponds to the fetched row, or `false` if there are no more rows.

`mysql_fetch_row()` fetches one row of data from the result associated with the specified result identifier. The row is returned as an array. Each result column is stored in an array offset, starting at offset 0.

## 示例

**Fetching one row with `mysql_fetch_row()`**

```php


<?php
$result = mysql_query("SELECT id,email FROM people WHERE id = '42'");
if (!$result) {
    echo 'Could not run query: ' . mysql_error();
    exit;
}
$row = mysql_fetch_row($result);

echo $row[0]; // 42
echo $row[1]; // the email value
?>

   
```

## 注释

> 此函数将 NULL 字段设置为 PHP `null` 值。

## 参见

 `mysql_fetch_array()` `mysql_fetch_assoc()` `mysql_fetch_object()` `mysql_data_seek()` `mysql_fetch_lengths()` `mysql_result()`
