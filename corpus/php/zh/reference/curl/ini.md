---
id: "zh-php-guide-curl-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "curl.configuration"
title: "运行时配置"
module: "curl"
source_url: "https://www.php.net/manual/zh/curl.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| curl.cainfo | NULL | `INI_SYSTEM` |  |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$curl.cainfo` `string`** — `CURLOPT_CAINFO` 选项的一个默认值。这个值必须是一个绝对路径。
