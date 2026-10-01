---
id: "zh-php-function-function-log1p"
language: "php"
lang: "zh"
category: "function"
name: "log1p"
title: "返回 log(1 + number)，甚至当 number 的值接近零也能计算出准确结果"
signature: "float log1p(float $num)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.log1p.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 log(1 + number)，甚至当 number 的值接近零也能计算出准确结果

## 说明

```php
float log1p(float $num)
```

`log1p()` 返回 log(1 + `$num`)，甚至当 `$num` 的值接近零也能计算出准确结果。`log()` 在这种情况下，可能由于缺乏精度只返回 log(1)。

## 参数

- **`$num`** — 要处理的参数

## 返回值

log(1 + `$num`)

## 参见

`expm1()` `log()` `log10()`
