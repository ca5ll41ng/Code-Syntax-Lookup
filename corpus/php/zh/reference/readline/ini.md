---
id: "zh-php-guide-readline-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "readline.configuration"
title: "运行时配置"
module: "readline"
source_url: "https://www.php.net/manual/zh/readline.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| cli.pager | "" | `INI_ALL` |  |
| cli.prompt | "\\b \\> " | `INI_ALL` |  |

这是配置指令的简短说明。

- **`$cli.pager` `string`** — 命令行显示输出的外部工具。
- **`$cli.prompt` `string`** — 命令行提示。
