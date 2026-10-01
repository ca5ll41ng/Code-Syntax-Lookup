---
id: "zh-php-function-function-bcmul"
language: "php"
lang: "zh"
category: "function"
name: "bcmul"
title: "两个任意精度数字乘法计算"
signature: "string bcmul(string $num1, string $num2, int|null $scale = null)"
module: "bc"
source_url: "https://www.php.net/manual/zh/function.bcmul.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 两个任意精度数字乘法计算

## 说明

```php
string bcmul(string $num1, string $num2, int|null $scale = null)
```

`$num1` 乘以 `$num2`。

## parameters



## 返回值

返回字符串类型的结果。



## 更新日志

 {{{ 

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$scale` 可以为 null。 |
| 7.3.0 | 现在 `bcmul()` 可以按想要的小数点位数返回数字。 而之前，返回的数字会忽略尾随零（trailing decimal zeroes）。 |

 }}} 

## 示例

**`bcmul()` 示例**

```php


<?php
echo bcmul('1.34747474747', '35', 3); // 47.161
echo bcmul('2', '4'); // 8
?>

   
```

## 注释

> PHP 7.3.0 之前，`bcmul()` 返回的结果中小数位数可能比 `$scale` 参数指定的少。只有当结果不需要 `$scale` 允许的所有精度时，才会发生这种情况。例如：
>
> **`bcmul()` 进位制示例**
>
> ```php
>
>       
> <?php
> echo bcmul('5', '2', 2);     // 打印“10”而不是“10.00”
> ?>
>
>      
> ```

## 参见

`bcdiv()` `BcMath\Number::mul()`
