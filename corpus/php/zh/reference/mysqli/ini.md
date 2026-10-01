---
id: "zh-php-guide-mysqli-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "mysqli.configuration"
title: "运行时配置"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| mysqli.allow_local_infile | "0" | `INI_SYSTEM` | 在 PHP 7.2.16 和 7.3.3 之前，默认值为 "1" |
| mysqli.local_infile_directory |  | `INI_SYSTEM` | 自 PHP 8.1.0 起可用。 |
| mysqli.allow_persistent | "1" | `INI_SYSTEM` |  |
| mysqli.max_persistent | "-1" | `INI_SYSTEM` |  |
| mysqli.max_links | "-1" | `INI_SYSTEM` |  |
| mysqli.default_port | "3306" | `INI_ALL` |  |
| mysqli.default_socket | NULL | `INI_ALL` |  |
| mysqli.default_host | NULL | `INI_ALL` |  |
| mysqli.default_user | NULL | `INI_ALL` | 自PHP 5.0.0起可用。 |
| mysqli.default_pw | NULL | `INI_ALL` |  |
| mysqli.reconnect | "0" | `INI_SYSTEM` | 自 PHP 8.2.0 起移除 |
| mysqli.rollback_on_cached_plink | "0" | `INI_SYSTEM` |  |

关于前面出现的 INI_* 系列常量的详细定义，请参阅配置的修改一章。

这是配置指令的简短说明。

- **`$mysqli.allow_local_infile` `bool`** — 允许Mysql的Load Data语句访问PHP角度看的本地文件。
- **`$mysqli.local_infile_directory` `string`** — 限制加载 LOCAL DATA 文件为指定的目录。
- **`$mysqli.allow_persistent` `bool`** — 开启使用`mysqli_connect()`函数创建持久化连接的能力。
- **`$mysqli.max_persistent` `int`** — 可以创建的持久化连接的最大数量，设置为0表明不限制。
- **`$mysqli.max_links` `int`** — 每个进程中Mysql连接的最大数量。
- **`$mysqli.default_port` `int`** — 当没有指定其他端口号时使用的默认的用于连接数据库服务器的TCP端口号。如果没有设置默认值， 端口号将会按照顺序从环境变量`MYSQL_TCP_PORT`，`/etc/services` 文件中的`mysql-tcp`条目或编译期的`MYSQL_PORT`常量等位置获取。 Win32仅使用`MYSQL_PORT`常量。
- **`$mysqli.default_socket` `string`** — 当连接到本地数据库服务器时如果没有指定其他socket名称，使用的默认socket名称。
- **`$mysqli.default_host` `string`** — 当连接到数据库服务器时， 如果没有指定其他主机地址，使用的默认服务器主机。
- **`$mysqli.default_user` `string`** — 当连接到数据库服务器时，如果没有指定其他用户名，使用的默认用户名。
- **`$mysqli.default_pw` `string`** — 当连接到数据库服务器时，如果没有指定其他密码，使用的默认密码。
- **`$mysqli.reconnect` `int`** — 连接丢失时是否自动重新连接。
  > mysqlnd 驱动已此忽略此 php.ini 设置，并于 PHP 8.2.0 起移除。


- **`$mysqli.rollback_on_cached_plink` `bool`** — If this option is enabled, closing a persistent connection will rollback any pending transactions of this connection before it is put back into the persistent connection pool. Otherwise, pending transactions will be rolled back only when the connection is reused, or when it is actually closed.

用户不能通过API调用或运行时配置来设置`MYSQL_OPT_READ_TIMEOUT`。 注意，如果可能这样做那么`libmysqlclient`和流对`MYSQL_OPT_READ_TIMEOUT` 的值将会有不同的解释。
