---
id: "zh-php-guide-geoip-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "geoip.configuration"
title: "运行时配置"
module: "geoip"
source_url: "https://www.php.net/manual/zh/geoip.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| geoip.custom_directory | "" | `INI_ALL` |  |

这是配置指令的简短说明。

- **`$geoip.custom_directory` `string`** — 默认为空，但是可以设置一个不同的数据库来覆盖该扩展自带的数据库。
