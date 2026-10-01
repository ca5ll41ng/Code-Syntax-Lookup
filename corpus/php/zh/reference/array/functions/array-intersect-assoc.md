---
id: "zh-php-function-function-array-intersect-assoc"
language: "php"
lang: "zh"
category: "function"
name: "array_intersect_assoc"
title: "带索引检查计算数组的交集"
signature: "array array_intersect_assoc(array $array, array $arrays)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-intersect-assoc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 带索引检查计算数组的交集

## 说明

```php
array array_intersect_assoc(array $array, array $arrays)
```

`array_intersect_assoc()` 返回一个数组，该数组包含了所有在 `$array` 和其它参数数组中同时存在的值。注意和 `array_intersect()` 不同的是，键名也用于比较。

## 参数

- **`$array`** — 要检查的数组，作为主值。
- **`$arrays`** — 要被对比的数组。

## 返回值

返回一个关联数组，该数组包含了所有在 `$array` 和其它参数数组中同时存在的值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在可以仅使用一个参数调用此函数。以前，至少需要两个参数。 |

## 示例

**`array_intersect_assoc()` 例子**

```php


<?php
$array1 = array("a" => "green", "b" => "brown", "c" => "blue", "red");
$array2 = array("a" => "green", "b" => "yellow", "blue", "red");
$result_array = array_intersect_assoc($array1, $array2);
print_r($result_array);
?>

    
```

以上示例会输出：

```text


Array
(
    [a] => green
)

    
```

上面例子中可以看到，只有键值对 `"a" => "green"` 在两个数组中都存在，从而被返回。 值 `"red"` 没有被返回，是因为在 `$array1` 中它的键名是 `0` 而在 `$array2` 中 "red" 的键名是 `1`，键 `"b"` 没有返回的原因是，它的值和其他数组不同。

仅在 `(string) $elem1 === (string) $elem2` 时， `key => value` 才被认为是相等的。 也就是说使用了严格的类型检查，字符串的表达形式必须相同。

## 参见

 `array_intersect()` `array_uintersect_assoc()` `array_intersect_uassoc()` `array_uintersect_uassoc()` `array_diff()` `array_diff_assoc()`
