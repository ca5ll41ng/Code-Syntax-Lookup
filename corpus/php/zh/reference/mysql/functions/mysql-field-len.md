---
id: "zh-php-function-function-mysql-field-len"
language: "php"
lang: "zh"
category: "function"
name: "mysql_field_len"
title: "返回指定字段的长度"
signature: "int|false mysql_field_len(resource $result, int $field_offset)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-field-len.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回指定字段的长度

## 说明

```php
int|false mysql_field_len(resource $result, int $field_offset)
```

`mysql_field_len()` 返回指定字段的长度。

## 参数

- **`$result`** — `resource` 型的结果集。此结果集来自对 `mysql_query()` 的调用。
- **`$field_offset`** — 数值型字段偏移量。 `$field_offset` 从 `0` 开始。如果 `$field_offset` 不存在，则会发出一个 `E_WARNING` 级别的错误

## 返回值

The length of the specified field index on success 或者在失败时返回 `false`.

## 示例

**`mysql_field_len()` 示例**

```php


<?php
$result = mysql_query("SELECT id,email FROM people WHERE id = '42'");
if (!$result) {
    echo 'Could not run query: ' . mysql_error();
    exit;
}

// Will get the length of the id field as specified in the database
// schema.
$length = mysql_field_len($result, 0);
echo $length;
?>

   
```

## 注释

> 为了向下兼容，可以使用下列已废弃的别名： `mysql_fieldlen()`

## 参见

 `mysql_fetch_lengths()` `strlen()`
