---
id: "zh-php-function-function-pow"
language: "php"
lang: "zh"
category: "function"
name: "pow"
title: "指数表达式"
signature: "int|float|object pow(mixed $num, mixed $exponent)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.pow.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 指数表达式

## 说明

```php
int|float|object pow(mixed $num, mixed $exponent)
```

返回 `$num` 的 `$exponent` 次方的幂。

> 可以使用 ** 运算符代替。

## 参数

- **`$num`** — 底数
- **`$exponent`** — 指数

## 返回值

`$num` 的 `$exponent` 次方。如果两个参数都是非负整数且结果可以用整数表示，则返回 `int` 类型，否则返回 `float`。

PHP 扩展可能会覆盖此操作的行为，使其返回一个对象。

## 示例

**`pow()` 的一些示例**

```php


<?php

var_dump(pow(2, 8)); // int(256)
echo pow(-1, 20), PHP_EOL; // 1
echo pow(0, 0), PHP_EOL; // 1
echo pow(10, -1), PHP_EOL; // 0.1

echo pow(-1, 5.5), PHP_EOL; // NAN
?>

    
```

**Examples of `pow()` With GMP Extension Object**

```php


<?php
var_dump(pow(new GMP("3"), new GMP("2"))); // object(GMP)
?>

    
```

## 注释

> 本函数会转换所有输入为数字，甚至是非标量值，将会导致*怪异的*结果。

## 参见

`exp()` `sqrt()` `bcpow()` `gmp_pow()`
