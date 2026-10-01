---
id: "zh-php-function-function-gettype"
language: "php"
lang: "zh"
category: "function"
name: "gettype"
title: "获取变量的类型"
signature: "string gettype(mixed $value)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.gettype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取变量的类型

## 说明

```php
string gettype(mixed $value)
```

返回 PHP `$value` 变量的类型。 对于类型检查，请使用 `is_*` 函数。

## 参数

- **`$value`** — 要检查类型的变量。

## 返回值

返回字符串，可能值为： `"boolean"` `"integer"` `"double"` （由于历史原因，如果是浮点型，则返回 `"double"`，而不仅仅是 `"float"`） `"string"` `"array"` `"object"` `"resource"` `"resource (closed)"` 自 PHP 7.2.0 起 `"NULL"` `"unknown type"`

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.2.0 | 现在，已关闭的资源报告为 `'resource (closed)'`。此前，已关闭的资源报告为 `'unknown type'`。 |

## 示例

**`gettype()` 示例**

```php


<?php

$data = array(1, 1., NULL, new stdClass, 'foo');

foreach ($data as $value) {
    echo gettype($value), "\n";
}

?>

    
```

以上示例的输出类似于：

```text


integer
double
NULL
object
string

    
```

## 参见

`get_debug_type()` `settype()` `get_class()` `is_array()` `is_bool()` `is_callable()` `is_float()` `is_int()` `is_null()` `is_numeric()` `is_object()` `is_resource()` `is_scalar()` `is_string()` `function_exists()` `method_exists()`
