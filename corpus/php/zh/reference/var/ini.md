---
id: "zh-php-guide-var-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "var.configuration"
title: "运行时配置"
module: "var"
source_url: "https://www.php.net/manual/zh/var.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| unserialize_callback_func | `null` | `INI_ALL` |  |
| unserialize_max_depth | "4096" | `INI_ALL` | 自 PHP 7.4.0 起可用。 |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$unserialize_callback_func` `string`** — 如果解串行器发现有未定义类要被实例化，将会调用 `unserialize()` 回调函数（用该未定义类名作为参数）。如果指定函数不存在，或者此函数没有包含/实现该未定义类，则显示警告。所以仅在确实需要实现这样的回调函数时才设置该选项。 — 参见 `unserialize()` 和类的自动加载。
- **`$unserialize_max_depth` `int`** — 使用 `unserialize()` 反序列化期间允许的最大结构深度，主要是防止栈溢出。可以通过设置 `unserialize_max_depth=0` 来禁用。 — 参见 `unserialize()` 和类的自动加载。
