---
id: "zh-php-syntax-language-operators-arithmetic"
language: "php"
lang: "zh"
category: "syntax"
name: "language.operators.arithmetic"
title: "算术运算符"
module: "language"
source_url: "https://www.php.net/manual/zh/language.operators.arithmetic.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 算术运算符

算术

还记得学校里学到的基本数学知识吗？就和它们一样。

| 例子 | 名称 | 结果 |
| --- | --- | --- |
| +$a | 标识 | 根据情况将 `$a` 转化为 `int` 或 `float`。 |
| -$a | 取反 | `$a` 的负值。 |
| $a + $b | 加法 | `$a` 和 `$b` 的和。 |
| $a - $b | 减法 | `$a` 和 `$b` 的差。 |
| $a * $b | 乘法 | `$a` 和 `$b` 的积。 |
| $a / $b | 除法 | `$a` 除以 `$b` 的商。 |
| $a % $b | 取模 | `$a` 除以 `$b` 的余数。 |
| $a ** $b | 求幂 | `$a` 的 `$b`次方的值。 |

除法运算符 `/` 始终返回 `float`，除非两个操作数都是 `int`（或类型转换为 `int` 的 数字字符串）并且被除数是除数的倍数，这种情况下将返回整数。整数除法可参考 `intdiv()`。

取模运算符的操作数在运算之前都会转换成 `int` 。 浮点数取模可参考 `fmod()`。

取模运算符 `%` 的结果和被除数的符号（正负号）相同。即 $a % $b 的结果和 `$a` 的符号相同。例如：

**取模运算符**

```php


<?php
var_dump(5 % 3);
var_dump(5 % -3);
var_dump(-5 % 3);
var_dump(-5 % -3);
?>

   
```

以上示例会输出：

```text


int(2)
int(2)
int(-2)
int(-2)

   
```

### 参见

数学函数
