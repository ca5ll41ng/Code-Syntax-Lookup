---
id: "zh-php-function-function-bcmod"
language: "php"
lang: "zh"
category: "function"
name: "bcmod"
title: "任意精度数字取模"
signature: "string bcmod(string $num1, string $num2, int|null $scale = null)"
module: "bc"
source_url: "https://www.php.net/manual/zh/function.bcmod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 任意精度数字取模

## 说明

```php
string bcmod(string $num1, string $num2, int|null $scale = null)
```

对 `$num1` 使用 `$num2` 取模。结果与 `$num1` 的符号相同。

## parameters



## 返回值

返回字符串类型取模后的结果。



## 更新日志

 {{{ 

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$scale` 可以为 null。 |
| 8.0.0 | 现在，除以 `0` 会引发 DivisionByZeroError 异常，而不是返回 `null`。 |
| 7.2.0 | 现在 `$num1` 和 `$num2` 不会截断成整数。 所以现在 `bcmod()` 的表现更接近 `fmod()` 而不是 `%` 操作符。 |
| 7.2.0 | 新增参数 `$scale`。 |

 }}} 

## 示例

**`bcmod()` 示例**

```php

    
<?php
bcscale(0);
echo bcmod( '5',  '3'); //  2
echo bcmod( '5', '-3'); //  2
echo bcmod('-5',  '3'); // -2
echo bcmod('-5', '-3'); // -2
?>

   
```

**带小数点的 `bcmod()`**

```php

    
<?php
bcscale(1);
echo bcmod('5.7', '1.3'); // PHP 7.2.0 起是 0.5；之前是 0
?>

   
```

## 参见

`bcdiv()` `bcdivmod()` `BcMath\Number::mod()`
