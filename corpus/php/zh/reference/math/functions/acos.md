---
id: "zh-php-function-function-acos"
language: "php"
lang: "zh"
category: "function"
name: "acos"
title: "反余弦"
signature: "float acos(float $num)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.acos.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 反余弦

## 说明

```php
float acos(float $num)
```

返回 `$num` 的反余弦值，单位是弧度。`acos()` 是 `cos()` 的反函数，它的意思是对于 `acos()` 的定义域中的每个 `$num` 值，$num == cos(acos($num))。

## 参数

- **`$num`** — 要处理的参数

## 返回值

`$num` 的反余弦弧度。

## 参见

`cos()` `acosh()` `asin()` `atan()`
