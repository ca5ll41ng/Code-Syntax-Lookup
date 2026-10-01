---
id: "zh-php-function-function-decoct"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "decoct"
title: "十进制转换为八进制"
signature: "string decoct(int $num)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.decoct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 十进制转换为八进制

## 说明

```php
string decoct(int $num)
```

返回一字符串，包含有给定 `$num` 参数的八进制表示。可以转换的最大数字取决于平台。对于 32 位平台通常是十进制的 `4294967295`，结果是 `37777777777`。对于 64 位平台通常是十进制的 `9223372036854775807`，结果是 `777777777777777777777`。

## 参数

- **`$num`** — 待转换的十进制值

## 返回值

`$num` 参数八进制表示的字符串。

## 示例

**`decoct()` 示例**

```php


<?php
echo decoct(15) . "\n";
echo decoct(264);
?>

    
```

以上示例会输出：

```text


17
410

    
```

## 参见

`octdec()` `decbin()` `dechex()` `base_convert()`
