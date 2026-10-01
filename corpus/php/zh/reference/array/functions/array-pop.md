---
id: "zh-php-function-function-array-pop"
language: "php"
lang: "zh"
category: "function"
name: "array_pop"
title: "弹出数组最后一个单元（出栈）"
signature: "mixed array_pop(array $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-pop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 弹出数组最后一个单元（出栈）

## 说明

```php
mixed array_pop(array $array)
```

`array_pop()` 弹出并返回 `$array` 最后一个元素的值，并将 `$array` 的长度减一。

> 使用此函数后会重置（`reset()`）`array` 指针。

## 参数

- **`$array`** — 需要弹出栈的数组。

## 返回值

返回 `$array` 最后一个元素的值。如果 `$array` 是空，将会返回 `null` 。

## 示例

**`array_pop()` 例子**

```php


<?php
$stack = array("orange", "banana", "apple", "raspberry");
$fruit = array_pop($stack);
print_r($stack);
?>

    
```

经过此操作后，`$stack` 将只有 3 个单元：

```php


Array
(
    [0] => orange
    [1] => banana
    [2] => apple
)

    
```

并且 `raspberry` 将被赋给 `$fruit`。

## 参见

`array_push()` `array_shift()` `array_unshift()`
