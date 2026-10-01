---
id: "zh-php-function-function-hexdec"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "hexdec"
title: "十六进制转换为十进制"
signature: "int|float hexdec(string $hex_string)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.hexdec.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 十六进制转换为十进制

## 说明

```php
int|float hexdec(string $hex_string)
```

返回与 `$hex_string` 参数所表示的十六进制数等值的的十进制数。`hexdec()` 将一个十六进制字符串转换为十进制数。

`hexdec()` 会忽略它遇到的任意非十六进制的字符。自 PHP 7.4.0 起，弃用使用任何无效字符。

## 参数

- **`$hex_string`** — 要转换的十六进制的字符串

## 返回值

`$hex_string` 十进制的表示

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.4.0 | 传递任何无效字符现在将生成弃用通知。但仍会计算结果，就好像无效字符不存在一样。 |

## 示例

**`hexdec()` 示例**

```php


<?php
var_dump(hexdec("ee")); // prints "int(238)"
var_dump(hexdec("a0")); // prints "int(160)"
?>

    
```

**`hexdec()` 包含无效字符**

```php


<?php
var_dump(hexdec("See"));  // print "int(238)"
var_dump(hexdec("that")); // print "int(10)"
?>

    
```

## 注释

> 此函数可以将太大的数字转换为适应平台的 `int` 类型，在这种情况下，较大值将会作为 `float` 返回。

## 参见

`dechex()` `bindec()` `octdec()` `base_convert()`
