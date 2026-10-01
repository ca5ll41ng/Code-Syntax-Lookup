---
id: "zh-php-function-function-atan2"
language: "php"
lang: "zh"
category: "function"
name: "atan2"
title: "两个参数的反正切"
signature: "float atan2(float $y, float $x)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.atan2.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 两个参数的反正切

## 说明

```php
float atan2(float $y, float $x)
```

本函数计算两个变量 `$x` 和 `$y` 的反正切值。和计算 `$y` / `$x` 的反正切相似，只除了两个参数的符号是用来确定结果的象限之外。

本函数的结果为弧度，其值在 -PI 和 PI 之间（包括 -PI 和 PI）。

## 参数

- **`$y`** — Dividend parameter
- **`$x`** — Divisor parameter

## 返回值

`$x` 和 `$y` 的反正切弧度值。

## 参见

`atan()`
