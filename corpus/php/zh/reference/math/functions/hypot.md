---
id: "zh-php-function-function-hypot"
language: "php"
lang: "zh"
category: "function"
name: "hypot"
title: "计算直角三角形的斜边长度"
signature: "float hypot(float $x, float $y)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.hypot.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算直角三角形的斜边长度

## 说明

```php
float hypot(float $x, float $y)
```

`hypot()` 函数将会根据直角三角形的两直角边长度 `$x` 和 `$y` 计算其斜边的长度。或者是坐标点 （`$x`, `$y`）到原点的距离。该函数的算法等同于 sqrt($x*$x + $y*$y)。

## 参数

- **`$x`** — 第一条边的长度
- **`$y`** — 第二条边的长度

## 返回值

计算斜边的长度
