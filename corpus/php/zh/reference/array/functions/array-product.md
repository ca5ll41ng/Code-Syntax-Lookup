---
id: "zh-php-function-function-array-product"
language: "php"
lang: "zh"
category: "function"
name: "array_product"
title: "计算数组中所有值的乘积"
signature: "int|float array_product(array $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-product.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算数组中所有值的乘积

## 说明

```php
int|float array_product(array $array)
```

`array_product()` 以整数或浮点数返回一个数组中所有值的乘积。

## 参数

- **`$array`** — 这个数组。

## 返回值

以整数或浮点数返回一个数组中所有值的乘积。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 当 `$array` 值不能转换为 `integer` 或 `float` 时，现在会发出 `E_WARNING`。之前会忽略 `array` 和 `object`，而其它的值会转换为 `integer`。此外，现在也会转换定义了数字转换的对象（比如 `GMP`）而不是忽略它。 |

## 示例

**`array_product()` 示例**

```php


<?php

$a = array(2, 4, 6, 8);
echo "product(a) = " . array_product($a) . "\n";
echo "product(array()) = " . array_product(array()) . "\n";

?>

    
```

以上示例会输出：

```text


product(a) = 384
product(array()) = 1

    
```
