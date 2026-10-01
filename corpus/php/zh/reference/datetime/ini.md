---
id: "zh-php-guide-datetime-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "datetime.configuration"
title: "运行时配置"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetime.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| date.default_latitude | "31.7667" | `INI_ALL` |  |
| date.default_longitude | "35.2333" | `INI_ALL` |  |
| date.sunrise_zenith | "90.833333" | `INI_ALL` | 在 PHP 8.0.0 之前，默认值是“90.583333” |
| date.sunset_zenith | "90.833333" | `INI_ALL` | 在 PHP 8.0.0 之前，默认值是“90.583333” |
| date.timezone | "UTC" | `INI_ALL` | 自 PHP 8.2.0 起，将其设置为无效值或者空字符串时将发出警告。 |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$date.default_latitude` `float`** — 默认纬度范围从赤道的 `0` 到向北 `+90` 和向南 `-90`。
- **`$date.default_longitude` `float`** — 默认经度范围从本初子午线的 `0` 到向东 `+180` 和向西 `−180`。
- **`$date.sunrise_zenith` `float`** — 日出时默认天顶。 — 默认值是 90°50'。额外的 50' 是因为两个部分：太阳半径（即 16'）及大气折射（即 34'）。
- **`$date.sunset_zenith` `float`** — 日落时默认天顶。
- **`$date.timezone` `string`** — 所有日期/时间函数使用的默认时区。`date_default_timezone_get()` 页面中描述了在没有明确提及时区的情况下使用时区的优先顺序。参见`timezones`以获得支持的时区列表。

> 前四个配置选项目前仅用于 `date_sunrise()` 和 `date_sunset()`。
