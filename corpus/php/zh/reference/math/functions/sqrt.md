---
id: "zh-php-function-function-sqrt"
language: "php"
lang: "zh"
category: "function"
name: "sqrt"
title: "平方根"
signature: "float sqrt(float $num)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.sqrt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 平方根

## 说明

```php
float sqrt(float $num)
```

返回 `$num` 的平方根。

## 参数

- **`$num`** — 要处理的参数

## 返回值

返回 `$num` 的平方根，负数时返回 `NAN`。

## 示例

**`sqrt()` 示例**

```php


<?php
// 精度取决于精度指令
echo sqrt(9), PHP_EOL; // 3
echo sqrt(10), PHP_EOL; // 3.16227766 ...
?>

    
```

## 参见

`pow()` `M_SQRTPI`——sqrt(pi) `M_2_SQRTPI`——2/sqrt(pi) `M_SQRT2`——sqrt(2) `M_SQRT3`——sqrt(3) `M_SQRT1_2`——1/sqrt(2)
