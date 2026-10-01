---
id: "zh-php-function-function-array-replace-recursive"
language: "php"
lang: "zh"
category: "function"
name: "array_replace_recursive"
title: "使用传递的数组递归替换第一个数组的元素"
signature: "array array_replace_recursive(array $array, array $replacements)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-replace-recursive.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用传递的数组递归替换第一个数组的元素

## 说明

```php
array array_replace_recursive(array $array, array $replacements)
```

`array_replace_recursive()` 使用后面数组元素的值替换数组 `$array` 的值。 如果一个键存在于第一个数组同时也存在于第二个数组，它的值将被第二个数组中的值替换。 如果一个键存在于第二个数组，但是不存在于第一个数组，则会在第一个数组中创建这个元素。 如果一个键仅存在于第一个数组，它将保持不变。 如果传递了多个替换数组，它们将被按顺序依次处理，后面的数组将覆盖之前的值。

`array_replace_recursive()` 是递归的：它将遍历数组并将相同的处理应用到数组的内部值。

如果第一个数组中的值是标量，它的值将被第二个数组中的值替换，它可能是一个标量或者数组。如果第一个数组和第二个数组中的值都是数组， `array_replace_recursive()` 函数将递归地替换它们各自的值。

## 参数

- **`$array`** — 替换该数组的值。
- **`$replacements`** — 包含要提取元素的数组。

## 返回值

返回 `array`。

## 示例

**`array_replace_recursive()` 示例**

```php


<?php
$base = array('citrus' => array("orange"), 'berries' => array("blackberry", "raspberry"));
$replacements = array('citrus' => array('pineapple'), 'berries' => array('blueberry'));

$basket = array_replace_recursive($base, $replacements);
print_r($basket);

$basket = array_replace($base, $replacements);
print_r($basket);
?>

    
```

以上示例会输出：

```php


Array
(
    [citrus] => Array
        (
            [0] => pineapple
        )

    [berries] => Array
        (
            [0] => blueberry
            [1] => raspberry
        )

)
Array
(
    [citrus] => Array
        (
            [0] => pineapple
        )

    [berries] => Array
        (
            [0] => blueberry
        )

)


    
```

**`array_replace_recursive()` 及其递归表现**

```php


<?php
$base = array('citrus' => array("orange") , 'berries' => array("blackberry", "raspberry"), 'others' => 'banana' );
$replacements = array('citrus' => 'pineapple', 'berries' => array('blueberry'), 'others' => array('litchis'));
$replacements2 = array('citrus' => array('pineapple'), 'berries' => array('blueberry'), 'others' => 'litchis');

$basket = array_replace_recursive($base, $replacements, $replacements2);
print_r($basket);

?>

    
```

以上示例会输出：

```php


Array
(
    [citrus] => Array
        (
            [0] => pineapple
        )

    [berries] => Array
        (
            [0] => blueberry
            [1] => raspberry
        )

    [others] => litchis
)

    
```

## 参见

`array_replace()` `array_merge_recursive()`
