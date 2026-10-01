---
id: "zh-php-function-function-array-values"
language: "php"
lang: "zh"
category: "function"
name: "array_values"
title: "返回数组中所有的值"
signature: "array array_values(array $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-values.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回数组中所有的值

## 说明

```php
array array_values(array $array)
```

`array_values()` 返回 `$input` 数组中所有的值并给其建立数字索引。

## 参数

- **`$array`** — 数组。

## 返回值

返回含所有值的索引数组。

## 示例

**`array_values()` 例子**

```php


<?php
$array = array("size" => "XL", "color" => "gold");
print_r(array_values($array));
?>

    
```

以上示例会输出：

```php


Array
(
    [0] => XL
    [1] => gold
)

    
```

## 参见

`array_keys()` `array_combine()`
