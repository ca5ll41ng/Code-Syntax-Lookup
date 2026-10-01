---
id: "zh-php-guide-exif-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "exif.configuration"
title: "运行时配置"
module: "exif"
source_url: "https://www.php.net/manual/zh/exif.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

当 mbstring 模块可用时，exif 支持用户注释中的 Unicode 和 JIS 字符编码的自动转换。这是通过先用指定字符集将注释解码，把结果再用另一个符合你的 `HTTP` 输出的字符集编码来实现的。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| exif.encode_unicode | "ISO-8859-15" | `INI_ALL` |  |
| exif.decode_unicode_motorola | "UCS-2BE" | `INI_ALL` |  |
| exif.decode_unicode_intel | "UCS-2LE" | `INI_ALL` |  |
| exif.encode_jis | "" | `INI_ALL` |  |
| exif.decode_jis_motorola | "JIS" | `INI_ALL` |  |
| exif.decode_jis_intel | "JIS" | `INI_ALL` |  |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$exif.encode_unicode` `string`** — `exif.encode_unicode` 定义了 UNICODE 用户注释被处理的字符集。默认为 ISO-8859-15，可用于大多数非亚洲国家。本设置可以为空或者必须为一个 mbstring 所支持的编码。如果为空，则使用当前 mbstring 内部使用的编码。
- **`$exif.decode_unicode_motorola` `string`** — `exif.decode_unicode_motorola` 定义了 Unicode 编码的用户注释的图像内部字符集，如果图像是摩托罗拉字节顺序（big-endian）的话。本设置不能为空但可以指定一个 mbstring 支持的编码列表。默认为 UCS-2BE。
- **`$exif.decode_unicode_intel` `string`** — `exif.decode_unicode_intel` 定义了 Unicode 编码的用户注释的图像内部字符集，如果图像是英特尔字节顺序（little-endian）的话。本设置不能为空但可以指定一个 mbstring 支持的编码列表。默认为 UCS-2LE。
- **`$exif.encode_jis` `string`** — `exif.encode_jis` 定义了 JIS 用户注释被处理的字符集。默认为空值，迫使函数使用当前 mbstring 使用的内部编码。
- **`$exif.decode_jis_motorola` `string`** — `exif.decode_jis_motorola` 定义了 JIS 编码的用户注释的图像内部字符集，如果图像是摩托罗拉字节顺序（big-endian）的话。本设置不能为空但可以指定一个 mbstring 支持的编码列表。默认为 JIS。
- **`$exif.decode_jis_intel` `string`** — `exif.decode_jis_intel` 定义了 JIS 编码的用户注释的图像内部字符集，如果图像是英特尔字节顺序（litle-endian）的话。本设置不能为空但可以指定一个 mbstring 支持的编码列表。默认为 JIS。
