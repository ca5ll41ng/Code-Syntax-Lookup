---
id: "zh-php-syntax-language-operators-increment"
language: "php"
lang: "zh"
category: "syntax"
name: "language.operators.increment"
title: "递增/递减运算符"
module: "language"
source_url: "https://www.php.net/manual/zh/language.operators.increment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 递增/递减运算符

递增/递减

PHP 支持前/后递增与递减运算符。这些一元运算符允许将值递增或递减 1。

| 示例 | 名称 | 效果 |
| --- | --- | --- |
| ++$a | 前加 | `$a` 的值加一，然后返回 `$a`。 |
| $a++ | 后加 | 返回 `$a`，然后将 `$a` 的值加一。 |
| --$a | 前减 | `$a` 的值减一， 然后返回 `$a`。 |
| $a-- | 后减 | 返回 `$a`，然后将 `$a` 的值减一。 |

**递增/递减示例**

```php


<?php
echo 'Post-increment:', PHP_EOL;
$a = 5;
var_dump($a++);
var_dump($a);

echo 'Pre-increment:', PHP_EOL;
$a = 5;
var_dump(++$a);
var_dump($a);

echo 'Post-decrement:', PHP_EOL;
$a = 5;
var_dump($a--);
var_dump($a);

echo 'Pre-decrement:', PHP_EOL;
$a = 5;
var_dump(--$a);
var_dump($a);
?>

   
```

以上示例会输出：

```text


Post-increment:
int(5)
int(6)
Pre-increment:
int(6)
int(6)
Post-decrement:
int(5)
int(4)
Pre-decrement:
int(4)
int(4)

   
```

> 递增和递减运算符对 `bool` 类型值没有影响。自 PHP 8.3.0 起，会发出 `E_WARNING`，因为将来会默认将该值转换为 `int`。
>
> 递减运算符对 `null` 类型的值没有影响。自 PHP 8.3.0 起，会发出 `E_WARNING`，因为将来会默认将该值转换为 `int`。
>
> 递减运算符对非数字字符串没有影响。自 PHP 8.3.0 起，会发出 `E_WARNING`，因为在将来会抛出 `TypeError`。

> 支持重载加/减法的内部对象也可以进行递增或递减。其中一个这样的内部对象是 `GMP`。

### PERL 字符串递增功能

> 自 PHP 8.3.0 起，此功能已软弃用。应该使用 `str_increment()` 函数。

在 PHP 中，可以递增非数字字符串。该字符串必须是字母数字 ASCII 字符串。当到达字母 `Z` 且递增到下个字母时，将进位到左侧值。例如，$a = 'Z'; $a++;将 `$a` 变为 `'AA'`。

**PERL 字符串递减功能**

```php


<?php
echo '== Alphabetic strings ==' . PHP_EOL;
$s = 'W';
for ($n=0; $n<6; $n++) {
    echo ++$s . PHP_EOL;
}
// 字母数字字符串的不同行为
echo '== Alphanumeric strings ==' . PHP_EOL;
$d = 'A8';
for ($n=0; $n<6; $n++) {
  echo ++$d . PHP_EOL;
}
$d = 'A08';
for ($n=0; $n<6; $n++) {
    echo ++$d . PHP_EOL;
}
?>

   
```

以上示例会输出：

```text


== Alphabetic strings ==
X
Y
Z
AA
AB
AC
== Alphanumeric strings ==
A9
B0
B1
B2
B3
B4
A09
A10
A11
A12
A13
A14

   
```

> 如果数字字母字符串可以解释为数字字符串，则将转换为 `int` 或 `float`。这对于看起来像以指数形式写出的浮点数字符串来说尤其是一个问题。`str_increment()` 函数不会受到这些默认类型转换的影响。
>
> **数字字母字符串转换为浮点数**
>
> ```php
>
>
> <?php
> $s = "5d9";
> var_dump(++$s);
> var_dump(++$s);
> ?>
>
>     
> ```
>
> 以上示例会输出：
>
> ```text
>
>
> string(3) "5e0"
> float(6)
>
>     
> ```
>
> 这是因为值 `"5e0"` 解释为 `float`，并在递增之前转换为 `5.0`。
