---
id: "zh-php-guide-image-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "image.configuration"
title: "运行时配置"
module: "image"
source_url: "https://www.php.net/manual/zh/image.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| gd.jpeg_ignore_warning | "1" | `INI_ALL` |  |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$gd.jpeg_ignore_warning` `bool`** — Ignore warnings (but not errors) created by libjpeg(-turbo).

| 版本 | 说明 |
| --- | --- |
| 7.1.0 | gd.jpeg_ignore_warning 默认值从 0 变更为 1。 |

参见 exif 配置。

> 图像处理函数相当占用内存，如果使用的时 GD 库的捆绑版本，请务必将 memory_limit 设置的足够高。
