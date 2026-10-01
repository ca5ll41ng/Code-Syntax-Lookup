---
id: "zh-php-function-function-money-format"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "money_format"
title: "将数字格式化成货币字符串"
signature: "string money_format(string $format, float $number)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.money-format.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将数字格式化成货币字符串

## 说明

```php
string money_format(string $format, float $number)
```

`money_format()` 返回格式化好的 `$number` 版本。 此函数包装了 C 函数库中的 `strfmon()`，不同之处是：此实现每次只能转化一个数字。

## 参数

- **`$format`** — 格式字符串由以下几部分组成： - 单个 `%` 字符 - 可选的标记（flags） - 可选的字段宽度 - 可选的，左侧精度 - 可选的，右侧精度 - 必选的，单个转化字符
   标记(Flags)  可选多个标记，分别是： 
  - **`=`{f}** — 字符：`=`，并紧跟一个字符（单字节） {f}，用于数字填充。默认的填充字符是空格。
  - **`^`** — 禁用分组字符（比如金额中的逗号。在本地区域设置 locale 中定义）。
  - **`+` or `(`** — 正负数字的格式。使用 `+`，将使用区域设置（locale）中相当于 `+` 和 `-` 的符号。 如果使用 `(`，负数将被圆括号围绕。不设置的话，默认为 `+`。
  - **`!`** — 不输出货币符号（比如 ¥）。
  - **`-`** — 有这个符号的时候，将使字段左对齐（填充到右边），默认是相反的，是右对齐的（填充到左边）。

     


   字段宽度  
  - **{w}** — 十进制数值字符串的宽度。字段将右对齐，除非使用了 `-` 标记。默认值 0。

     


   左侧精度  
  - **`#`{n}** — 小数字符（比如小数点）前的最大位数 ({n})。 常用于同一列中的格式对齐。 如果位数小于 {n} 则使用填充字符填满。 如果实际位数大于 {n}，此设置将被忽略。 — 如果没用 `^` 标识禁用分组，分组分隔符会在添加填充字符之前插入（如果有的话）。 分组分隔符不会应用到填充字符里，哪怕填充字符是个数字。 — 为了保证对齐，出现在之前或者之后的字符，都会填充必要的空格，保证正负情况下长度都一样。

     


    右侧精度   
  - **`.`{p}** — 小数点后的一段数字 ({p})。 如果 {p} 的值是 0（零），小数点右侧的数值将被删除。 如果不使用这个标记，默认展现取决于当前的区域设置。 小数点后指定位数的数字，四舍五入格式化。

     


    转化字符   
  - **`i`** — 根据国际化区域设置中的货币格式，格式化数值。（比如，locale 是 USA：USD 1,234.56）。
  - **`n`** — 根据国际化区域设置中国家的货币格式，格式化数值。（比如，locale 是 de_DE：EU1.234,56）。
  - **`%`** — 返回字符 `%`。

     


- **`$number`** — 需要格式化的数字。

## 返回值

返回格式化后的字符。格式字符串前后的字符将原封不动返回。 传入的 `$number` 如果不是数字，将返回 `null` 并且产生 `E_WARNING`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 此函数已移除。 |
| 7.4.0 | 此函数已废弃。 使用 `NumberFormatter::formatCurrency()` 替代。 |

## 示例

**`money_format()` 例子**

使用不同的 locale 和格式字符串，来说明此函数的用法。

```php


<?php

$number = 1234.56;

// 让我们打印 en_US locale 的国际化格式
setlocale(LC_MONETARY, 'en_US');
echo money_format('%i', $number) . "\n";
// USD 1,234.56

// 意大利国家的格式，带两位浮点小数`
setlocale(LC_MONETARY, 'it_IT');
echo money_format('%.2n', $number) . "\n";
// Eu 1.234,56

// 负数的使用
$number = -1234.5672;

// 美国国家的格式，使用圆括号 () 标记负数。
// 左侧精度使用十位
setlocale(LC_MONETARY, 'en_US');
echo money_format('%(#10n', $number) . "\n";
// ($        1,234.57)

// 相似的格式，添加了右侧两位小数点的精度，同时用 * 来填充
echo money_format('%=*(#10.2n', $number) . "\n";
// ($********1,234.57)

// 让我们左对齐，14位宽，左侧八位，右侧两位，不带分组字符
// de_DE 的国际化格式
setlocale(LC_MONETARY, 'de_DE');
echo money_format('%=*^-14#8.2i', 1234.56) . "\n";
// Eu 1234,56****

// 让我们在格式字符串前后，添加一些简介
setlocale(LC_MONETARY, 'en_GB');
$fmt = 'The final value is %i (after a 10%% discount)';
echo money_format($fmt, 1234.56) . "\n";
// The final value is  GBP 1,234.56 (after a 10% discount)

?>

    
```

## 注释

> 具有 strfmon 的系统才有 `money_format()` 函数。 例如 Windows 不具备，所以 Windows 系统上 `money_format()` 未定义。

> locale 设置中， `LC_MONETARY` 会影响此函数的行为。 在使用函数前，首先要用 `setlocale()` 来设置合适的区域设置（locale）。

## 参见

`setlocale()` `sscanf()` `sprintf()` `printf()` `number_format()`
