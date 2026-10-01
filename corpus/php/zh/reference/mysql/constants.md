---
id: "zh-php-guide-mysql-constants"
language: "php"
lang: "zh"
category: "guide"
name: "mysql.constants"
title: "预定义常量"
module: "mysql"
source_url: "https://www.php.net/manual/zh/mysql.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

允许在 `mysql_connect()` 函数和 `mysql_pconnect()` 函数中指定更多的客户端标记。下面列出所定义的常量：

| 常量 | 说明 |
| --- | --- |
| `MYSQL_CLIENT_COMPRESS` | 使用压缩的通讯协议 |
| `MYSQL_CLIENT_IGNORE_SPACE` | 允许在函数名后留空格位 |
| `MYSQL_CLIENT_INTERACTIVE` | 允许设置断开连接之前所空闲等候的 interactive_timeout 时间（代替 wait_timeout）。 |
| `MYSQL_CLIENT_SSL` | 使用 SSL 加密。本标志仅在 MySQL 客户端库版本为 4.x 或更高版本时可用。在 PHP 4 和 Windows 版的 PHP 5 安装包中绑定的都是 3.23.x。 |

`mysql_fetch_array()` 函数使用一个常量来表示所返回数组的类型。下面是常量的定义：

| 常量 | 说明 |
| --- | --- |
| `MYSQL_ASSOC` | 返回的数据列使用字段名作为数组的索引名。 |
| `MYSQL_BOTH` | 返回的数据列使用字段名及数字索引作为数组的索引名。 |
| `MYSQL_NUM` | 返回的数据列使用数字索引作为数组的索引名。索引从 0 开始，表示返回结果的第一个字段。 |
