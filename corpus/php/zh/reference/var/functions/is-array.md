---
id: "zh-php-function-function-is-array"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"validator","params":[1]}
name: "is_array"
title: "检测变量是否是数组"
signature: "bool is_array(mixed $value)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.is-array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测变量是否是数组

## 说明

```php
bool is_array(mixed $value)
```

检测变量是否是数组。

## 参数

- **`$value`** — 待检测的变量。

## 返回值

如果 `$value` 是 `array`，则返回 `true`，否则返回 `false`。

## 示例

**检测变量是否是数组**

```php


<?php
$yes = array('this', 'is', 'an array');
echo is_array($yes) ? 'Array' : 'not an Array';
echo "\n";
$no = 'this is a string';
echo is_array($no) ? 'Array' : 'not an Array';
?>

    
```

以上示例会输出：

```text


Array
not an Array

    
```

## 参见

`array_is_list()` `is_float()` `is_int()` `is_string()` `is_object()`
