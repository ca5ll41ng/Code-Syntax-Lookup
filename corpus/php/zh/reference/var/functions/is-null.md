---
id: "zh-php-function-function-is-null"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"validator","params":[1]}
name: "is_null"
title: "检测变量是否是 `null`"
signature: "bool is_null(mixed $value)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.is-null.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测变量是否是 `null`

## 说明

```php
bool is_null(mixed $value)
```

检测变量是否是 `null`。

## 参数

- **`$value`** — 需要检测的变量。

## 返回值

如果 `$value` 是 `null`，返回 `true`，否则返回 `false`。

## 示例

**`is_null()` 示例**

```php


<?php

error_reporting(E_ALL);

$foo = NULL;
var_dump(is_null($inexistent), is_null($foo));

?>

    
```

## 参见

`null` 类型 `isset()` `is_bool()` `is_numeric()` `is_float()` `is_int()` `is_string()` `is_object()` `is_array()`
