---
id: "zh-php-function-function-bcdiv"
language: "php"
lang: "zh"
category: "function"
name: "bcdiv"
title: "两个任意精度的数字除法计算"
signature: "string bcdiv(string $num1, string $num2, int|null $scale = null)"
module: "bc"
source_url: "https://www.php.net/manual/zh/function.bcdiv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 两个任意精度的数字除法计算

## 说明

```php
string bcdiv(string $num1, string $num2, int|null $scale = null)
```

`$num1` 除以 `$num2`。

## 参数

- **`$num1`** — 被除数，字符串类型。
- **`$num2`** — 除数，字符串类型。

## 返回值

返回字符串类型的除法结果。

## errors

 Include standard ValueErrors for num1, num2, and scale, this includes the title 



如果 `$num2` 为 `0`，此函数会抛出 DivisionByZeroError 异常。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$scale` 可以为 null。 |
| 8.0.0 | 现在，除以 `0` 会引发 DivisionByZeroError 异常，而不是返回 `null`。 |

## 示例

**`bcdiv()` 示例**

```php


<?php

echo bcdiv('105', '6.55957', 3);  // 16.007

?>

   
```

## 参见

`bcdivmod()` `bcmod()` `bcmul()` `BcMath\Number::div()`
