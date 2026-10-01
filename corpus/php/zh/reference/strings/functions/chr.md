---
id: "zh-php-function-function-chr"
language: "php"
lang: "zh"
category: "function"
name: "chr"
title: "从数字生成单字节字符串"
signature: "string chr(int $codepoint)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.chr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从数字生成单字节字符串

## 说明

```php
string chr(int $codepoint)
```

返回单字符字符串，包含将 `$codepoint` 作为无符号整数解释的指定字符。

这可用于在一种单字节编码（像是 ASCII、ISO-8859 或 Windows 1252）中通过传递想要的字符在编码映射表中的位置来创建单字符字符串。但是，注意此函数并不清楚任何字符串编码，特别是无法通过传递一个 Unicode 码位值来生成多字节编码（像是 UTF-8 或 UTF-16）字符串。

此函数与 `ord()` 互补。

## 参数

- **`$codepoint`** — 一个介于 0 与 255 之间的整数。 — 超过有效范围（0..255）的值将和 255“按位与”，与以下算法等效： ```php while ($bytevalue < 0) { $bytevalue += 256; } $bytevalue %= 256; ```

## 返回值

包含指定字节的单字符字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.4.0 | 此函数不再静默接受不支持的 `$codepoint`，并会将它们转为 `0`。 |

## 示例

**`chr()` 例子**

```php


<?php
// 假设该字符串将被作为 ASCII 或是一个与 ASCII 兼容的编码使用

$str = "The string ends in escape: ";
$str .= chr(27); /* 在 $str 末尾添加一个转义字符 */
echo $str, PHP_EOL;

/* 通常这样更有用 */
$str = sprintf("The string ends in escape: %c", 27);
echo $str, PHP_EOL;
?>

    
```

**溢出行为**

```php


<?php
echo chr(-159), chr(833), PHP_EOL;
?>

    
```

以上示例会输出：

```text


aA

    
```

**从单个字节构建 UTF-8 字符串**

```php


<?php
$str = chr(240) . chr(159) . chr(144) . chr(152);
echo $str, PHP_EOL;
?>

    
```

以上示例会输出：

```text

🐘
    
```

## 参见

`sprintf()` 如何使用格式字符串 `%c` `ord()` 一个 [ASCII 表]() `mb_chr()` `IntlChar::chr()`
