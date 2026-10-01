---
id: "zh-php-guide-pgsql-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "pgsql.configuration"
title: "运行时配置"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/pgsql.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| pgsql.allow_persistent | "1" | `INI_SYSTEM` |  |
| pgsql.max_persistent | "-1" | `INI_SYSTEM` |  |
| pgsql.max_links | "-1" | `INI_SYSTEM` |  |
| pgsql.auto_reset_persistent | "0" | `INI_SYSTEM` |  |
| pgsql.ignore_notice | "0" | `INI_ALL` |  |
| pgsql.log_notice | "0" | `INI_ALL` |  |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$pgsql.allow_persistent` `bool`** — 是否允许持久的 Postgres 连接。
- **`$pgsql.max_persistent` `int`** — 每个进程所能有的持久 Postgres 连接数目。
- **`$pgsql.max_links` `int`** — 每个进程所能有的 Postgres 连接数目，包括持久连接。
- **`$pgsql.auto_reset_persistent` `int`** — 检测用在 `pg_pconnect()` 上的中断了的持久连接。需要一些损耗。
- **`$pgsql.ignore_notice` `int`** — 是否忽略 PostgreSQL 后端的通告。
- **`$pgsql.log_notice` `int`** — 是否记录 PostgreSQL 后端的通告消息。要记录通告消息日志，PHP 指令 pgsql.ignore_notice 必须为 off。
