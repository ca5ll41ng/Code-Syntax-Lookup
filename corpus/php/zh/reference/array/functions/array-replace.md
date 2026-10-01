---
id: "zh-php-function-function-array-replace"
language: "php"
lang: "zh"
category: "function"
name: "array_replace"
title: "使用传递的数组替换第一个数组的元素"
signature: "array array_replace(array $array, array $replacements)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-replace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用传递的数组替换第一个数组的元素

## 说明

```php
array array_replace(array $array, array $replacements)
```

`array_replace()` 创建新数组，并为提供的数组中的每个 key 都分配元素。如果某个 key 出现在多个输入数组中，则将使用最右侧输入数组中的值。

`array_replace()` 不会递归处理元素项，它在替换时会替换每个 key 的值。

## 参数

- **`$array`** — 替换该数组的值。
- **`$replacements`** — 包含要提取元素的数组。 后面的数组里的值会覆盖前面的值。

## 返回值

返回 `array`。

## 示例

**`array_replace()` 示例**

```php


<?php
$base = array("orange", "banana", "apple", "raspberry");
$replacements = array(0 => "pineapple", 4 => "cherry");
$replacements2 = array(0 => "grape");

$basket = array_replace($base, $replacements, $replacements2);
var_dump($basket);
?>

    
```

以上示例会输出：

```php


array(5) {
  [0]=>
  string(5) "grape"
  [1]=>
  string(6) "banana"
  [2]=>
  string(5) "apple"
  [3]=>
  string(9) "raspberry"
  [4]=>
  string(6) "cherry"
}

    
```

**嵌套数组的处理方式示例**

```php


<?php
$base = [ 'citrus' => [ 'orange', 'lemon' ], 'pome' => [ 'apple' ] ];
$replacements = [ 'citrus' => [ 'grapefruit' ] ];
$replacements2 = [ 'citrus' => [ 'kumquat', 'citron' ], 'pome' => [ 'loquat' ] ];

$basket = array_replace($base, $replacements, $replacements2);
var_dump($basket);
?>

    
```

以上示例会输出：

```php


array(2) {
  ["citrus"]=>
  array(2) {
    [0]=>
    string(7) "kumquat"
    [1]=>
    string(6) "citron"
  }
  ["pome"]=>
  array(1) {
    [0]=>
    string(6) "loquat"
  }
}

    
```

## 参见

`array_replace_recursive()` `array_merge()`
