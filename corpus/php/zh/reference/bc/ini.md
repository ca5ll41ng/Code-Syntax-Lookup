---
id: "zh-php-guide-bc-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "bc.configuration"
title: "运行时配置"
module: "bc"
source_url: "https://www.php.net/manual/zh/bc.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| bcmath.scale | "0" | `INI_ALL` |  |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$bcmath.scale` `int`** — 所有 bcmath 函数中十进制数字的数目。参见 `bcscale()`。
  > `BcMath\Number` 不受此设置的影响。
