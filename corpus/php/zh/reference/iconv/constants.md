---
id: "zh-php-guide-iconv-constants"
language: "php"
lang: "zh"
category: "guide"
name: "iconv.constants"
title: "预定义常量"
module: "iconv"
source_url: "https://www.php.net/manual/zh/iconv.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

它能够在运行时识别此扩展使用了哪种实现（implementation）。

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| `ICONV_IMPL` | `string` | 实现（implementation）的名称 |
| `ICONV_VERSION` | `string` | 实现（implementation）的版本 |

> 通过这些常量编写依赖于实现的脚本是极其不建议的。

以下常量同样有效：

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| `ICONV_MIME_DECODE_STRICT` | `int` | 使用于 `iconv_mime_decode()` 的位掩码 |
| `ICONV_MIME_DECODE_CONTINUE_ON_ERROR` | `int` | 使用于 `iconv_mime_decode()` 的位掩码 |
