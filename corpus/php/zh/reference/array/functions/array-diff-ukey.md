---
id: "zh-php-function-function-array-diff-ukey"
language: "php"
lang: "zh"
category: "function"
name: "array_diff_ukey"
title: "用回调函数对键名比较计算数组的差集"
signature: "array array_diff_ukey(array $array, array $arrays, callable $key_compare_func)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-diff-ukey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用回调函数对键名比较计算数组的差集

## 说明

```php
array array_diff_ukey(array $array, array $arrays, callable $key_compare_func)
```

将 `$array` 的键与 `$arrays` 的键进行比较并返回不存在于其它数组的键值。本函数和 `array_diff()` 很像，区别只是用键名来比较而不是值。

此比较是通过用户提供的回调函数来进行的。如果认为第一个参数小于，等于，或大于第二个参数时必须分别返回一个小于零，等于零，或大于零的整数。

## 参数

- **`$array`** — 要比较的数组
- **`$arrays`** — 要比较的数组
- **`$key_compare_func`** — 在第一个参数小于，等于或大于第二个参数时，该比较函数必须相应地返回一个小于，等于或大于 0 的整数。
  > 从比较函数中返回*非整数*值，例如 `float`，将导致内部强制转换为 callback 返回值为 `int`。因此，诸如 `0.99` 和 `0.1` 之类的值都将被转换为整数值 `0`，将这些值比较的话将会是相等。



## 返回值

返回一个 `array`，该数组包含了 `$array` 中存在但其它数组不存在的键值。

 <refsect1 role="errors"> <title xmlns="http://docbook.org/ns/docbook">错误／异常</title>  </refsect1> 

## 示例

**`array_diff_ukey()` 例子**

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

var_dump(array_diff_ukey($array1, $array2, 'key_compare_func'));
?>

    
```

以上示例会输出：

```text


array(2) {
  ["red"]=>
  int(2)
  ["purple"]=>
  int(4)
}

    
```

## 注释

> 注意本函数只检查了多维数组中的一维。当然，可以用 `array_diff_ukey($array1[0], $array2[0], 'callback_func');` 来检查更深的维度。

## 参见

`array_diff()` `array_udiff()` `array_diff_assoc()` `array_diff_uassoc()` `array_udiff_assoc()` `array_udiff_uassoc()` `array_diff_key()` `array_intersect()` `array_intersect_assoc()` `array_intersect_uassoc()` `array_intersect_key()` `array_intersect_ukey()`
