---
id: "zh-php-function-function-array-intersect-key"
language: "php"
lang: "zh"
category: "function"
name: "array_intersect_key"
title: "使用键名比较计算数组的交集"
signature: "array array_intersect_key(array $array, array $arrays)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-intersect-key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用键名比较计算数组的交集

## 说明

```php
array array_intersect_key(array $array, array $arrays)
```

`array_intersect_key()` 返回一个数组，该数组包含了所有出现在 `$array` 和其它参数数组中同时存在的键名的值。

## 参数

- **`$array`** — 要检查的数组，作为主值。
- **`$arrays`** — 要被对比的数组。

## 返回值

返回一个关联数组，该数组包含了所有出现在 `$array` 和其它参数数组中同时存在的键名的值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在可以仅使用一个参数调用此函数。以前，至少需要两个参数。 |

## 示例

**`array_intersect_key()` 例子**

```php


<?php
$array1 = array('blue'  => 1, 'red'  => 2, 'green'  => 3, 'purple' => 4);
$array2 = array('green' => 5, 'blue' => 6, 'yellow' => 7, 'cyan'   => 8);

var_dump(array_intersect_key($array1, $array2));
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

上例中可以看到，只有 `'blue'` 和 `'green'` 两个键名同时出现在两个数组中，因此被返回。另外注意 `'blue'` 和 `'green'` 的值在两个数组中是不同的。但因为只检查键名，因此还是匹配。返回的只是 `$array` 中的值。

在 `key => value` 对中的两个键名仅在 `(string) $key1 === (string) $key2` 时才被认为相等。换句话说，执行了严格的类型检查，因此字符串的表达形式必须相同。

## 参见

`array_diff()` `array_udiff()` `array_diff_assoc()` `array_diff_uassoc()` `array_udiff_assoc()` `array_udiff_uassoc()` `array_diff_key()` `array_diff_ukey()` `array_intersect()` `array_intersect_assoc()` `array_intersect_uassoc()` `array_intersect_ukey()`
