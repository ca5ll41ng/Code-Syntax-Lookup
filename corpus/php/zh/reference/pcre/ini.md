---
id: "zh-php-guide-pcre-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "pcre.configuration"
title: "运行时配置"
module: "pcre"
source_url: "https://www.php.net/manual/zh/pcre.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| pcre.backtrack_limit | "100000" | `INI_ALL` |  |
| pcre.recursion_limit | "100000" | `INI_ALL` |  |
| pcre.jit | "1" | `INI_ALL` |  |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$pcre.backtrack_limit` `int`** — PCRE的回溯限制.
- **`$pcre.recursion_limit` `int`** — PCRE 的递归限制. 请注意, 如果将这个值设置为一个很大的数字, 可能会消耗掉进程所有可用的堆栈, 最终导致 PHP 崩溃（由于达到操作系统限制的堆栈大小）。
- **`$pcre.jit` `bool`** — 是否使用 PCRE 的 JIT 编译。
