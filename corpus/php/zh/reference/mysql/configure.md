---
id: "zh-php-guide-mysql-installation"
language: "php"
lang: "zh"
category: "guide"
name: "mysql.installation"
title: "安装"
module: "mysql"
source_url: "https://www.php.net/manual/zh/mysql.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

> 本扩展自 PHP 5.5.0 起已废弃，并在自 PHP 7.0.0 开始被移除。应使用 MySQLi 或 PDO_MySQL 扩展来替换之。参见 MySQL：选择 API 指南来获取更多信息。用以替代本函数的有：

编译时，只要使用 --with-mysql[=DIR] 配置选项即可，其中可选的 `[DIR]` 指向 MySQL 的安装目录。

虽然本 MySQL 扩展库兼容 MySQL 4.1.0 及其以后版本，但是它不支持这些版本提供的额外功能。要使用这些功能，请使用 MySQLi 扩展库。

如果要同时安装 mysql 扩展库和 mysqli 扩展库，必须使用同一个客户端库以避免任何冲突。

## 在 Linux 系统下安装

Note: `[DIR]` is the path to the MySQL client library files (*headers and libraries*), which can be downloaded from [MySQL]().

| PHP 版本 | 默认 | 配置选项: mysqlnd | 配置选项: `libmysql` | 更新日志 |
| --- | --- | --- | --- | --- |
| 4.x.x | libmysql | 不适用 | --without-mysql to disable | MySQL enabled by default, MySQL client libraries are bundled |
| 5.0.x, 5.1.x, 5.2.x | libmysql | 不适用 | --with-mysql=[DIR] | MySQL is no longer enabled by default, and the MySQL client libraries are no longer bundled |
| 5.3.x | libmysql | --with-mysql=mysqlnd | --with-mysql=[DIR] | mysqlnd is now available |
| 5.4.x | mysqlnd | --with-mysql | --with-mysql=[DIR] | mysqlnd is now the default |

## 在 Windows 系统下安装

## PHP 5+

MySQL 默认未启用，因此必须在 php.ini 中激活 `php_mysql.dll` 动态连接库。此外，PHP 还需要访问 MySQL 客户端连接库。PHP 的 Windows 发行版包括了一个 `libmysql.dll`，为了让 PHP 能和 MySQL 对话，此文件必须放在 Windows 的系统路径 PATH 中。怎样做见 FAQ 中的“怎样把 PHP 目录加入到 Windows `PATH`中”。尽管将 `libmysql.dll` 拷贝到 Windows 系统目录中也可以（因为系统目录默认在系统路径 PATH 中），但不推荐这样做。

要激活任何 PHP 扩展库（例如 `php_mysql.dll`），PHP 指令 extension_dir 要被设为 PHP 扩展库所在的目录。参见手工 Windows 安装指南。PHP 5 下 extension_dir 取值的一个例子是 `c:\php\ext`。

> 如果启动 web 服务器时出现类似如下的错误：`"Unable to load dynamic library './php_mysql.dll'"`，这是因为系统找不到 `php_mysql.dll` 和／或 `libmysql.dll`。

## PHP 5.3.0+

The MySQL Native Driver is enabled by default. Include `php_mysql.dll`, but `libmysql.dll` is no longer required or used.

## MySQL 安装注意事项

> 当同时加在本扩展库和 recode 扩展库时 PHP 可能会崩溃。更多信息见 recode 扩展库。

> 如果需要不同于 *latin*（默认值）的字符集，必须安装外部的（非绑定的）已编译入所需字符集支持的 libmysql。
