---
id: "zh-php-function-function-is-float"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"validator","params":[1]}
name: "is_float"
title: "检测变量是否是浮点型"
signature: "bool is_float(mixed $value)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.is-float.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测变量是否是浮点型

## 说明

```php
bool is_float(mixed $value)
```

检测变量是否是浮点型。

> 检测变量是数字或数字字符串（如表单输入，始终是字符串），必须使用 `is_numeric()`。

## 参数

- **`$value`** — 要求值的变量。

## 返回值

如果 `$value` 是 `float`，返回 `true`，否则返回 `false`。

## 示例

**`is_float()` 示例**

```php


<?php

var_dump(is_float(27.25));
var_dump(is_float('abc'));
var_dump(is_float(23));
var_dump(is_float(23.5));
var_dump(is_float(1e7));  // 科学计数
var_dump(is_float(true));
?>

    
```

以上示例会输出：

```text


bool(true)
bool(false)
bool(false)
bool(true)
bool(true)
bool(false)

    
```

## 参见

`is_bool()` `is_int()` `is_numeric()` `is_string()` `is_array()` `is_object()`
