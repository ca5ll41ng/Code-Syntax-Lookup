---
id: "zh-php-guide-misc-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "misc.configuration"
title: "运行时配置"
module: "misc"
source_url: "https://www.php.net/manual/zh/misc.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| ignore_user_abort | "0" | `INI_ALL` |  |
| highlight.string | "#DD0000" | `INI_ALL` |  |
| highlight.comment | "#FF8000" | `INI_ALL` |  |
| highlight.keyword | "#007700" | `INI_ALL` |  |
| highlight.default | "#0000BB" | `INI_ALL` |  |
| highlight.html | "#000000" | `INI_ALL` |  |
| browscap | NULL | `INI_SYSTEM` |  |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$ignore_user_abort` `bool`** — 默认值为 `false` 。 如果设置为 `true` ，在客户端断开连接后，脚本不会被中止。 — 参见 `ignore_user_abort()`.
- **`$highlight.bg` `string`** — 语法高亮的颜色。可设置为 <font color="??????"> 中任何可接受的代码。
- **`$browscap` `string`** — 浏览器功能文件的位置和文件名 (例如 `browscap.ini`)。 参见 `get_browser()`。
