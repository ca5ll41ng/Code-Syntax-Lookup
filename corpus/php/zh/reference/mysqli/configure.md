---
id: "zh-php-guide-mysqli-installation"
language: "php"
lang: "zh"
category: "guide"
name: "mysqli.installation"
title: "安装"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

在 PHP 5.0.0 中引入 `mysqli` 扩展。PHP 5.3.0 版本中引入 Mysql Native Driver。

## 在 Linux 上安装

常见的 Unix 发行版中包含可以安装的 PHP 的二进制版本。虽然这些二进制版本通常是在支持 MySQL 扩展的情况下编译的，但扩展库自身可能需要使用额外的包进行安装。因此需要检查选择的发行版附带包管理的可用性。

例如，在 Ubuntu 上，`php5-mysql` 包安装了 ext/mysql、ext/mysqli 和 pdo_mysql 三个 PHP 扩展。在 CentOS 上，`php-mysql` 包也安装了这三个 PHP 扩展。

或者，可以编译扩展本身。从源代码编译 PHP 允许指定要使用的 MySQL 扩展，以及为每个扩展选择客户端库。

Mysql Native Driver 是推荐的客户端库选项，可以提升性能并带来一些 MySQL Client Library 不支持访问的特性。参阅什么是 PHP 的 MySQL Native Driver？中对简要概述 Mysql Native Driver 的优势。

`/path/to/mysql_config` 表示 MySQL Server 自带的 mysql_config 程序的位置。

| PHP 版本 | 默认 | 配置选项: mysqlnd | 配置选项: `libmysqlclient` | 更新日志 |
| --- | --- | --- | --- | --- |
| 5.4.x 及以上 | mysqlnd | --with-mysqli | --with-mysqli=/path/to/mysql_config | 默认是 mysqlnd |
| 5.3.x | libmysqlclient | --with-mysqli=mysqlnd | --with-mysqli=/path/to/mysql_config | 支持 mysqlnd |
| 5.0.x, 5.1.x, 5.2.x | libmysqlclient | 不适用 | --with-mysqli=/path/to/mysql_config | 不支持 mysqlnd |

请注意 MySQL 扩展和客户端库可以自由混合。比如，可以启用 MySQL 扩展使用 MySQL Client Library（libmysqlclient），同时配置 `mysqli` 扩展去使用 Mysql Native Driver。然而，扩展和客户端库的所有顺序都有可能。

## 在 Windows 系统上安装

在 Windows 上，必须在 php.ini 中启用 `php_mysqli.dll` DLL。

与启用任一 PHP 扩展（比如 `php_mysqli.dll`）一样，PHP 指令 extension_dir 应设置为 PHP 扩展所在目录。查看 Windows 手动安装说明。`extension_dir` 的示例值是 `c:\php\ext`。

> 如果启动 Web 服务器的时候发生了类似下面这样的错误：`"Unable to load dynamic library './php_mysqli.dll'"`，这是因为系统找不到 `php_mysqli.dll`。
