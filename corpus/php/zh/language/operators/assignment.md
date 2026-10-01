---
id: "zh-php-syntax-language-operators-assignment"
language: "php"
lang: "zh"
category: "syntax"
name: "language.operators.assignment"
title: "赋值运算符"
module: "language"
source_url: "https://www.php.net/manual/zh/language.operators.assignment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 赋值运算符

赋值

基本的赋值运算符是“=”。一开始可能会以为它是“等于”，其实不是的。它实际上意味着把右边表达式的值赋给左边的运算数。

赋值运算表达式的值也就是所赋的值。也就是说，“`$a = 3`”的值是 3。这样就可以做一些小技巧：

**嵌套赋值**

```php


<?php
$a = ($b = 4) + 5; // $a 现在成了 9，而 $b 成了 4。
var_dump($a);
?>

   
```

在基本赋值运算符之外，还有适合于所有二元算术，数组集合和字符串运算符的“组合运算符”，这样可以在一个表达式中使用它的值并把表达式的结果赋给它，例如：

**组合赋值**

```php


<?php
$a = 3;
$a += 5; // 设置 $a 为 8 ，之前说过： $a = $a + 5;
$b = "Hello ";
$b .= "There!"; // 设置 $b 为 "Hello There!"，就像 $b = $b . "There!";

var_dump($a, $b);
?>

   
```

注意赋值运算将原变量的值拷贝到新变量中（传值赋值），所以改变其中一个并不影响另一个。这也适合于在密集循环中拷贝一些值例如大数组。

在 PHP 中普通的传值赋值行为有个例外就是碰到对象 `object` 时，在 PHP 5 中是以引用赋值的，除非明确使用了 clone 关键字来拷贝。

### 引用赋值

PHP 支持引用赋值，使用“`$var = &$othervar;`”语法。引用赋值意味着两个变量指向了同一个数据，没有拷贝任何东西。

**引用赋值**

```php


<?php
$a = 3;
$b = &$a; // $b 是 $a 的引用

print "$a\n"; // 输出 3
print "$b\n"; // 输出 3

$a = 4; // 修改 $a

print "$a\n"; // 输出 4
print "$b\n"; // 也输出 4，因为 $b 是 $a 的引用，因此也被改变
?>

    
```

new 运算符自动返回一个引用，因此对 new 的结果进行引用赋值是错误的。

**引用 new 运算符**

```php


<?php
class C {}

$o = &new C;
?>

    
```

以上示例会输出：

```text


Parse error: syntax error, unexpected token ";", expecting "("

    
```

有关引用更多信息参见本手册中 引用的解释 一章。

### 算术赋值运算符

| 示例 | 等同于 | 操作 |
| --- | --- | --- |
| $a += $b | $a = $a + $b | 加法 |
| $a -= $b | $a = $a - $b | 减法 |
| $a *= $b | $a = $a * $b | 乘法 |
| $a /= $b | $a = $a / $b | 除法 |
| $a %= $b | $a = $a % $b | 取模 |
| $a **= $b | $a = $a ** $b | 指数 |

### 位赋值运算符

| 示例 | 等同于 | 操作 |
| --- | --- | --- |
| $a &= $b | $a = $a & $b | 按位与 |
| $a \|= $b | $a = $a \| $b | 按位或 |
| $a ^= $b | $a = $a ^ $b | 按位异或 |
| $a <<= $b | $a = $a << $b | 左移 |
| $a >>= $b | $a = $a >> $b | 右移 |

### 其他赋值运算符

| 示例 | 等同于 | 操作 |
| --- | --- | --- |
| $a .= $b | $a = $a . $b | 字符串拼接 |
| $a ??= $b | $a = $a ?? $b | NULL 合并 |

### 参见

算术运算符 位运算符 NULL 合并运算符
