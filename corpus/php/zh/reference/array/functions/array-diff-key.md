---
id: "zh-php-function-function-array-diff-key"
language: "php"
lang: "zh"
category: "function"
name: "array_diff_key"
title: "使用键名比较计算数组的差集"
signature: "array array_diff_key(array $array, array $arrays)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-diff-key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用键名比较计算数组的差集

## 说明

```php
array array_diff_key(array $array, array $arrays)
```

根据 `$array` 中的键名和 `$arrays` 进行比较，返回不同键名的项。 本函数和 `array_diff()` 相同只除了比较是根据键名而不是值来进行的。

## 参数

- **`$array`** — 从这个数组进行比较
- **`$arrays`** — 要进行比较的数组

## 返回值

返回一个数组，该数组包含了所有出现在 `$array` 中但是未出现在任何其它数组中的键名的值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在可以仅使用一个参数调用此函数。以前，至少需要两个参数。 |

 <refsect1 role="errors"> <title xmlns="http://docbook.org/ns/docbook">错误／异常</title>  </refsect1> 

## 示例

**`array_diff_key()` 例**

在 `key => value` 对中的两个键名仅在 `(string) $key1 === (string) $key2` 时被认为相等。换句话说，执行的是严格类型检查，因此字符串的表达必须完全一样。

```php


<?php
$array1 = array('blue' => 1, 'red' => 2, 'green' => 3, 'purple' => 4);
$array2 = array('green' => 5, 'yellow' => 7, 'cyan' => 8);

var_dump(array_diff_key($array1, $array2));
?>

    
```

以上示例会输出：

```text


array(3) {
  ["blue"]=>
  int(1)
  ["red"]=>
  int(2)
  ["purple"]=>
  int(4)
}

    
```

```php


<?php
$array1 = array('blue' => 1, 'red'  => 2, 'green' => 3, 'purple' => 4);
$array2 = array('green' => 5, 'yellow' => 7, 'cyan' => 8);
$array3 = array('blue' => 6, 'yellow' => 7, 'mauve' => 8);

var_dump(array_diff_key($array1, $array2, $array3));
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

> 注意本函数只检查了多维数组中的一维。当然，可以用 `array_diff_key($array1[0], $array2[0]);` 来检查更深的维度。

## 参见

`array_diff()` `array_udiff()` `array_diff_assoc()` `array_diff_uassoc()` `array_udiff_assoc()` `array_udiff_uassoc()` `array_diff_ukey()` `array_intersect()` `array_intersect_assoc()` `array_intersect_uassoc()` `array_intersect_key()` `array_intersect_ukey()`
