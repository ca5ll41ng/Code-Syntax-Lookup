---
id: "zh-php-function-function-array-flip"
language: "php"
lang: "zh"
category: "function"
name: "array_flip"
title: "交换数组中的键和值"
signature: "array array_flip(array $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-flip.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 交换数组中的键和值

## 说明

```php
array array_flip(array $array)
```

`array_flip()` 返回一个反转后的 `array`，例如 `$array` 中的键名变成了值，而 `$array` 中的值成了键名。

注意 `$array` 中的值需要能够作为合法的键名（例如需要是 `int` 或者 `string`）。如果类型不对，将出现一个警告，并且有问题的键／值对*将不会出现在结果里*。

如果同一个值出现多次，则最后一个键名将作为它的值，其它键会被丢弃。

## 参数

- **`$array`** — 要交换键/值对的数组。

## 返回值

返回交换后的数组。

## 示例

**`array_flip()` 例子**

```php


<?php
$input = array("oranges", "apples", "pears");
$flipped = array_flip($input);

print_r($flipped);
?>

    
```

以上示例会输出：

```text


Array
(
    [oranges] => 0
    [apples] => 1
    [pears] => 2
)

    
```

**`array_flip()` 例子 : 冲突**

```php


<?php
$input = array("a" => 1, "b" => 1, "c" => 2);
$flipped = array_flip($input);

print_r($flipped);
?>

    
```

以上示例会输出：

```text


Array
(
    [1] => b
    [2] => c
)

    
```

## 参见

`array_values()` `array_keys()` `array_reverse()`
