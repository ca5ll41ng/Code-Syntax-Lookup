---
id: "zh-php-function-function-mysql-field-flags"
language: "php"
lang: "zh"
category: "function"
name: "mysql_field_flags"
title: "从结果中取得和指定字段关联的 flags"
signature: "string|false mysql_field_flags(resource $result, int $field_offset)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-field-flags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从结果中取得和指定字段关联的 flags

## 说明

```php
string|false mysql_field_flags(resource $result, int $field_offset)
```

`mysql_field_flags()` 返回指定字段的字段 flags。每个 flag 都用一个单词表示，之间用一个空格分开，因此可以用 `explode()` 将返回值分开。

## 参数

- **`$result`** — `resource` 型的结果集。此结果集来自对 `mysql_query()` 的调用。
- **`$field_offset`** — 数值型字段偏移量。 `$field_offset` 从 `0` 开始。如果 `$field_offset` 不存在，则会发出一个 `E_WARNING` 级别的错误

## 返回值

Returns a string of flags associated with the result 或者在失败时返回 `false`.

如果 MySQL 版本足够新，以便支持这些 flag，则会报告以下 flag：`"not_null"`、`"primary_key"`、`"unique_key"`、`"multiple_key"`、`"blob"`、`"unsigned"`、`"zerofill"`,`"binary"`、`"enum"`、`"auto_increment"` 和 `"timestamp"`。

## 示例

**`mysql_field_flags()` 示例**

```php


<?php
$result = mysql_query("SELECT id,email FROM people WHERE id = '42'");
if (!$result) {
    echo 'Could not run query: ' . mysql_error();
    exit;
}
$flags = mysql_field_flags($result, 0);

echo $flags;
print_r(explode(' ', $flags));
?>

   
```

以上示例的输出类似于：

```text


not_null primary_key auto_increment
Array
(
    [0] => not_null
    [1] => primary_key
    [2] => auto_increment
)

   
```

## 注释

> 为了向下兼容，可以使用下列已废弃的别名： `mysql_fieldflags()`

## 参见

 `mysql_field_type()` `mysql_field_len()`
