---
id: "zh-php-function-function-mysql-fetch-lengths"
language: "php"
lang: "zh"
category: "function"
name: "mysql_fetch_lengths"
title: "取得结果集中每个输出的长度"
signature: "array|false mysql_fetch_lengths(resource $result)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-fetch-lengths.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得结果集中每个输出的长度

## 说明

```php
array|false mysql_fetch_lengths(resource $result)
```

返回数组，对应 MySQL 查询中获取的最后一行的每个字段的长度。

`mysql_fetch_lengths()` 将上一次 `mysql_fetch_row()`、`mysql_fetch_assoc()`、`mysql_fetch_array()` 和 `mysql_fetch_object()` 所返回的最后一行的每个字段的长度储存到一个数组中，偏移量从 0 开始。

## 参数

- **`$result`** — `resource` 型的结果集。此结果集来自对 `mysql_query()` 的调用。

## 返回值

An `array` of lengths on success 或者在失败时返回 `false`.

## 示例

**`mysql_fetch_lengths()` 示例**

```php


<?php
$result = mysql_query("SELECT id,email FROM people WHERE id = '42'");
if (!$result) {
    echo 'Could not run query: ' . mysql_error();
    exit;
}
$row     = mysql_fetch_assoc($result);
$lengths = mysql_fetch_lengths($result);

print_r($row);
print_r($lengths);
?>

   
```

以上示例的输出类似于：

```text


Array
(
    [id] => 42
    [email] => user@example.com
)
Array
(
    [0] => 2
    [1] => 16
)

   
```

## 参见

 `mysql_field_len()` `mysql_fetch_row()` `strlen()`
