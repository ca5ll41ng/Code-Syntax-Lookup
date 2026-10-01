---
id: "zh-php-function-function-bcadd"
language: "php"
lang: "zh"
category: "function"
name: "bcadd"
title: "两个任意精度数字的加法计算"
signature: "string bcadd(string $num1, string $num2, int|null $scale = null)"
module: "bc"
source_url: "https://www.php.net/manual/zh/function.bcadd.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 两个任意精度数字的加法计算

## 说明

```php
string bcadd(string $num1, string $num2, int|null $scale = null)
```

对 `$num1` 和 `$num2` 求和。

## 参数

- **`$num1`** — 左操作数，字符串类型。
- **`$num2`** — 右操作数，字符串类型。
- **`$scale`** — 此参数用于设置结果小数点后的位数。 如果为 `null`，则默认为使用 `bcscale()` 设置的默认精度， 或者回退到 `bcmath.scale` INI 指令的值。

## 返回值

以字符串返回两个操作数求和之后的结果。

## 错误／异常

此函数在下列情况下抛出 ValueError： `$num1` 或 `$num2` 不是格式正确的 BCMath 数字字符串。 `$scale` 超出有效范围。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$scale` 可以为 null。 |

## 示例

**`bcadd()` 示例**

```php


<?php

$a = '1.234';
$b = '5';

echo bcadd($a, $b);     // 6
echo bcadd($a, $b, 4);  // 6.2340

?>

   
```

## 参见

`bcsub()` `BcMath\Number::add()`
