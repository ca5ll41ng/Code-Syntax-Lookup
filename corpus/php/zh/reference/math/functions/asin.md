---
id: "zh-php-function-function-asin"
language: "php"
lang: "zh"
category: "function"
name: "asin"
title: "反正弦"
signature: "float asin(float $num)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.asin.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 反正弦

## 说明

```php
float asin(float $num)
```

返回 `$num` 的反正弦值，单位是弧度。`asin()` 是 `sin()` 的反函数，它的意思是对于 `asin()` 的定义域中的每个 `$num` 值，$num == sin(asin($num))。

## 参数

- **`$num`** — 待处理的参数

## 返回值

`$num` 的反正弦弧度。

## 参见

`sin()` `asinh()` `acos()` `atan()`
