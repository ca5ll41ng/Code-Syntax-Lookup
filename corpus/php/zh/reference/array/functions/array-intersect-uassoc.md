---
id: "zh-php-function-function-array-intersect-uassoc"
language: "php"
lang: "zh"
category: "function"
name: "array_intersect_uassoc"
title: "带索引检查计算数组的交集，用回调函数比较索引"
signature: "array array_intersect_uassoc(array $array, array $arrays, callable $key_compare_func)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-intersect-uassoc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 带索引检查计算数组的交集，用回调函数比较索引

## 说明

```php
array array_intersect_uassoc(array $array, array $arrays, callable $key_compare_func)
```

`array_intersect_uassoc()` 返回一个数组，该数组包含了所有在 `$array` 和其它参数数组中同时存在的值。注意和 `array_intersect()` 不同的是，键名也用于比较。

## 参数

- **`$array`** — 用于数组比较的初始数组。
- **`$arrays`** — 用于比较键的数组。
- **`$key_compare_func`** — 在第一个参数小于，等于或大于第二个参数时，该比较函数必须相应地返回一个小于，等于或大于 0 的整数。
  > 从比较函数中返回*非整数*值，例如 `float`，将导致内部强制转换为 callback 返回值为 `int`。因此，诸如 `0.99` 和 `0.1` 之类的值都将被转换为整数值 `0`，将这些值比较的话将会是相等。



## 返回值

返回 `$array` 的值，这些值同时存在于其它参数数组中。

## 示例

**`array_intersect_uassoc()` 例子**

```php


<?php
$array1 = array("a" => "green", "b" => "brown", "c" => "blue", "red");
$array2 = array("a" => "GREEN", "B" => "brown", "yellow", "red");

print_r(array_intersect_uassoc($array1, $array2, "strcasecmp"));
?>

    
```

以上示例会输出：

```text


Array
(
    [b] => brown
)

    
```

## 参见

`array_intersect()` `array_intersect_assoc()` `array_uintersect_assoc()` `array_uintersect_uassoc()` `array_intersect_key()` `array_intersect_ukey()`
