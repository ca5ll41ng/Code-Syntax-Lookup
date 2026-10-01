---
id: "zh-php-function-function-fmod"
language: "php"
lang: "zh"
category: "function"
name: "fmod"
title: "返回除法的浮点数余数"
signature: "float fmod(float $num1, float $num2)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.fmod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回除法的浮点数余数

## 说明

```php
float fmod(float $num1, float $num2)
```

返回被除数（`$num1`）除以除数（`$num2`）所得的浮点数余数。余数（`r`）的定义是：num1 = i * num2 + r，其中 `i` 是整数。如果 `$num2` 是非零值，则 `r` 和 `$num1` 的符号相同并且其数量值小于 `$num2`。

## 参数

- **`$num1`** — 被除数
- **`$num2`** — 除数

## 返回值

`$num1`/`$num2` 的浮点数余数。 如果第二个参数为 0，`NAN` （`float`）。

## 示例

**`fmod()` 的使用**

```php


<?php
$x = 5.7;
$y = 1.3;
$r = fmod($x, $y);
// $r equals 0.5, because 4 * 1.3 + 0.5 = 5.7

var_dump($x, $y, $r);
?>

    
```

## 参见

`/`——浮点除法 `%`——整数取模 `intdiv()`——整数除法
