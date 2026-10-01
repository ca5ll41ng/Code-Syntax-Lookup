---
id: "zh-php-function-function-ucwords"
language: "php"
lang: "zh"
category: "function"
name: "ucwords"
title: "将字符串中每个单词的首字母转换为大写"
signature: "string ucwords(string $string, string $separators = \" \\t\\r\\n\\f\\v\")"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.ucwords.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将字符串中每个单词的首字母转换为大写

## 说明

```php
string ucwords(string $string, string $separators = " \t\r\n\f\v")
```

将 `$string` 中每个单词的首字符（如果首字符是介于 `"a"`（0x61）和 `"z"`（0x7a）之间的 ASCII 字符）转换为大写字母，并返回这个字符串。

对于此函数，单词是未在 `$separators` 参数列出的字符串。默认情况下，它们是：空格、水平制表符、回车、换行符、换页以及垂直制表符。

要对多字节进行类似的转换，请使用带 `MB_CASE_TITLE` 模式的 `mb_convert_case()`。

## 参数

- **`$string`** — 输入字符串。
- **`$separators`** — 可选的 `$separators`，包含了单词分割符。

## 返回值

返回转换后的字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 大小写转换不在依赖于使用 `setlocale()` 设置的区域。只会转换 ASCII 字符。 |

## 示例

**`ucwords()` 示例**

```php


<?php
$foo = 'hello world!';
echo ucwords($foo), PHP_EOL;             // Hello World!

$bar = 'HELLO WORLD!';
echo ucwords($bar), PHP_EOL;             // HELLO WORLD!
echo ucwords(strtolower($bar)), PHP_EOL; // Hello World!
?>

    
```

**`ucwords()` 自定义分隔符的例子**

```php


<?php
$foo = 'hello|world!';
echo ucwords($foo), PHP_EOL;             // Hello|world!

echo ucwords($foo, "|"), PHP_EOL;        // Hello|World!
?>

    
```

**带附加分隔符的 `ucwords()` 示例**

```php

     
<?php
$foo = "mike o'hara";
echo ucwords($foo), PHP_EOL;                 // Mike O'hara

echo ucwords($foo, " \t\r\n\f\v'"), PHP_EOL; // Mike O'Hara
?>

    
```

## 注释

> 此函数可安全用于二进制对象。

## 参见

`strtoupper()` `strtolower()` `ucfirst()` `mb_convert_case()`
