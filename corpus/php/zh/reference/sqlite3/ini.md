---
id: "zh-php-guide-sqlite3-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "sqlite3.configuration"
title: "运行时配置"
module: "sqlite3"
source_url: "https://www.php.net/manual/zh/sqlite3.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| sqlite3.extension_dir | "" | `INI_SYSTEM` |  |
| sqlite3.defensive | 1 | `INI_USER` | 自 PHP 7.2.17 和 7.3.4 起适用于 libsqlite ≥ 3.26.0。在 PHP 8.2.0 之前，此设置只能更改为 `INI_SYSTEM`。 |

这是配置指令的简短说明。

- **`$sqlite3.extension_dir` `string`** — SQLite 的可加载扩展所在目录的路径。
- **`$sqlite3.defensive` `bool`** — 启用 defensive flag 后，将禁用普通 SQL 故意损坏数据库文件的语言功能。这禁止直接写入模式（schema）、影子表（例如 FTS 数据表）或 sqlite_dbpage 虚拟表。此 php.ini 设置仅对 libsqlite ≥ 3.26.0 有效。
