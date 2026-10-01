---
id: "zh-php-syntax-language-types-type-juggling"
language: "php"
lang: "zh"
category: "syntax"
name: "language.types.type-juggling"
title: "类型转换"
module: "language"
source_url: "https://www.php.net/manual/zh/language.types.type-juggling.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 类型转换

PHP 在变量声明时不需要定义类型。在这种情况下，变量的类型由存储的值决定。也就是说，如果 `string` 赋值给 `$var`，然后 `$var` 的类型就是 `string`。之后将 `int` 值赋值给 `$var`，它将是 `int` 类型。

PHP 可能会尝试在某些上下文中自动将值转换为另一种类型。不同的上下文有：

- 数字
- 字符串
- 逻辑
- 整数和字符串
- 比较
- 函数

> 当值需要解释为不同类型时，值本身*不*会改变类型。

强制将变量当做某种变量来求值，参见类型转换一节。要更改变量的类型，请参阅 `settype()` 函数。

### 数字上下文

使用算术运算符时的上下文。

在这种情况下，如果任一运算对象是 `float`（或者不能解释为 `int`），则两个运算对象都将解释为 `float`，结果也将是 `float`。否则，运算对象将解释为 `int`，结果也将是 `int`。自 PHP 8.0.0 起，如果无法解释其中一个运算对象，则会抛出 `TypeError`。

### 字符串上下文

使用 `echo()`、`print()`、字符串插值或者字符串连接运算符时的上下文。

这种情况下，值将会解释为 `string`。如果值无法解释，那么会抛出 `TypeError`。在 PHP 7.4.0 之前，会引发 `E_RECOVERABLE_ERROR`。

### 逻辑上下文

使用条件语句、三元运算符或逻辑运算符时的上下文。

在这种情况下，值将会解释为 `bool`。

### 整数和字符串上下文

使用位运算符时的上下文。

在这种情况下，如果所有的运算对象都是 `string`，则结果也将是 `string`。否则运算对象将解释为 `int`，结果也将是 `int`。如果其中一个运算对象无法解释，则会抛出 `TypeError`。

### 比较上下文

使用比较运算符时的上下文。

在此上下文中发生的类型转换在比较多种类型表中进行了说明。

### 函数上下文

将值传递给已声明类型的参数、属性，或从声明了返回类型的函数返回值时的上下文。

在此上下文中，值必须是类型值。但存在两个例外，第一个是如果值为 `int`，但声明的类型是 `float`，然后整数会转换为浮点数。第二个是如果声明的类型是 *scalar* 类型，值可转换为标量类型，并且强制类型模式处于活动状态（默认），值会转换为可接受的标量值。参见下文查看有关此行为的描述。

> 内部函数自动将 `null` 转换为标量类型，此行为自 PHP 8.1.0 起*弃用*。

#### 使用简单类型声明的强制类型

- `bool` 类型声明：值将解释为 `bool`。
- `int` 类型声明：如果明确定义转换，则值将解释为 `int`。例如，字符串是数字。
- `float` 类型声明：如果明确定义转换，则值将解释为 `float`。例如，字符串是数字。
- `string` 类型声明：值将解释为 `string`。

#### 使用联合类型的强制类型

当未启用 `strict_types` 时，声明的标量类型会受到有限的隐式类型转换的影响。如果值的精确类型不是联合的一部分，然后会按照以下优先顺序选择目标类型：

1. `int`
2. `float`
3. `string`
4. `bool`

如果类型存在于 union 类型中，并且值可以根据 PHP 现有的类型检查语义转换为此类型，则选择该类型。否则，尝试下一个类型

> 有个例外，如果值是字符串，并且 int 和 float 都是联合类型的一部分，首选类型则通过现有的数字字符串语义决定。例如 `"42"` 选择 `int`，`"42.0"` 选择 `float`。

> 不属于上述优先级列表的类型不会进行隐式转换。特别是，不会出现对 `null`、`false` 和 `true` 类型的隐式转换。

