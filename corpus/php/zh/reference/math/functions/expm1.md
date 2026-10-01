---
id: "zh-php-function-function-expm1"
language: "php"
lang: "zh"
category: "function"
name: "expm1"
title: "返回 exp($num) - 1，甚至当 number 的值接近零也能计算出准确结果"
signature: "float expm1(float $num)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.expm1.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 exp($num) - 1，甚至当 number 的值接近零也能计算出准确结果

## 说明

```php
float expm1(float $num)
```

`expm1()` 返回 exp($`$num`) - 1，甚至当 `$num` 的值接近零也能计算出准确结果。但是当两个数值趋近于相等的时候，exp($`$num`) - 1就会变得不太准确。

## 参数

- **`$num`** — 要处理的参数

## 返回值

`e` 的 `$num` 次方减 1。

## 参见

`log1p()` `exp()`
