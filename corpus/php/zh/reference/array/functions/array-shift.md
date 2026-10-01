---
id: "zh-php-function-function-array-shift"
language: "php"
lang: "zh"
category: "function"
name: "array_shift"
title: "将数组开头的单元移出数组"
signature: "mixed array_shift(array $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-shift.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将数组开头的单元移出数组

## 说明

```php
mixed array_shift(array $array)
```

`array_shift()` 将 `$array` 的第一个单元移出并作为结果返回，将 `$array` 的长度减一并将所有其它单元向前移动一位。所有的数字键名将改为从零开始计数，文字键名将不变。

> 使用此函数后会重置（`reset()`）`array` 指针。

## 参数

- **`$array`** — 输入的数组。

## 返回值

返回移出的值，如果 `$array` 为 空或不是一个数组则返回 `null`。

## 示例

**`array_shift()` 例子**

```php


<?php
$stack = array("orange", "banana", "apple", "raspberry");
$fruit = array_shift($stack);
print_r($stack);
?>

     
```

以上示例会输出：

```php


Array
(
    [0] => banana
    [1] => apple
    [2] => raspberry
)

     
```

并且 `orange` 被赋给了 `$fruit`。

## 参见

`array_unshift()` `array_push()` `array_pop()`
