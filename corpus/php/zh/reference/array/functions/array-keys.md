---
id: "zh-php-function-function-array-keys"
language: "php"
lang: "zh"
category: "function"
name: "array_keys"
title: "返回数组中部分的或所有的键名"
signature: "array array_keys(array $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-keys.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回数组中部分的或所有的键名

## 说明

```php
array array_keys(array $array)
```

```php
array array_keys(array $array, mixed $filter_value, bool $strict = false)
```

`array_keys()` 返回 `$input` 数组中的数字或者字符串的键名。

如果指定了可选参数 `$filter_value`，则只返回该值的键名。否则 `$input` 数组中的所有键名都会被返回。

## 参数

- **`$input`** — 一个数组，包含了要返回的键。
- **`$filter_value`** — 如果指定了这个参数，只有包含此值的键才会返回。
- **`$strict`** — 判断在搜索的时候是否该使用严格的比较（===）。

## 返回值

返回 `$input` 里的所有键。

## 示例

**`array_keys()` 例子**

```php


<?php
$array = array(0 => 100, "color" => "red");
print_r(array_keys($array));

$array = array("blue", "red", "green", "blue", "blue");
print_r(array_keys($array, "blue"));

$array = array("color" => array("blue", "red", "green"),
               "size"  => array("small", "medium", "large"));
print_r(array_keys($array));
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => 0
    [1] => color
)
Array
(
    [0] => 0
    [1] => 3
    [2] => 4
)
Array
(
    [0] => color
    [1] => size
)

    
```

## 参见

`array_values()` `array_combine()` `array_key_exists()` `array_search()`
