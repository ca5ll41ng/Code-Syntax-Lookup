---
id: "zh-php-function-function-array-count-values"
language: "php"
lang: "zh"
category: "function"
name: "array_count_values"
title: "统计数组中每个不同值的出现次数"
signature: "array array_count_values(array $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-count-values.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 统计数组中每个不同值的出现次数

## 说明

```php
array array_count_values(array $array)
```

`array_count_values()` 返回一个数组： 数组的键（必须是 `integer` 或 `string`）是 `$array` 里单元的值； 数组的值是 `$array` 单元的值出现的次数。

## 参数

- **`$array`** — 统计这个数组的值

## 返回值

返回一个关联数组，用 `$array` 数组中的值作为键名，该值在数组中出现的次数作为值。

## 错误／异常

对数组里面的每个不是 `string` 或 `int` 类型的元素抛出一个警告错误（`E_WARNING`）。

## 示例

**`array_count_values()` 例子**

```php


<?php
$array = array(1, "hello", 1, "world", "hello");
print_r(array_count_values($array));
?>

    
```

以上示例会输出：

```text


Array
(
    [1] => 2
    [hello] => 2
    [world] => 1
)

    
```

## 参见

`count()` `array_unique()` `array_values()` `count_chars()`
