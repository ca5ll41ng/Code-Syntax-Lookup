---
id: "zh-php-function-function-array-uintersect-uassoc"
language: "php"
lang: "zh"
category: "function"
name: "array_uintersect_uassoc"
title: "带索引检查计算数组的交集，用单独的回调函数比较数据和索引"
signature: "array array_uintersect_uassoc(array $array1, array $arrays, callable $value_compare_func, callable $key_compare_func)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-uintersect-uassoc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 带索引检查计算数组的交集，用单独的回调函数比较数据和索引

## 说明

```php
array array_uintersect_uassoc(array $array1, array $arrays, callable $value_compare_func, callable $key_compare_func)
```

通过额外的索引检查、回调函数比较数据和索引来返回多个数组的交集。

## 参数

- **`$array1`** — 第一个数组。
- **`$arrays`** — 更多数组。
- **`$value_compare_func`** — 在第一个参数小于，等于或大于第二个参数时，该比较函数必须相应地返回一个小于，等于或大于 0 的整数。
  > 从比较函数中返回*非整数*值，例如 `float`，将导致内部强制转换为 callback 返回值为 `int`。因此，诸如 `0.99` 和 `0.1` 之类的值都将被转换为整数值 `0`，将这些值比较的话将会是相等。


  > 排序回调必须以任意顺序处理任意数组中的任意值，无论它们最初提供的顺序如何。这是因为每个单独的数组在与其他数组进行比较之前首先进行排序。例如：
  >
  > ```php
  >
  >
  > <?php
  > $arrayA = ["string", 1];
  > $arrayB = [["value" => 1]];
  > // $item1 和 $item2 可以是“string”、1 或 ["value" => 1]
  > $compareFunc = static function ($item1, $item2) {
  >     $value1 = is_string($item1) ? strlen($item1) : (is_array($item1) ? $item1["value"] : $item1);
  >     $value2 = is_string($item2) ? strlen($item2) : (is_array($item2) ? $item2["value"] : $item2);
  >     return $value1 <=> $value2;
  > };
  > ?>
  >
  >   
  > ```


- **`$key_compare_func`** — 键名比较的回调函数。

## 返回值

返回一个数组，该数组包含了所有在 `$array1` 中也同时出现在所有其它参数数组中的值。

## 示例

**`array_uintersect_uassoc()` 示例**

```php


<?php
$array1 = array("a" => "green", "b" => "brown", "c" => "blue", "red");
$array2 = array("a" => "GREEN", "B" => "brown", "yellow", "red");

print_r(array_uintersect_uassoc($array1, $array2, "strcasecmp", "strcasecmp"));
?>

    
```

以上示例会输出：

```text


Array
(
    [a] => green
    [b] => brown
)

    
```

## 参见

`array_uintersect()` `array_intersect_assoc()` `array_intersect_uassoc()` `array_uintersect_assoc()`
