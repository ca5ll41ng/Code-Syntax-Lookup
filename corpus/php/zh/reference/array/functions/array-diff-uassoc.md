---
id: "zh-php-function-function-array-diff-uassoc"
language: "php"
lang: "zh"
category: "function"
name: "array_diff_uassoc"
title: "用用户提供的回调函数做索引检查来计算数组的差集"
signature: "array array_diff_uassoc(array $array, array $arrays, callable $key_compare_func)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-diff-uassoc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用用户提供的回调函数做索引检查来计算数组的差集

## 说明

```php
array array_diff_uassoc(array $array, array $arrays, callable $key_compare_func)
```

比较了 `$array` 和 `$arrays` 并返回不同之处。 注意和 `array_diff()` 不同的是键名也用于比较。

和 `array_diff_assoc()` 不同的是使用了用户自定义的回调函数，而不是内置的函数。

## 参数

- **`$array`** — 待比较的数组
- **`$arrays`** — 要比较的数组
- **`$key_compare_func`** — 在第一个参数小于，等于或大于第二个参数时，该比较函数必须相应地返回一个小于，等于或大于 0 的整数。
  > 从比较函数中返回*非整数*值，例如 `float`，将导致内部强制转换为 callback 返回值为 `int`。因此，诸如 `0.99` 和 `0.1` 之类的值都将被转换为整数值 `0`，将这些值比较的话将会是相等。



## 返回值

返回一个 `array`，该数组包括了所有在 `$array` 中但是不在任何其它参数数组中的值。

 <refsect1 role="errors"> <title xmlns="http://docbook.org/ns/docbook">错误／异常</title>  </refsect1> 

## 示例

**`array_diff_uassoc()` 示例**

在此示例中，键值对 `"a" => "green"` 在两个数组中都有，因此不在本函数的输出中。不同的是，键值对 `0 => "red"` 出现在输出中，这是因为第一个数组的 `"red"` 的 key 自动分配为 `0`，而在第二个数组中，由于键名 `0` 已经被 `yellow` 占用，key 分配为 `1`。

```php


<?php
function key_compare_func($a, $b)
{
    return $a <=> $b;
}

$array1 = array("a" => "green", "b" => "brown", "c" => "blue", "red");
$array2 = array("a" => "green", "yellow", "red");
$result = array_diff_uassoc($array1, $array2, "key_compare_func");
print_r($result);
?>

    
```

以上示例会输出：

```text


Array
(
    [b] => brown
    [c] => blue
    [0] => red
)

    
```

通过用户提供的回调函数检查两个数组的索引是否相等。

## 注释

> 注意本函数只检查了多维数组中的一维。可以用 `array_diff_uassoc($array1[0], $array2[0], "key_compare_func");` 检查更深的维度。

## 参见

`array_diff()` `array_diff_assoc()` `array_udiff()` `array_udiff_assoc()` `array_udiff_uassoc()` `array_intersect()` `array_intersect_assoc()` `array_uintersect()` `array_uintersect_assoc()` `array_uintersect_uassoc()`
