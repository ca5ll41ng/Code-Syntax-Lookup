---
id: "zh-php-function-function-bcpow"
language: "php"
lang: "zh"
category: "function"
name: "bcpow"
title: "任意精度数字的乘方"
signature: "string bcpow(string $num, string $exponent, int|null $scale = null)"
module: "bc"
source_url: "https://www.php.net/manual/zh/function.bcpow.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 任意精度数字的乘方

## 说明

```php
string bcpow(string $num, string $exponent, int|null $scale = null)
```

`$num` 的 `$exponent` 次方运算。

## 参数

- **`$num`** — string 类型的底数。
- **`$exponent`** — string 类型的指数。必须是没有小数部分的值。指数的有效范围取决于平台，但起码支持 `-2147483648` 到 `2147483647` 的范围。

## 返回值

返回字符串类型的结果。

## 错误／异常

函数在下列情况会抛出 ValueError： `$num` 或 `$exponent` 不是格式正确的 BCMath 数字字符串 `$exponent` 有小数部分 `$exponent` 或 `$scale` 超出有效范围

如果 `$num` 为 `0` 且 `$exponent` 为负值，则此函数抛出 DivisionByZeroError 异常。

## 更新日志

 {{{ 

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | `0` 的负幂以前返回 `0`，但现在会引发 DivisionByZeroError 异常。 |
| 8.0.0 | 当 `$exponent` 有小数部分时，现在会抛出 ValueError 而不是截断。 |
| 7.3.0 | 现在 `bcpow()` 可以按想要的小数点位数返回数字。 而之前，返回的数字会忽略尾随零（trailing decimal zeroes）。 |

 }}} 

## 示例

**`bcpow()` 示例**

```php


<?php

echo bcpow('4.2', '3', 2); // 74.08

?>

   
```

## 注释

> PHP 7.3.0 之前，`bcpow()` 返回的结果，小数点后的小数位数可能比 `$scale` 参数指定的少。只有当结果不需要 `$scale` 允许的所有小数位数时，才会发生这种情况。例如：
>
> **`bcpow()` 小数位数示例**
>
> ```php
>
>
> <?php
> echo bcpow('5', '2', 2);     // 打印 "25" 而不是 "25.00"
> ?>
>
>      
> ```

## 参见

`bcpowmod()` `bcsqrt()` `BcMath\Number::pow()`
