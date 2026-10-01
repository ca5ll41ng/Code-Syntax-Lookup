---
id: "zh-php-function-function-array-intersect-ukey"
language: "php"
lang: "zh"
category: "function"
name: "array_intersect_ukey"
title: "在键名上使用回调函数来比较计算数组的交集"
signature: "array array_intersect_ukey(array $array, array $arrays, callable $key_compare_func)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-intersect-ukey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在键名上使用回调函数来比较计算数组的交集

## 说明

```php
array array_intersect_ukey(array $array, array $arrays, callable $key_compare_func)
```

`array_intersect_ukey()` 返回一个数组，该数组包含了所有在 `$array` 和其它参数数组中同时存在的键名的值。

## 参数

- **`$array`** — 用于数组比较的初始数组。
- **`$arrays`** — 用于比较键的数组。
- **`$key_compare_func`** — 在第一个参数小于，等于或大于第二个参数时，该比较函数必须相应地返回一个小于，等于或大于 0 的整数。
  > 从比较函数中返回*非整数*值，例如 `float`，将导致内部强制转换为 callback 返回值为 `int`。因此，诸如 `0.99` 和 `0.1` 之类的值都将被转换为整数值 `0`，将这些值比较的话将会是相等。



## 返回值

返回 `$array` 的值，其键名同时存在于所有参数数组中。

## 示例

**`array_intersect_ukey()` 例子**

```php


<?php
function key_compare_func($key1, $key2)
{
    if ($key1 == $key2)
        return 0;
    else if ($key1 > $key2)
        return 1;
    else
        return -1;
}

$array1 = array('blue'  => 1, 'red'  => 2, 'green'  => 3, 'purple' => 4);
$array2 = array('green' => 5, 'blue' => 6, 'yellow' => 7, 'cyan'   => 8);

var_dump(array_intersect_ukey($array1, $array2, 'key_compare_func'));
?>

    
```

以上示例会输出：

```text


array(2) {
  ["blue"]=>
  int(1)
  ["green"]=>
  int(3)
}

    
```

上例中可以看到，只有 `'blue'` 和 `'green'` 两个键名出现在两个数组中，因此被返回。另外注意 `'blue'` 和 `'green'` 的值在两个数组中是不同的。但因为只检查键名，因此还是匹配。返回的是 `$array` 中的值。

## 参见

`array_diff()` `array_udiff()` `array_diff_assoc()` `array_diff_uassoc()` `array_udiff_assoc()` `array_udiff_uassoc()` `array_diff_key()` `array_diff_ukey()` `array_intersect()` `array_intersect_assoc()` `array_intersect_uassoc()` `array_intersect_key()`
