---
id: "zh-php-function-function-min"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "min"
title: "找出最小值"
signature: "mixed min(mixed $value, mixed $values)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.min.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 找出最小值

## 说明

```php
mixed min(mixed $value, mixed $values)
```

替代签名（不支持命名参数）：

```php
mixed min(array $value_array)
```

如果仅有一个参数且为数组，`min()` 返回该数组中最小的值。如果给出了两个或更多参数, `min()` 会返回这些值中最小的一个。

> 不同类型的值将使用标准比较规则进行比较。例如，一个非数字 `string` 与 `int` 比较时就当做是 `0`，但多个非数字 `string` 值将会按照字母数字比较。返回的实际值是未应用任何转换的原始类型。

> 传递不同类型的参数时要小心，因为 `min()` 会产生不可预测的结果。

## 参数

- **`$value`** — 任何可比较的值。
- **`$values`** — 任何可比较的值。
- **`$value_array`** — 包含值的数组。

## 返回值

`min()` 根据标准比较返回认为是“最小”的参数值。如果不同类型的多个值认为相等（比如 `0` 与 `'abc'`），则将会返回提供给函数的第一个值。

## 错误／异常

如果传递空数组，`min()` 抛出 `ValueError`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `min()` 现在失败时会抛出 `ValueError`；之前会返回 `false` 并发出 `E_WARNING` 错误。 |
| 8.0.0 | 由于 字符串到数字的比较 已经改变，`min()` 在这些情况下不再根据参数的顺序返回不同的值。 |

## 示例

**`min()` 用法的示例**

```php


<?php
echo min(2, 3, 1, 6, 7), PHP_EOL;  // 1
echo min(array(2, 4, 5)), PHP_EOL; // 2

// Here we are comparing -1 < 0, so -1 is the lowest value
echo min('hello', -1), PHP_EOL;    // -1

// With multiple arrays of different lengths, min returns the shortest
$val = min(array(2, 2, 2), array(1, 1, 1, 1)); // array(2, 2, 2)
var_dump($val);

// Multiple arrays of the same length are compared from left to right
// so in our example: 2 == 2, but 4 < 5
$val = min(array(2, 4, 8), array(2, 5, 1)); // array(2, 4, 8)
var_dump($val);

// 如果同时给出数组和非数组，则绝对不会返回数组
// 因为比较认为数组大于任何值
$val = min('string', array(2, 5, 7), 42);   // string
var_dump($val);

// If one argument is NULL or a boolean, it will be compared against
// other values using the rules FALSE < TRUE and NULL == FALSE regardless of the 
// other types involved
// In the below examples, both -10 and 10 are treated as TRUE in the comparison
$val = min(-10, FALSE, 10); // FALSE
var_dump($val);

$val = min(-10, NULL, 10);  // NULL
var_dump($val);

// 0, on the other hand, is treated as FALSE, so is "lower than" TRUE
$val = min(0, TRUE); // 0
var_dump($val);
?>

    
```

## 参见

`max()` `count()`
