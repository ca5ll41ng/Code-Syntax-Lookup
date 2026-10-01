---
id: "zh-php-function-function-bcsqrt"
language: "php"
lang: "zh"
category: "function"
name: "bcsqrt"
title: "任意精度数字的二次方根"
signature: "string bcsqrt(string $num, int|null $scale = null)"
module: "bc"
source_url: "https://www.php.net/manual/zh/function.bcsqrt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 任意精度数字的二次方根

## 说明

```php
string bcsqrt(string $num, int|null $scale = null)
```

返回 `$num` 的二次方根。

## 参数

- **`$num`** — 操作数，格式良好的 BCMath 数字字符串。

## 返回值

返回平方根，作为格式良好的 BCMath 数字字符串。

## 错误／异常

此函数在以下情况下引发 `ValueError` 错误： `$num` 不是格式良好的 BCMath 数字字符串 `$num` 小于 `0` `$scale` 超出有效范围

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 如果 `$num` 不是格式良好的 BCMath 数字字符串，或小于 `0`，则会引发 `ValueError` 错误。之前，会引发 `E_WARNING` 错误。 |
| 8.0.0 | 现在，`$scale` 的取值范围必须在 `0` 到 `2147483647` 之间；之前，负数的 scale 值会被静默处理为 `0`。 |
| 8.0.0 | 现在 `$scale` 可以为 null。 |

## 示例

**`bcsqrt()` 示例**

```php


<?php

echo bcsqrt('2', 3); // 1.414

?>

   
```

## 参见

`bcpow()` `BcMath\Number::sqrt()`
