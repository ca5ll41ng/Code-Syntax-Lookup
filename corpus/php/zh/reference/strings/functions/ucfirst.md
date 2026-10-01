---
id: "zh-php-function-function-ucfirst"
language: "php"
lang: "zh"
category: "function"
name: "ucfirst"
title: "将字符串的首字母转换为大写"
signature: "string ucfirst(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.ucfirst.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将字符串的首字母转换为大写

## 说明

```php
string ucfirst(string $string)
```

将 `$string` 的首字符（如果首字符是 `"a"`（0x61）到 `"z"`（0x7a）范围内的 ASCII 字符）转换为大写字母，并返回这个字符串。

注意字母的定义取决于当前区域设定。例如，在默认的 “C” 区域，字符 umlaut-a（ä）将不会被转换。

## 参数

- **`$string`** — 输入字符串。

## 返回值

返回结果字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 大小写转换不在依赖于使用 `setlocale()` 设置的区域。只会转换 ASCII 字符。 |

## 示例

**`ucfirst()` 示例**

```php


<?php
$foo = 'hello world!';
echo ucfirst($foo), PHP_EOL;             // Hello world!

$bar = 'HELLO WORLD!';
echo ucfirst($bar), PHP_EOL;             // HELLO WORLD!
echo ucfirst(strtolower($bar)), PHP_EOL; // Hello world!
?>

    
```

## 参见

`lcfirst()` `strtolower()` `strtoupper()` `ucwords()` `mb_convert_case()`
