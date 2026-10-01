---
id: "zh-php-guide-mysql-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "mysql.configuration"
title: "运行时配置"
module: "mysql"
source_url: "https://www.php.net/manual/zh/mysql.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| mysql.allow_local_infile | "1" | `INI_SYSTEM` |  |
| mysql.allow_persistent | "1" | `INI_SYSTEM` |  |
| mysql.max_persistent | "-1" | `INI_SYSTEM` |  |
| mysql.max_links | "-1" | `INI_SYSTEM` |  |
| mysql.trace_mode | "0" | `INI_ALL` |  |
| mysql.default_port | NULL | `INI_ALL` |  |
| mysql.default_socket | NULL | `INI_ALL` |  |
| mysql.default_host | NULL | `INI_ALL` |  |
| mysql.default_user | NULL | `INI_ALL` |  |
| mysql.default_password | NULL | `INI_ALL` |  |
| mysql.connect_timeout | "60" | `INI_ALL` |  |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$mysql.allow_local_infile` `int`** — Allow accessing, from PHP's perspective, local files with LOAD DATA statements
- **`$mysql.allow_persistent` `bool`** — 是否允许 MySQL 的持久连接。
- **`$mysql.max_persistent` `int`** — 每个进程中最大的持久连接数目。
- **`$mysql.max_links` `int`** — 每个进程中最大的连接数，包括持久连接。
- **`$mysql.trace_mode` `bool`** — 跟踪模式。当激活 `mysql.trace_mode` 时，将会显示 table/index 扫描的警告，未释放的结果集以及 SQL 错误。（PHP 4.3.0 引进）
- **`$mysql.default_port` `string`** — 指定默认连接数据库的 TCP 端口号。如果没有指定默认端口号，则按顺序从 MYSQL_TCP_PORT 环境变量，`/etc/services` 文件中的 `mysql-tcp` 项或者编译时指定的 `MYSQL_PORT` 常量中取得。Win32 环境下只会使用 `MYSQL_PORT` 常量。
- **`$mysql.default_socket` `string`** — 当使用本地连接的时候，默认的 socket 名称。
- **`$mysql.default_host` `string`** — 默认连接的数据库服务器地址。不适用于 SQL 安全模式。
- **`$mysql.default_user` `string`** — 默认连接数据库时使用的用户名。不适用于 SQL 安全模式。
- **`$mysql.default_password` `string`** — 默认连接数据库时使用的密码。不适用于 SQL 安全模式。
- **`$mysql.connect_timeout` `int`** — 连接超时秒数。在 Linux 中，此参数设定了等候来自服务器的响应的时长。
