---
id: "zh-php-function-function-array-intersect"
language: "php"
lang: "zh"
category: "function"
name: "array_intersect"
title: "计算数组的交集"
signature: "array array_intersect(array $array, array $arrays)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-intersect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算数组的交集

## 说明

```php
array array_intersect(array $array, array $arrays)
```

`array_intersect()` 返回一个数组，该数组包含了所有在 `$array` 和其它参数数组中同时存在的值。注意，键名保留不变。

## 参数

- **`$array`** — 要检查的数组，作为主值。
- **`$arrays`** — 要被对比的数组。

## 返回值

返回一个数组，该数组包含了所有在 `$array` 和其它参数数组中同时存在的值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在可以仅使用一个参数调用此函数。以前，至少需要两个参数。 |

## 示例

**`array_intersect()` 例子**

```php


<?php
$array1 = array("a" => "green", "red", "blue");
$array2 = array("b" => "green", "yellow", "red");
$result = array_intersect($array1, $array2);
print_r($result);
?>

    
```

以上示例会输出：

```php


Array
(
    [a] => green
    [0] => red
)

    
```

## 注释

> 两个单元仅在 `(string) $elem1 === (string) $elem2` 时被认为是相同的。也就是说：当字符串的表达形式相同时。

## 参见

`array_intersect_assoc()` `array_diff()` `array_diff_assoc()`
