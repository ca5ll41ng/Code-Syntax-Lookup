---
id: "zh-php-syntax-language-types-integer"
language: "php"
lang: "zh"
category: "syntax"
name: "language.types.integer"
title: "Integer 整型"
module: "language"
source_url: "https://www.php.net/manual/zh/language.types.integer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Integer 整型

`int` 是集合 &#8484; = {..., -2, -1, 0, 1, 2, ...} 中的某个数。

### 参见

浮点数 任意精度/BCMath 任意长度整数/GMP

### 语法

`Int` 可以使用十进制，十六进制，八进制或二进制表示，前面可以加上可选的符号（- 或者 +）。 可以用负运算符 来表示一个负的 `int`。

要使用八进制表达，数字前必须加上 `0`（零）。 PHP 8.1.0 起，八进制表达也可以在前面加上 `0o` 或者 `0O` 。 要使用十六进制表达，数字前必须加上 `0x`。要使用二进制表达，数字前必须加上 `0b`。

从 PHP 7.4.0 开始，为了提升字面量的可读性，整型数值可以包含下划线 (`_`)。PHP 扫描器会移除这些下划线。

**整数文字表达**

```php


<?php
$a = 1234; // 十进制数
$a = 0123; // 八进制数 (等于十进制 83)
$a = 0o123; // 八进制数 (PHP 8.1.0 起)
$a = 0x1A; // 十六进制数 (等于十进制 26)
$a = 0b11111111; // 二进制数字 (等于十进制 255)
$a = 1_234_567; // 整型数值 (PHP 7.4.0 以后)
?>

   
```

`int` literal 的结构形式从 PHP 8.1.0 开始是（之前不允许使用 `0o` 或 `0O` 八进制前缀，并且 PHP 7.4.0 之前不允许使用下划线）：

 
```text

decimal     : [1-9][0-9]*(_[0-9]+)*
            | 0

hexadecimal : 0[xX][0-9a-fA-F]+(_[0-9a-fA-F]+)*

octal       : 0[oO]?[0-7]+(_[0-7]+)*

binary      : 0[bB][01]+(_[01]+)*

integer     : decimal
            | hexadecimal
            | octal
            | binary

   
```

 

整型数 `int` 的字长和平台有关，尽管通常最大值是大约二十亿（32 位有符号）。64 位平台下的最大值通常是大约 9E18。 PHP 不支持无符号的 `int`。`int` 值的字长可以用常量 `PHP_INT_SIZE`来表示， 最大值可以用常量 `PHP_INT_MAX` 来表示， 最小值可以用常量 `PHP_INT_MIN` 表示。

### 整数溢出

如果给定的一个数超出了 `int` 的范围，将会被解释为 `float`。同样如果执行的运算结果超出了 `int` 范围，也会返回 `float`。

**整数溢出**

```php


<?php
$large_number = 50000000000000000000;
var_dump($large_number);         // float(5.0E+19)
var_dump(PHP_INT_MAX + 1);       // 32 位系统：float(2147483648)
                                 // 64 位系统：float(9.2233720368548E+18)
?>

   
```

### 整数除法

PHP 没有 `int` 除法取整运算符，要使用 `intdiv()` 实现。 `1/2` 产生出 `float` `0.5`。 值可以舍弃小数部分，强制转换为 `int`，或者使用 `round()` 函数可以更好地进行四舍五入。

**Divisions**

```php


<?php
var_dump(25/7);         // float(3.5714285714286) 
var_dump((int) (25/7)); // int(3)
var_dump(round(25/7));  // float(4) 
?>

   
```

### 转换为整型

要明确地将一个值转换为 `int`，用 `(int)` 强制转换。 不过大多数情况下都不需要强制转换，因为当运算符，函数或流程控制需要一个 `int` 参数时，值会自动转换。还可以通过函数 `intval()` 来将一个值转换成 `int` 整型。

将 `resource` 转换成 `int` 时， 结果会是 PHP 运行时为 `resource` 分配的唯一资源号。

参见：类型转换的判别。

#### 从布尔值转换

`false` 将产生出 `0`（零），`true` 将产生出 `1`（壹）。

#### 从浮点型转换

当从浮点数 `float` 转换成整数 `int`时，将*向零*取整。自 PHP 8.1.0 起，当将非整数类型的 `float` 转换为失去精度的 `integer` 时，会发出弃用通知。

**从浮点数转换**

```php


<?php

function foo($value): int {
  return $value; 
}

var_dump(foo(8.1)); // 自 PHP 8.1.0 起：“Deprecated: Implicit conversion from float 8.1 to int loses precision”
var_dump(foo(8.1)); // PHP 8.1.0 之前为 8
var_dump(foo(8.0)); // 均为 8

var_dump((int) 8.1); // 均为 8
var_dump(intval(8.1)); // 均为 8
?>

    
```

如果浮点数超出了 `int` 范围（32 位平台下通常为 `+/- 2.15e+9 = 2^31`，64 位平台下，通常为 `+/- 9.22e+18 = 2^63`），则结果为未定义， 因为没有足够的精度给出一个确切的 `int` 结果。 在此情况下没有警告，甚至没有任何通知！

> `NaN`、`Inf` 和 `-Inf` 在转换成 `int` 时是零。

> 绝不要将未知的分数强制转换为 `int`，这样有时会导致不可预料的结果。
>
> ```php <?php echo (int) ( (0.1+0.7) * 10 ); // 显示 7! ?> ```
>
> 参见关于浮点数精度的警告。

#### 从字符串转换

如果 string 是 numeric 或者前导数字， 则将它解析为相应的 int 值，否则将转换为零（`0`）。

#### 从 `NULL` 转换

`null` 会转换为零（`0`）。

#### 从其它类型转换

> 没有定义从其它类型转换为 `int` 的行为。 *不要*依赖任何现有的行为，因为它会未加通知地改变。
