---
id: "zh-php-function-function-crc32"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "crc32"
title: "计算一个字符串的 crc32 多项式"
signature: "int crc32(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.crc32.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算一个字符串的 crc32 多项式

## 说明

```php
int crc32(string $string)
```

生成 `$string` 的 32 位循环冗余校验和多项式。这通常用于检查正在传输的数据是否完整。

> 由于 PHP 的整数类型是有符号的，所以在 32 位系统上许多 crc32 校验和将产生负整数。不过在 64 位上所有 `crc32()` 的结果将都是正整数。
>
> 因此需要使用 `sprintf()` 或 `printf()` 的“%u”格式标志符获取十进制格式的无符号 crc32 校验和的字符串表示形式。
>
> 对于十六进制的校验和可以使用 `sprintf()` 或 `printf()` 的“%x”格式标志符或 `dechex()` 转换程序，这两个函数负责将 `crc32()` 结果转为无符号整数。
>
> 64 位的设备也会返回负数，更高的结果值会破坏十六进制转换，因为负数会得到额外的 0xFFFFFFFF######## 偏移量。由于十六进制似乎是最常见的用例，所以决定不破坏该原则，即使从 32 位移动到 64 位时破坏了大约 50% 的十进制直接比较。
>
> 回想一下，让函数返回整数可能不是最好的主意，而立即返回十六进制的字符串（例如 `md5()`）可能是更好的开始。
>
> 可移植方案可以考虑通用的 `hash()`。hash("crc32b", $str) 返回跟 str_pad(dechex(crc32($str)), 8, '0', STR_PAD_LEFT) 相同的字符串。

## 参数

- **`$string`** — 要校验的数据。

## 返回值

以整数形式返回 `$string` 的 crc32 校验和。

## 示例

**显示 crc32 校验和**

示例中演示了如何使用 `printf()` 函数打印转换后的校验和：

```php


<?php
$checksum = crc32("The quick brown fox jumped over the lazy dog.");
printf("%u\n", $checksum);
?>

    
```

## 参见

`hash()` `md5()` `sha1()`
