---
id: "zh-php-guide-iconv-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "iconv.configuration"
title: "运行时配置"
module: "iconv"
source_url: "https://www.php.net/manual/zh/iconv.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| iconv.input_encoding | "" | `INI_ALL` | 在 PHP 5.6.0 中废弃。 |
| iconv.output_encoding | "" | `INI_ALL` | 在 PHP 5.6.0 中废弃。 |
| iconv.internal_encoding | "" | `INI_ALL` | 在 PHP 5.6.0 中废弃。 |

这是配置指令的简短说明。

> 有些系统（比如 IBM AIX） 使用 "ISO8859-1" 来代替 "ISO-8859-1"，所以在配置选项和函数参数中必须使用这个值。

- **`$iconv.input_encoding` `string`**
  > 此特性自 PHP 5.6.0 起 *弃用*。强烈不建议依赖此特性。

 — PHP 5.6 及以上的用户应该留空并以 input_encoding 取代。
- **`$iconv.output_encoding` `string`**
  > 此特性自 PHP 5.6.0 起 *弃用*。强烈不建议依赖此特性。

 — PHP 5.6 及以上的用户应该留空并以 output_encoding 取代。
- **`$iconv.internal_encoding` `string`**
  > 此特性自 PHP 5.6.0 起 *弃用*。强烈不建议依赖此特性。

 — PHP 5.6 及以上的用户应该留空并以 `$default_charset` 取代。
