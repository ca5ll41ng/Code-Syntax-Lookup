---
id: "zh-php-function-function-convert-cyr-string"
language: "php"
lang: "zh"
category: "function"
name: "convert_cyr_string"
title: "将字符由一种 Cyrillic 字符转换成另一种"
signature: "string convert_cyr_string(string $str, string $from, string $to)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.convert-cyr-string.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将字符由一种 Cyrillic 字符转换成另一种

## 说明

```php
string convert_cyr_string(string $str, string $from, string $to)
```

此函数将给定的字符串从一种 Cyrillic 字符转换成另一种，返回转换之后的字符串。

## 参数

- **`$str`** — 要转换的字符。
- **`$from`** — 单个字符，代表源 Cyrillic 字符集。
- **`$to`** — 单个字符，代表了目标 Cyrillic 字符集。

支持的类型有：

- k - koi8-r
- w - windows-1251
- i - iso8859-5
- a - x-cp866
- d - x-cp866
- m - x-mac-cyrillic

## 返回值

返回转换后的字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 此函数已移除。 |
| 7.4.0 | 此函数已废弃。 |

## 注释

> 此函数可安全用于二进制对象。

## 参见

`mb_convert_encoding()` `iconv()`
