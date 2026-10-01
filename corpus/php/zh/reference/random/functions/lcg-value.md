---
id: "zh-php-function-function-lcg-value"
language: "php"
lang: "zh"
category: "function"
name: "lcg_value"
title: "组合线性同余发生器"
signature: "#[\\Deprecated] float lcg_value()"
module: "random"
source_url: "https://www.php.net/manual/zh/function.lcg-value.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 组合线性同余发生器

## 说明

```php
#[\Deprecated] float lcg_value()
```

`lcg_value()` 返回范围为 (0, 1) 的一个伪随机数。本函数组合了周期为 2^31 - 85 和 2^31 - 249 的两个同余发生器。本函数的周期等于这两个素数的乘积。

> 本函数并不会生成安全加密的值，并且*不可*用于加密或者要求返回值不可猜测的目的。
>
> 如果需要加密安全随机，则可以将 `Random\Engine\Secure` 引擎用于 `Random\Randomizer`。对于简单的用例，`random_int()` 和 `random_bytes()` 函数提供了操作系统的 CSPRNG 支持的方便且安全的 API。

> Scaling the return value to a different interval using multiplication or addition (a so-called affine transformation) might result in a bias in the resulting value as floats are not equally dense across the number line. As not all values can be exactly represented by a float, the result of the affine transformation might also result in values outside of the requested interval.
>
> 使用 `Random\Randomizer::getFloat()` 在任意间隔内生成随机浮点数。使用 `Random\Randomizer::getInt()` 在任意间隔内生成随机整数。

## 参数

此函数没有参数。

## 返回值

介于 0.0 和 1.0（含）之间的伪随机浮点值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 此函数已被弃用。 |

## 参见

`Random\Randomizer::getFloat()` `Random\Randomizer::getInt()` `random_int()`
