---
id: "zh-php-function-function-array-sum"
language: "php"
lang: "zh"
category: "function"
name: "array_sum"
title: "对数组中所有值求和"
signature: "int|float array_sum(array $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-sum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对数组中所有值求和

## 说明

```php
int|float array_sum(array $array)
```

`array_sum()` 将数组中的所有值相加，并返回结果。

## 参数

- **`$array`** — 输入的数组。

## 返回值

所有值的和以整数或浮点数的结果返回，`$array` 为空时则返回 `0`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 当 `$array` 值不能转换为 `integer` 或 `float` 时，现在会发出 `E_WARNING`。之前会忽略 `array` 和 `object`，而其它的值会转换为 `integer`。此外，现在也会转换定义了数字转换的对象（比如 `GMP`）而不是忽略它。 |

## 示例

**`array_sum()` 例子**

```php


<?php
$a = array(2, 4, 6, 8);
echo "sum(a) = " . array_sum($a) . "\n";

$b = array("a" => 1.2, "b" => 2.3, "c" => 3.4);
echo "sum(b) = " . array_sum($b) . "\n";
?>

    
```

以上示例会输出：

```text


sum(a) = 20
sum(b) = 6.9

    
```
