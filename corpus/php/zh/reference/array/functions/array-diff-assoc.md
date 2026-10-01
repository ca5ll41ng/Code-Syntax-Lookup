---
id: "zh-php-function-function-array-diff-assoc"
language: "php"
lang: "zh"
category: "function"
name: "array_diff_assoc"
title: "带索引检查计算数组的差集"
signature: "array array_diff_assoc(array $array, array $arrays)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-diff-assoc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 带索引检查计算数组的差集

## 说明

```php
array array_diff_assoc(array $array, array $arrays)
```

`array_diff_assoc()` 返回一个数组，该数组包括了所有在 `$array` 中但是不在任何其它参数 `$arrays` 中的值。注意和 `array_diff()` 不同的是键名也用于比较。

## 参数

- **`$array`** — 从这个数组进行比较
- **`$arrays`** — 要比较的数组

## 返回值

返回一个 `array`，包含所有在 `$array` 中但是不在任何其它参数数组中的值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在可以仅使用一个参数调用此函数。以前，至少需要两个参数。 |

 <refsect1 role="errors"> <title xmlns="http://docbook.org/ns/docbook">错误／异常</title>  </refsect1> 

## 示例

**`array_diff_assoc()` 示例**

在此示例中，键值对 `"a" => "green"` 在两个数组中都有，因此不在本函数的输出中。不同的是，键值对 `0 => "red"` 出现在输出中，这是因为第一个数组的 `"red"` 的 key 自动分配为 `0`，而在第二个数组中，由于键名 `0` 已经被 `yellow` 占用，key 分配为 `1`。

```php


<?php
$array1 = array("a" => "green", "b" => "brown", "c" => "blue", "red");
$array2 = array("a" => "green", "yellow", "red");
$result = array_diff_assoc($array1, $array2);
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

**`array_diff_assoc()` 示例**

键值对 *key => value* 中的两个值仅在 `(string) $elem1 === (string) $elem2` 时被认为相等。也就是说使用了严格检查，字符串的表达必须相同。

```php


<?php
$array1 = array(0, 1, 2);
$array2 = array("00", "01", "2");
$result = array_diff_assoc($array1, $array2);
print_r($result);
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => 0
    [1] => 1
)

    
```

## 注释

> 注意本函数只检查了多维数组中的一维。可以用 `array_diff_assoc($array1[0], $array2[0]);` 检查更深的维度。

> 使用更多的键比较相似数组时，确保参数传入的顺序是正确的。新的数组应该是在列表里的第一个。

## 参见

`array_diff()` `array_diff_uassoc()` `array_udiff_assoc()` `array_udiff_uassoc()` `array_intersect()` `array_intersect_assoc()`
