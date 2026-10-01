---
id: "zh-php-function-function-is-bool"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"validator","params":[1]}
name: "is_bool"
title: "检测变量是否是布尔值"
signature: "bool is_bool(mixed $value)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.is-bool.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测变量是否是布尔值

## 说明

```php
bool is_bool(mixed $value)
```

检查变量是否为布尔值。

## 参数

- **`$value`** — 要检查的变量。

## 返回值

如果 `$value` 是布尔值则返回 `true`，否则返回 `false`。

## 示例

**`is_bool()` 示例**

```php


<?php
$a = false;
$b = 0;

// 因为 $a 是布尔值，所以结果为 true
if (is_bool($a) === true) {
    echo "Yes, this is a boolean\n";
}

// 因为 $b 不是布尔值，所以结果为 false
if (is_bool($b) === false) {
    echo "No, this is not a boolean\n";
}
?>

    
```

## 参见

`is_float()` `is_int()` `is_string()` `is_object()` `is_array()`
