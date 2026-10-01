---
id: "zh-php-guide-filter-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "filter.configuration"
title: "运行时配置"
module: "filter"
source_url: "https://www.php.net/manual/zh/filter.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| filter.default | "unsafe_raw" | `INI_PERDIR` | 自 PHP 8.1.0 起弃用。 |
| filter.default_flags | NULL | `INI_PERDIR` |  |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$filter.default` `string`** — 通过此过滤器过滤所有 `$_GET`、`$_POST`、`$_COOKIE`、`$_REQUEST` 和 `$_SERVER`。通过 `filter_input()` 访问原始数据。 — 必须是可以确定的过滤器名称，以便 `filter_list()` 和 `filter_id()` 使用。
  > 要小心默认过滤器的默认 flag。应该明确设置。例如，要将默认过滤器配置为跟 `htmlspecialchars()` 完全相同，则必须将默认 flag 设置为 `0`，如下所示。
  >
  > **配置默认过滤器的表现像 htmlspecialchars**
  >
  > ```php
  >
  >
  > filter.default = full_special_chars
  > filter.default_flags = 0
  >
  >       
  > ```


  > 此 INI 设置自 PHP 8.1.0 起弃用。


- **`$filter.default_flags` `int`** — 设置默认过滤器时要应用的默认 flag。出于向后兼容性的原因，默认设置为 `FILTER_FLAG_NO_ENCODE_QUOTES`。参阅 `FILTER_FLAG_{*}` 常量以了解可用的 flag。
