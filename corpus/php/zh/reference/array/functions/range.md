---
id: "zh-php-function-function-range"
language: "php"
lang: "zh"
category: "function"
name: "range"
title: "根据范围创建数组，包含指定的元素"
signature: "array range(string|int|float $start, string|int|float $end, int|float $step = 1)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.range.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 根据范围创建数组，包含指定的元素

## 说明

```php
array range(string|int|float $start, string|int|float $end, int|float $step = 1)
```

建立一个包含指定范围单元的数组。

如果 `$start` 和 `$end` 都是 `string`，`$step` 是 `int`，则生成的数组是字节序列，否则，生成的数组将是数字序列。

如果 `$start` 小于或等于 `$end`，则为递增序列，否则为递减序列。

## 参数

- **`$start`** — 序列的第一个值。
- **`$end`** — 序列的最后一个可能值。
- **`$step`** — `$step` 表示在序列之间产生序列时前进的数量。 — 对于递减序列，`$step` 可能是负数。 — 如果 `$step` 是没有小数部分的 `float`，则将解释为 `int`。

## 返回值

返回 `array`，由元素组成的序列，其中第一个元素为 `$start`，最后一个元素为 `$end`，序列中每个元素之间的差值为 `$step`。

返回的数组的最后一个元素是 `$end` 或序列中的前一个元素，具体取决于 `$step`。

如果 `$start` 和 `$end` 都是 `string`，并且 `$step` 是 `int`，则生成的数组将是字节序列，通常是拉丁 ASCII 字符。

如果 `$start`、`$end` 或 `$step` 是 `float`，则生成的数组将是 `float` 序列。

否则，生成的数组将是 `int` 序列。

## 错误／异常

- 如果 `$step` 是 `0`，则抛出 `ValueError`。
- 如果 `$start`、`$end` 或 `$step` 不是 `is_finite()`，则抛出 `ValueError`。
- 如果 `$step` 是负数，但生成的范围是递增的（例如 $start <= $end），则抛出 `ValueError`。
- 如果 `$start` 或 `$end` 是空字符串 `''`，则发出 `E_WARNING` 并将空字符串解释为 `0`。
- 如果 `$start` 或 `$end` 不是一个数字字符串，并且多于一个字节，将发出 `E_WARNING`。
- 如果 `$start` 或 `$end` 是字符串，并且由于另一个边界值是数字而默默转换为 `int`，将发出 `E_WARNING`。
- 如果 `$step` 是 `float`，并且 `$start` 和 `$end` 不是数字字符串，将发出 `E_WARNING`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 如果 `$start` 和 `$end` 都是字符串，然后 `range()` 现在将始终生成字节 `array`。之前如果其中一个边界值是数字字符串，然后另外一个边界值也会默默转换为 `int`。 |
| 8.3.0 | 如果 `$start` 或 `$end` 是字符串，并且由于另一个边界值是数字而默默转换为 `int`，现在将发出 `E_WARNING`。 |
| 8.3.0 | 如果 `$start` 或 `$end` 是多于一个字节的非数字字符串，现在将发出 `E_WARNING`。 |
| 8.3.0 | 如果 `$start` 或 `$end` 是空字符串，现在将发出 `E_WARNING`。 |
| 8.3.0 | 如果 `$step` 是不带小数部分的 `float`，将解释为 `int`。 |
| 8.3.0 | 如果 `$step` 是负数，当生成的范围是递增时，现在将抛出 `ValueError`。 |
| 8.3.0 | 如果 `$step` 不是有限数值（finite），现在将抛出 `ValueError`。 |
| 8.3.0 | 如果 `$start` 或 `$end` 是 `array`、`object` 或 `resource`，现在将会抛出 `TypeError`。之前会默默地转换为 `int`。 |

## 示例

**`range()` 示例**

```php


<?php
echo implode(', ', range(0, 12)), PHP_EOL;

echo implode(', ', range(0, 100, 10)), PHP_EOL;

echo implode(', ', range('a', 'i')), PHP_EOL;

echo implode(', ', range('c', 'a')), PHP_EOL;

echo implode(', ', range('A', 'z')), PHP_EOL;
?>

    
```

以上示例会输出：

```text


0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
a, b, c, d, e, f, g, h, i
c, b, a
A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, [, \, ], ^, _, `, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z

    
```

## 参见

`shuffle()` `array_fill()`
