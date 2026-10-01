---
id: "zh-php-function-function-max"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "max"
title: "找出最大值"
signature: "mixed max(mixed $value, mixed $values)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.max.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 找出最大值

## 说明

```php
mixed max(mixed $value, mixed $values)
```

替代签名（不支持命名参数）：

```php
mixed max(array $value_array)
```

如果仅有一个参数且为数组，`max()` 返回该数组中最大的值。如果第一个参数是整数、字符串或浮点数，则至少需要两个参数而 `max()` 会返回这些值中最大的一个。可以比较无限多个值。

> 不同类型的值将使用标准比较规则进行比较。例如，一个非数字 `string` 与 `int` 比较时就当做是 `0`，但多个非数字 `string` 值将会按照字母数字比较。返回的实际值是未应用任何转换的原始类型。

> 传递不同类型的参数时要小心，因为 `max()` 会产生不可预测的结果。

## 参数

- **`$value`** — 任何可比较的值。
- **`$values`** — 任何可比较的值。
- **`$value_array`** — 包含值的数组。

## 返回值

`max()` 根据标准比较返回认为是“最大”的参数值。如果不同类型的多个值认为相等（比如 `0` 与 `'abc'`），则将会返回提供给函数的第一个值。

## 错误／异常

如果传递空数组，`max()` 抛出 `ValueError`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `max()` 现在失败时会抛出 `ValueError`；之前会返回 `false` 并发出 `E_WARNING` 错误。 |
| 8.0.0 | 由于 字符串到数字的比较 已经改变，`max()` 在这些情况下不再根据参数的顺序返回不同的值。 |

## 示例

**使用 `max()` 的示例**

```php


<?php
echo max(2, 3, 1, 6, 7), PHP_EOL;  // 7
echo max(array(2, 4, 5)), PHP_EOL; // 5

// 这里比较-1 < 0，所以 'hello' 是最大的值
echo max('hello', -1), PHP_EOL;    // hello

// 当有多个长度不同的数组时，max 返回最长的那个
$val = max(array(2, 2, 2), array(1, 1, 1, 1)); // array(1, 1, 1, 1)
var_dump($val);

// 多个长度相同的数组将从左到右进行比较，所以在我们的例子中：2 == 2，但 5 > 4
$val = max(array(2, 4, 8), array(2, 5, 1)); // array(2, 5, 1)
var_dump($val);

// 在比较中，数组被认为比任何其他值都大，所以如果同时给出数组和非数组，将返回数组
$val = max('string', array(2, 5, 7), 42);   // array(2, 5, 7)
var_dump($val);

// 如果一个参数是 NULL 或布尔值，那么它将使用 FALSE < TRUE 的规则与其他值进行比较，而不考虑其他类型的值
// 在下面的例子中，-10 在比较中被当做 TRUE 来处理
$val = max(-10, FALSE); // -10
var_dump($val);

// 另一方面，0 被当做 FALSE 来处理，所以它“比” TRUE 小
$val = max(0, TRUE); // TRUE
var_dump($val);
?>

    
```

## 参见

`min()` `count()`
