---
id: "zh-php-function-function-array-merge"
language: "php"
lang: "zh"
category: "function"
name: "array_merge"
title: "合并一个或多个数组"
signature: "array array_merge(array $arrays)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-merge.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 合并一个或多个数组

## 说明

```php
array array_merge(array $arrays)
```

将一个或多个数组的单元合并起来，一个数组中的值附加在前一个数组的后面。返回作为结果的数组。

如果输入的数组中有相同的字符串键名，则该键名后面的值将覆盖前一个值。然而，如果数组包含数字键名，后面的值将 *不会* 覆盖原来的值，而是附加到后面。

如果输入的数组存在以数字作为索引的内容，则这项内容的键名会以连续方式重新索引。

## 参数

- **`$arrays`** — 要合并的数组。

## 返回值

返回合并后的结果数组。如果参数为空，则返回空 `array`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.4.0 | 允许不带参数调用，之前版本至少需要一个参数。 |

## 示例

**`array_merge()` 示例**

```php


<?php
$array1 = array("color" => "red", 2, 4);
$array2 = array("a", "b", "color" => "green", "shape" => "trapezoid", 4);
$result = array_merge($array1, $array2);
print_r($result);
?>

    
```

以上示例会输出：

```php


Array
(
    [color] => green
    [0] => 2
    [1] => 4
    [2] => a
    [3] => b
    [shape] => trapezoid
    [4] => 4
)

    
```

**单一结构的 `array_merge()` 示例**

```php


<?php
$array1 = array();
$array2 = array(1 => "data");
$result = array_merge($array1, $array2);
print_r($result);
?>

    
```

别忘了数字键名将会被重新编号！

```php


Array
(
    [0] => data
)

    
```

如果你想完全保留原有数组并只想新的数组附加到后面，可以使用 `+` 运算符：

```php


<?php
$array1 = array(0 => 'zero_a', 2 => 'two_a', 3 => 'three_a');
$array2 = array(1 => 'one_b', 3 => 'three_b', 4 => 'four_b');
$result = $array1 + $array2;
var_dump($result);
?>

    
```

第一个数组的键名将会被保留。在两个数组中存在相同的键名时，第一个数组中的同键名的元素将会被保留，第二个数组中的元素将会被忽略。

```php


array(5) {
  [0]=>
  string(6) "zero_a"
  [2]=>
  string(5) "two_a"
  [3]=>
  string(7) "three_a"
  [1]=>
  string(5) "one_b"
  [4]=>
  string(6) "four_b"
}

    
```

**`array_merge()` 合并非数组的类型**

```php


<?php
$beginning = 'foo';
$end = array(1 => 'bar');
$result = array_merge((array) $beginning, (array) $end);
print_r($result);
?>

    
```

以上示例会输出：

```php


Array
(
    [0] => foo
    [1] => bar
)

    
```

## 参见

`array_merge_recursive()` `array_replace()` `array_combine()` 数组操作符
