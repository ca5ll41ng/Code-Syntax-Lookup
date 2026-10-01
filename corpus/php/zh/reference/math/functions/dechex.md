---
id: "zh-php-function-function-dechex"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "dechex"
title: "十进制转换为十六进制"
signature: "string dechex(int $num)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.dechex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 十进制转换为十六进制

## 说明

```php
string dechex(int $num)
```

返回一字符串，包含有给定 `$num` 参数的十六进制表示。

所能转换的最大数值为十进制的 `PHP_INT_MAX``* 2 + 1` (或 `-1`)：在 32 位平台上是十进制的 `4294967295`，其 `dechex()` 的结果为 `ffffffff`。

## 参数

- **`$num`** — 要转换的十进制值 — PHP 的 `int` 类型是有符号的，但 `dechex()` 处理无符号整数，负正数会以无符号处理。

## 返回值

`$num` 的16进制表示

## 示例

**`dechex()` 示例**

```php


<?php
echo dechex(10) . "\n";
echo dechex(47);
?>

    
```

以上示例会输出：

```text


a
2f

    
```

**大整数的 `dechex()` 示例**

```php


<?php
// 下面的输出假设是 32 位平台。
// 注意输出的所有值一样。
echo dechex(-1)."\n";
echo dechex(PHP_INT_MAX * 2 + 1)."\n";
echo dechex(pow(2, 32) - 1)."\n";
?>

    
```

以上示例会输出：

```text


ffffffff
ffffffff
ffffffff

    
```

## 参见

`hexdec()` `decbin()` `decoct()` `base_convert()`
