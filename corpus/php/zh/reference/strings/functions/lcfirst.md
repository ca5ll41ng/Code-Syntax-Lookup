---
id: "zh-php-function-function-lcfirst"
language: "php"
lang: "zh"
category: "function"
name: "lcfirst"
title: "使字符串的第一个字符小写"
signature: "string lcfirst(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.lcfirst.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使字符串的第一个字符小写

## 说明

```php
string lcfirst(string $string)
```

如果第一个字符是 `"A"`（0x41）到 `"Z"`（0x5a）范围内的 ASCII 字符，则返回第一个字母是小写的 `$string`。

## 参数

- **`$string`** — 输入的字符串。

## 返回值

返回转换后的字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 大小写转换不在依赖于使用 `setlocale()` 设置的区域。只会转换 ASCII 字符。 |

## 示例

**`lcfirst()` 例子：**

```php


<?php
$foo = 'HelloWorld';
echo lcfirst($foo), PHP_EOL;             // helloWorld

$bar = 'HELLO WORLD!';
echo lcfirst($bar), PHP_EOL;             // hELLO WORLD!
echo lcfirst(strtoupper($bar)), PHP_EOL; // hELLO WORLD!
?>

    
```

## 参见

`ucfirst()` `strtolower()` `strtoupper()` `ucwords()`