**类型转换为 union 类型中的一个的示例**

```php


<?php
// int|string
42    --> 42          // 具体类型
"42"  --> "42"        // 具体类型
new ObjectWithToString --> "Result of __toString()"
                      // 对象绝不会兼容 int，回退到 string
42.0  --> 42          // int 兼容 float
42.1  --> 42          // int 兼容 float
1e100 --> "1.0E+100"  // float 对于 int 类型来说太大了，回退为 string
INF   --> "INF"       // float 对于 int 类型来说太大了，回退为 string
true  --> 1           // int 兼容 bool
[]    --> TypeError   // int 或 string 不兼容 array

// int|float|bool
"45"    --> 45        // int 数字 string
"45.0"  --> 45.0      // float 数字 string

"45X"   --> true      // 不是 numeric string，回退为 bool
""      --> false     // 不是 numeric string，回退为 bool
"X"     --> true      // 不是 numeric string，回退为 bool
[]      --> TypeError // int、float 或 bool 不兼容 array
?>

    
```

### 类型转换

类型转换通过在值前面的括号中写入类型来将值转换指定的类型。

**类型转换**

```php


<?php
$foo = 10;   // $foo 是 int
$bar = (bool) $foo;   // $bar 是 bool

var_dump($bar);
?>

   
```

允许的转换是：

 `(int)` ——转换为 `int` `(bool)` ——转换为 `bool` `(float)` ——转换为 `float` `(string)` ——转换为 `string` `(array)` ——转换为 `array` `(object)` ——转换为 `object` `(unset)` ——转换为 `NULL` 

> `(integer)` 是 `(int)` 转换的别名。`(boolean)` 是 `(bool)` 转换的别名。`(binary)` 是 `(string)` 转换的别名。`(double)` 和 `(real)` 是 `(float)` 转换的别名。这些转换不使用标准的类型名称，自 PHP 8.5.0 起已弃用。

> 自 PHP 7.4.0 起弃用 `(real)` 转换别名，并在 PHP 8.0.0 中移除。

> 自 PHP 7.2.0 起弃用 `(unset)` 转换。注意 `(unset)` 转换等同于将值 `NULL` 通过赋值或者调用给变量。自 PHP 8.0.0 起移除 `unset` 转换。

> 向前兼容 `(binary)` 转换和 `b` 前缀转换。注意 `(binary)` 转换和 `(string)` 相同，但是这可能会改变且不应依赖。

> 类型转换的括号中的空格将被忽略。 因此，以下两个转换是等价的： ```php <?php $foo = (int) $bar; $foo = ( int ) $bar; ?> ```

  将文字 `string` 和变量转换为二进制 `string`：   
```php

<?php
$binary = (binary) $string;
$binary = b"binary string";
?>

   
```

 

 TODO Remove or move into string context section? 

除了将变量转换为 `string` 之外，还可以将变量放在双引号内。

**不同的转换机制**

```php


<?php
$foo = 10;            // $foo 是 int
$str = "$foo";        // $str 是 string
$fst = (string) $foo; // $fst 也是 string

// 打印出 "they are the same"
if ($fst === $str) {
    echo "they are the same", PHP_EOL;
}
?>

   
```

有时在类型之间转换时确切地会发生什么可能不是很明显。更多信息见如下不分： 转换为 bool 转换为 int 转换为 float 转换为 string 转换为 array 转换为 object 转换为 resource 转换为 NULL 类型比较表

> 因为 PHP 的 `string` 支持使用与 `array` 索引相同的语法，通过偏移量进行索引，所以以下示例适用于所有 PHP 版本：
>
> **使用字符串的数组偏移**
>
> ```php
>
>
> <?php
> $a    = 'car'; // $a 是 string
> $a[0] = 'b';   // $a 依然是 string
> echo $a;       // bar
> ?>
>
>     
> ```
>
> 请查看章节标题为存取和修改字符串中的字符获取更多信息。
