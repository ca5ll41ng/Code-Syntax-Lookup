---
id: "zh-php-function-function-vprintf"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["xss"],"cwe":["CWE-79"]}
name: "vprintf"
title: "输出格式化字符串"
signature: "int vprintf(string $format, array $values)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.vprintf.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 输出格式化字符串

## 说明

```php
int vprintf(string $format, array $values)
```

根据 `$format` （`sprintf()` 函数文档中有相关描述）参数指定的格式，在一个格式化字符串中显示多个值。

作用与 `printf()` 函数类似，但是接收一个数组参数，而不是一系列可变数量的参数。

## 参数

- **`$format`** — format 字符串通常由零或多个指令组成：普通字符（不包含 `&#37;`）——直接复制到结果，*转换规范*——获取每个参数的结果。 — 转换规范遵循此原型： `&#37;[argnum$][flags][width][.precision]specifier`.
   Argnum  整数后跟美元符号 `$`，用于指定转换中要处理的参数数量。   


   Flags  
  | Flag | 说明 |
  | --- | --- |
  | `-` | 在给定字段宽度内左对齐；右对齐是默认值 |
  | `+` | 在给定字段宽度内为正数添加加号前缀 `+`；默认情况下，只有负数才会添加负号前缀。 |
  | ``(space) | 用空格填充结果。 这是默认值。 |
  | `0` | 仅对数字进行左侧零填充。 对于 `s` 说明符，也可以右侧用零填充。 |
  | `'`(char) | 用字符（char）填充结果。 |

     


   Width  要么是整数，表示转换结果应该有多少个字符（最少），要么是 `*`。如果使用 `*`，那么宽度将作为额外的整数值提供，位于格式化符号之前。   


   Precision  小数点 `.`，可选的后跟整数或者 `*`，其含义取决于格式化符号： 
  - `e`、`E`、`f`、`F` 标志符：小数点后需要打印的位数（默认是 6）。
  - `g`、`G`、`h`、`H` 标志符：这是要打印的最大有效位数。
  - `s` 标志符：充当分界点，为字符串设置最大字符限制。

   
  > 如果小数点没有明确的精度值，则假设是 0。如果使用 `*`，则精度将作为额外的整数值提供，位于格式化符号之前。

     

 — | Specifier | 说明 | | --- | --- | | `&#37;` | 字面意思的百分号字符。不需要参数。 | | `b` | 参数视为整数并以二进制数字呈现。 | | `c` | 参数视为整数并以 ASCII 字符呈现。 | | `d` | 参数视为整数并以（有符号）十进制数字呈现。 | | `e` | 参数当做科学符号处理（例如 1.2e+2）。 | | `E` | 与 `e` 标志符相同，但使用大写字母（例如 1.2E+2）。 | | `f` | 参数当做浮点数处理且作为浮点数呈现（locale aware）。 | | `F` | 参数当做浮点数处理且作为浮点数呈现（non-locale aware）。 | | `g` | 通用格式。 Let P equal the precision if nonzero, 6 if the precision is omitted, or 1 if the precision is zero. Then, if a conversion with style E would have an exponent of X: If P > X ≥ −4, the conversion is with style f and precision P − (X + 1). Otherwise, the conversion is with style e and precision P − 1. | | `G` | Like the `g` specifier but uses `E` and `f`. | | `h` | Like the `g` specifier but uses `F`. Available as of PHP 8.0.0. | | `H` | Like the `g` specifier but uses `E` and `F`. Available as of PHP 8.0.0. | | `o` | 参数视为整数并以八进制数字来呈现。 | | `s` | 参数视为字符串来呈现。 | | `u` | 参数视为整数并以无符号十进制数字呈现。 | | `x` | 参数视为整数并作为十六进制数字呈现（带小写字母）。 | | `X` | 参数视为整数并作为十六进制数字呈现（带大写字母）。 |
  > `c` 类型标志符忽略填充和宽度。


  > Attempting to use a combination of the string and width specifiers with character sets that require more than one byte per character may result in unexpected results.

 — 变量将会强制转换为适合标志符的类型： | 类型 | 标志符 | | --- | --- | | `string` | `s` | | `int` | `d`, `u`, `c`, `o`, `x`, `X`, `b` | | `float` | `e`, `E`, `f`, `F`, `g`, `G`, `h`, `H` |
- **`$values`**

## 返回值

返回输出字符串的长度。

## 错误／异常

从 PHP 8.0.0 开始，如果参数个数为零，将抛出 `ValueError`。在 PHP 8.0.0 之前，会发出 `E_WARNING`。

从 PHP 8.0.0 开始，如果 `[width]` 小于零或大于 `PHP_INT_MAX`，则会抛出 `ValueError`。在 PHP 8.0.0 之前，会发出 `E_WARNING`。

从 PHP 8.0.0 开始，如果 `[precision]` 小于零或大于 `PHP_INT_MAX`，则会抛出 `ValueError`。在 PHP 8.0.0 之前，会发出 `E_WARNING`。

从 PHP 8.0.0 开始，当传递的参数少于所需的参数时会抛出 `ValueError`。在 PHP 8.0.0 之前，返回 `false` 并发出 `E_WARNING`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 此函数失败时不再返回 `false`。 |
| 8.0.0 | 如果参数个数为零则抛出 `ValueError`；以前该函数则会发出 `E_WARNING`。 |
| 8.0.0 | 如果 `[width]` 小于零或大于 `PHP_INT_MAX`，则抛出 `ValueError`；以前该函数则会发出 `E_WARNING`。 |
| 8.0.0 | 如果 `[precision]` 小于零或大于 `PHP_INT_MAX`，则抛出 `ValueError`；以前该函数则会发出 `E_WARNING`。 |
| 8.0.0 | 当传递的参数少于所需的参数时抛出 `ValueError`；以前该函数则会发出 `E_WARNING`。 |

## 示例

**`vprintf()`：补零整数**

```php


<?php
vprintf("%04d-%02d-%02d", explode('-', '1988-8-1'));
?>

    
```

以上示例会输出：

```text


1988-08-01

    
```

## 参见

`printf()` `sprintf()` `fprintf()` `vsprintf()` `vfprintf()` `sscanf()` `fscanf()` `number_format()` `date()`
